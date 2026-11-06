import type { ImageMetadata } from 'astro';
import { site } from './site';

/**
 * Instagram posts shown in the "Follow me @ameliap_nt" slider on the home page.
 *
 * The Wix site pulled these live from Instagram through a Wix app. A static
 * site can't do that without an Instagram API token, so posts are listed here
 * instead:
 *
 *   1. Save post images (square crops work best) into src/assets/instagram/.
 *      They're shown in filename order, so name them 01.jpg, 02.jpg, ...
 *   2. Optionally add a link and description for each file in `details` below.
 *
 * With no images in the folder, the section shows a "View on Instagram" button.
 */
const details: Record<string, { alt?: string; href?: string }> = {
  // '01.jpg': {
  //   alt: 'Nourish Your Nervous System workshop poster',
  //   href: 'https://www.instagram.com/p/POST_ID/',
  // },
};

const files = import.meta.glob<{ default: ImageMetadata }>('../assets/instagram/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
});

export type InstagramPost = { image: ImageMetadata; alt: string; href: string };

export const instagramPosts: InstagramPost[] = Object.entries(files)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, mod]) => {
    const file = path.split('/').pop() ?? '';
    return {
      image: mod.default,
      alt: details[file]?.alt ?? `Instagram post by ${site.instagram.handle}`,
      href: details[file]?.href ?? site.instagram.url,
    };
  });
