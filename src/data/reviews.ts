// Public attendee reviews of Risk Awareness Week.
//
// TЗ Task 8 — scaffolding only. Client (content team) collects 5–10 verbatim public
// quotes from LinkedIn posts under Sidorenko's announcements, RAW YouTube comments,
// or attendee emails (with permission to cite). Once filled in, the Review JSON-LD
// auto-emits in JsonLd.tsx and a visible #testimonials section can be wired up.
//
// AggregateRating is intentionally NOT used — we don't fabricate an average rating.
// If a real survey with 1-5 scale is captured later, add ratingValue/reviewCount.

export interface AttendeeReview {
    authorName: string;
    authorJobTitle?: string;
    authorOrganization?: string;
    reviewBody: string; // verbatim quote (1-3 sentences)
    datePublished: string; // YYYY-MM-DD
    sourceUrl: string; // LinkedIn post URL, YouTube comment URL, etc.
}

export const ATTENDEE_REVIEWS: AttendeeReview[] = [
    // Pending content collection — see TЗ §10.1.
    // Example shape (uncomment and replace once cleared by content team):
    //
    // {
    //     authorName: 'Jane Doe',
    //     authorJobTitle: 'Head of Risk',
    //     authorOrganization: 'Acme Corp',
    //     reviewBody: 'RAW changed how I think about risk — quantitative methods finally clicked.',
    //     datePublished: '2025-10-20',
    //     sourceUrl: 'https://www.linkedin.com/posts/...',
    // },
];
