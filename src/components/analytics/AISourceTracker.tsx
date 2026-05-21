'use client';

import { useEffect } from 'react';

/**
 * AI Source detection.
 *
 * Sends a GA4 `ai_referral` event with a custom `ai_source` parameter when a
 * visitor arrives from one of the 5 tracked AI surfaces. Detection order:
 *   1) document.referrer host match
 *   2) utm_source URL param fallback
 *
 * Dedup: at most one event per session (sessionStorage key `raw_ai_source`).
 *
 * GA4 admin: a custom dimension named "AI Source" must be created against the
 * event parameter `ai_source` for the value to show up in reports.
 */

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
        dataLayer?: unknown[];
    }
}

const AI_REFERRERS: { host: RegExp; source: string }[] = [
    { host: /(?:^|\.)chatgpt\.com$|(?:^|\.)chat\.openai\.com$/i, source: 'ChatGPT' },
    { host: /(?:^|\.)perplexity\.ai$/i, source: 'Perplexity' },
    { host: /(?:^|\.)gemini\.google\.com$|(?:^|\.)bard\.google\.com$/i, source: 'Gemini' },
    { host: /(?:^|\.)claude\.ai$/i, source: 'Claude' },
    { host: /(?:^|\.)copilot\.microsoft\.com$/i, source: 'Copilot' },
];

const UTM_AI_VALUES: Record<string, string> = {
    chatgpt: 'ChatGPT',
    openai: 'ChatGPT',
    perplexity: 'Perplexity',
    gemini: 'Gemini',
    google_gemini: 'Gemini',
    bard: 'Gemini',
    claude: 'Claude',
    anthropic: 'Claude',
    copilot: 'Copilot',
    bing_chat: 'Copilot',
};

function detectAISource(): string | null {
    // 1) document.referrer host match
    if (typeof document !== 'undefined' && document.referrer) {
        try {
            const host = new URL(document.referrer).hostname;
            for (const r of AI_REFERRERS) {
                if (r.host.test(host)) return r.source;
            }
        } catch {
            // malformed referrer — fall through to UTM
        }
    }
    // 2) utm_source fallback
    if (typeof window !== 'undefined') {
        const utm = new URLSearchParams(window.location.search).get('utm_source');
        if (utm && UTM_AI_VALUES[utm.toLowerCase()]) {
            return UTM_AI_VALUES[utm.toLowerCase()];
        }
    }
    return null;
}

export default function AISourceTracker() {
    useEffect(() => {
        const source = detectAISource();
        if (!source) return;

        // One event per session — first AI referrer wins.
        const KEY = 'raw_ai_source';
        if (sessionStorage.getItem(KEY) === source) return;
        sessionStorage.setItem(KEY, source);

        // gtag may not be ready yet; retry up to ~5s.
        const send = (attempt = 0): void => {
            if (typeof window.gtag === 'function') {
                window.gtag('event', 'ai_referral', {
                    ai_source: source,
                    page_path: window.location.pathname,
                    page_location: window.location.href,
                    referrer: document.referrer || '(empty)',
                });
                return;
            }
            if (attempt < 10) setTimeout(() => send(attempt + 1), 500);
        };
        send();
    }, []);

    return null;
}
