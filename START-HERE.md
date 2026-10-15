# START HERE: ET & Tour (new travel agency site)

**If the owner says "activate", do the steps under "On activate" below.**

## What this folder is
- On 2026-10-15 the owner decided to build a second travel agency website, ET & Tour (folder `etandtour`). Instead of starting from scratch, the whole finished **Vefa** site (`C:\Users\USER\Documents\vega`, Next.js 16 + Tailwind v4) was copied here.
- Copied: everything except `.git` (the site now has its own repo: https://github.com/Drealguy/etandtours) and `.next` (build cache, rebuilds itself). `node_modules` came across, so `npm run dev` works right away.
- `.env.local` was copied too. It holds the Duffel **test** token for flight search. Never commit it.

## Current state (2026-10-15): rebranded (logo, yellow brand colour, copy, 7 services)
The site is now **ETandTOURS** (officially Elyon Travels & Tours, Lekki Phase 1, Lagos), with the owner's logo and yellow brand colour. All of Vefa's copy, contact details, services, prices, logos, favicons, promo flyer and share images have been replaced or removed. Details are in `project-docs/progress.md` under "ETandTOURS: current state".

Still waiting on the owner for:
- A high-resolution or vector logo (the one we have is 150 px). Also: the logo says "ETANDTOURS" (with an S). Owner confirmed ETandTOURS in prompt 4
- Email address (email links are hidden until `contact.email` in `src/lib/site.ts` is set)
- Prices, own trip photos, team, real customer reviews (Testimonials is hidden until then), other social links, promo flyer, domain
- Payment and cancellation rules for the Terms page, and a lawyer review of Privacy and Terms
- Approval of the copy written from their "about" text (hero, FAQ, Why choose us)

`project-docs/progress.md` (below the ETandTOURS section) and the early part of `project-docs/prompts.md` are **Vefa's** history, kept as a reference. ET & Tour prompts are logged under `# ET & Tour` at the bottom of `prompts.md`. The Vefa Figma files belong to Vefa. ET & Tour has no Figma file yet.

## On activate
1. Read this file, then `AGENTS.md` and `project-docs/progress.md`. The design rules in AGENTS.md still apply: shared components, tokens, owner's copy exactly, no emojis, lucide icons only, red/white buttons. The brand colour is now yellow; see the Brand section of AGENTS.md for how to use it.
2. Add a heading `# ET & Tour` at the bottom of `project-docs/prompts.md` and log the owner's prompts there, word for word, from now on.
3. Ask the owner for the new agency's details: exact business name, logo files, brand colour(s), phone/WhatsApp, email, address, social links, services + prices, and any copy (hero, about, FAQ). Also ask whether they want a new GitHub repo (`git init`).
4. Rebrand everything in the list above with what they send. Never keep Vefa's copy, contact details or logos in place of missing information. Ask instead.
5. Update this file's "Current state" section and `project-docs/progress.md` at the end of each session.
