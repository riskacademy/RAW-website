import type { MetadataRoute } from 'next';
import { HEADLINE_SPEAKERS, SITE_ORIGIN } from '@/data/speakers';

// Dynamic sitemap. Next.js serves this at /sitemap.xml.
// Auto-includes every headline speaker page from /src/data/speakers.ts so
// adding a new speaker requires no sitemap edit.

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date('2026-05-05');

    return [
        {
            url: `${SITE_ORIGIN}/`,
            lastModified,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        ...HEADLINE_SPEAKERS.map((s) => ({
            url: `${SITE_ORIGIN}/speakers/${s.slug}`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        })),
        {
            url: `${SITE_ORIGIN}/mcp`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${SITE_ORIGIN}/privacy`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: `${SITE_ORIGIN}/terms`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.3,
        },
        {
            url: `${SITE_ORIGIN}/cookies`,
            lastModified,
            changeFrequency: 'monthly',
            priority: 0.3,
        },
    ];
}
