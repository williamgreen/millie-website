import type { ImageMetadata } from 'astro';
import workshopImage from '../assets/images/event-womens-health-workshop.png';

export type SiteEvent = {
  /** The page lives at /event-details-registration/<slug> (same as the Wix site). */
  slug: string;
  title: string;
  /** ISO dates (UTC) – used for structured data. */
  start: string;
  end: string;
  /** Short date for the event header, e.g. "Sat 02 Nov". */
  shortDate: string;
  /** Full date/time line under "Time & Location". */
  when: string;
  venue: string;
  address: string;
  /** Plain text; line breaks are kept exactly as written. */
  about: string;
  ticketsOnSale: boolean;
  image: ImageMetadata;
};

const about = `Women's Health: A Nutrition Workshop

Some of the things we'll be exploring:

💚 Key nutrients
💚 Hormones
💚 Practical tips for meal planning

This will be a supportive workshop with practical takeaways to add to your daily life. I will explore the importance of specific nutrients and hormones relating to women's health, going in depth so that even if you are already knowledgeable you will hopefully come away with some new insights! There will also be time to absorb, discuss and ask questions.
Tickets will go live on Trikas website nearer the date.`;

export const events: SiteEvent[] = [
  {
    slug: 'womens-health-a-nutrition-workshop',
    title: "Women's Health: A Nutrition Workshop",
    start: '2024-11-02T19:00:00Z',
    end: '2024-11-02T23:00:00Z',
    shortDate: 'Sat 02 Nov',
    when: '02 Nov 2024, 19:00 – 23:00',
    venue: 'Bedminster',
    address: 'Bedminster, 188-190 North St, Bedminster, Bristol BS3 1JF, UK',
    about,
    ticketsOnSale: false,
    image: workshopImage,
  },
  {
    slug: 'womens-health-a-nutrition-workshop-1',
    title: "Women's Health: A Nutrition Workshop (1)",
    start: '2025-01-11T20:00:00Z',
    end: '2025-01-12T00:00:00Z',
    shortDate: 'Sat 11 Jan',
    when: '11 Jan 2025, 20:00 – 12 Jan 2025, 00:00',
    venue: 'Bedminster',
    address: 'Bedminster, 188-190 North St, Bedminster, Bristol BS3 1JF, UK',
    about,
    ticketsOnSale: false,
    image: workshopImage,
  },
];
