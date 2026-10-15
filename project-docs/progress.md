# Progress & Handoff

> **ET & Tour note:** this folder is a copy of the Vefa site, made 2026-10-15. Read `START-HERE.md` first. The **ETandTOURS** section directly below is the current state. Everything after it describes **Vefa** and is kept as a reference for how the site is built (structure, components, gotchas). Where the two disagree, the ETandTOURS section wins.

## ETandTOURS: current state (updated 2026-10-15)

**Client:** ETandTOURS, officially Elyon Travels & Tours. A Nigerian-based boutique travel agency and consulting firm in Lekki Phase 1, Lagos. Since 2010, 5,000+ travellers served. Source: owner's "about" text, prompt 2 in `prompts.md` (ET & Tour section).

**Rebrand done (prompt 2):**
- `lib/site.ts`: new `brand` object (`name` ETandTOURS, `legalName` Elyon Travels & Tours, `founded` 2010), contact (+234 802 304 8843 for phone and WhatsApp, Lekki Phase 1 address + map), new `social` (Instagram @etandtour). **Email is empty**: every email link (footer, contact page, JSON-LD) is hidden while `contact.email` is "".
- Services were first cut to 4 (expanded to 7 in prompt 3, see below). No prices yet. The old visa price list is gone.
- All copy rewritten from the owner's text: hero, Services intro, Who We Are (3 facts: 16+ years, since 2010, 5,000+ travellers; `CountUp` gained a `separator` prop for the comma), Why choose us (6 reasons), marquee (row 1 services, row 2 destinations: Cotonou, Accra, Dubai, Egypt, Qatar), FAQ (8 Qs, including the note that the old Instagram account was disabled), CTA, page heroes, footer, metadata, JSON-LD (`legalName`, `sameAs` Instagram, no logo), WhatsApp greeting messages.
- Removed all IATA, 24/7, "free reservations", and 10% discount claims (not in the owner's text).
- Vefa logos and favicons deleted (replaced in prompt 3, see below).
- Team section: list is empty, so the section renders nothing. It reappears once members are added in `Team.tsx`.
- Promo popup: `promo` is `null` (no popup). Vefa flyer deleted.
- Share images regenerated from the new hero (`opengraph-image.jpg`, `twitter-image.jpg` + alt text). Regenerate again once the logo and colour change.
- localStorage keys renamed: `etandtour-theme`, `etandtour-promo-dismissed`. package name `etandtour`.
- Photos: Vefa's stock photos are reused as placeholders (road trips = map/camera photo, vacation = hotel room, Why-us = airport apron). Deleted the unused Umrah, insurance, and Eiffel Tower photos.

**Logo, colour and more services (prompt 3):**
- Logo: owner sent a 150×150 PNG (black plane + palm trees on a yellow sun, "ETANDTOURS / TRAVEL AGENCY", cream background). Original kept at `public/brand/etandtour-logo-original.png` (used as the JSON-LD logo); transparent version `etandtour-logo.png`; emblem crop `etandtour-emblem.png` (upscaled 4×). The build script lives outside the repo; rerun the same idea if a better file arrives (un-mix from the cream background, crop x 33–109 / y 25–103).
- `ui/Logo.tsx`: emblem on a white disc (`className` sets the disc size) + brand name as text. A white-recoloured emblem was tried and dropped: it turned the palm trees white on the sun.
- Favicons rebuilt from the emblem: `src/app/icon.png` (512, white rounded square) and `apple-icon.png` (180).
- Brand colour is now yellow `#F8C725` (measured from the logo). New tokens: `on-brand` (ink, for text on yellow), `accent` (dark gold #8A6500 in light, yellow in dark; for brand text/icons on page surfaces). `brand-dark` #E5B10F (hover), `brand-deep` #8A6500, `brand-light` #FEF4D4, tint = pale yellow. `brand-coral` removed. Rules are in AGENTS.md → Brand.
- Services are now 7 (bento 4×3 like Vefa): West African Road Trips (feature), International Vacation Packages (wide), Flight Bookings, Hotel Reservations, Car Rentals, Visa Assistance, Group & Solo Tours (wide). Descriptions use the owner's second text word for word.
- Copy from the second text: hero ("Welcome to Elyon Travels and Tours" / "Your Trusted Partner in Discovering the World, One Trip at a Time"), Services heading "End-to-End Travel Solutions", Who We Are paragraph 2, footer tagline, Why-us (Simple, Affordable, Stress-Free; End-to-End Travel Solutions), new FAQ on business/study/religious travel, CTA, metadata.
- New photos (Unsplash, stored locally): `service-road-trips.jpg` (yellow van on a desert road), `service-car-rentals.jpg` (driving), `service-tours.jpg` (backpacker in an old street), `who-we-are-coast.jpg` (whitewashed steps to the sea). `service-vacation.jpg` is the old beach photo. All still placeholders for the owner's own trip photos.

**New sections, legal pages, SEO, GitHub (prompt 4):**
- Name confirmed as **ETandTOURS** (`brand.name`). Instagram handle stays @etandtour.
- Home page order: Hero, Airline partners, Services, **Destinations** (new), Why choose us, Marquee, **Testimonials** (new), FAQ, CTA.
- Destinations (`sections/Destinations.tsx`, data `lib/destinations.ts`): Cotonou and Accra (wide, "Road trip from Lagos"), Dubai, Giza, Doha ("Vacation package"). Each card opens WhatsApp with a prefilled message. Photos are Unsplash, stored as `public/images/destination-*.jpg`. The Cotonou photo is a generic West African beach (no verified Cotonou photo found); replace first.
- Testimonials (`sections/Testimonials.tsx`, data `lib/testimonials.ts`): **real reviews only, never invented.** While the list is empty the section is hidden in production; in `npm run dev` it shows 3 dashed cards labelled "Sample (dev only)" so the design can be judged.
- Privacy Policy `/privacy` and Terms & Conditions `/terms`: shared layout `sections/LegalContent.tsx` (summary card with contents, numbered sections). The text matches what the site really does (WhatsApp enquiries, Duffel search, Google Maps, no analytics) and refers to the Nigeria Data Protection Act 2023 and Lagos courts. **Owner must confirm payment and cancellation rules and have a lawyer review both pages.** Linked from the footer bottom bar (`legalLinks` in `lib/site.ts`).
- SEO: FAQ moved to `lib/faqs.ts` and output as FAQPage JSON-LD on the home page; WebSite JSON-LD and TravelAgency `alternateName` in the layout; privacy and terms in the sitemap and with their own metadata.
- All images are local files in `public/` (checked: no remote image URLs anywhere).
- Repo: https://github.com/Drealguy/etandtours (branch `main`).

**Still needed from the owner:**
- A high-resolution or vector logo (ours is 150 px). The logo says "ETANDTOURS" (with an S); confirmed by the owner (prompt 4): the name is ETandTOURS.
- Email address.
- Prices / package details, their own trip photos (Cotonou, Accra, Dubai, etc.).
- Team names, roles, photos. Real customer reviews for the Testimonials section. Review of the hero, FAQ and Why-us copy assembled from their two texts.
- Payment, deposit and cancellation rules for the Terms page; lawyer review of Privacy and Terms.
- Other social links, promo flyer (if any), domain.

**Visual check (2026-10-15, after prompt 3):** tsc, eslint and `next build` pass. Screenshots checked at 1440 and 390 wide, light and dark home. Share images regenerated with the yellow hero.

Read this, `AGENTS.md` (includes the strict design system), and `prompts.md` before continuing work. Update this file at the end of each work session.

## Client
Vefa Tourism & Travels Ltd. — IATA-certified travel agency in Nigeria (since 2006). (The project folder is named "vega"; the brand is **Vefa**.) Phone on their flyer: 08032142987.

## Site-wide (`src/app/layout.tsx`)
- **Navbar**: transparent over the page hero with the white logo; full-width white bar with the colour logo on scroll. Current page highlighted. Mobile: hamburger dropdown.
- **Footer** (`#contact`): white; logo + tagline, Company links, Services links, "Book With Us" column, © bar.
- Links and labels live in `src/lib/site.ts`.

## Home page (`src/app/page.tsx`), in order
1. Hero: centred copy + flight search bar overlapping the bottom.
2. Airline partners strip: small muted caption + marquee of 12 plain, full-colour airline logos. No cards, shadows or button.
3. Services: old-site copy + grid of all 7 services (shared `Services` section, also used on About and Services pages).
4. Why choose us (`#why-us`): accordion of 6 reasons + photo.
5. Our Premium Services: two-row pill marquee.
6. FAQ (`#faq`).
7. CTA banner.
- **Promo popup** (`components/layout/PromoPopup.tsx`): "Jummah Mubarak / Friday Promo" flyer (`public/promos/friday-promo.webp`) opens 1.5 s after load on the home page. Close via ×, clicking outside, or Esc; stays closed for the rest of the visit (sessionStorage). Rendered through a portal to <body> and pauses ScrollSmoother while open. Old Doha flyer archived in references/.

## About page (`src/app/about/page.tsx`), in order
1. PageHero (compact): "About Us", "Our Story" label + one-line intro.
2. Who We Are (`WhoWeAre.tsx`): photo panel + 3 paragraphs + facts row: "20+ Years of experience" (computed from 2006, so it updates yearly), 2006, IATA, 24/7. Numbers count up on scroll (`ui/CountUp.tsx`).
3. Services (same component as home).
4. Team (`Team.tsx`): Athenisec-style list + photo. Currently one member: Feranmi Ojediji (spelling to confirm; owner typed "ojedji"). Photo was sent mid-turn and never saved. Put it at `public/team/feranmi-ojediji.jpg` and set `photo`. Role to confirm.
5. FAQ.
6. CTA banner.

## Services page (`src/app/services/page.tsx`), in order
1. PageHero: "Our Services".
2. Services bento grid (desktop 4×3: Visa 2×2, International 2×1, Domestic, Hotel, Insurance, Tours, Umrah 2×1; tile size = `bento` in `lib/services.ts`; per-photo crop = `imagePosition`): 7 `ServiceCard`s (`components/ui/ServiceCard.tsx`). Photo + icon + title; hover (desktop) or tap (mobile) reveals the description. Visa Services is a wide card showing "From $150" plus the visa price list on reveal.
3. Why choose us. 4. FAQ. 5. CTA.
- Service data (titles, descriptions, images, prices) lives in `src/lib/services.ts`. Footer service links are generated from it.
- Umrah description is a placeholder ("Contact us for our current Umrah packages"). Owner to supply details.

## Contact page (`src/app/contact/page.tsx`), in order
1. PageHero: "Contact Us".
2. ContactForm (`ContactForm.tsx`, `#enquiry`): conversational form, one question at a time (7 steps, progress bar, Enter to continue, Back). No backend: "Send" opens the visitor's email app to vefatravel22@gmail.com with the answers filled in. TODO: real form service / API route.
3. ContactDetails: phone, email, address cards + Google Maps embed (no API key; uses maps.google.com `output=embed`).
4. FAQ. 5. CTA.
- Contact info lives in `lib/site.ts` (`contact`): +234 803 214 2987, vefatravel22@gmail.com, Suite 219, Nawa Complex, Abuja. The footer shows all three.

## Flight search (home hero)
- `components/booking/FlightSearch.tsx`: From/To use `AirportField` (custom autocomplete over `lib/airports.ts`: type a city, code or country), date, `TravellersPicker`. Submitting POSTs to `/api/flights` and shows `FlightResults` under the bar: "N flights available", route/date/travellers, and one row per flight (logo, flight no., times, duration, stops, price, "Book this flight", which emails vefatravel22@gmail.com with the flight details).
- `src/app/api/flights/route.ts`: with `DUFFEL_ACCESS_TOKEN` in `.env.local` it returns **live** offers from the Duffel API. Without it, it returns **sample fares** (`lib/flights.ts` `sampleOffers`, generated from the route and date), and the UI shows a "Sample fares. Our team confirms live prices." badge. Never remove that badge while results are samples.
- **Duffel test mode is connected (2026-09-27):** a `duffel_test_…` token is in `.env.local` (git-ignored, never commit it). With a test token the API returns Duffel's simulated airline data (`test: true`) and the results show a "Test mode: demo fares, not live prices." badge. Test prices come back in EUR (the Duffel account's currency).
- **Deploying:** add `DUFFEL_ACCESS_TOKEN` to the hosting env vars (e.g. Vercel → Settings → Environment Variables); `.env.local` is not deployed.
- **Prices are always shown in naira:** `/api/flights` converts non-NGN prices with the daily rate from open.er-api.com (`lib/fx.ts`, cached 12 h), rounds to ₦100, and returns `originalPrice/originalCurrency`; the UI shows "≈ €228 at today's rate" underneath. If the rate can't be fetched, prices stay in the original currency.
- **Going live:** swap in a `duffel_live_…` token; the badge disappears automatically.

## Dark mode
- Toggle: `components/layout/ThemeToggle.tsx` (white round button after "Book a Flight" in the navbar). Adds/removes `.dark` on <html>, saved in localStorage `vefa-theme` (key in `lib/theme.ts`). An inline script in `layout.tsx` applies it before first paint. Default is light.
- Theme tokens in `globals.css` (flip under `.dark`): `bg-background`, `bg-surface` (cards/panels/dropdowns/footer), `text-fg` (headings/strong text), `border-line`/`ring-line`/`divide-line`, `bg-tint` / `hover:bg-tint-strong` (pink surfaces), `text-muted`.
- `ink` is ALWAYS dark (photo overlays, dark pills). Use `text-fg` for text on page surfaces. White buttons / round icon buttons stay `bg-white text-ink` in both themes.
- `Logo tone="auto"`: colour logo in light, white logo in dark (navbar when scrolled, footer). Airline strip logos turn white in dark; result-row logos sit on a white chip.

## WhatsApp = the way customers submit
- `lib/site.ts`: `contact.whatsapp` ("2348032142987") + `whatsappHref(message)`.
- Contact form "Send on WhatsApp" opens a chat with every answer prefilled; the thank-you screen has an "Open WhatsApp" fallback button.
- Flight results: "Book on WhatsApp" with the flight, route, date, travellers and price prefilled.
- Contact page: WhatsApp card first; footer lists WhatsApp too.

## SEO & share previews
- Root `layout.tsx`: `metadataBase` from `siteUrl` (`lib/site.ts`: `NEXT_PUBLIC_SITE_URL`, else Vercel's production URL, else localhost), title template "%s | Vefa Tourism & Travels", description, keywords, canonical, Open Graph + Twitter card, robots, and TravelAgency JSON-LD (name, phone, email, address, services).
- Per-page metadata via `pageMetadata()` in `lib/seo.ts` (fills OG/Twitter fully, because page-level objects replace the root ones).
- Share image: `src/app/opengraph-image.jpg` + `twitter-image.jpg` = a real screenshot of the home hero (owner asked for this), 1200×630 JPEG. Regenerate after hero changes by screenshotting a production build (`next start`) at 1440×756 @2x and resizing to 1200×630. WhatsApp/Facebook cache previews, so a link shared before this change may keep its old (empty) preview for a while.
- `sitemap.ts` + `robots.ts` (API routes disallowed).
- **When the custom domain is live, set `NEXT_PUBLIC_SITE_URL=https://yourdomain` in the hosting env vars.**

## URLs
- URLs never keep a `#`. Nav = Home, About Us, Services, Contact (real pages). "Book a Flight" (`/#book`) scrolls to the flight search and SmoothScroll strips the hash from the address bar.

## Smooth scrolling
- GSAP ScrollSmoother (`components/layout/SmoothScroll.tsx`) wraps page content + footer in the root layout. The Navbar sits outside it.
- **Any `position: fixed` UI must render outside `#smooth-content`** (in the layout or via `createPortal`), because the content is transformed.
- Same-page `#hash` links are intercepted and smooth-scrolled with an 80px navbar offset; arriving at `/page#hash` also scrolls. Disabled for reduced-motion users.
- `html { scroll-behavior: smooth }` was removed; don't re-add it (it conflicts).
- **Scroll reveal:** SmoothScroll also fades and slides up every h1/h2/h3/p/dl/label/blockquote in main + footer as it enters view (GSAP ScrollTrigger.batch, once). Skips anything inside `[aria-hidden]`, `article`, `form`, or `[data-no-reveal]`. Add `data-no-reveal` to text that sits at the very bottom of the page.

## Shared components
- `ui/Section.tsx` (`Section`, `Container`): standard spacing and width for every section.
- `ui/Button.tsx`: `primary` (red) and `white` only.
- `ui/ImageCard.tsx`, `ui/SectionHeading.tsx`, `ui/Logo.tsx`, `ui/Marquee.tsx`.
- `booking/FlightSearch.tsx`: UI only. `booking/TravellersPicker.tsx`: custom travellers dropdown (adults/children/infants steppers, max 9 total, infants ≤ adults).
- `lib/cn.ts`.

## Assets
- Logos: `public/brand/`. Promo flyers: `public/promos/`.
- Airline logos: stored locally in `public/airlines/*.svg`.
- Favicon: `src/app/icon.png` + `apple-icon.png`: logo mark on a white rounded square so it shows on light and dark browser themes.
- **All photos are local** in `public/images/` (13 files: page heroes, why-us, who-we-are, 7 service cards). No remote image hosts remain (`next.config.ts` has no remotePatterns). Remote Unsplash/Pinterest images used to time out in the Next image optimizer.

## Open items / next up
- Team: real names, roles, photos.
- Still need: WhatsApp confirmation and social links.
- Prompt 5 was cut off ("ofc the card section should have like").
- CTA heading assembled from existing copy. Owner to confirm.
- Flight search needs a real booking provider/backend.
- Repo: https://github.com/Drealguy/VEFA (branch `main`).

## Decisions log
- 2026-09-27: Stack: Next.js 16 + Tailwind v4. Headings Rethink Sans, body DM Sans, brand `#E81120`.
- 2026-09-27: Buttons are solid red or solid white only.
- 2026-09-27: Red-family tokens: `brand-deep` #8A0912, `brand-coral` #FF5A64, `brand-light` #FFE4E6.
- 2026-09-27: Icons: `lucide-react` only; no emojis.
- 2026-09-27: Use the owner's copy exactly; no invented extras.
- 2026-09-27: Strict spacing system via `Section`/`Container`; FAQ always right before the CTA; partner logos are plain (no cards/shadows).

## Figma file moved (2026-10-01)
- **The live design file is now https://www.figma.com/design/BdR1nT2ZGObWKO8pogAX1O/Vefa (page "Vefa").** The owner copy-pasted the 4 sections from LESSON-1. Node IDs in the notes below are from LESSON-1 and are different in the new file: there, the sections are `2:3411` Foundations, `2:3782` Components, `2:4064` Desktop pages, `2:4804` Mobile pages.
- In the new file: the variables (Vefa / Colour with Light + Dark, Vefa / Size) came over as local tokens. 35 text styles, 1 effect style (Shadow/Float) and 14 colour (paint) styles were created locally: Brand/*, Neutral/*, Theme/*, each bound to its colour variable. All 800 text layers use local text styles, and all 600 instances point at local components. LESSON-1 is now just the old copy.

## Figma design (desktop home page done 2026-10-01)
- File: https://www.figma.com/design/S3i91yVsAj28FoVNt56Emf/LESSON-1 → page **Vefa** (`873:24`). Frame **Home — Desktop** `878:49` (1440 × ~6064, vertical auto-layout) mirrors `src/app/page.tsx` + Navbar/Footer with the site's exact copy, tokens, fonts (Rethink Sans / DM Sans) and lucide icons.
- Sections: Hero block `880:153` (hero `878:50`, navbar `878:53`, flight search `878:90`), Airline partners `880:154` (12 SVG logos), Services bento `881:191`, Why choose us `882:226`, Our Premium Services `882:334`, FAQ `882:576`, CTA banner `882:642`, Footer `882:665`.
- More components (stacked left of the frame with the icons and Button): Service card `881:119` (feature/wide/tile; Title, Price, Show price, Icon), Reason item `882:225` (open/closed), Service pill `882:333` (5 tones), FAQ item `882:575` (open/closed). Extra icons added to `876:28`.
- Gotcha: a translucent paint (opacity < 1) bound to a colour variable is unreliable in Figma via the API. It can render black or fully opaque (this made the home nav links and hero eyebrow dark). For any translucent fill use a plain colour with opacity, not a variable. Fixed everywhere on 2026-10-01; a scan found no remaining cases.
- Inner pages (desktop, done 2026-10-01), to the right of Home: **About — Desktop** `883:512` (page hero, Who We Are `884:1021`, Services, Team `884:1046`, FAQ, CTA, Footer), **Services — Desktop** `883:513` (page hero, Services, Why choose us, FAQ, CTA, Footer), **Contact — Desktop** `883:514` (page hero, Enquiry form `885:1028` shown at step 1 of 7, Contact details `885:1053`, FAQ, CTA, Footer). Shared sections are clones of the Home ones, so an edit to one does not carry over to the others. The map is a placeholder panel because a Figma frame can't show the live Google Maps embed. The team photo is a placeholder until the owner sends it.
- Mobile (390 wide, done 2026-10-01), row to the right of the desktop frames: **Home — Mobile** `896:1047` (x 6760), **About — Mobile** `901:1375`, **Services — Mobile** `901:1514`, **Contact — Mobile** `901:1620`. These follow the site's base (phone) Tailwind classes: 64px navbar with logo, theme toggle and hamburger (new `icon/menu` `896:1046`); single-column sections at py-80 / px-16; 30px h2; full-width stacked buttons; stacked flight search; 1-column bento. Inner mobile pages reuse clones of the mobile Home sections.
- **Design system (2026-10-01).** The Vefa page is organised into four sections: `01 · Foundations` `908:2438` (Colour Light/Dark boards, Typography board, Spacing & Radius board), `02 · Components` `908:2439`, `03 · Pages — Desktop` `908:2440`, `04 · Pages — Mobile` `908:2441`.
  - Colour collection now has **Light + Dark** modes (dark values from `.dark` in globals.css), plus new `background`, `tint`, `tint-strong` variables. All variables have descriptions.
  - `Vefa / Size` collection: `space/*`, `container/*`, `radius/*` (xl 16, 3xl 24, panel 32, full 9999).
  - 34 text styles (Display/, Heading/, Title/, Button/, Body/, UI/, Input/, Caption, Label/Field, Eyebrow, Overline/). All 574 text layers are linked to a style. Effect style `Shadow/Float` is on both flight search bars.
  - Navbar components: `Navbar / Desktop` `904:1942` (Over hero, Scrolled) and `Navbar / Mobile` `904:1993` (Over hero, Scrolled, **Menu open**). Every page uses instances. Screen **Home — Mobile (menu open)** `906:2057` sits in the mobile section.
- Next up (not started): dark-mode versions of the page frames (switch the frame's variable mode to Dark; check photo overlays and translucent fills, which use fixed colours).
- Details:
  - Variable collection **Vefa / Colour** (`VariableCollectionId:874:28`): brand `874:29`, brand-dark `874:30`, brand-deep `874:31`, brand-coral `874:32`, brand-light `874:33`, ink `874:34`, muted `874:35`, white `874:36`, surface `874:37`, fg `874:38`, line `874:39` (IDs are `VariableID:…`).
  - Lucide icon components in frame "Icons (lucide)" (`876:28`, at x=-900): plane `876:31`, arrow-right `876:35`, search `876:39`, plane-takeoff `876:43`, plane-landing `876:47`, calendar-days `876:59`, users `876:65`, chevron-down `876:68`, moon `876:71`. Strokes bound to `ink`.
  - Button component set `878:48` (Variant primary/white × Size md/lg; props Label#878:0, Icon#878:5 swap, Show icon#878:10).
  - Frame **Home — Desktop** `878:49` (1440 wide): Hero `878:50` (photo `878:51` hero-plane-wing.jpg + ink 60% overlay `878:52`, content `878:73`), Navbar `878:53` (white logo `878:54`, links, white md "Book a Flight", moon toggle), Flight search bar `878:90` overlapping the hero bottom by 80px.
- Figma plan upgraded 2026-10-01 (Starter limit was hit once).
