import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ARCHIVE_YEARS, getArchiveYear, eventIdForYear, type ArchiveYear } from '@/data/archive';
import { SITE_ORIGIN, speakerPersonId } from '@/data/speakers';
import { getSpeakersForYear } from '@/data/speaker-extras';

const EVENT_SERIES_ID = `${SITE_ORIGIN}#eventseries`;
const ORGANIZATION_ID = 'https://riskacademy.blog/#organization';

export function generateStaticParams() {
    return ARCHIVE_YEARS.map((y) => ({ year: String(y.year) }));
}

export async function generateMetadata(
    props: { params: Promise<{ year: string }> },
): Promise<Metadata> {
    const { year: yearStr } = await props.params;
    const year = Number(yearStr);
    const entry = getArchiveYear(year);
    if (!entry) {
        return { title: 'Archive year not found — Risk Awareness Week' };
    }
    const title = `${entry.name} — ${entry.theme} | RAW Archive`;
    const description = entry.summary;
    const url = `${SITE_ORIGIN}/archive/${entry.year}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            type: 'article',
            url,
            siteName: 'Risk Awareness Week',
            images: [{ url: '/logo.png', alt: entry.name }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: ['/logo.png'],
        },
    };
}

function buildEventSchema(entry: ArchiveYear, sitePerformerSlugs: string[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'EducationEvent',
        '@id': eventIdForYear(entry.year),
        mainEntityOfPage: `${SITE_ORIGIN}/archive/${entry.year}`,
        name: entry.name,
        alternateName: `RAW${entry.year}`,
        url: entry.heySummitUrl,
        // Description matches the EducationEvent node emitted by JsonLd.tsx for the
        // same @id, so both schema blobs carry one consistent payload. Human-readable
        // long form lives in the page body, not the JSON-LD.
        description: entry.summary,
        startDate: entry.startDate,
        endDate: entry.endDate,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
        location: {
            '@type': 'VirtualLocation',
            url: entry.heySummitUrl,
        },
        organizer: { '@id': ORGANIZATION_ID },
        superEvent: { '@id': EVENT_SERIES_ID },
        about: entry.keyTopics.map((t) => ({ '@type': 'Thing', name: t })),
        ...(sitePerformerSlugs.length > 0 && {
            performer: sitePerformerSlugs.map((slug) => ({ '@id': speakerPersonId(slug) })),
        }),
    };
}

export default async function ArchiveYearPage(props: { params: Promise<{ year: string }> }) {
    const { year: yearStr } = await props.params;
    const year = Number(yearStr);
    const entry = getArchiveYear(year);
    if (!entry) {
        notFound();
    }

    const siteSpeakers = getSpeakersForYear(year);
    const sitePerformerSlugs = siteSpeakers.map((s) => s.slug);
    const schema = buildEventSchema(entry, sitePerformerSlugs);

    // Filter out notableSpeakers names already covered by the site-speakers grid
    // (we render those as linked profile cards so they shouldn't appear twice in
    // the free-text "other notable speakers" list).
    const siteSpeakerNameTokens = new Set(
        siteSpeakers.flatMap((s) => [s.name.toLowerCase(), s.familyName.toLowerCase()]),
    );
    const otherNotable = entry.notableSpeakers.filter((name) => {
        const lower = name.toLowerCase();
        return ![...siteSpeakerNameTokens].some((token) => lower.includes(token));
    });

    const sortedYearsForNav = [...ARCHIVE_YEARS].sort((a, b) => b.year - a.year);
    const currentIndex = sortedYearsForNav.findIndex((y) => y.year === year);
    const prevYear = sortedYearsForNav[currentIndex + 1]; // older (smaller year)
    const nextYear = sortedYearsForNav[currentIndex - 1]; // newer (larger year)

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <article className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <nav className="mb-10 text-sm text-gray-500" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-purple-400 transition-colors">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <Link href="/archive" className="hover:text-purple-400 transition-colors">
                            Archive
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-300">RAW {entry.year}</span>
                    </nav>

                    <header className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            RAW {entry.year} — {entry.theme}
                        </h1>
                        <p className="text-gray-400 text-sm">
                            {new Date(entry.startDate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                timeZone: 'UTC',
                            })}
                            {' – '}
                            {new Date(entry.endDate).toLocaleDateString('en-US', {
                                month: 'long',
                                day: 'numeric',
                                year: 'numeric',
                                timeZone: 'UTC',
                            })}
                            {' · Fully virtual'}
                            {entry.attendance && ` · ${entry.attendance} participants`}
                            {entry.countries && ` · ${entry.countries} countries`}
                        </p>
                    </header>

                    <section className="mb-16">
                        <div className="text-gray-300 text-base leading-relaxed space-y-6">
                            {entry.longDescription.split('\n\n').map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </section>

                    {entry.keyTopics.length > 0 && (
                        <section className="mb-16">
                            <h2 className="text-2xl font-semibold text-white mb-4">Key topics</h2>
                            <div className="flex flex-wrap gap-2">
                                {entry.keyTopics.map((topic) => (
                                    <span
                                        key={topic}
                                        className="px-3 py-1 bg-purple-500/10 text-purple-300 text-sm font-medium rounded-full border border-purple-500/20"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}

                    {siteSpeakers.length > 0 && (
                        <section className="mb-16">
                            <h2 className="text-2xl font-semibold text-white mb-6">
                                Faculty profiled on this site
                            </h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {siteSpeakers.map((s) => (
                                    <li
                                        key={s.slug}
                                        className="border-l-2 border-purple-500/30 pl-4 py-2"
                                    >
                                        <Link
                                            href={`/speakers/${s.slug}`}
                                            className="text-white font-medium hover:text-purple-300 underline-offset-4 hover:underline"
                                        >
                                            {s.name}
                                        </Link>
                                        <p className="text-gray-400 text-xs mt-1">{s.role}</p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {otherNotable.length > 0 && (
                        <section className="mb-16">
                            <h2 className="text-2xl font-semibold text-white mb-4">
                                Other notable speakers in {entry.year}
                            </h2>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {otherNotable.join(' · ')}
                            </p>
                            <p className="text-gray-500 text-xs mt-3 italic">
                                Full speaker list and session replays remain available on the original RAW {entry.year} site.
                            </p>
                        </section>
                    )}

                    <section className="mt-16 p-8 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent">
                        <h2 className="text-2xl font-bold text-white mb-3">
                            Full RAW {entry.year} archive
                        </h2>
                        <p className="text-gray-300 mb-6">
                            Every session, speaker and replay from RAW {entry.year} is preserved on the
                            original conference site. Open the archive to browse the complete programme.
                        </p>
                        <a
                            href={entry.heySummitUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-colors"
                        >
                            Open RAW {entry.year} on its original site →
                        </a>
                    </section>

                    <nav
                        className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:justify-between text-sm"
                        aria-label="Archive navigation"
                    >
                        {prevYear ? (
                            <Link
                                href={`/archive/${prevYear.year}`}
                                className="text-purple-300 hover:text-purple-200 underline-offset-4 hover:underline"
                            >
                                ← RAW {prevYear.year}: {prevYear.theme}
                            </Link>
                        ) : (
                            <span />
                        )}
                        <Link
                            href="/archive"
                            className="text-gray-400 hover:text-purple-300 underline-offset-4 hover:underline text-center"
                        >
                            All editions
                        </Link>
                        {nextYear ? (
                            <Link
                                href={`/archive/${nextYear.year}`}
                                className="text-purple-300 hover:text-purple-200 underline-offset-4 hover:underline sm:text-right"
                            >
                                RAW {nextYear.year}: {nextYear.theme} →
                            </Link>
                        ) : (
                            <span />
                        )}
                    </nav>
                </div>
            </article>
        </>
    );
}
