# millie-website

The Amelia Peace Nutrition website ([ameliapeacenutrition.com](https://www.ameliapeacenutrition.com)),
rebuilt from the original Wix site as a fast, fully responsive static site with [Astro](https://astro.build).

Every page, image and piece of copy from the live site has been carried over, and the URLs are
identical (`/about-5`, `/book-online`, `/service-page/...`), so existing links and search results keep working.

## Getting started

Requires Node.js 22.23+ (see `.nvmrc`).

```bash
npm install
npm run dev       # local dev server at http://localhost:4321
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run check     # type-check the project
```

## Project structure

```
public/
  media/hero-*.webp       Home page hero animation (converted from the original 8 MB GIF)
  favicon.svg, ...        Icons (made from the leaf logo)
src/
  assets/images/          Every image from the Wix site (web-sized originals, metadata stripped)
  assets/instagram/       Drop Instagram post images here (see below)
  components/             Header, Footer, Instagram feed, "Free phone consultation" section, ...
  data/
    site.ts               Name, email, phone, social links, navigation, MailerLite account
    services.ts           The four bookable services (Book Online + /service-page/* pages)
    events.ts             Workshop event pages
    instagram.ts          Instagram feed settings
  layouts/BaseLayout.astro  <head>, SEO tags, header + footer
  pages/                  One file per page; file names match the original URLs
  styles/global.css       Colours, fonts, buttons
```

Most text edits are made directly in the page files in `src/pages/`. Contact details, navigation and
service prices live in `src/data/`.

## Things to set up

- **Booking.** "Book Now" on the Wix site opened Wix Bookings, which only exists on Wix. Each service's
  `bookingUrl` in `src/data/services.ts` currently opens an email to Amelia. Swap it for a Calendly,
  Cal.com or Practice Better link to take bookings online.
- **Instagram feed.** Wix pulled the "Follow me" feed live from Instagram (on the live site those images had
  expired and were showing as broken). Add post images to `src/assets/instagram/` (`01.jpg`, `02.jpg`, ...)
  and they appear as a slider on the home page. Without images the section shows a "View on Instagram" button.
- **Newsletter pop-up.** The MailerLite "Stay up to date" pop-up is loaded with the same MailerLite account as
  before (`mailerliteAccount` in `src/data/site.ts`). If pop-ups are limited to certain domains in MailerLite,
  allow the new one there.

## Fonts

The original uses Avenir LT 35 Light, a commercial font licensed to Wix sites only, so it can't be shipped
with this site. Apple devices have Avenir built in and use it; everything else uses
[Hanken Grotesk](https://fonts.google.com/specimen/Hanken+Grotesk) Light, the closest free match.
Forum (headings) and Marmelad (buttons) are the same free Google fonts as the original. All fonts are
self-hosted, so the site makes no requests to Google.

## Responsive layout

The Wix desktop site used fixed-width (980px+) layouts with elements wider than the screen (a 2500px hero,
a 1511px footer heading, a full-bleed paragraph), which caused horizontal scrolling. This build has no
fixed-width layouts: it was checked on every page at widths from 320px to 1920px with no horizontal overflow.
Desktop matches the Wix desktop design, phones match the Wix mobile design (same section order and
proportions), and tablets get an in-between layout.

## Deploying

Any static host works. Build command `npm run build`, output directory `dist`.

- **Vercel**: `vercel.json` enables `cleanUrls` so `/about-5` serves `about-5.html`.
- **Netlify / Cloudflare Pages / GitHub Pages**: work out of the box.

Old Wix-only URLs (`/challenges`, `/single-project`, `/booking-calendar/*`) redirect to their closest page
(see `redirects` in `astro.config.mjs`).

## Differences from the Wix site

Content and design are unchanged, apart from fixes to things that were broken on the original:

- No horizontal scrolling at any screen size (see above).
- Placeholder contact details left over from the Wix template were replaced with the real ones: the
  "How I Work" email link pointed to `info@mysite.com`, its LinkedIn icon pointed to Wix's company page, and
  the service pages listed `123-456-7890` / `info@mysite.com`.
- Testimonial names on the home page no longer touch the left edge of the screen.
- The Instagram feed and booking buttons work as described above instead of relying on Wix apps.
- Two unlinked Wix template pages with placeholder text (`/challenges`, `/single-project`) weren't rebuilt;
  they redirect to Projects.

Typos are kept exactly as on the live site so they can be fixed deliberately: "1:1 Serives" (menu and page
title), "Initial Consulation" (How I Work), "registered with the The Association…" (footer) and
"Duration: Approximately 5" (Transformation Package). Search the `src/` folder for them.
