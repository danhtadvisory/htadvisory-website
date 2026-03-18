# Hinonga o Tutuki Advisory Website

Modern Next.js 14 rebuild of [htadvisory.co.nz](https://www.htadvisory.co.nz), using Tailwind CSS and the App Router.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Deployment**: Vercel

---

## Getting Started Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

All images are bundled in `public/images/` — no additional setup needed.

Open [http://localhost:3000](http://localhost:3000).

---

## Deploying to GitHub + Vercel

### 1. Push to GitHub

```bash
# In this project folder:
git init
git add .
git commit -m "Initial commit – HT Advisory website"

# Create a new repo on GitHub (e.g. htadvisory-website), then:
git remote add origin https://github.com/YOUR_USERNAME/htadvisory-website.git
git branch -M main
git push -u origin main
```

### 2. Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and log in (or sign up — free tier is fine).
2. Click **"Add New… → Project"**.
3. Import your GitHub repo (`htadvisory-website`).
4. Vercel auto-detects Next.js — no settings needed. Click **Deploy**.
5. Your site will be live at `https://htadvisory-website.vercel.app` within ~60 seconds.

### 3. Custom Domain (htadvisory.co.nz)

In your Vercel project: **Settings → Domains → Add `htadvisory.co.nz`**.

Vercel will give you DNS records to add. In your domain registrar:
- Add a **CNAME** for `www` → `cname.vercel-dns.com`
- For the apex (`@`) → add an **A record** to `76.76.21.21`

Allow up to 24 hours for DNS to propagate.

---

## Contact Form

The form in `components/Contact.tsx` currently simulates a submission. To make it real, pick one of:

- **[Formspree](https://formspree.io)** – free tier, no backend needed. Replace the `setTimeout` simulation with:
  ```ts
  await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  ```
- **[Resend](https://resend.com)** + a Next.js API route — best if you want full control.

---

## Typography

The site uses the exact same fonts as the original Wix site, self-hosted via [Fontsource](https://fontsource.org) (no CDN dependency):

- **`wix-madefor-display`** — headings and brand name (matches `madefor-display-bold` on the original)
- **`wix-madefor-text`** — body copy and paragraphs (matches `madefor-text` on the original)
- **`barlow`** (300/400) — eyebrow labels, nav items, form labels (close match to `din-next-w01-light`)

These are installed as npm packages in `package.json` and imported in `app/globals.css`.



```
htadvisory/
├── app/
│   ├── globals.css      # Fonts, Tailwind, noise texture
│   ├── layout.tsx       # Root layout + metadata
│   └── page.tsx         # Home page
├── components/
│   ├── Nav.tsx          # Sticky nav with mobile menu
│   ├── Hero.tsx         # Full-screen hero with image mosaic
│   ├── Services.tsx     # Three-column service cards
│   ├── About.tsx        # Team bios (dark section)
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer with links
├── next.config.js
├── tailwind.config.js
└── package.json
```
