import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    speakers,
    getSpeakerBySlug,
    speakerPageUrl,
    speakerPersonId,
    SITE_ORIGIN,
    type Speaker,
} from '@/data/speakers';
import {
    getAppearances,
    getPublications,
    getMetaDescription,
    type Publication,
} from '@/data/speaker-extras';
import { getArchiveYear } from '@/data/archive';

const EVENT_SERIES_ID = `${SITE_ORIGIN}#eventseries`;
const ORGANIZATION_ID = 'https://riskacademy.blog/#organization';

export function generateStaticParams() {
    // All speakers now get their own canonical page — including alumni and
    // non-headline practitioners — so that JSON-LD Person nodes don't claim
    // mainEntityOfPage URLs that 404 and so /speakers (index) links resolve.
    return speakers.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(
    props: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
    const { slug } = await props.params;
    const speaker = getSpeakerBySlug(slug);
    if (!speaker) {
        return { title: 'Speaker not found — Risk Awareness Week' };
    }
    const title = `${speaker.name} — Risk Awareness Week Faculty`;
    const description =
        getMetaDescription(speaker.slug) ?? `${speaker.role}. ${speaker.shortBio}.`;
    const url = speakerPageUrl(speaker.slug);
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            type: 'profile',
            url,
            siteName: 'Risk Awareness Week',
            images: [{ url: speaker.image, alt: speaker.name }],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [speaker.image],
        },
    };
}

function buildPersonSchema(speaker: Speaker, publications: Publication[]) {
    const node: Record<string, unknown> = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': speakerPersonId(speaker.slug),
        'mainEntityOfPage': speakerPageUrl(speaker.slug),
        'name': speaker.name,
        'givenName': speaker.givenName,
        'familyName': speaker.familyName,
        'jobTitle': speaker.jobTitle,
        'description': speaker.fullBio,
        'image': speaker.image,
        'url': speakerPageUrl(speaker.slug),
        'sameAs': speaker.sameAs,
        'knowsAbout': speaker.knowsAbout,
        'performerIn': { '@id': EVENT_SERIES_ID },
        'worksFor': {
            '@type': 'Organization',
            'name': speaker.organization.name,
            'url': speaker.organization.url,
        },
    };
    if (speaker.honorificSuffix) node['honorificSuffix'] = speaker.honorificSuffix;
    if (speaker.awards && speaker.awards.length) node['award'] = speaker.awards;
    if (speaker.slug === 'alex-sidorenko') {
        node['founder'] = { '@id': ORGANIZATION_ID };
    }
    // Author block — schema.org Person.author is valid for books and articles
    // authored by this person. Each publication becomes a CreativeWork (Book by
    // default, ScholarlyArticle for papers, DefinedTerm-style for standards).
    if (publications.length > 0) {
        node['author'] = publications.map((p) => {
            const workType =
                p.type === 'paper' ? 'ScholarlyArticle' : p.type === 'standard' ? 'CreativeWork' : 'Book';
            const work: Record<string, unknown> = {
                '@type': workType,
                'name': p.title,
            };
            if (p.year) work['datePublished'] = String(p.year);
            if (p.publisher) work['publisher'] = { '@type': 'Organization', name: p.publisher };
            if (p.url) work['url'] = p.url;
            return work;
        });
    }
    return node;
}

function SocialIcon({ type }: { type: string }) {
    if (type === 'linkedin') {
        return (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
        );
    }
    if (type === 'twitter') {
        return (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
        );
    }
    if (type === 'youtube') {
        return (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
            </svg>
        );
    }
    if (type === 'facebook') {
        return (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
        );
    }
    if (type === 'website') {
        return (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M12 3a14 14 0 010 18M12 3a14 14 0 000 18" />
            </svg>
        );
    }
    return null;
}

export default async function SpeakerPage(props: { params: Promise<{ slug: string }> }) {
    const { slug } = await props.params;
    const speaker = getSpeakerBySlug(slug);

    if (!speaker) {
        notFound();
    }

    const appearances = [...getAppearances(speaker.slug)].sort((a, b) => b.year - a.year);
    const publications = getPublications(speaker.slug);
    const personSchema = buildPersonSchema(speaker, publications);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            />

            <article className="py-24">
                <div className="container mx-auto px-6 max-w-4xl">
                    <nav className="mb-10 text-sm text-gray-500" aria-label="Breadcrumb">
                        <Link href="/" className="hover:text-purple-400 transition-colors">
                            Home
                        </Link>
                        <span className="mx-2">/</span>
                        <Link href="/speakers" className="hover:text-purple-400 transition-colors">
                            Faculty
                        </Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-300">{speaker.name}</span>
                    </nav>

                    <header className="flex flex-col md:flex-row gap-8 md:gap-12 items-start mb-12">
                        <div className="w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden border-2 border-purple-500/30 flex-shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                                {speaker.name}
                                {speaker.honorificSuffix && (
                                    <span className="text-gray-400 text-2xl font-medium ml-3">
                                        {speaker.honorificSuffix}
                                    </span>
                                )}
                            </h1>
                            <p className="text-purple-400 text-lg font-medium mb-4">
                                {speaker.role}
                            </p>
                            {speaker.isAlumni && speaker.isAlumniNote && (
                                <p className="text-amber-400/80 text-sm italic mb-4">
                                    {speaker.isAlumniNote}
                                </p>
                            )}
                            {speaker.socials && speaker.socials.length > 0 && (
                                <div className="flex gap-4 mt-4">
                                    {speaker.socials.map((social) => (
                                        <a
                                            key={social.url}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${speaker.name} on ${social.type}`}
                                            className="text-gray-400 hover:text-purple-400 transition-colors"
                                        >
                                            <SocialIcon type={social.type} />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </header>

                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-white mb-4">Biography</h2>
                        <p className="text-gray-300 text-base leading-relaxed whitespace-pre-line">
                            {speaker.fullBio}
                        </p>
                    </section>

                    {speaker.knowsAbout && speaker.knowsAbout.length > 0 && (
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold text-white mb-4">Areas of expertise</h2>
                            <div className="flex flex-wrap gap-2">
                                {speaker.knowsAbout.map((topic) => (
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

                    {appearances.length > 0 && (
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold text-white mb-4">
                                Risk Awareness Week history
                            </h2>
                            <p className="text-gray-400 text-sm mb-6">
                                {appearances.length === 1
                                    ? `${speaker.givenName} delivered a session at the following RAW edition. Open the archive page for the full programme that year.`
                                    : `${speaker.givenName} has delivered sessions at ${appearances.length} editions of Risk Awareness Week. Open each archive page for the full programme that year, or visit the original conference site for the session replays.`}
                            </p>
                            <ul className="space-y-3">
                                {appearances.map((a) => {
                                    const archiveYear = getArchiveYear(a.year);
                                    return (
                                        <li
                                            key={a.year}
                                            className="flex flex-col md:flex-row md:items-baseline md:gap-4 border-l-2 border-purple-500/30 pl-4"
                                        >
                                            <span className="text-purple-300 font-semibold w-24 flex-shrink-0">
                                                RAW {a.year}
                                            </span>
                                            <div className="flex-1 text-gray-300 text-sm">
                                                {archiveYear && (
                                                    <span className="text-gray-400">{archiveYear.theme}</span>
                                                )}
                                                {a.note && (
                                                    <span className="text-gray-500 italic"> — {a.note}</span>
                                                )}
                                                <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                                                    <Link
                                                        href={`/archive/${a.year}`}
                                                        className="text-purple-300 hover:text-purple-200 underline-offset-4 hover:underline"
                                                    >
                                                        View RAW {a.year} archive →
                                                    </Link>
                                                    {a.profileUrl && (
                                                        <a
                                                            href={a.profileUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-gray-400 hover:text-purple-300 underline-offset-4 hover:underline"
                                                        >
                                                            Original speaker profile ({a.year})
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </section>
                    )}

                    {publications.length > 0 && (
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold text-white mb-4">Books & publications</h2>
                            <ul className="space-y-4">
                                {publications.map((p) => (
                                    <li key={p.title} className="border-l-2 border-purple-500/30 pl-4">
                                        <p className="text-gray-200">
                                            {p.url ? (
                                                <a
                                                    href={p.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-white hover:text-purple-300 font-medium underline-offset-4 hover:underline"
                                                >
                                                    {p.title}
                                                </a>
                                            ) : (
                                                <span className="text-white font-medium">{p.title}</span>
                                            )}
                                        </p>
                                        <p className="text-gray-500 text-xs mt-1">
                                            {[
                                                p.year && String(p.year),
                                                p.publisher,
                                                p.coAuthor,
                                                p.type === 'standard' && 'Industry standard',
                                                p.type === 'paper' && 'Paper',
                                            ]
                                                .filter(Boolean)
                                                .join(' · ')}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {speaker.awards && speaker.awards.length > 0 && (
                        <section className="mb-12">
                            <h2 className="text-2xl font-semibold text-white mb-4">Awards</h2>
                            <ul className="text-gray-300 space-y-2 list-disc list-inside">
                                {speaker.awards.map((award) => (
                                    <li key={award}>{award}</li>
                                ))}
                            </ul>
                        </section>
                    )}

                    {speaker.raw2026SpeakerUrl && (
                        <section className="mt-16 p-8 rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-transparent">
                            <h2 className="text-2xl font-bold text-white mb-3">
                                {speaker.isAlumni
                                    ? `${speaker.name} at Risk Awareness Week`
                                    : `See ${speaker.name} at RAW 2026`}
                            </h2>
                            <p className="text-gray-300 mb-6">
                                {speaker.isAlumni
                                    ? 'View the full speaker profile and past sessions on the RAW archive.'
                                    : 'View the full session lineup, register for free Phase 1, or grab a Phase 2 implementation pass.'}
                            </p>
                            <a
                                href={speaker.raw2026SpeakerUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-colors"
                            >
                                {speaker.isAlumni
                                    ? `View ${speaker.name}'s RAW profile →`
                                    : `See ${speaker.name} at RAW 2026 →`}
                            </a>
                        </section>
                    )}
                </div>
            </article>
        </>
    );
}
