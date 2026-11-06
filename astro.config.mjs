// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://www.ameliapeacenutrition.com',
  // Keep the exact URLs of the original Wix site (/about-5, /book-online, ...,
  // no trailing slash) so existing links, bookmarks and search results keep
  // working. Pages are emitted as about-5.html etc., which static hosts
  // (Netlify, Cloudflare Pages, GitHub Pages, Vercel with cleanUrls) serve at /about-5.
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  // Old Wix URLs that no longer have their own page.
  redirects: {
    // Unused Wix template pages ("Collaboration") -> the real collaboration project.
    '/challenges': '/projects-8',
    '/single-project': '/projects-8',
    // Wix booking calendar links -> the matching service pages.
    '/booking-calendar/free-phone-consultation-1': '/service-page/free-phone-consultation-1',
    '/booking-calendar/3-month-foundation-package': '/service-page/3-month-foundation-package',
    '/booking-calendar/transformation-package': '/service-page/transformation-package',
    '/booking-calendar/diet-lifestyle-analysis': '/service-page/diet-lifestyle-analysis',
  },
  integrations: [sitemap()],
  image: {
    // We size and crop images ourselves in CSS (object-fit), so skip Astro's
    // injected responsive styles.
    responsiveStyles: false,
  },
});
