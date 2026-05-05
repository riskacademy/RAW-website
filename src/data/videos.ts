// Featured RAW video archive.
//
// TЗ Task 9 — scaffolding only. Client provides 3-5 hand-picked YouTube video IDs
// from channel UCog9jkDZdiRps2w27MZ5Azg (RAW highlights, headline keynotes, RAW2026
// invitation video). Once filled, VideoObject JSON-LD auto-emits in JsonLd.tsx.

export interface FeaturedVideo {
    title: string;
    description: string;
    youtubeId: string; // 11-char video ID
    uploadDate: string; // YYYY-MM-DD
    durationISO: string; // ISO 8601 duration, e.g. "PT45M"
}

export const FEATURED_VIDEOS: FeaturedVideo[] = [
    // Pending content collection — see TЗ §11.1.
    // Example shape (uncomment and replace once IDs are confirmed):
    //
    // {
    //     title: 'RAW2025 Highlights — 5 Days in 5 Minutes',
    //     description: 'Highlights reel from Risk Awareness Week 2025.',
    //     youtubeId: 'XXXXXXXXXXX',
    //     uploadDate: '2025-10-20',
    //     durationISO: 'PT5M30S',
    // },
];

export function videoThumbnailUrl(youtubeId: string): string {
    return `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`;
}

export function videoContentUrl(youtubeId: string): string {
    return `https://www.youtube.com/watch?v=${youtubeId}`;
}

export function videoEmbedUrl(youtubeId: string): string {
    return `https://www.youtube.com/embed/${youtubeId}`;
}
