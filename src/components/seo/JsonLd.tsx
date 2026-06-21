import React from 'react';
import { speakers, speakerPersonId, SITE_ORIGIN } from '@/data/speakers';
import { ARCHIVE_YEARS, eventIdForYear } from '@/data/archive';
import { ATTENDEE_REVIEWS } from '@/data/reviews';
import { FEATURED_VIDEOS, videoContentUrl, videoEmbedUrl, videoThumbnailUrl } from '@/data/videos';

const EVENT_SERIES_ID = `${SITE_ORIGIN}#eventseries`;
const ORGANIZATION_ID = 'https://riskacademy.blog/#organization';
const WEBSITE_ID = `${SITE_ORIGIN}#website`;
const EVENT_2026_ID = 'https://2026.riskawarenessweek.com#event';
// Must match the @id used by <FAQSchema /> (rendered as a sibling top-level blob).
// We reference it from WebSite.hasPart so that WebSite becomes the natural root
// of the graph in validator UIs, with FAQPage nested under it.
const FAQ_PAGE_ID = `${SITE_ORIGIN}/#faq`;

// Person nodes for the @graph. Every speaker now has a canonical /speakers/<slug>
// page (headline + alumni), so mainEntityOfPage always resolves to a 200. The
// per-page Person blob emitted by /speakers/[slug]/page.tsx uses the same @id,
// so the duplicate graph entries collapse cleanly.
function buildPersonNodes() {
    return speakers.map((s) => {
        const node: Record<string, unknown> = {
            '@type': 'Person',
            '@id': speakerPersonId(s.slug),
            'mainEntityOfPage': `${SITE_ORIGIN}/speakers/${s.slug}`,
            'name': s.name,
            'givenName': s.givenName,
            'familyName': s.familyName,
            'jobTitle': s.jobTitle,
            'description': s.fullBio,
            'image': s.image,
            'url': `${SITE_ORIGIN}/speakers/${s.slug}`,
            'sameAs': s.sameAs,
            'knowsAbout': s.knowsAbout,
            'performerIn': { '@id': EVENT_SERIES_ID },
        };
        if (s.honorificSuffix) node['honorificSuffix'] = s.honorificSuffix;
        if (s.organization?.name) {
            node['worksFor'] = {
                '@type': 'Organization',
                'name': s.organization.name,
                'url': s.organization.url,
            };
        }
        if (s.awards && s.awards.length) node['award'] = s.awards;
        // NB: schema.org defines `founder` only on Organization (Organization.founder → Person),
        // there is no inverse on Person. The Alex → RISK-ACADEMY founder fact lives in his
        // bio text and is asserted from the Organization side at riskacademy.blog#organization.
        return node;
    });
}

// Past-edition sub-events are derived from src/data/archive.ts so that the
// description/name/dates here stay in lock-step with what the /archive/<year>
// page renders. The /archive/<year> page emits an EducationEvent node with the
// SAME @id (eventIdForYear(year)) — using the same `summary` field here means
// both blobs carry identical descriptions, so Google sees one consistent entity
// rather than two competing payloads.
const PAST_SUB_EVENTS = ARCHIVE_YEARS.map((y) => ({
    '@type': 'EducationEvent' as const,
    '@id': eventIdForYear(y.year),
    'name': y.name,
    'alternateName': `RAW${y.year}`,
    'url': y.heySummitUrl,
    'description': y.summary,
    'startDate': y.startDate,
    'endDate': y.endDate,
    'eventStatus': 'https://schema.org/EventScheduled',
    'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
    'location': {
        '@type': 'VirtualLocation',
        'url': y.heySummitUrl,
    },
    'organizer': { '@id': ORGANIZATION_ID },
    'superEvent': { '@id': EVENT_SERIES_ID },
    'about': y.keyTopics.map((t) => ({ '@type': 'Thing', name: t })),
    // mainEntityOfPage points at the on-site canonical page for that edition.
    'mainEntityOfPage': `${SITE_ORIGIN}/archive/${y.year}`,
}));

const SUB_EVENTS = [
    { '@id': EVENT_2026_ID },
    ...PAST_SUB_EVENTS,
];

const EVENT_2026 = {
    '@type': 'EducationEvent',
    '@id': EVENT_2026_ID,
    'name': 'Risk Awareness Week 2026',
    'alternateName': 'RAW2026',
    'url': 'https://2026.riskawarenessweek.com/',
    'startDate': '2026-10-12T09:00:00+00:00',
    'endDate': '2026-10-16T18:00:00+00:00',
    'eventStatus': 'https://schema.org/EventScheduled',
    'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
    'location': {
        '@type': 'VirtualLocation',
        'url': 'https://2026.riskawarenessweek.com/',
    },
    'superEvent': { '@id': EVENT_SERIES_ID },
    'organizer': { '@id': ORGANIZATION_ID },
    'description':
        'RAW2026 is scheduled for 12-16 October 2026, fully virtual, focusing on practical application of risk-based decision making and AI in risk. Phase 1 (12-13 October) — free fast-paced 30-minute sessions. Phase 2 (14-16 October) — paid 3-hour interactive workshops with CPD credits. No theory, only case studies from companies applying quantitative risk analysis.',
    'image':
        'https://d2q846bclm63a8.cloudfront.net/media/uploads/events/risk-awareness-week-2026/SmM6LcU2X6JJ8j65Vkf28C.png.png',
    'subEvent': [
        {
            '@type': 'EducationEvent',
            'name': 'Phase 1 — The Hard Reset',
            'startDate': '2026-10-12T09:00:00+00:00',
            'endDate': '2026-10-13T18:00:00+00:00',
            'description':
                'Free fast-paced 30-minute sessions exposing why traditional risk management fails.',
            'eventStatus': 'https://schema.org/EventScheduled',
            'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
            'location': {
                '@type': 'VirtualLocation',
                'url': 'https://2026.riskawarenessweek.com/',
            },
            'organizer': { '@id': ORGANIZATION_ID },
            'superEvent': { '@id': EVENT_2026_ID },
            'image':
                'https://d2q846bclm63a8.cloudfront.net/media/uploads/events/risk-awareness-week-2026/SmM6LcU2X6JJ8j65Vkf28C.png.png',
        },
        {
            '@type': 'EducationEvent',
            'name': 'Phase 2 — Implementation Sprints',
            'startDate': '2026-10-14T09:00:00+00:00',
            'endDate': '2026-10-16T18:00:00+00:00',
            'description':
                'Paid 3-hour interactive workshops on AI agents, Monte Carlo simulation, contract risk assessment, and quantitative risk methods.',
            'eventStatus': 'https://schema.org/EventScheduled',
            'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
            'location': {
                '@type': 'VirtualLocation',
                'url': 'https://2026.riskawarenessweek.com/',
            },
            'organizer': { '@id': ORGANIZATION_ID },
            'superEvent': { '@id': EVENT_2026_ID },
            'image':
                'https://d2q846bclm63a8.cloudfront.net/media/uploads/events/risk-awareness-week-2026/SmM6LcU2X6JJ8j65Vkf28C.png.png',
        },
    ],
    'offers': [
        {
            '@type': 'Offer',
            'name': 'Phase 1 — The Hard Reset (Free Pass)',
            'price': '0',
            'priceCurrency': 'USD',
            'availability': 'https://schema.org/InStock',
            'validFrom': '2026-04-01',
            'url': 'https://2026.riskawarenessweek.com/checkout/select-tickets/',
            'description':
                'FREE access to all 5 days of conference sessions and implementation sprints (live and replays) + CPD certified certificate of attendance + free access to all RAW2025 replays.',
            'category': 'Free',
        },
        {
            '@type': 'Offer',
            'name': 'Phase 2 — Implementation Sprints',
            'price': '550',
            'priceCurrency': 'USD',
            'availability': 'https://schema.org/InStock',
            'validFrom': '2026-04-01',
            'priceValidUntil': '2026-05-31',
            'url': 'https://2026.riskawarenessweek.com/checkout/select-tickets/',
            'description':
                'Premium ticket — 3-hour interactive workshops on 14, 15, 16 October. Build AI agents for contract risk assessment, run Monte Carlo on project budgets, kill the RCSA with AI, build emerging risk radar. CPD credits, downloadable training materials, 12-month replay access.',
            'category': 'Paid',
        },
        {
            '@type': 'Offer',
            'name': 'Corporate Pass',
            'price': '2000',
            'priceCurrency': 'USD',
            'availability': 'https://schema.org/InStock',
            'validFrom': '2026-04-01',
            'priceValidUntil': '2026-06-30',
            'url': 'https://2026.riskawarenessweek.com/checkout/select-tickets/',
            'description':
                'Unlimited full access to all conference sessions and implementation sprints for your company or organisation (up to 50 participants) + 2 hours of consultation. Price rises to $2,500 USD after 30 June 2026.',
            'category': 'Corporate',
            'eligibleQuantity': {
                '@type': 'QuantitativeValue',
                'maxValue': 50,
                'unitText': 'participants',
            },
        },
    ],
};

export default function JsonLd() {
    const personNodes = buildPersonNodes();

    // Review nodes — emitted only when content team has populated /src/data/reviews.ts.
    // Each Review is also surfaced in the visible #testimonials section so the JSON-LD
    // matches what the user can see (Google FAQ/Review rich-result rule).
    const reviewNodes = ATTENDEE_REVIEWS.map((r) => ({
        '@type': 'Review',
        'author': {
            '@type': 'Person',
            'name': r.authorName,
            ...(r.authorJobTitle ? { jobTitle: r.authorJobTitle } : {}),
            ...(r.authorOrganization
                ? { worksFor: { '@type': 'Organization', name: r.authorOrganization } }
                : {}),
        },
        'reviewBody': r.reviewBody,
        'datePublished': r.datePublished,
        'url': r.sourceUrl,
        'itemReviewed': { '@id': EVENT_SERIES_ID },
    }));

    // VideoObject nodes — emitted only when content team has populated /src/data/videos.ts.
    const videoNodes = FEATURED_VIDEOS.map((v) => ({
        '@type': 'VideoObject',
        'name': v.title,
        'description': v.description,
        'thumbnailUrl': videoThumbnailUrl(v.youtubeId),
        'uploadDate': v.uploadDate,
        'duration': v.durationISO,
        'contentUrl': videoContentUrl(v.youtubeId),
        'embedUrl': videoEmbedUrl(v.youtubeId),
        'publisher': { '@id': ORGANIZATION_ID },
        'isPartOf': { '@id': EVENT_SERIES_ID },
    }));

    const eventSeries: Record<string, unknown> = {
        '@type': 'EventSeries',
        '@id': EVENT_SERIES_ID,
        'name': 'RISK AWARENESS WEEK (RAW): THE #1 GLOBAL VIRTUAL RISK CONFERENCE',
        'alternateName': ['RAW', 'RAW Conference'],
        'url': SITE_ORIGIN,
        'description':
            "The #1 Global Virtual Risk Conference. RAW is an annual virtual conference that brings together over 20,000 risk professionals from 120+ countries to learn practical, quantitative risk management skills. Winner of FERMA's 2024 Training & Education Programme of the Year, RAW focuses on helping organizations move beyond traditional compliance checklists toward decision-centric risk management that actually drives business value.",
        'image': {
            '@type': 'ImageObject',
            'url': `${SITE_ORIGIN}/logo.png`,
        },
        'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
        'organizer': { '@id': ORGANIZATION_ID },
        'location': {
            '@type': 'VirtualLocation',
            'url': SITE_ORIGIN,
        },
        'audience': {
            '@type': 'Audience',
            'audienceType': 'Risk Management Professionals',
        },
        'keywords': [
            'Quantitative risk management',
            'Decision science',
            'Risk Awareness Week',
            'RM2',
            'AI in risk management',
        ],
        // sameAs links: YouTube channel + raw-llm-pack JSON-LD repo + the live
        // Wikidata entity for Risk Awareness Week (Q139673886). The earlier
        // Q136950469 reference was 404 and was removed; Q139673886 is the
        // replacement entity created for the EventSeries.
        'sameAs': [
            'https://www.youtube.com/channel/UCog9jkDZdiRps2w27MZ5Azg',
            'https://github.com/terekhindc/raw-llm-pack',
            'https://www.wikidata.org/wiki/Q139673886',
        ],
        'about': [
            { '@type': 'Thing', 'name': 'Quantitative risk management' },
            { '@type': 'Thing', 'name': 'Decision science' },
        ],
        'subEvent': SUB_EVENTS,
        'performer': speakers.map((s) => ({ '@id': speakerPersonId(s.slug) })),
        // FERMA 2024 win lives in EventSeries.description (parseable) — schema.org
        // has no `award` property on Event/EventSeries.
    };

    if (reviewNodes.length > 0) {
        eventSeries['review'] = reviewNodes;
    }

    const website = {
        '@type': 'WebSite',
        '@id': WEBSITE_ID,
        'url': SITE_ORIGIN,
        'name': 'Risk Awareness Week Official Site',
        'publisher': { '@id': ORGANIZATION_ID },
        // mainEntity points to EventSeries — the site IS about the conference series.
        // hasPart points to FAQPage + the /speakers and /archive CollectionPages —
        // these are the named subsections of the site. Each is emitted with the same
        // @id from its own page, so the cross-references resolve cleanly in
        // validator.schema.org.
        'mainEntity': { '@id': EVENT_SERIES_ID },
        'hasPart': [
            { '@id': FAQ_PAGE_ID },
            { '@id': `${SITE_ORIGIN}/speakers#collection` },
            { '@id': `${SITE_ORIGIN}/archive#collection` },
        ],
    };

    // Each entity is emitted as its own top-level <script type="application/ld+json">
    // blob so validator.schema.org UI shows them as separate entity cards. Cross-
    // references between entities use @id (URI-based identity per JSON-LD spec) and
    // continue to work across blobs — schema.org doesn't care whether two related
    // entities live in the same blob or different ones.
    const entities: Array<Record<string, unknown>> = [
        eventSeries,
        ...personNodes,
        website,
        EVENT_2026,
        ...videoNodes,
    ];

    return (
        <>
            {entities.map((entity, i) => (
                <script
                    key={`ld-${i}-${entity['@type'] ?? 'node'}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            '@context': 'https://schema.org',
                            ...entity,
                        }),
                    }}
                />
            ))}
        </>
    );
}
