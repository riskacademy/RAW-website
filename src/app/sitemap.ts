import type { MetadataRoute } from 'next';
import { speakers, SITE_ORIGIN } from '@/data/speakers';
import { ARCHIVE_YEARS, ARCHIVE_LAST_MODIFIED } from '@/data/archive';

// Dynamic sitemap. Next.js serves this at /sitemap.xml.
// Auto-derives from speakers.ts and archive.ts so adding a new speaker or
// archive year requires no sitemap edit. lastModified is taken per-source
// (constants in the data files), bumped when content actually changes.

const SPEAKERS_LAST_MODIFIED = new Date('2026-06-21');
const SITE_LAST_MODIFIED = new Date('2026-06-21');
const LEGAL_LAST_MODIFIED = new Date('2026-05-05');

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        // Homepage
        {
            url: `${SITE_ORIGIN}/`,
            lastModified: SITE_LAST_MODIFIED,
            changeFrequency: 'weekly',
            priority: 1.0,
        },

        // Faculty index — main crawl hub for speaker pages.
        {
            url: `${SITE_ORIGIN}/speakers`,
            lastModified: SPEAKERS_LAST_MODIFIED,
            changeFrequency: 'monthly',
            priority: 0.9,
        },

        // Individual speaker pages — ALL speakers (not just headline). Each
        // page is a Person JSON-LD root and the crawl target for inbound
        // /archive/<year> links.
        ...speakers.map((s) => ({
            url: `${SITE_ORIGIN}/speakers/${s.slug}`,
            lastModified: SPEAKERS_LAST_MODIFIED,
            changeFrequency: 'monthly' as const,
            priority: s.isHeadlineSpeaker ? 0.9 : 0.8,
        })),

        // Archive hub.
        {
            url: `${SITE_ORIGIN}/archive`,
            lastModified: ARCHIVE_LAST_MODIFIED,
            changeFrequency: 'monthly',
            priority: 0.8,
        },

        // Per-year archive pages — declining freshness, but still primary
        // canonical for each historical edition's www.-side hub.
        ...ARCHIVE_YEARS.map((y) => ({
            url: `${SITE_ORIGIN}/archive/${y.year}`,
            lastModified: ARCHIVE_LAST_MODIFIED,
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        })),

        // Other site pages.
        {
            url: `${SITE_ORIGIN}/mcp`,
            lastModified: SITE_LAST_MODIFIED,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${SITE_ORIGIN}/privacy`,
            lastModified: LEGAL_LAST_MODIFIED,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_ORIGIN}/terms`,
            lastModified: LEGAL_LAST_MODIFIED,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${SITE_ORIGIN}/cookies`,
            lastModified: LEGAL_LAST_MODIFIED,
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];
}
