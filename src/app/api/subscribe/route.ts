import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        const apiKey = process.env.BREVO_API_KEY;
        const listId = process.env.BREVO_LIST_ID;

        if (!apiKey) {
            console.error('BREVO_API_KEY is not defined');
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Brevo API endpoint for creating a contact
        const url = 'https://api.brevo.com/v3/contacts';

        const listIds = listId ? [parseInt(listId)] : [];

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'content-type': 'application/json',
                'api-key': apiKey,
            },
            body: JSON.stringify({
                email,
                listIds: listIds,
                updateEnabled: true // Update contact if they already exist
            }),
        });

        // Brevo returns 201 Created for a new contact, 204 No Content (empty body)
        // when updating an existing one. Parse JSON only if there's a body.
        const text = await response.text();
        const data = text ? JSON.parse(text) : {};

        if (!response.ok) {
            console.error('Brevo API Error:', data);
            return NextResponse.json(
                { error: data.message || 'Failed to subscribe' },
                { status: response.status }
            );
        }

        // 204 means the contact already existed and was updated — surface this
        // so the UI can show a distinct "already subscribed" message.
        const alreadySubscribed = response.status === 204;
        return NextResponse.json({ success: true, alreadySubscribed });

    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
