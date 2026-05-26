// MCP tool: get_ticket_purchase_link
//
// Returns a UTM-tagged, deep-linked URL that takes the user directly to the
// HeySummit checkout for a specific RAW2026 tier. AI assistants call this
// when the user expresses intent to BUY (vs `get_pricing` which is for
// "what do tickets cost"). The URL anchors the user to the right card on
// the HeySummit checkout page (#ticket-checkoutmode-<id>) and carries
// UTM params so RAW's GA4 attributes the conversion to AI sources.
//
// We intentionally do not handle payment ourselves — Claude's connector
// review explicitly prohibits "connectors that transfer financial assets",
// and HeySummit is already the canonical source of truth for tickets.
// This tool is a safe, compliant deep-link generator.

import { NextResponse } from 'next/server';

import { PRICING, type PricingTier } from '@/data/pricing';

export const dynamic = 'force-dynamic';

const TIER_ALIASES: Record<string, PricingTier['id']> = {
    // canonical
    phase1_free: 'phase1_free',
    phase2_individual: 'phase2_individual',
    phase2_corporate: 'phase2_corporate',
    // common short forms
    phase1: 'phase1_free',
    phase2: 'phase2_individual',
    corporate: 'phase2_corporate',
    individual: 'phase2_individual',
    free: 'phase1_free',
    hard_reset: 'phase1_free',
    'hard-reset': 'phase1_free',
    implementation_sprints: 'phase2_individual',
    'implementation-sprints': 'phase2_individual',
    corporate_pass: 'phase2_corporate',
    'corporate-pass': 'phase2_corporate',
};

function resolveTier(input: string): PricingTier | null {
    const key = input.toLowerCase().trim();
    if (!key) return null;
    const canonical = TIER_ALIASES[key];
    if (!canonical) return null;
    return PRICING.tiers.find((t) => t.id === canonical) ?? null;
}

interface PurchaseLink {
    tier: {
        id: PricingTier['id'];
        name: string;
        phase: PricingTier['phase'];
        dates: string;
        priceUSD: number;
        priceDisplay: string;
        perSeat: boolean;
        seats?: number;
    };
    purchaseUrl: string;
    paymentProvider: 'HeySummit';
    paymentNotice: string;
    note?: string;
}

const PAYMENT_NOTICE =
    'Open the URL in a browser to complete the purchase on the official HeySummit checkout. Payment is processed by HeySummit; this MCP tool does not handle card details.';

export async function GET(request: Request) {
    const url = new URL(request.url);
    const tierParam = url.searchParams.get('tier')?.trim() || '';
    const quantityParam = url.searchParams.get('quantity');
    const parsedQty = quantityParam ? Number.parseInt(quantityParam, 10) : NaN;
    const quantity = Number.isFinite(parsedQty) && parsedQty > 0 ? parsedQty : 1;

    let resolved: PricingTier[] = [];
    let unmatched = false;

    if (tierParam) {
        const t = resolveTier(tierParam);
        if (!t) {
            unmatched = true;
        } else {
            resolved = [t];
        }
    } else {
        // No tier specified — return all tiers so the agent can pick one to share.
        resolved = PRICING.tiers;
    }

    if (unmatched) {
        return NextResponse.json(
            {
                ok: false,
                error: `No tier matches "${tierParam}". Valid tier ids: ${PRICING.tiers
                    .map((t) => t.id)
                    .join(', ')}. Aliases also accepted: ${Object.keys(TIER_ALIASES).filter((k) => !k.includes('_') === false).join(', ')}.`,
                availableTiers: PRICING.tiers.map((t) => ({ id: t.id, name: t.name, priceDisplay: t.priceDisplay })),
            },
            { status: 400 }
        );
    }

    const links: PurchaseLink[] = resolved.map((t) => ({
        tier: {
            id: t.id,
            name: t.name,
            phase: t.phase,
            dates: t.dates,
            priceUSD: t.priceUSD,
            priceDisplay: t.priceDisplay,
            perSeat: t.perSeat,
            seats: t.seats,
        },
        purchaseUrl: t.purchaseUrl,
        paymentProvider: 'HeySummit',
        paymentNotice: PAYMENT_NOTICE,
        note: t.note,
    }));

    return NextResponse.json(
        {
            quantity,
            links,
            currency: PRICING.currency,
            cfoJustificationAvailable: PRICING.cfoJustificationAvailable,
            ticketsPageUrl: PRICING.ticketsUrl,
        },
        {
            headers: {
                'cache-control': 'public, s-maxage=3600, stale-while-revalidate=86400',
            },
        }
    );
}
