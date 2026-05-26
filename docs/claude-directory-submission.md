# RAW2026 → Claude Connectors Directory submission pack

Submission form: <https://clau.de/mcp-directory-submission> (6-page Google Form, manually reviewed by Anthropic).

Review criteria: <https://claude.com/docs/connectors/building/review-criteria>.

## ⚠️ Known blocker before submitting

Anthropic review explicitly requires every tool to declare `readOnlyHint` or `destructiveHint`. Probe of `mcp.riskawarenessweek.com` shows tools currently have `title` + `description` only, no `annotations` object. Filed as [rankcaster/rankcaster#100](https://github.com/rankcaster/rankcaster/issues/100) — 5-minute fix on RankCaster side.

**Recommended:** submit AFTER #100 ships so we don't burn a review cycle (Anthropic queue is weeks).

---

## Form content (ready to paste)

### Page 1 — Server info

| Field | Value |
|---|---|
| **Server name** | `Risk Awareness Week` |
| **Tagline** (≤ 60 chars) | `Plan & register for the world's largest virtual risk conference` |
| **URL** | `https://mcp.riskawarenessweek.com` |
| **Public docs URL** | `https://www.riskawarenessweek.com/mcp` |
| **Privacy policy URL** | `https://www.riskawarenessweek.com/privacy` |
| **Contact email** | `alex.ausrisk@gmail.com` |
| **Maintainer / Org** | `RISK-ACADEMY LTD.` |
| **Logo** | `https://www.riskawarenessweek.com/logo.png` |
| **Favicon** | `https://www.riskawarenessweek.com/favicon.ico` |

### Page 2 — Description & use cases

**Short description (≤ 160 chars):**

> Read-only MCP server for Risk Awareness Week 2026 — the world's largest virtual risk-management & AI conference (12-16 Oct 2026).

**Long description (≤ 600 chars):**

> Risk Awareness Week (RAW) is the world's largest virtual conference on decision-centric risk management, AI-applied quantitative risk analysis, and Monte Carlo modelling — organised by RISK-ACADEMY (FERMA 2024 Training & Education Programme of the Year). 20,000+ professionals from 120+ countries have attended since 2020. This MCP server exposes the RAW2026 programme to AI assistants: search speakers, look up the event overview / pricing / topic tracks, and register an email lead.

**Use cases (3-5 bullet points):**

- Ask Claude "is Douglas Hubbard speaking at RAW2026?" → `search_speakers(q=hubbard)`
- Ask "how much is a Phase 2 ticket?" → `get_pricing()`
- Ask "what are the topic tracks for RAW2026?" → `get_session()` (catalogue mode)
- Ask "sign me up — my email is X" → `register_lead(email=X, interest=attend)`
- Research risk-management speakers / topics inside Claude without leaving the chat

### Page 3 — Technical details

| Field | Value |
|---|---|
| **Transport** | `Streamable HTTP` |
| **Protocol version** | `2025-03-26` |
| **Authentication** | `None — public read-only server` |
| **OAuth required?** | No |
| **Connection requirements** | None — direct connection by URL |
| **Tested via MCP Inspector** | ✅ (capture screenshot before submitting — see Page 5) |
| **Public GitHub repo** | `https://github.com/riskacademy/RAW-website` (event tools) + `https://github.com/rankcaster/rankcaster` (MCP host) |
| **OpenAPI spec URL** | `https://www.riskawarenessweek.com/mcp-tools/openapi.yaml` |

### Page 4 — Tools listing

11 tools total. All require BLOCKER #100 fixed (annotations present in `tools/list` response) before submission.

**Event-specific (custom OpenAPI, served by mcp.riskawarenessweek.com via RankCaster):**

| Name | Title | readOnly | destructive | Description |
|---|---|---|---|---|
| `search_speakers` | Search RAW2026 speakers | ✅ | ❌ | Search the speakers roster by name, role, organization, topics |
| `get_event_overview` | Get RAW2026 event overview | ✅ | ❌ | Canonical descriptor: dates, format, organiser, phases, stats, awards |
| `get_pricing` | Get current RAW2026 ticket pricing | ✅ | ❌ | All current tiers (Phase 1 free / Phase 2 $550 / Corporate $2,000) |
| `get_session` | Get RAW2026 session info | ✅ | ❌ | Topic-track lookup; per-session schedule lands closer to the event |
| `register_lead` | Register an email lead for RAW2026 | ❌ | ❌ | Adds an email to the RAW2026 mailing list (Brevo) with an interest tag |

**Brand-level (built-in RankCaster, served by mcp.riskawarenessweek.com):**

| Name | Title | readOnly | destructive | Description |
|---|---|---|---|---|
| `get_company_info` | Get Company Info | ✅ | ❌ | Official RAW / RISK-ACADEMY company information |
| `search_products` | Search Products | ✅ | ❌ | Search RAW phases, workshops, offerings |
| `get_faq` | Get FAQ | ✅ | ❌ | RAW2026 FAQ blueprint |
| `get_structured_data` | Get Structured Data | ✅ | ❌ | JSON-LD knowledge graph (Organization, EventSeries, Speakers) |
| `get_brand_voice` | Get Brand Voice | ✅ | ❌ | Brand positioning, messaging, tone guidance |
| `search_content` | Search Content | ✅ | ❌ | Free-text search across crawled RAW pages |

### Page 5 — Compliance & testing

- [x] No prompt injection in tool descriptions
- [x] No collection of data beyond function needs
- [x] No access to Claude memory / chat history / user files
- [x] Calls only first-party APIs (`www.riskawarenessweek.com/api/mcp-tools/*` for event tools; RankCaster-internal DB for brand tools)
- [x] No financial asset transfer
- [x] No AI-generated images / video / audio
- [x] No mixed safe + unsafe HTTP methods in a single tool (each operationId has exactly one HTTP method)
- [x] Tool names ≤ 64 chars
- [x] Public docs at https://www.riskawarenessweek.com/mcp
- [x] Privacy policy at https://www.riskawarenessweek.com/privacy
- [x] Test credentials — N/A (read-only public)
- [ ] **MCP Inspector screenshot** — TBD before submitting

**To capture the MCP Inspector screenshot:**

```bash
npx @modelcontextprotocol/inspector
```

Then in the inspector UI:
1. Choose Transport: **Streamable HTTP**
2. URL: `https://mcp.riskawarenessweek.com`
3. Connect → screenshot the tools tab showing all 11 tools

### Page 6 — Branding assets

| Asset | Source / status |
|---|---|
| Logo (square, ≥ 256px) | `https://www.riskawarenessweek.com/logo.png` — TBD verify dimensions |
| Favicon | `https://www.riskawarenessweek.com/favicon.ico` (already in repo) |
| Promotional screenshot 1 | MCP Inspector showing `tools/list` (capture per Page 5) |
| Promotional screenshot 2 | Claude Desktop with a real query, e.g. "Who's speaking at RAW2026 about quantitative risk?" answered by `search_speakers` |
| Promotional screenshot 3 | Optional: Claude.ai web showing the connector added |

---

## Pre-submission checklist

- [ ] rankcaster/rankcaster#100 merged + deployed (tool annotations present)
- [ ] `tools/list` response confirms `annotations.readOnlyHint` set on all 11 tools (verify with curl)
- [ ] MCP Inspector test passes — all 11 tools listed, can invoke at least one
- [ ] Claude Desktop install dry-run — paste config, restart, confirm Risk Awareness Week appears in tool list
- [ ] Screenshots captured (Inspector + Claude Desktop in action)
- [ ] /mcp page deployed and accessible — DONE
- [ ] /privacy mentions MCP / register_lead data flow — TBD (small edit)
- [ ] Submit form at https://clau.de/mcp-directory-submission

## Verification commands (paste into form's "additional info" field if asked)

```bash
# initialize handshake — should return serverInfo
curl -X POST https://mcp.riskawarenessweek.com/ \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"reviewer","version":"0.1"}}}'

# tools/list — should return 11 tools, all with annotations
curl -X POST https://mcp.riskawarenessweek.com/ \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":2,"method":"tools/list"}'

# tools/call on a read-only example
curl -X POST https://mcp.riskawarenessweek.com/ \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"get_event_overview","arguments":{}}}'
```
