# RAW2026 MCP — catalog submission pack

Canonical metadata for submitting `mcp.riskawarenessweek.com` to MCP catalogs.
PM-174 acceptance: register in mcpservers.org + minimum 2 other catalogs.

## Core metadata (use across all catalogs)

| Field | Value |
|---|---|
| **Server name** | Risk Awareness Week (RAW) |
| **Slug / id** | risk-awareness-week |
| **Endpoint URL** | `https://mcp.riskawarenessweek.com` |
| **Transport** | Streamable HTTP (MCP protocol 2025-03-26) |
| **Authentication** | None (read-only public) |
| **Category** | Conference / Events / Knowledge |
| **Tags** | `risk-management`, `conference`, `events`, `decision-making`, `quantitative-risk`, `2026`, `virtual-event` |
| **Maintainer** | RISK-ACADEMY (Alex Sidorenko) |
| **Contact** | alex.ausrisk@gmail.com |
| **Website** | https://www.riskawarenessweek.com |
| **Event site** | https://2026.riskawarenessweek.com |
| **Source repo** | https://github.com/riskacademy/RAW-website (event tools), https://github.com/rankcaster/rankcaster (host) |
| **License** | Server data: CC-BY 4.0; source: MIT |

## Short description (one-liner, ≤ 160 chars)

> Read-only MCP server for Risk Awareness Week 2026 — the world's largest virtual risk-management & AI conference (12-16 October 2026).

## Long description (≤ 400 chars)

> Risk Awareness Week (RAW) is the world's largest virtual conference on decision-centric risk management, AI-applied quantitative risk analysis, and Monte Carlo modelling — organised by RISK-ACADEMY (FERMA 2024 Training & Education Programme of the Year). This MCP server exposes the RAW2026 programme to AI agents: search speakers, get session topics, ticket pricing, event overview, and register a lead.

## Tools (11 total: 6 RankCaster brand + 5 RAW event)

**Event-specific (custom OpenAPI):**

- `search_speakers(q?, limit?)` — search the RAW2026 speakers roster (14 in repo, 36 total at event)
- `get_event_overview()` — dates, format, organiser, phases, stats, awards, topic tracks
- `get_pricing()` — Phase 1 free / Phase 2 $550 individual / Corporate $2,000 (up to 50 seats)
- `get_session(topic?|date?|id?)` — 7 thematic tracks; per-session schedule TBA
- `register_lead(email, name?, interest)` — subscribe to RAW2026 mailing list (Brevo); interest ∈ {attend, speaker, sponsor, press}

**Brand-level (RankCaster built-in):**

- `get_company_info`, `search_products`, `get_faq`, `get_structured_data`, `get_brand_voice`, `search_content`

## Install / connect snippets

**Claude Desktop** (`~/Library/Application Support/Claude/claude_desktop_config.json`):

```json
{
  "mcpServers": {
    "risk-awareness-week": {
      "url": "https://mcp.riskawarenessweek.com"
    }
  }
}
```

**Cursor / Windsurf / other Streamable HTTP MCP clients** — same URL.

**Smithery CLI:**

```bash
smithery mcp add https://mcp.riskawarenessweek.com
```

## Verification

```bash
# initialize handshake — should return serverInfo with "Risk Awareness Week"
curl -X POST https://mcp.riskawarenessweek.com/ \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"verify","version":"0.1"}}}'

# tools/list — should return 11 tools
curl -X POST https://mcp.riskawarenessweek.com/ \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/list"}'
```

---

## Per-catalog submissions

### 1. mcp.so (chatmcp/mcpso#1 issue comment)

Ready-to-post Markdown comment is below. Submitted via `gh issue comment 1 -R chatmcp/mcpso`.

```markdown
### Risk Awareness Week (RAW2026) — risk management & AI conference

**Endpoint:** https://mcp.riskawarenessweek.com
**Transport:** Streamable HTTP (MCP 2025-03-26)
**Auth:** none (read-only public)
**Repo:** https://github.com/riskacademy/RAW-website
**Website:** https://www.riskawarenessweek.com
**Event:** 12-16 October 2026, fully virtual

Read-only MCP server for Risk Awareness Week (RAW), the world's largest virtual conference on decision-centric risk management, quantitative risk analysis, and AI-applied risk methods. Organised by RISK-ACADEMY — FERMA 2024 Training & Education Programme of the Year. 20,000+ professionals from 120+ countries have attended since 2020.

**Tools (11):**

Event-specific:
- `search_speakers(q?, limit?)` — search the speakers roster
- `get_event_overview()` — dates, organiser, phases, stats, awards, topic tracks
- `get_pricing()` — Phase 1 free / Phase 2 $550 / Corporate $2,000
- `get_session(topic?|date?|id?)` — 7 thematic tracks (per-session schedule TBA)
- `register_lead(email, name?, interest)` — mailing-list subscription (Brevo)

Brand-level (via RankCaster hosted MCP):
- `get_company_info`, `search_products`, `get_faq`, `get_structured_data`, `get_brand_voice`, `search_content`

**Tags:** `conference`, `risk-management`, `events`, `decision-making`, `quantitative-risk`, `virtual-event`, `2026`

**Quick install (Claude Desktop):**

```json
{
  "mcpServers": {
    "risk-awareness-week": {
      "url": "https://mcp.riskawarenessweek.com"
    }
  }
}
```
```

### 2. mcpservers.org (web form)

Form is at https://mcpservers.org/submit. Fields:

- **Server Name**: `Risk Awareness Week`
- **Short Description**: `Read-only MCP server for Risk Awareness Week 2026 — the world's largest virtual risk-management & AI conference (12-16 Oct 2026). Search speakers, sessions, pricing, register leads.`
- **Link (GitHub or docs)**: `https://github.com/riskacademy/RAW-website`
- **Contact Email**: `alex.ausrisk@gmail.com`
- **Category**: `Other` (no event-specific category — closest available is "Other" or "Productivity")

Skip the $39 premium upgrade.

### 3. PulseMCP (web form)

Form at https://www.pulsemcp.com/submit. Two fields:

- **Type**: `MCP Server`
- **URL**: `https://mcp.riskawarenessweek.com`

PulseMCP is an aggregator that also pulls from the Official MCP Registry weekly. Submitting here gets us into one of the largest user-facing directories (16,030+ servers) without DNS verification overhead.

### 4. Official MCP Registry (registry.modelcontextprotocol.io) — follow-up, not required for PM-174

Authoritative upstream — many other catalogs (PulseMCP among them) feed from here. Higher payoff long-term, but requires CLI install + DNS-TXT namespace verification. Defer to a separate task.

Sketch when ready:

1. Build/install `mcp-publisher` CLI (`brew install mcp-publisher` or build from modelcontextprotocol/registry)
2. Verify namespace ownership for `com.riskawarenessweek` via DNS TXT record:
   ```
   _mcp-registry.riskawarenessweek.com  TXT  "mcp-registry-verification=<token>"
   ```
3. Author `server.json` with the endpoint metadata
4. Run `mcp-publisher login` (DNS method) → `mcp-publisher publish server.json`

`server.json` draft:

```json
{
  "$schema": "https://registry.modelcontextprotocol.io/schemas/v1/server.json",
  "name": "com.riskawarenessweek/raw",
  "description": "Read-only MCP server for Risk Awareness Week 2026 — the world's largest virtual risk-management & AI conference (12-16 October 2026, fully virtual). Search speakers, get session topics, pricing, event overview, and register email leads.",
  "version": "0.2.0",
  "repository": {
    "url": "https://github.com/riskacademy/RAW-website",
    "source": "github"
  },
  "remotes": [
    {
      "type": "streamable-http",
      "url": "https://mcp.riskawarenessweek.com"
    }
  ],
  "websiteUrl": "https://www.riskawarenessweek.com"
}
```

---

## Submission status (PM-174 acceptance)

- [x] **mcp.so** — posted to chatmcp/mcpso#1 on 2026-05-26
- [ ] **mcpservers.org** — user submits at https://mcpservers.org/submit using fields above
- [ ] **PulseMCP** — user submits at https://www.pulsemcp.com/submit using fields above
- [ ] (follow-up) Official MCP Registry — separate ticket, requires DNS verification
