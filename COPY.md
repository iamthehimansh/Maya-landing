# Maya landing — COPY (owned by @content)

Single source of truth for all page copy. Paste directly. Everything here is
verified against the manager brief — no invented features, no lorem ipsum.
Ping @content to change wording; don't edit this ad hoc so we stay in sync.

---

## 0. Meta / SEO (for @deploy's <head>)

- **title:** `Maya OS — the local-first AI OS for developers`
- **description (≤160 chars) — FINAL:**
  `Run local GGUF models, autonomous agent teams, and a hardware-aware model recommender on your own Mac — plus maya code, the coding agent. One command: maya serve.`
- **og:title:** `Maya OS — the local-first AI OS for developers`
- **og:description:** same as description above
- **twitter:card:** `summary_large_image`
- **og:url:** `https://maya.himansh.in/`
- **theme-color (dark):** `#0b0d10`
- **keywords (optional):** `local AI, GGUF, llama.cpp, coding agent, AI OS, Apple Silicon, model gateway, agent teams`

---

## 1. Nav

- Brand: **Maya**
- Links: `Maya OS` · `maya code` · `Why local-first` · `Docs*` · `GitHub`
  (*Docs link → GitHub repo READMEs; if no docs site, drop the Docs item.)
- CTA button: **Install** (scrolls to hero commands) or `npm i -g maya-os`

---

## 2. Hero

- **Eyebrow / kicker:** `Local-first · Apple Silicon first · Open source`
- **H1:** `The local-first AI OS for developers`
- **Sub-headline (one line):**
  `Your models, your machine, your keys. Maya OS runs local LLMs, autonomous agent teams, and a hardware-aware model recommender — all behind one command.`
- **Install commands (copy-to-clipboard, two rows):**

  Row 1 — Maya OS:
  ```
  npm i -g maya-os        →  maya serve
  ```
  Row 2 — maya code:
  ```
  npm i -g @maya-os/code  →  mayac
  ```
  - Row 1 caption: `Boot the OS + dashboard`
  - Row 2 caption: `Launch the coding agent`

- **Primary buttons:** `Get started` (→ #get-started) · `View on GitHub` (→ Maya-os repo)
- **Badges (near hero + in footer):**
  - npm version — maya-os: `https://img.shields.io/npm/v/maya-os?color=6d5efc&label=maya-os`
    link → `https://www.npmjs.com/package/maya-os`
  - npm version — @maya-os/code: `https://img.shields.io/npm/v/%40maya-os%2Fcode?color=6d5efc&label=%40maya-os%2Fcode`
    link → `https://www.npmjs.com/package/@maya-os/code`
  - license — Maya OS: `https://img.shields.io/github/license/iamthehimansh/Maya-os?color=444`
    link → `https://github.com/iamthehimansh/Maya-os`
  (Badge alt text: e.g. `maya-os npm version`, `Maya OS license`.)

---

## 3. Maya OS — feature section

- **Section eyebrow:** `Maya OS · maya-os`
- **Section heading:** `An AI OS that lives on your Mac`
- **Section intro:** `One command boots a local model gateway, a team of autonomous agents, and a dashboard to drive them — no cloud account required.`

Four features (title + one-line body). Suggested SVG icon per card in brackets.

1. **Local model gateway** *(icon: plug / API)*
   `An OpenAI-compatible endpoint over local GGUF models via llama.cpp — point any OpenAI SDK at localhost and go.`

2. **RAM guardrails + hardware-aware fit** *(icon: gauge / chip)*
   `Maya knows your machine. It sizes models to your RAM so you never swap-thrash or OOM a load.`

3. **Agent teams** *(icon: people / terminal)*
   `Real-PTY standing agents — Claude Code, Codex, or maya code — talk on a shared channel and build things autonomously.`

4. **Web dashboard** *(icon: layout / window)*
   `Chat with your agent teams and models, browse files and runs — all from a local web UI.`

5. **Hardware-aware model recommender** *(icon: sparkle / stars)* — feature this prominently:
   `Detects your Mac and ranks local models by fit, quality, and speed — perfect / good / too-tight — so you download the right one the first time.`

- **Section CTA:** `npm i -g maya-os` (copy) · `Read the docs →` (GitHub)

---

## 4. maya code — feature section

- **Section eyebrow:** `maya code · @maya-os/code · bin: mayac`
- **Section heading:** `The coding agent that runs on your terms`
- **Section intro:** `A full-screen terminal coding agent — provider-agnostic, subscription-or-key, and extensible. This site was built by maya code agents.`

Feature cards:

1. **Provider-agnostic** *(icon: swap)*
   `Anthropic and OpenAI, side by side. Run on a plain API key or your own subscription — your call.`

2. **Full-screen TUI** *(icon: terminal)*
   `A fast, keyboard-driven terminal interface for real work — read, edit, run, and review in one place.`

3. **Skills** *(icon: puzzle)*
   `Load reusable, skills.sh-compatible skills on demand — procedural knowledge the agent pulls in when a task matches.`

4. **MCP** *(icon: network)*
   `Connect Model Context Protocol servers to give the agent new tools and data sources at runtime.`

5. **Sub-agents + workflows** *(icon: branch)*
   `Fan out well-scoped work to parallel sub-agents and orchestrate multi-step workflows.`

6. **Memory + background tasks** *(icon: save / clock)*
   `Durable project memory across sessions, plus long-running background jobs that keep working while you do.`

- **Section CTA:** `npm i -g @maya-os/code` (copy) · `mayac on GitHub →` (Mayac repo)

---

## 5. Terminal / TUI showcase

Two stylized panels. Use monospace; keep the exact text below. The `▏` and box
chars are intentional. Copy is illustrative-but-plausible, styled as real output.

### Panel A — `maya serve`

Window title bar label: `zsh — maya serve`

```
$ maya serve

  Maya OS  ▸  local-first AI OS
  ────────────────────────────────────────────────
  ✓ Detected  Apple M3 Pro · 36 GB unified memory
  ✓ Gateway   http://localhost:4141  (OpenAI-compatible)
  ✓ Dashboard http://localhost:4141/app

  Model recommender — ranked for your Mac
  ────────────────────────────────────────────────
  ● perfect    qwen2.5-coder-14b-instruct  Q4_K_M   ~9 GB
  ● good       llama-3.1-8b-instruct       Q5_K_M   ~6 GB
  ○ too-tight  deepseek-coder-33b          Q4_K_M   ~19 GB

  RAM guardrail: 27 GB free · loads capped to keep you safe
  Ready. Point any OpenAI client at localhost:4141 →
```

### Panel B — `mayac` TUI

Window title bar label: `zsh — mayac`

```
┌─ maya code ──────────────────────────── @team/content ─┐
│                                                        │
│  › build the landing hero and wire the copy            │
│                                                        │
│  ● read    COPY.md                                     │
│  ● edit    index.html   (+42 −3)                       │
│  ● bash    python3 -m http.server 8080                 │
│  ✓ agents  design · build · deploy · content           │
│                                                        │
│  skills · mcp · sub-agents · memory · background        │
├────────────────────────────────────────────────────────┤
│  ⏎ send   ⇥ tools   ^K commands   ^C quit               │
└────────────────────────────────────────────────────────┘
```

- **Caption under showcase (optional):**
  `Left: the gateway + recommender at boot. Right: maya code driving a real task.`

---

## 6. Why local-first

- **Section heading:** `Why local-first`
- **Lead line:** `Your models, your machine, your subscription. Nothing leaves your box unless you point it at a cloud provider.`

Three pillars (title + body):

1. **Private by default**
   `Prompts, code, and context stay on your Mac. No telemetry pipe to someone else's servers — you own the whole loop.`

2. **No metered surprises**
   `Local models cost you nothing per token. Bring a cloud key only when you want to, only where you want to.`

3. **Yours, offline-capable**
   `Once a model's on disk, you keep working — on a plane, behind a firewall, or off the grid.`

- **Callout line:** `Cloud-optional, never cloud-required.`

---

## 7. Final CTA band

- **Heading:** `Boot your own AI OS in one command`
- **Sub:** `Free, open source, Apple Silicon first.`
- **Commands (copy):**
  ```
  npm i -g maya-os        →  maya serve
  npm i -g @maya-os/code  →  mayac
  ```
- **Buttons:** `Star on GitHub` (→ Maya-os) · `Read maya code docs` (→ Mayac)

---

## 8. Footer

- **Tagline:** `Maya OS — local-first AI, built on your machine.`
- **Column: Product**
  - Maya OS → https://www.npmjs.com/package/maya-os
  - maya code → https://www.npmjs.com/package/@maya-os/code
  - Why local-first → #why-local-first
- **Column: GitHub**
  - Maya OS → https://github.com/iamthehimansh/Maya-os
  - maya code → https://github.com/iamthehimansh/Mayac
- **Column: npm**
  - maya-os → https://www.npmjs.com/package/maya-os
  - @maya-os/code → https://www.npmjs.com/package/@maya-os/code
- **Bottom line:** `Built by maya code agents · MIT-licensed · maya.himansh.in`
  (Adjust license label if repos say otherwise.)

---

## Canonical links (do not typo)

| What | URL |
|---|---|
| GitHub — Maya OS | https://github.com/iamthehimansh/Maya-os |
| GitHub — maya code | https://github.com/iamthehimansh/Mayac |
| npm — maya-os | https://www.npmjs.com/package/maya-os |
| npm — @maya-os/code | https://www.npmjs.com/package/@maya-os/code |
| Site | https://maya.himansh.in |

## Voice notes
- Lowercase `maya code` and `mayac`; `Maya OS` capitalized.
- Confident, concrete, dev-to-dev. No hype adjectives ("revolutionary", "magical").
- Say what it does, not how it feels.
