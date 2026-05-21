import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// AI crawlers we track. Order matters: AppleBot-Extended must precede
// AppleBot so the more specific name wins on substring match.
const AI_BOTS: { name: string; pattern: RegExp }[] = [
    { name: 'GPTBot',              pattern: /GPTBot/i },
    { name: 'ChatGPT-User',        pattern: /ChatGPT-User/i },
    { name: 'OAI-SearchBot',       pattern: /OAI-SearchBot/i },
    { name: 'ClaudeBot',           pattern: /ClaudeBot/i },
    { name: 'Claude-Web',          pattern: /Claude-Web/i },
    { name: 'anthropic-ai',        pattern: /anthropic-ai/i },
    { name: 'PerplexityBot',       pattern: /PerplexityBot/i },
    { name: 'Perplexity-User',     pattern: /Perplexity-User/i },
    { name: 'Google-Extended',     pattern: /Google-Extended/i },
    { name: 'AppleBot-Extended',   pattern: /Applebot-Extended/i },
    { name: 'AppleBot',            pattern: /Applebot(?!-Extended)/i },
    { name: 'Bytespider',          pattern: /Bytespider/i },
    { name: 'CCBot',               pattern: /CCBot/i },
    { name: 'Meta-ExternalAgent',  pattern: /meta-externalagent/i },
];

function detectBot(ua: string): string | null {
    for (const bot of AI_BOTS) {
        if (bot.pattern.test(ua)) return bot.name;
    }
    return null;
}

export function middleware(req: NextRequest) {
    const ua = req.headers.get('user-agent') ?? '';
    const bot = detectBot(ua);
    if (!bot) return NextResponse.next();

    // Structured event line for Vercel Runtime Logs. Status code is captured
    // by Vercel's built-in request logs and joined downstream by path+timestamp
    // — middleware runs before the response, so the final status isn't known here.
    console.log(JSON.stringify({
        event: 'ai_crawler_hit',
        ts: new Date().toISOString(),
        bot,
        path: req.nextUrl.pathname + req.nextUrl.search,
        method: req.method,
        referer: req.headers.get('referer'),
        ua,
        country: req.headers.get('x-vercel-ip-country') || undefined,
        region: req.headers.get('x-vercel-ip-country-region') || undefined,
        city: req.headers.get('x-vercel-ip-city') || undefined,
    }));

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon\\.ico|.*\\.(?:png|jpg|jpeg|gif|webp|svg|ico|woff|woff2|ttf|otf|map)$).*)',
    ],
};
