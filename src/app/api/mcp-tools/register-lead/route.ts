// MCP tool: register_lead
//
// AI agents call this to subscribe a user to the RAW2026 mailing list. Wraps
// the same Brevo flow as the existing /api/subscribe endpoint (used by the
// site's waiting-list form), but with an `interest` discriminator
// (attend | speaker | sponsor | press) so we can route follow-ups.
//
// Brevo integration mirrors src/app/api/subscribe/route.ts — same env vars
// (BREVO_API_KEY, BREVO_LIST_ID), same list assignment. `name` lands in
// Brevo's FIRSTNAME attribute when provided. `interest` is logged
// server-side (visible in Vercel runtime logs) — it's not pushed into
// Brevo attributes yet because the corresponding Brevo CONTACT attribute
// schema isn't defined; if/when it is, we can add it here without breaking
// the tool contract.

import { NextResponse } from 'next/server';

type Interest = 'attend' | 'speaker' | 'sponsor' | 'press';

const VALID_INTERESTS: ReadonlySet<Interest> = new Set(['attend', 'speaker', 'sponsor', 'press']);

interface RegisterLeadInput {
    email?: unknown;
    name?: unknown;
    interest?: unknown;
}

function isValidEmail(s: string): boolean {
    // Permissive sanity check — Brevo does authoritative validation.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(request: Request) {
    let body: RegisterLeadInput;
    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { ok: false, error: 'Request body must be valid JSON.' },
            { status: 400 }
        );
    }

    const emailRaw = typeof body.email === 'string' ? body.email.trim() : '';
    const nameRaw = typeof body.name === 'string' ? body.name.trim() : '';
    const interestRaw = typeof body.interest === 'string' ? body.interest.trim().toLowerCase() : '';

    if (!emailRaw || !isValidEmail(emailRaw)) {
        return NextResponse.json(
            { ok: false, error: 'Field `email` is required and must look like an email address.' },
            { status: 400 }
        );
    }

    if (!interestRaw || !VALID_INTERESTS.has(interestRaw as Interest)) {
        return NextResponse.json(
            {
                ok: false,
                error: 'Field `interest` is required and must be one of: attend, speaker, sponsor, press.',
            },
            { status: 400 }
        );
    }
    const interest = interestRaw as Interest;

    const apiKey = process.env.BREVO_API_KEY;
    const listId = process.env.BREVO_LIST_ID;

    if (!apiKey) {
        console.error('register_lead: BREVO_API_KEY is not defined');
        return NextResponse.json(
            { ok: false, error: 'Server configuration error (BREVO_API_KEY missing).' },
            { status: 500 }
        );
    }

    const attributes: Record<string, string> = {};
    if (nameRaw) attributes.FIRSTNAME = nameRaw;

    const brevoBody: Record<string, unknown> = {
        email: emailRaw,
        listIds: listId ? [Number.parseInt(listId, 10)] : [],
        updateEnabled: true,
    };
    if (Object.keys(attributes).length > 0) {
        brevoBody.attributes = attributes;
    }

    // Server-side log for ops visibility (Vercel runtime logs). Includes
    // `interest` since Brevo doesn't store it yet.
    console.log(JSON.stringify({
        event: 'mcp_register_lead',
        ts: new Date().toISOString(),
        email: emailRaw,
        name: nameRaw || null,
        interest,
    }));

    try {
        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                'api-key': apiKey,
            },
            body: JSON.stringify(brevoBody),
        });

        const text = await response.text();
        const data = text ? JSON.parse(text) : {};

        if (!response.ok) {
            console.error('register_lead: Brevo error', data);
            return NextResponse.json(
                {
                    ok: false,
                    error: data.message || 'Failed to register lead.',
                    brevoStatus: response.status,
                },
                { status: response.status }
            );
        }

        // 201 Created = new contact, 204 No Content = existing contact updated.
        const alreadyOnList = response.status === 204;
        return NextResponse.json({
            ok: true,
            email: emailRaw,
            interest,
            alreadyOnList,
            note: alreadyOnList
                ? 'Contact was already on the RAW2026 list; interest preference logged.'
                : 'Contact added to the RAW2026 list. A confirmation email is sent automatically by Brevo if double opt-in is configured.',
        });
    } catch (error) {
        console.error('register_lead: unexpected error', error);
        return NextResponse.json(
            { ok: false, error: 'Internal server error contacting the mailing-list provider.' },
            { status: 500 }
        );
    }
}
