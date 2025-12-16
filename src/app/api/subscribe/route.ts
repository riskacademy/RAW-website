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

        const data = await response.json();

        if (!response.ok) {
            // Check for specific Brevo error codes if needed
            // For example, if it's already in the list, Brevo might return an error, 
            // but updateEnabled: true usually handles re-subscriptions gracefully or we catch it here.
            console.error('Brevo API Error:', data);
            return NextResponse.json(
                { error: data.message || 'Failed to subscribe' },
                { status: response.status }
            );
        }

        return NextResponse.json({ success: true });

    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
