// MCP tool: search_speakers
//
// Returns RAW2026 (+ alumni) speakers matching a free-text query. Designed to be
// surfaced as an MCP tool through RankCaster's hosted MCP server (the OpenAPI
// spec at /mcp-tools/openapi.yaml is attached to the report in RankCaster, which
// auto-registers this endpoint as the `search_speakers` tool).
//
// Search semantics: case-insensitive substring match across name, role,
// organization, knowsAbout topics, and shortBio. Empty/missing query returns
// all speakers. Result shape is intentionally compact — full bios stay on the
// /speakers/<slug> pages (linked via `url`).

import { NextResponse } from 'next/server';

import { speakers, speakerPageUrl, type Speaker } from '@/data/speakers';

// Don't pre-render — route is invoked on demand only.
export const dynamic = 'force-dynamic';

interface SpeakerResult {
    slug: string;
    name: string;
    role: string;
    organization: {
        name: string;
        url: string;
    };
    shortBio: string;
    url: string;            // canonical brand-site speaker page
    raw2026Url?: string;    // current-event speaker page on 2026.*
    image: string;
    knowsAbout: string[];
    sameAs: string[];
    isHeadlineSpeaker: boolean;
    isAlumni: boolean;
}

function toResult(s: Speaker): SpeakerResult {
    return {
        slug: s.slug,
        name: s.name,
        role: s.role,
        organization: s.organization,
        shortBio: s.shortBio,
        url: speakerPageUrl(s.slug),
        raw2026Url: s.raw2026SpeakerUrl,
        image: s.image,
        knowsAbout: s.knowsAbout,
        sameAs: s.sameAs,
        isHeadlineSpeaker: s.isHeadlineSpeaker,
        isAlumni: Boolean(s.isAlumni),
    };
}

function matches(s: Speaker, q: string): boolean {
    const needle = q.toLowerCase().trim();
    if (!needle) return true;
    const haystack = [
        s.name,
        s.role,
        s.jobTitle,
        s.organization.name,
        s.shortBio,
        ...s.knowsAbout,
    ]
        .join('  ')
        .toLowerCase();
    return haystack.includes(needle);
}

export async function GET(request: Request) {
    const url = new URL(request.url);
    const q = url.searchParams.get('q') ?? '';
    const limitRaw = url.searchParams.get('limit');
    const parsedLimit = limitRaw ? Number.parseInt(limitRaw, 10) : NaN;
    const limit = Number.isFinite(parsedLimit) && parsedLimit > 0
        ? Math.min(parsedLimit, 50)
        : 50;

    const matched = speakers.filter((s) => matches(s, q));
    const results = matched.slice(0, limit).map(toResult);

    return NextResponse.json(
        {
            query: q,
            total: matched.length,
            returned: results.length,
            results,
        },
        {
            // Cache for 1h at the edge — speakers list changes infrequently.
            headers: {
                'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
            },
        }
    );
}
