import type { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

import SectionHeader from '@/components/ui/SectionHeader';

export const metadata: Metadata = {
    title: 'Connect Risk Awareness Week to Your AI Assistant — RAW MCP Server',
    description:
        "Use Risk Awareness Week 2026 inside Claude, ChatGPT, Cursor, Windsurf, Gemini, and any MCP-compatible AI. Free, public, read-only MCP server at mcp.riskawarenessweek.com — 11 tools, one-click install.",
    alternates: {
        canonical: 'https://www.riskawarenessweek.com/mcp',
    },
    openGraph: {
        title: 'Connect Risk Awareness Week to Your AI Assistant',
        description:
            'Use RAW2026 inside Claude, ChatGPT, Cursor, Gemini, and any MCP-compatible AI. Free public MCP server, 11 tools, one-click install.',
        url: 'https://www.riskawarenessweek.com/mcp',
        type: 'website',
        images: [{ url: '/logo.png', width: 1200, height: 630, alt: 'Risk Awareness Week MCP' }],
    },
};

const ENDPOINT = 'https://mcp.riskawarenessweek.com';

interface ToolInfo {
    name: string;
    description: string;
    category: 'event' | 'brand';
}

const TOOLS: ToolInfo[] = [
    { name: 'search_speakers', description: 'Search the RAW2026 speakers roster by name, topic, or organisation.', category: 'event' },
    { name: 'get_event_overview', description: 'Dates, format, organiser, phase structure, awards, topic tracks, key URLs.', category: 'event' },
    { name: 'get_pricing', description: 'Phase 1 free / Phase 2 $550 individual / Corporate $2,000 — current pricing tiers.', category: 'event' },
    { name: 'get_session', description: 'Topic-track lookup (7 thematic tracks). Per-session schedule lands closer to the event.', category: 'event' },
    { name: 'register_lead', description: 'Subscribe an email to the RAW2026 mailing list with an interest category.', category: 'event' },
    { name: 'get_company_info', description: 'Official RISK-ACADEMY / RAW company information.', category: 'brand' },
    { name: 'search_products', description: 'Search RAW phases, workshops, and offerings.', category: 'brand' },
    { name: 'get_faq', description: 'Frequently asked questions about RAW2026.', category: 'brand' },
    { name: 'get_structured_data', description: 'JSON-LD knowledge graph for RAW (Organization, EventSeries, Speakers).', category: 'brand' },
    { name: 'get_brand_voice', description: 'RAW brand positioning, messaging, and tone guidance.', category: 'brand' },
    { name: 'search_content', description: 'Free-text search across crawled RAW pages.', category: 'brand' },
];

interface CodeBlockProps {
    children: React.ReactNode;
    lang?: string;
}

function CodeBlock({ children, lang = 'json' }: CodeBlockProps) {
    return (
        <pre className="bg-black/50 border border-white/10 rounded-lg p-4 overflow-x-auto text-sm text-gray-200">
            <code className={`language-${lang}`}>{children}</code>
        </pre>
    );
}

interface ClientCardProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
    id: string;
}

function ClientCard({ title, subtitle, children, id }: ClientCardProps) {
    return (
        <section id={id} className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 mb-6 scroll-mt-32">
            <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
            <p className="text-gray-400 mb-4">{subtitle}</p>
            {children}
        </section>
    );
}

export default function McpPage() {
    return (
        <main className="min-h-screen pt-32 pb-24">
            <div className="container mx-auto px-6">
                <SectionHeader
                    title="Connect RAW to your AI"
                    subtitle="Use Risk Awareness Week 2026 inside Claude, ChatGPT, Cursor, Gemini, and any MCP-compatible AI assistant."
                    className="mb-12"
                />

                <div className="max-w-4xl mx-auto text-gray-300">
                    <section className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 mb-10">
                        <h2 className="text-2xl font-bold text-white mb-4">What this is</h2>
                        <p className="mb-4 leading-relaxed">
                            Risk Awareness Week exposes its event data through a public, read-only{' '}
                            <a
                                href="https://modelcontextprotocol.io"
                                className="text-indigo-400 hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Model Context Protocol (MCP)
                            </a>{' '}
                            server. AI assistants that support MCP can connect once and then answer authoritative questions
                            about RAW2026 — speakers, sessions, pricing, registration — without scraping or hallucinating.
                        </p>
                        <p className="mb-4 leading-relaxed">
                            The server is free, requires no account, and serves <strong>{TOOLS.length} tools</strong> over
                            Streamable HTTP at:
                        </p>
                        <CodeBlock lang="text">{ENDPOINT}</CodeBlock>
                    </section>

                    <h2 className="text-3xl font-bold text-white mb-6 mt-12">Install</h2>

                    <ClientCard
                        id="claude-desktop"
                        title="Claude Desktop"
                        subtitle="Edit your Claude config file, restart the app."
                    >
                        <p className="mb-3 text-sm">macOS: <code className="text-indigo-300">~/Library/Application Support/Claude/claude_desktop_config.json</code></p>
                        <p className="mb-3 text-sm">Windows: <code className="text-indigo-300">%APPDATA%\Claude\claude_desktop_config.json</code></p>
                        <CodeBlock>{`{
  "mcpServers": {
    "risk-awareness-week": {
      "url": "${ENDPOINT}"
    }
  }
}`}</CodeBlock>
                    </ClientCard>

                    <ClientCard
                        id="claude-web"
                        title="Claude.ai (web)"
                        subtitle="Settings → Connectors → Add custom connector."
                    >
                        <ol className="list-decimal list-inside space-y-2 mb-4">
                            <li>
                                Open{' '}
                                <a
                                    href="https://claude.ai/settings/connectors"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-400 hover:underline"
                                >
                                    claude.ai/settings/connectors
                                </a>
                            </li>
                            <li>Click <strong>Add custom connector</strong></li>
                            <li>Paste the URL below and save</li>
                        </ol>
                        <CodeBlock lang="text">{ENDPOINT}</CodeBlock>
                    </ClientCard>

                    <ClientCard
                        id="chatgpt"
                        title="ChatGPT (Business / Enterprise / Edu)"
                        subtitle="Developer mode (beta) — Settings → Apps → Create custom app."
                    >
                        <ol className="list-decimal list-inside space-y-2 mb-4">
                            <li>Enable Developer mode in ChatGPT settings (Business / Enterprise / Edu only)</li>
                            <li>Go to <strong>Settings → Apps → Create</strong></li>
                            <li>Name: <code className="text-indigo-300">Risk Awareness Week</code></li>
                            <li>MCP server URL:</li>
                        </ol>
                        <CodeBlock lang="text">{ENDPOINT}</CodeBlock>
                        <p className="text-sm text-gray-400 mt-3">
                            Free / Plus ChatGPT tiers do not yet support remote MCP servers — this requires a Business,
                            Enterprise, or Edu workspace.
                        </p>
                    </ClientCard>

                    <ClientCard
                        id="cursor"
                        title="Cursor"
                        subtitle="Cursor Settings → MCP → Add new MCP server."
                    >
                        <p className="mb-3">In Cursor settings, add an entry:</p>
                        <CodeBlock>{`{
  "mcpServers": {
    "risk-awareness-week": {
      "url": "${ENDPOINT}"
    }
  }
}`}</CodeBlock>
                    </ClientCard>

                    <ClientCard
                        id="windsurf"
                        title="Windsurf"
                        subtitle="Cascade settings → MCP servers."
                    >
                        <p className="mb-3">
                            Edit <code className="text-indigo-300">~/.codeium/windsurf/mcp_config.json</code>:
                        </p>
                        <CodeBlock>{`{
  "mcpServers": {
    "risk-awareness-week": {
      "serverUrl": "${ENDPOINT}"
    }
  }
}`}</CodeBlock>
                    </ClientCard>

                    <ClientCard
                        id="gemini"
                        title="Gemini CLI"
                        subtitle="Add to ~/.gemini/settings.json."
                    >
                        <CodeBlock>{`{
  "mcpServers": {
    "risk-awareness-week": {
      "httpUrl": "${ENDPOINT}"
    }
  }
}`}</CodeBlock>
                    </ClientCard>

                    <ClientCard
                        id="smithery"
                        title="Smithery CLI (one-liner)"
                        subtitle="Install into any supported client in one command."
                    >
                        <CodeBlock lang="bash">{`smithery mcp add ${ENDPOINT}`}</CodeBlock>
                    </ClientCard>

                    <h2 className="text-3xl font-bold text-white mb-4 mt-16">Tools</h2>
                    <p className="text-gray-400 mb-6">
                        The server exposes <strong>{TOOLS.length} tools</strong> — {TOOLS.filter((t) => t.category === 'event').length} event-specific
                        and {TOOLS.filter((t) => t.category === 'brand').length} brand-level. Your AI assistant chooses which to call based on the question asked.
                    </p>

                    <div className="space-y-3 mb-10">
                        {TOOLS.map((tool) => (
                            <div
                                key={tool.name}
                                className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 flex flex-col sm:flex-row sm:items-baseline sm:gap-4"
                            >
                                <code className="text-indigo-300 font-mono text-sm shrink-0 sm:w-56">{tool.name}</code>
                                <span className="text-gray-300 text-sm">{tool.description}</span>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-3xl font-bold text-white mb-4 mt-12">Try it</h2>
                    <p className="text-gray-400 mb-6">
                        Once connected, ask your AI assistant questions like:
                    </p>
                    <ul className="list-disc list-inside space-y-2 mb-10 text-gray-300">
                        <li>&ldquo;Who is speaking at Risk Awareness Week 2026?&rdquo;</li>
                        <li>&ldquo;What does a Phase 2 ticket cost?&rdquo;</li>
                        <li>&ldquo;Which RAW speakers cover quantitative risk analysis?&rdquo;</li>
                        <li>&ldquo;What are the 7 topic tracks for RAW2026?&rdquo;</li>
                        <li>&ldquo;Sign me up for RAW2026 — my email is example@company.com.&rdquo;</li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mb-4 mt-12">Verify the connection</h2>
                    <p className="text-gray-400 mb-4">
                        Confirm the server is reachable and exposes the expected tools (curl works fine if you don&apos;t have a client installed yet):
                    </p>
                    <CodeBlock lang="bash">{`curl -X POST ${ENDPOINT}/ \\
  -H "Content-Type: application/json" \\
  -H "Accept: application/json, text/event-stream" \\
  -d '{"jsonrpc":"2.0","id":1,"method":"tools/list"}'`}</CodeBlock>

                    <section className="mt-16 pt-8 border-t border-white/10 text-sm text-gray-400">
                        <p className="mb-2">
                            <strong className="text-gray-200">Privacy:</strong> The server is read-only for all tools except{' '}
                            <code className="text-indigo-300">register_lead</code>, which writes the email you submit to the
                            RAW2026 mailing list (Brevo). See{' '}
                            <Link href="/privacy" className="text-indigo-400 hover:underline">
                                privacy policy
                            </Link>{' '}
                            for details.
                        </p>
                        <p className="mb-2">
                            <strong className="text-gray-200">Source:</strong> open data layer at{' '}
                            <a
                                href="https://github.com/riskacademy/RAW-website"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-400 hover:underline"
                            >
                                github.com/riskacademy/RAW-website
                            </a>{' '}
                            (event tools) and{' '}
                            <a
                                href="https://github.com/rankcaster/rankcaster"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-indigo-400 hover:underline"
                            >
                                rankcaster/rankcaster
                            </a>{' '}
                            (MCP host). OpenAPI spec at{' '}
                            <a
                                href="/mcp-tools/openapi.yaml"
                                className="text-indigo-400 hover:underline"
                            >
                                /mcp-tools/openapi.yaml
                            </a>
                            .
                        </p>
                        <p>
                            <strong className="text-gray-200">Issues / contact:</strong> alex.ausrisk@gmail.com
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
}
