import type { Metadata } from 'next';
import Link from 'next/link';
import { speakers, SITE_ORIGIN, speakerPageUrl, speakerPersonId } from '@/data/speakers';
import { getAppearances } from '@/data/speaker-extras';
import Card from '@/components/ui/Card';

const PAGE_URL = `${SITE_ORIGIN}/speakers`;

const TITLE = 'Faculty — Risk Awareness Week Speakers (2019–2026)';
const DESCRIPTION =
    'Meet the practitioners shaping Risk Awareness Week — authors of How to Measure Anything, The Flaw of Averages, The Gray Rhino, World-Class Risk Management and other defining works in quantitative risk and decision science. Faculty across seven editions, 2019–2026.';

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
        images: [{ url: '/logo.png', alt: 'Risk Awareness Week Faculty' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: TITLE,
        description: DESCRIPTION,
        images: ['/logo.png'],
    },
};

// Headline speakers first (current edition focus), then alumni / non-headline.
// Within each group: sorted by appearance count desc, then by name.
const SORTED_SPEAKERS = [...speakers].sort((a, b) => {
    if (a.isHeadlineSpeaker !== b.isHeadlineSpeaker) {
        return a.isHeadlineSpeaker ? -1 : 1;
    }
    const aCount = getAppearances(a.slug).length;
    const bCount = getAppearances(b.slug).length;
    if (aCount !== bCount) return bCount - aCount;
    return a.name.localeCompare(b.name);
});

function buildItemListSchema() {
    return {
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        '@id': `${PAGE_URL}#collection`,
        url: PAGE_URL,
        name: 'Risk Awareness Week Faculty',
        description: DESCRIPTION,
        isPartOf: { '@id': `${SITE_ORIGIN}#website` },
        about: { '@id': `${SITE_ORIGIN}#eventseries` },
        mainEntity: {
            '@type': 'ItemList',
            itemListOrder: 'https://schema.org/ItemListOrderAscending',
            numberOfItems: SORTED_SPEAKERS.length,
            itemListElement: SORTED_SPEAKERS.map((s, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: speakerPageUrl(s.slug),
                item: { '@id': speakerPersonId(s.slug) },
            })),
        },
    };
}

export default function SpeakersIndexPage() {
    const schema = buildItemListSchema();

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
                        <span className="text-gray-300">Faculty</span>
                    </nav>

                    <header className="text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 gradient-text px-4">
                            Risk Awareness Week Faculty
                        </h1>
                        <p className="text-lg md:text-xl text-gray-400 mx-auto leading-relaxed px-6 max-w-3xl">
                            Practitioners who define the agenda for global risk events — authors of the field&apos;s
                            defining books, creators of the standards (ISO 31000, SIPmath, FAIR), and operators inside
                            Chevron, Microsoft, Lockheed Martin, Allianz, LEGO and the LEGO Group&apos;s strategic risk programme.
                        </p>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ marginTop: '60px' }}>
                        {SORTED_SPEAKERS.map((s) => {
                            const appearances = getAppearances(s.slug);
                            const appearanceYears = appearances
                                .map((a) => a.year)
                                .sort((a, b) => b - a);
                            return (
                                <Card key={s.slug} className="h-full">
                                    <div className="flex flex-col items-center text-center h-full">
                                        <Link
                                            href={`/speakers/${s.slug}`}
                                            className="block w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-purple-500/30 hover:border-purple-400 transition-colors"
                                            aria-label={`Read more about ${s.name}`}
                                        >
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={s.image}
                                                alt={s.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </Link>
                                        <h2 className="text-xl font-bold text-white mb-2">
                                            <Link
                                                href={`/speakers/${s.slug}`}
                                                className="hover:text-purple-300 transition-colors"
                                            >
                                                {s.name}
                                            </Link>
                                        </h2>
                                        <p className="text-purple-400 text-sm font-medium mb-3 min-h-[40px]">
                                            {s.role}
                                        </p>
                                        <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed">
                                            {s.shortBio}
                                        </p>
                                        {appearanceYears.length > 0 && (
                                            <p className="text-xs text-gray-500 mb-4">
                                                RAW {appearanceYears.length === 1 ? 'edition' : 'editions'}:{' '}
                                                <span className="text-gray-300">
                                                    {appearanceYears.join(', ')}
                                                </span>
                                            </p>
                                        )}
                                        <Link
                                            href={`/speakers/${s.slug}`}
                                            className="mt-auto text-purple-300 hover:text-purple-200 text-sm font-medium underline-offset-4 hover:underline"
                                        >
                                            Read full profile →
                                        </Link>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>

                    <section className="mt-24 max-w-3xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Seven years of practitioners
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            Risk Awareness Week has run every year since 2019, drawing more than 20,000 risk
                            professionals from 120+ countries. The faculty here are the recurring voices of
                            that programme — full per-year line-ups (including practitioners from Chevron,
                            Microsoft, NASA, the FAIR Institute, the LEGO Group strategic-risk team and
                            hundreds more) are preserved on the archive subdomains.
                        </p>
                        <Link
                            href="/archive"
                            className="inline-block text-purple-300 hover:text-purple-200 font-medium underline-offset-4 hover:underline"
                        >
                            Browse the RAW archive (2019–2025) →
                        </Link>
                    </section>
                </div>
            </article>
        </>
    );
}
