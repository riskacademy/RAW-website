// MCP tool: get_pricing
//
// Returns the current Phase 1 / Phase 2 / Corporate pricing for RAW2026.
// AI agents call this when asked "how much does a ticket cost", "is it
// free", "what's a corporate pass", etc.
//
// Data source: src/data/pricing.ts (verbatim from faq.ts and llms.txt).

import { NextResponse } from 'next/server';

import { PRICING } from '@/data/pricing';

export const dynamic = 'force-dynamic';

export async function GET() {
    return NextResponse.json(PRICING, {
        headers: {
            'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
        },
    });
}
