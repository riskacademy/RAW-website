// MCP tool: get_event_overview
//
// Returns the canonical, statically-curated descriptor of RAW2026 — dates,
// format, organiser, phase structure, headline stats, topic tracks, all the
// authoritative URLs. AI agents call this when asked "what is RAW2026" or
// "when is Risk Awareness Week".
//
// Data source: src/data/event-overview.ts (verbatim from faq.ts and llms.txt).

import { NextResponse } from 'next/server';

import { EVENT_OVERVIEW } from '@/data/event-overview';

export const dynamic = 'force-dynamic';

export async function GET() {
    return NextResponse.json(EVENT_OVERVIEW, {
        headers: {
            'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
