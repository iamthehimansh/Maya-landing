# Maya landing page

The official landing page for **Maya OS** and **maya code** — hosted at
**[maya.himansh.in](https://maya.himansh.in)**.

A single, fast, fully **static** page: plain HTML + CSS + a little vanilla JS.
**No build step, no framework, no dependencies.** Dark mode by default with a
light-mode toggle, responsive from phone to desktop.

## What Maya is

- **[Maya OS](https://www.npmjs.com/package/maya-os)** (`maya-os`) — a
  local-first AI OS for developers (Apple Silicon first). One command:
  `maya serve`. OpenAI-compatible model gateway over local GGUF models
  (llama.cpp) with RAM guardrails, autonomous agent teams, a web dashboard, and
  a hardware-aware model recommender.
- **[maya code](https://www.npmjs.com/package/@maya-os/code)** (`@maya-os/code`,
  bin `mayac`) — the coding agent: provider-agnostic (Anthropic + OpenAI), runs
  on an API key **or** your own subscription, full-screen TUI, skills, MCP,
  sub-agents, workflows, memory, and background tasks.

## Install Maya

```bash
npm i -g maya-os        &&  maya serve   # the OS + dashboard
npm i -g @maya-os/code  &&  mayac        # the coding agent
```

## Project structure

```
index.html            # the page (semantic HTML)
styles.css            # design system: dark/light tokens, layout, components
main.js               # copy-to-clipboard + theme toggle (vanilla, no deps)
favicon.svg           # SVG favicon + PNG fallbacks (favicon-32, apple-touch, icon-512)
og-image.png / .svg   # 1200×630 social preview
site.webmanifest      # web app manifest
robots.txt / sitemap.xml
_headers              # Cloudflare Pages security + cache headers
DEPLOY.md             # how to deploy (Cloudflare Pages)
```

## Develop / preview locally

```bash
python3 -m http.server 8080   # then open http://localhost:8080
```

Edit `index.html`, `styles.css`, or `main.js` and refresh — there is nothing to
build.

## Deploy

Deployed via **Cloudflare Pages**. The fastest path is a direct upload:

```bash
npx wrangler login
npx wrangler pages deploy . --project-name=maya
```

Then add the custom domain `maya.himansh.in` in the Pages project → **Custom
domains**. Because `himansh.in` is already on Cloudflare DNS, the record is
created automatically. Full instructions (dashboard path, build settings, and
verification) are in **[DEPLOY.md](./DEPLOY.md)**.

## Links

- GitHub: [Maya-os](https://github.com/iamthehimansh/Maya-os) ·
  [Mayac](https://github.com/iamthehimansh/Mayac)
- npm: [maya-os](https://www.npmjs.com/package/maya-os) ·
  [@maya-os/code](https://www.npmjs.com/package/@maya-os/code)

## License

MIT.
