# millie-website

The Amelia Peace Nutrition website ([ameliapeacenutrition.com](https://www.ameliapeacenutrition.com)),
rebuilt from the original Wix site as a fast, fully responsive static site with [Astro](https://astro.build).

Every page, image and piece of copy from the live site has been carried over into a refreshed, more modern
design (same pastel colours); the few presentation changes are listed under "Differences from the Wix site".
The URLs are identical (`/about-5`, `/book-online`, `/service-page/...`), so existing links and search results
keep working.

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
  favicon.svg, ...        Icons (made from the leaf logo)
src/
  assets/images/          Every image from the Wix site (web-sized originals, metadata stripped). A few are
                          no longer used by the new design but are kept: plums-tile.jpg, vegetable-tray.png,
                          icon-*.png and social-*.png
  assets/images/hero/     Home page hero slides (see below)
  assets/instagram/       Drop Instagram post images here (see below)
  components/
    HomeHero.astro        Full-screen home page hero (see below)
    PageHeader.astro      Coloured opening block used by every inner page
    BookingCta.astro      "Free phone consultation" block near the end of most pages
    RichText.astro        Formats plain text from src/data (paragraphs, "•" bullet lists, "Heading:" lines)
    Header.astro, Footer.astro, InstagramFeed.astro, EmailText.astro, Arrow.astro, LeafMark.astro
  data/
    site.ts               Name, email, phone, social links, navigation, MailerLite account
    services.ts           The four bookable services (Book Online + /service-page/* pages)
    events.ts             Workshop event pages
    instagram.ts          Instagram feed settings
  layouts/BaseLayout.astro  <head>, SEO tags, header + footer
  pages/                  One file per page; file names match the original URLs
  styles/global.css       Design system: colours, type scale, buttons, sections, cards
```

Most text edits are made directly in the page files in `src/pages/`. Contact details, navigation and
service prices live in `src/data/`.

### Design system

Pages are built from a small set of shared styles in `src/styles/global.css`, so the whole site stays
consistent:

- **Colour blocks:** `section section--cream | --sage | --lime | --mist` for full-width bands; deep olive
  (`--ink`) is used for the footer and the hero overlay.
- **Type:** `eyebrow` (small tracked label), `display` / `h2` / `h3` / `h4` (Forum headings), `lead`, `prose`.
- **Buttons:** `btn` (lime), `btn btn--outline`, `btn btn--light` (on dark backgrounds), plus `btn--sm`,
  `btn--lg` and `btn--block`.
- **Pieces:** `card`, `chips` / `chip`, `ticks` (lime tick list), `rounded`, `container`, `split`.

### Home page hero

The hero fills the whole screen: a slow crossfading slideshow of the food photography with the headline and
"Book a Free Call" button on top, and the header floating over it (home page only). Its text and buttons are in
`src/components/HomeHero.astro`.

Slides are the frames of the original Wix hero animation, in `src/assets/images/hero/`:

- `frame-NN.jpg`: the wide two-photo collage, shown on landscape screens.
- `frame-NN-portrait.jpg`: a single photo, shown on portrait screens (phones).

Add, remove or reorder files there and the slideshow follows. Timing is set by `STEP` and `FADE` at the top
of the component. Only the first photo loads with the page; each next photo is downloaded while the current one
is showing and fades in once it's ready, and the slideshow rests while it's scrolled out of view. Visitors who
prefer reduced motion (or have JavaScript off) see a still photo, and there's a pause button for everyone else.

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
Layouts stack into a single column on phones, and the header switches to a menu button below 1240px.

## Deploying

Any static host works. Build command `npm run build`, output directory `dist`.

- **Vercel**: `vercel.json` enables `cleanUrls` so `/about-5` serves `about-5.html`.
- **Netlify / Cloudflare Pages / GitHub Pages**: work out of the box.

Old Wix-only URLs (`/challenges`, `/single-project`, `/booking-calendar/*`) redirect to their closest page
(see `redirects` in `astro.config.mjs`).

## Differences from the Wix site

The copy is the same as on the live site apart from the presentation changes below. The design has been
refreshed, and things that were broken on the original fixed:

- New look across the site, built on the same pastel colours: full-screen home hero, Forum headings with small
  tracked labels, rounded photos and cards, bigger lime buttons, a "Book a Free Call" button in the header and a
  deep olive footer. Some sections have short headings or summaries drawn from the existing text: the About page
  credentials, the price and session chips and "How it works" steps on Diet & Lifestyle Analysis, and the
  "At a glance" box on the service pages.
- Booking buttons: "Book Here" on 1:1 Services and Diet & Lifestyle Analysis now goes straight to that
  service's page instead of Book Online, and the free consultation block (Home, About and most other pages) has
  "Book a Free Call" and "View all services" instead of "Book Here".
- The package prices on 1:1 Services are shown as large prices instead of a "Cost: £350" / "Cost: £500" line.
- Service and event descriptions are laid out with headings and tick lists instead of plain text with "•" and
  "💚" bullets.
- The text written on the Laurel Molly illustrations (Projects) is also available as text under the gallery
  ("Read the text of the series") and in the images' descriptions for screen readers.
- The plum-tile background of the Wix "Free phone consultation" section isn't used any more (the image is kept
  in `src/assets/images/`).
- The home hero replaces the 494px-tall animated banner. Its headline, "Nutrition for women", was on the Wix
  site but hidden behind the animation.
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

Worth checking with Amelia: the Wix booking settings give appointment lengths that don't match the text. The
free phone consultation is booked as 15 minutes but described as "a free 20 minute consultation", and the Diet
& Lifestyle Analysis is booked as 1 hour but described as a 45-minute call. The service pages show the booking
length (`duration` in `src/data/services.ts`) as "Appointment".
