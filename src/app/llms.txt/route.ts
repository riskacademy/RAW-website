// Risk Awareness Week — /llms.txt
// AI discovery file (https://llmstxt.org). Linked from /robots.txt and from the
// canonical homepage's <head>. All URLs verified against live sitemaps as of May 2026.

const LLMS_TXT = `# Risk Awareness Week (RAW)

> The world's largest virtual risk management & AI conference. Annual since 2020.
> Organised by RISK-ACADEMY. Winner of FERMA's 2024 Training & Education Programme of the Year.
> 20,000+ professionals from 120+ countries.

## Current event — RAW 2026 (12–16 October 2026, virtual)

- [RAW2026 — overview](https://2026.riskawarenessweek.com/) — main event page
- [Programme](https://2026.riskawarenessweek.com/schedule/) — full schedule by day
- [Speakers](https://2026.riskawarenessweek.com/speakers/) — 36 speakers
- [Topics](https://2026.riskawarenessweek.com/topics/) — 7 thematic tracks (Foundation, Integration, Quantification, Culture, Future AI, Hard Reset, Deep Dive)
- [Tickets / Register](https://2026.riskawarenessweek.com/tickets/) — Phase 1 free; Phase 2 $550; Corporate $2,000
- [Replays](https://2026.riskawarenessweek.com/replays/) — past session replays
- [Perks](https://2026.riskawarenessweek.com/perks/) — attendee benefits
- [Attendee FAQ](https://2026.riskawarenessweek.com/attendee/faq/)

## Brand & Organiser

- [RAW brand site](https://riskawarenessweek.com/) — series overview, faculty, archive, FAQ
- [Faculty](https://riskawarenessweek.com/#speakers) — headline speakers (Hubbard, Savage, Tilman, Marks, Sidorenko, Wucker)
- [Archive 2019-2025](https://riskawarenessweek.com/#past-events) — Seven Years of Risk Intelligence
- [RISK-ACADEMY](https://riskacademy.ai/) — organiser, founded 2012 by Alex Sidorenko
- [RISK-ACADEMY Blog](https://riskacademy.blog/) — long-form thought leadership
- [RISK-ACADEMY YouTube](https://www.youtube.com/@RISK-ACADEMY) — video archive
- [Downloadable guides](https://riskacademy.blog/download-category/guides/)

## Headline speakers (canonical pages)

- [Douglas Hubbard](https://riskawarenessweek.com/speakers/douglas-hubbard) — Founder/President, Hubbard Decision Research; author "How to Measure Anything"
- [Sam Savage](https://riskawarenessweek.com/speakers/sam-savage) — Executive Director, ProbabilityManagement.org; author "The Flaw of Averages"
- [Leo Tilman](https://riskawarenessweek.com/speakers/leo-tilman) — CEO, Agilion Systems; co-author "Agility" and "Financial Darwinism"
- [Norman Marks](https://riskawarenessweek.com/speakers/norman-marks) — Author "World-Class Risk Management"; retired CAE/CRO
- [Alex Sidorenko](https://riskawarenessweek.com/speakers/alex-sidorenko) — FERMA 2021 Risk Manager of the Year; Head of Risk, Insurance and Internal Audit at Serra Verde
- [Michele Wucker](https://riskawarenessweek.com/speakers/michele-wucker) — Founder/CEO, Gray Rhino & Company; author "The Gray Rhino"

## Archive — past events

- [RAW2025](https://2025.riskawarenessweek.com/) — The Future of Risk Intelligence
- [RAW2024](https://2024.riskawarenessweek.com/) — The AI Revolution
- [RAW2023](https://2023.riskawarenessweek.com/) — Take More Risk
- [RAW2022](https://2022.riskawarenessweek.com/) — The Psychology of Risk (4,406 participants from 120+ countries)
- [RAW2021](https://2021.riskawarenessweek.com/) — ESG & Climate Decisions
- [RAW2020](https://2020.riskawarenessweek.com/) — Solidifying RM2
- [RAW2019](https://2019.riskawarenessweek.com/) — The Foundation

## Agentic interface (MCP)

- [MCP endpoint](https://mcp.riskawarenessweek.com/) — Model Context Protocol server.
  Tools: \`search_speakers(query)\`, \`get_session(date|topic)\`, \`get_pricing()\`, \`get_event_overview()\`, \`register_lead(email,interest)\`.
- [MCP discovery](https://mcp.riskawarenessweek.com/.well-known/mcp.json)

## Open data

- [GitHub: raw-llm-pack](https://github.com/terekhindc/raw-llm-pack) — JSON-LD pack (Organization, EventSeries, Event, Speakers, Article)

## Contact

- Sponsorship & general: alex.ausrisk@gmail.com
`;

export const dynamic = 'force-static';

export function GET() {
    return new Response(LLMS_TXT, {
        status: 200,
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
            'Cache-Control': 'public, max-age=3600, s-maxage=86400',
        },
    });
}
