import type { Metadata } from 'next';
import Link from 'next/link';
import { ARCHIVE_YEARS, eventIdForYear } from '@/data/archive';
import { SITE_ORIGIN } from '@/data/speakers';
import Card from '@/components/ui/Card';

const PAGE_URL = `${SITE_ORIGIN}/archive`;
const EVENT_SERIES_ID = `${SITE_ORIGIN}#eventseries`;

const TITLE = 'RAW Archive 2019–2025 — Seven Years of Risk Awareness Week';
const DESCRIPTION =
    'Browse every Risk Awareness Week edition since 2019. Themes, key speakers, attendance, and full session archives — from the inaugural 3,700-person programme through the 2024 AI revolution and the 2025 focus on risk intelligence.';

export const metadata: Metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: PAGE_URL },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        type: 'website',
        url: PAGE_URL,
        siteName: 'Risk Awareness Week',
        images: [{ url: '/logo.png', alt: 'Risk Awareness Week Archive 2019–2025' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: ['/logo.png'],
    },
};

function buildCollectionSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${PAGE_URL}#collection`,
        url: PAGE_URL,
        name: 'Risk Awareness Week Archive (2019–2025)',
        description: DESCRIPTION,
        isPartOf: { '@id': `${SITE_ORIGIN}#website` },
        about: { '@id': EVENT_SERIES_ID },
        mainEntity: {
            '@type': 'ItemList',
            itemListOrder: 'https://schema.org/ItemListOrderDescending',
            numberOfItems: ARCHIVE_YEARS.length,
            itemListElement: ARCHIVE_YEARS.map((y, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: `${SITE_ORIGIN}/archive/${y.year}`,
                item: { '@id': eventIdForYear(y.year) },
            })),
        },
    };
}

export default function ArchiveIndexPage() {
    const schema = buildCollectionSchema();

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <article className="py-24">
                <div className="container mx-auto px-6">
                    <nav className="mb-10 text-sm text-gray-500" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-purple-400 transition-colors">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-300">Archive</span>
                    </nav>

                    <header className="text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text px-4">
                            Risk Awareness Week Archive 2019–2025
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mx-auto leading-relaxed px-6 max-w-3xl">
                            Every edition of RAW since 2019, with the theme, key speakers and full programme archive
                            for each year. More than 20,000 risk professionals from 120+ countries have attended across
                            the seven editions.
                        </p>
                    </header>

                    <section className="mt-16 max-w-3xl mx-auto text-gray-300 leading-relaxed space-y-6">
                        <p>
                            Risk Awareness Week launched in October 2019 as a fully online conference dedicated to one
                            argument: that risk management belongs inside corporate decision-making — planning,
                            forecasting, budgeting, project economics — not in a parallel compliance silo. Seven
                            editions later, the conference has become the largest virtual gathering of quantitative
                            and decision-centric risk practitioners worldwide, recognised by FERMA&apos;s 2024 Training
                            &amp; Education Programme of the Year award.
                        </p>
                        <p>
                            The archive below preserves the full programme of every past edition. Each year page
                            covers the theme, the practitioner faculty, the topics they argued for, and a link to
                            the original conference site where session replays remain available. The recurring
                            voices — Douglas Hubbard, Sam Savage, Norman Marks, Hans Læssøe, Grant Purdy, Alex
                            Sidorenko and others — appear across multiple editions; one-off headliners like
                            Michele Wucker, David R. Koenig, Leo Tilman, Steven Schwarcz, Carolyn Kousky, Jack
                            Jones and Tony Martin-Vegue defined particular years. Browse by year below.
                        </p>
                    </section>

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                        style={{ marginTop: '60px' }}
                    >
                        {ARCHIVE_YEARS.map((y) => (
                            <Card key={y.year} className="flex flex-col h-full">
                                <div
                                    className="flex items-start justify-between"
                                    style={{ marginBottom: '32px' }}
                                >
                                    <h2 className="text-3xl font-bold gradient-text">RAW {y.year}</h2>
                                    {y.attendance && (
                                        <span className="px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 rounded-full">
                                            {y.attendance}
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-semibold text-white leading-tight" style={{ marginBottom: '24px' }}>
                                    {y.theme}
                                </h3>

                                <p className="text-gray-400 text-sm leading-relaxed" style={{ marginBottom: '32px' }}>
                                    {y.summary}
                                </p>

                                <div className="mt-auto flex flex-col gap-3">
                                    <Link
                                        href={`/archive/${y.year}`}
                                        className="text-center w-full text-sm py-3 border-2 border-purple-500 text-purple-300 rounded-full font-semibold hover:bg-purple-500/10 transition-colors"
                                    >
                                        Read about RAW {y.year} →
                                    </Link>
                                    <a
                                        href={y.heySummitUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-center text-xs text-gray-500 hover:text-purple-300 underline-offset-4 hover:underline"
                                    >
                                        Open the original RAW {y.year} site
                                    </a>
                                </div>
                            </Card>
                        ))}
                    </div>

                    <section className="mt-24 max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Looking for the current edition?
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            RAW 2026 — the next edition — runs 12&ndash;16 October 2026, fully virtual.
                            Phase&nbsp;1 is free; Phase&nbsp;2 implementation sprints are paid and CPD-certified.
                        </p>
                        <a
                            href="https://2026.riskawarenessweek.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-colors"
                        >
                            View RAW 2026 →
                        </a>
                    </section>
                </div>
            </article>
        </>
    );
}
