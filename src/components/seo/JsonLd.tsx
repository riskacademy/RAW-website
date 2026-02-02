import React from 'react';

export default function JsonLd() {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "EventSeries",
                "@id": "https://riskawarenessweek.com#eventseries",
                "name": "RISK AWARENESS WEEK (RAW): THE #1 GLOBAL VIRTUAL RISK CONFERENCE",
                "alternateName": [
                    "RAW",
                    "RAW Conference"
                ],
                "url": "https://riskawarenessweek.com",
                "description": "The #1 Global Virtual Risk Conference. RAW is an annual virtual conference that brings together over 20,000 risk professionals from 120+ countries to learn practical, quantitative risk management skills. Winner of FERMA's 2024 Training & Education Programme of the Year, RAW focuses on helping organizations move beyond traditional compliance checklists toward decision-centric risk management that actually drives business value.",
                "image": {
                    "@type": "ImageObject",
                    "url": "https://riskawarenessweek.com/logo.png"
                },
                "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
                "organizer": {
                    "@id": "https://riskacademy.blog#organization"
                },
                "location": {
                    "@type": "VirtualLocation",
                    "url": "https://riskawarenessweek.com"
                },
                "audience": {
                    "@type": "Audience",
                    "audienceType": "Risk Management Professionals"
                },
                "keywords": [
                    "Quantitative risk management",
                    "Decision science",
                    "Risk Awareness Week",
                    "RM2",
                    "AI in risk management"
                ],
                "sameAs": [
                    "https://www.wikidata.org/wiki/Q136950469",
                    "https://www.youtube.com/channel/UCog9jkDZdiRps2w27MZ5Azg"
                ],
                "about": [
                    {
                        "@type": "Thing",
                        "name": "Quantitative risk management"
                    },
                    {
                        "@type": "Thing",
                        "name": "Decision science"
                    }
                ],
                "subEvent": [
                    { "@id": "https://2026.riskawarenessweek.com#event" },
                    { "@id": "https://2025.riskawarenessweek.com#event" },
                    { "@id": "https://2024.riskawarenessweek.com#event" },
                    { "@id": "https://2023.riskawarenessweek.com#event" },
                    { "@id": "https://2022.riskawarenessweek.com#event" },
                    { "@id": "https://2021.riskawarenessweek.com#event" },
                    { "@id": "https://2020.riskawarenessweek.com#event" },
                    { "@id": "https://2019.riskawarenessweek.com#event" }
                ],
                "performer": [
                    { "@id": "https://riskawarenessweek.com/#DouglasHubbardFaculty" },
                    { "@id": "https://riskawarenessweek.com/#SamSavageFaculty" },
                    { "@id": "https://riskawarenessweek.com/#LeoTilmanFaculty" },
                    { "@id": "https://riskawarenessweek.com/#NormanMarksFaculty" },
                    { "@id": "https://riskawarenessweek.com/#AlexSidorenkoFaculty" },
                    { "@id": "https://riskawarenessweek.com/#MicheleWuckerFaculty" },
                    { "@id": "https://riskawarenessweek.com/#GrantPurdyFaculty" },
                    { "@id": "https://riskawarenessweek.com/#GeoffTrickeyFaculty" },
                    { "@id": "https://riskawarenessweek.com/#HansLæssøeFaculty" },
                    { "@id": "https://riskawarenessweek.com/#DavidRKoenigFaculty" }
                ],
                "offers": {
                    "@type": "Offer",
                    "url": "https://riskawarenessweek.com/register",
                    "price": "0.00",
                    "priceCurrency": "USD",
                    "name": "Full Series Pass / Archive Access",
                    "description": "Access to 200+ world-class workshops on-demand, available for lifetime viewing."
                }
            },

            {
                "@type": "Person",
                "@id": "https://riskawarenessweek.com/#DouglasHubbardFaculty",
                "name": "Douglas Hubbard",
                "jobTitle": "Creator of Applied Information Economics (AIE)",
                "description": "Creator of Applied Information Economics (AIE) and author of \"How to Measure Anything\"",
                "image": "https://d2q846bclm63a8.cloudfront.net/media/thumbnails/uploads/events/risk-awareness-for-charity-copy/HRs4hgL2zfkLXKjHe6Vvw4_square_medium.png",
                "sameAs": ["https://www.linkedin.com/in/dwhubbard/"]
            },
            {
                "@type": "Person",
                "@id": "https://riskawarenessweek.com/#SamSavageFaculty",
                "name": "Dr. Sam Savage",
                "jobTitle": "Author of \"The Flaw of Averages\"",
                "description": "Author of \"The Flaw of Averages\" and inventor of the SIPmath probability standard",
                "image": "https://d2q846bclm63a8.cloudfront.net/media/thumbnails/uploads/events/risk-awareness-week-2024-copy/f4owjsE8cKtLSiC3UUEchb.jpg_square_medium.jpg",
                "sameAs": ["https://www.linkedin.com/in/sam-s-623674/"]
            },
            {
                "@type": "Person",
                "@id": "https://riskawarenessweek.com/#LeoTilmanFaculty",
                "name": "Leo Tilman",
                "jobTitle": "CEO of Agilion Systems",
                "description": "CEO of Agilion Systems, co-author of \"Agility\" and \"Financial Darwinism\"",
                "image": "https://d2q846bclm63a8.cloudfront.net/media/thumbnails/uploads/events/risk-awareness-week-2024-copy/kuU77FB7UjvDU3jRrmfMQQ.jpg_square_medium.jpg",
                "sameAs": ["https://www.linkedin.com/in/leo-m-tilman-b76170a0/"]
            },
            {
                "@type": "Person",
                "@id": "https://riskawarenessweek.com/#NormanMarksFaculty",
                "name": "Norman Marks",
                "jobTitle": "Author of \"World-Class Risk Management\"",
                "description": "Author of \"World-Class Risk Management\" and globally recognized GRC mentor",
                "image": "https://d2q846bclm63a8.cloudfront.net/media/thumbnails/uploads/events/risk-awareness-for-charity-copy/CkcjhWFGFuLywKibY9xX2Q_square_medium.jpg",
                "sameAs": ["http://www.linkedin.com/in/normanmarks/"]
            },
            {
                "@type": "Person",
                "@id": "https://riskawarenessweek.com/#AlexSidorenkoFaculty",
                "name": "Alex Sidorenko",
                "jobTitle": "FERMA 2021 Risk Manager of the Year",
                "description": "FERMA 2021 Risk Manager of the Year, expert in quantitative risk analysis",
                "image": "https://d2q846bclm63a8.cloudfront.net/media/thumbnails/uploads/events/risk-awareness-week-2020-copy-1/JnrXfaEC5AAXUPiaKz3dT7_square_medium.jpg",
                "sameAs": [
                    "https://www.linkedin.com/in/alexsidorenko/",
                    "https://www.youtube.com/@riskacademy"
                ]
            },
            {
                "@type": "Person",
                "@id": "https://riskawarenessweek.com/#MicheleWuckerFaculty",
                "name": "Michele Wucker",
                "jobTitle": "Founder and CEO, Gray Rhino & Company",
                "description": "Author of \"The Gray Rhino\" and expert on predictable high-impact risks",
                "image": "https://d2q846bclm63a8.cloudfront.net/media/thumbnails/uploads/events/risk-awareness-week-2022-copy/RfeZiLriytRrqbkxo4kXdc.jpeg_square_medium.jpeg",
                "sameAs": [
                    "https://www.linkedin.com/in/wucker/",
                    "https://www.facebook.com/MicheleWucker"
                ]
            },
            { "@type": "Person", "@id": "https://riskawarenessweek.com/#GrantPurdyFaculty", "name": "Grant Purdy" },
            { "@type": "Person", "@id": "https://riskawarenessweek.com/#GeoffTrickeyFaculty", "name": "Geoff Trickey" },
            { "@type": "Person", "@id": "https://riskawarenessweek.com/#HansLæssøeFaculty", "name": "Hans Læssøe" },
            { "@type": "Person", "@id": "https://riskawarenessweek.com/#DavidRKoenigFaculty", "name": "David R. Koenig" },

            {
                "@type": "WebSite",
                "@id": "https://riskawarenessweek.com#website",
                "url": "https://riskawarenessweek.com",
                "name": "Risk Awareness Week Official Site",
                "publisher": {
                    "@id": "https://riskacademy.blog#organization"
                }
            },
            {
                "@type": "EducationEvent",
                "@id": "https://2026.riskawarenessweek.com#event",
                "name": "Risk Awareness Week 2026",
                "description": "RAW2026 is scheduled for 12-17 October 2026 and will focus on practical application of risk based decision making. No theory, only case studies from companies applying quantitative risk analysis in their processes and decisions.",
                "startDate": "2026-10-12T09:00:00+00:00",
                "endDate": "2026-10-17T18:00:00+00:00",
                "eventStatus": "https://schema.org/EventScheduled",
                "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
                "url": "https://riskawarenessweek.com",
                "isPartOf": {
                    "@id": "https://riskawarenessweek.com#eventseries"
                }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
