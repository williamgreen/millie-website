// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://www.ameliapeacenutrition.com',
  // Keep the exact URLs of the original Wix site (/about-5, /general-1, ...,
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
    // There is no online booking: "Book Online" goes to the free discovery call, and the
    // packages (which start with a discovery call) are described on 1:1 Services.
    '/book-online': '/service-page/free-phone-consultation-1',
    '/service-page/3-month-foundation-package': '/general-1',
    '/service-page/transformation-package': '/general-1',
    // Wix booking calendar links -> the matching pages.
    '/booking-calendar/free-phone-consultation-1': '/service-page/free-phone-consultation-1',
    '/booking-calendar/3-month-foundation-package': '/general-1',
    '/booking-calendar/transformation-package': '/general-1',
    '/booking-calendar/diet-lifestyle-analysis': '/service-page/diet-lifestyle-analysis',
  },
  integrations: [sitemap()],
  devToolbar: {
    enabled: false,
  },
  image: {
    // We size and crop images ourselves in CSS (object-fit), so skip Astro's
    // injected responsive styles.
    responsiveStyles: false,
  },
});
