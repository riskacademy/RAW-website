import React from 'react';
import { speakers, speakerPersonId, SITE_ORIGIN } from '@/data/speakers';
import { ATTENDEE_REVIEWS } from '@/data/reviews';
import { FEATURED_VIDEOS, videoContentUrl, videoEmbedUrl, videoThumbnailUrl } from '@/data/videos';

const EVENT_SERIES_ID = `${SITE_ORIGIN}#eventseries`;
const ORGANIZATION_ID = 'https://riskacademy.blog/#organization';
const WEBSITE_ID = `${SITE_ORIGIN}#website`;
const EVENT_2026_ID = 'https://2026.riskawarenessweek.com#event';

// Person nodes for the @graph. Six headline speakers get their own canonical URL
// (/speakers/<slug>) — that page also emits the same Person with the same @id, so the
// duplicate graph entries collapse cleanly. The four "stub" speakers (Grant, Geoff,
// Hans, David) live only on the brand site.
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

const SUB_EVENTS = [
    { '@id': EVENT_2026_ID },
    {
        '@type': 'EducationEvent',
        '@id': 'https://2025.riskawarenessweek.com#event',
        'name': 'Risk Awareness Week 2025',
        'alternateName': 'RAW2025',
        'url': 'https://2025.riskawarenessweek.com/',
        'description':
            'RISK AWARENESS WEEK 2025 — virtual conference on quantitative risk methods and decision integration. Network with over 5,000 risk and insurance professionals. Focus: when quantitative methods add value to decisions, mastering practical techniques from decision trees to Monte Carlo simulations.',
        'startDate': '2025-10-13',
        'endDate': '2025-10-17',
        'eventStatus': 'https://schema.org/EventScheduled',
        'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
        'location': {
            '@type': 'VirtualLocation',
            'url': 'https://2025.riskawarenessweek.com/',
        },
        'organizer': { '@id': ORGANIZATION_ID },
        'superEvent': { '@id': EVENT_SERIES_ID },
    },
    {
        '@type': 'EducationEvent',
        '@id': 'https://2024.riskawarenessweek.com#event',
        'name': 'Risk Awareness Week 2024 — The AI Revolution',
        'alternateName': 'RAW2024',
        'url': 'https://2024.riskawarenessweek.com/',
        'description':
            "RISK AWARENESS WEEK 2024 dedicated to application of AI in risk-based decision making. 'Don't lose your job to AI — supercharge your risk management team and level up your AI skills with expert insights and hands-on workshops.' Multi-language dubbing (English, Spanish, Brazilian Portuguese). Winner of FERMA's 2024 Training & Education Programme of the Year.",
        'startDate': '2024-10-07',
        'endDate': '2024-10-11',
        'eventStatus': 'https://schema.org/EventScheduled',
        'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
        'location': {
            '@type': 'VirtualLocation',
            'url': 'https://2024.riskawarenessweek.com/',
        },
        'organizer': { '@id': ORGANIZATION_ID },
        'superEvent': { '@id': EVENT_SERIES_ID },
        // NB: schema.org Event has no `award` property. The FERMA win is asserted in
        // description text instead (where Google's NLP can still parse it).
    },
    {
        '@type': 'EducationEvent',
        '@id': 'https://2023.riskawarenessweek.com#event',
        'name': 'Risk Awareness Week 2023',
        'alternateName': 'RAW2023',
        'url': 'https://2023.riskawarenessweek.com/',
        'description':
            'RISK AWARENESS WEEK 2023 — the ultimate online risk management and decision-making experience. Quantitative risk management practices in a digestible and practical format, at a fraction of the cost of traditional conferences. Featured Douglas Hubbard, Sam Savage, Michele Wucker, Hernan Huwyler.',
        'startDate': '2023-10-09',
        'endDate': '2023-10-13',
        'eventStatus': 'https://schema.org/EventScheduled',
        'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
        'location': {
            '@type': 'VirtualLocation',
            'url': 'https://2023.riskawarenessweek.com/',
        },
        'organizer': { '@id': ORGANIZATION_ID },
        'superEvent': { '@id': EVENT_SERIES_ID },
    },
    {
        '@type': 'EducationEvent',
        '@id': 'https://2022.riskawarenessweek.com#event',
        'name': 'Risk Awareness Week 2022',
        'alternateName': 'RAW2022',
        'url': 'https://2022.riskawarenessweek.com/',
        'description':
            'RISK AWARENESS WEEK 2022 — the biggest global online platform to learn risk management and decision making. Practical case studies on integrating risk management into decision making, planning and core business processes. By 2022, 15,000+ participants had attended RAW workshops over the previous three years.',
        'startDate': '2022-10-17',
        'endDate': '2022-10-21',
        'eventStatus': 'https://schema.org/EventScheduled',
        'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
        'location': {
            '@type': 'VirtualLocation',
            'url': 'https://2022.riskawarenessweek.com/',
        },
        'organizer': { '@id': ORGANIZATION_ID },
        'superEvent': { '@id': EVENT_SERIES_ID },
    },
    {
        '@type': 'EducationEvent',
        '@id': 'https://2021.riskawarenessweek.com#event',
        'name': 'Risk Awareness Week 2021',
        'alternateName': 'RAW2021',
        'url': 'https://2021.riskawarenessweek.com/',
        'description':
            'RISK AWARENESS WEEK 2021 focused on climate and environmental decision making. International speakers shared practical case studies on integrating risk management into climate, environmental decision making, planning, project management and risk-adjusted performance management. 4,800+ participants.',
        'startDate': '2021-10-11',
        'endDate': '2021-10-15',
        'eventStatus': 'https://schema.org/EventScheduled',
        'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
        'location': {
            '@type': 'VirtualLocation',
            'url': 'https://2021.riskawarenessweek.com/',
        },
        'organizer': { '@id': ORGANIZATION_ID },
        'superEvent': { '@id': EVENT_SERIES_ID },
    },
    {
        '@type': 'EducationEvent',
        '@id': 'https://2020.riskawarenessweek.com#event',
        'name': 'Risk Awareness Week 2020',
        'alternateName': 'RAW2020',
        'url': 'https://2020.riskawarenessweek.com/',
        'description':
            'RISK AWARENESS WEEK 2020 — biggest online platform to learn risk management and decision making. The pivot to fully virtual format during the global pandemic. International speakers ran online workshops on integrating risk management into decision making, planning and core business processes. 4,000+ participants.',
        'startDate': '2020-10-12',
        'endDate': '2020-10-16',
        'eventStatus': 'https://schema.org/EventScheduled',
        'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
        'location': {
            '@type': 'VirtualLocation',
            'url': 'https://2020.riskawarenessweek.com/',
        },
        'organizer': { '@id': ORGANIZATION_ID },
        'superEvent': { '@id': EVENT_SERIES_ID },
    },
    {
        '@type': 'EducationEvent',
        '@id': 'https://2019.riskawarenessweek.com#event',
        'name': 'Risk Awareness Week 2019',
        'alternateName': 'RAW2019',
        'url': 'https://2019.riskawarenessweek.com/',
        'description':
            'Inaugural Risk Awareness Week — the launch year. Online workshops dedicated to integrating risk management into decision making, planning and core business processes. 3,700+ participants from 121 countries.',
        'startDate': '2019-10-14',
        'endDate': '2019-10-18',
        'eventStatus': 'https://schema.org/EventScheduled',
        'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
        'location': {
            '@type': 'VirtualLocation',
            'url': 'https://2019.riskawarenessweek.com/',
        },
        'organizer': { '@id': ORGANIZATION_ID },
        'superEvent': { '@id': EVENT_SERIES_ID },
    },
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
    };

    const schema = {
        '@context': 'https://schema.org',
        '@graph': [eventSeries, ...personNodes, website, EVENT_2026, ...videoNodes],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
