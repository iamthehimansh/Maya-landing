# Deploying the Maya landing page (Cloudflare Pages)

This is a **fully static** site — plain HTML, CSS, and a little vanilla JS. No
build step, no dependencies. It deploys as-is to **Cloudflare Pages**.
Target domain: **https://maya.himansh.in**.

Files that matter for hosting:

```
index.html            # the page
styles.css            # styles
main.js               # copy-to-clipboard + theme toggle
favicon.svg           # favicon (SVG)
favicon-32.png        # PNG fallback favicon
apple-touch-icon.png  # iOS home-screen icon
icon-512.png          # PWA/manifest icon
og-image.png          # 1200×630 social preview image
og-image.svg          # source for the OG image
site.webmanifest      # web app manifest
robots.txt            # crawler rules + sitemap pointer
sitemap.xml           # sitemap
_headers              # Cloudflare Pages: security + cache headers
```

> **Static-site build settings** (whichever path you use):
> **Build command:** *(none)* · **Output / build directory:** `/` (root) ·
> **Framework preset:** None.

---

## Option A — Direct upload with Wrangler (fastest, no Git repo needed)

The whole site is just static files, so you can push it straight up:

```bash
cd /path/to/maya-landing
npx wrangler login                                   # opens the browser once
npx wrangler pages deploy . --project-name=maya      # creates the project + deploys
```

- First run creates a Pages project named **maya** and gives you a
  `https://maya.pages.dev` preview URL.
- Re-run the same `deploy` command any time to publish an update.

## Option B — Cloudflare dashboard

1. Cloudflare → **Workers & Pages → Create → Pages**.
2. Either **Upload assets** (drag-drop this folder — no repo required) or
   **Connect to Git** and pick the repo.
3. If prompted for build settings: **Build command:** *(leave empty)* ·
   **Build output directory:** `/`.
4. Deploy. You get a `*.pages.dev` URL.

---

## Custom domain — maya.himansh.in

In the Pages project → **Custom domains** → **Set up a custom domain** → enter
**`maya.himansh.in`** → confirm.

- **`himansh.in` is already managed by Cloudflare DNS, so Cloudflare creates the
  DNS record for you automatically.** There is **nothing to hand-add** — no
  manual CNAME, no visit to the DNS tab. The domain goes live once the
  certificate is issued (usually seconds to a couple of minutes).
- SSL/TLS is provisioned automatically by Cloudflare.

> Only if `himansh.in` were on an **external** DNS provider would you add the
> record yourself:
>
> | Type  | Name   | Value              |
> |-------|--------|--------------------|
> | CNAME | `maya` | `maya.pages.dev`   |
>
> That is **not** the case here — Cloudflare handles it.

Verify:

```bash
curl -I https://maya.himansh.in       # expect HTTP/2 200
```

---

## Local preview

Any static server works:

```bash
cd /path/to/maya-landing
python3 -m http.server 8080
# → http://localhost:8080
```

## Post-deploy checklist

- [ ] `https://maya.himansh.in` loads over HTTPS with no console errors
- [ ] All GitHub + npm links open the right pages
- [ ] Copy-to-clipboard buttons work
- [ ] Theme toggle persists across reloads
- [ ] Looks good at 375px (phone) and 1440px (desktop)
- [ ] Share the link → the OG image + title preview correctly
      (test with <https://www.opengraph.xyz/> or the platform's own debugger)
