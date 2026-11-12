import type { ImageMetadata } from 'astro';
import { site } from './site';
import freePhoneImage from '../assets/images/service-free-phone-consultation.jpg';
import dietImage from '../assets/images/service-diet-lifestyle-analysis.jpg';

export type Service = {
  /** URL slug: the page lives at /service-page/<slug> (same as the Wix site). */
  slug: string;
  name: string;
  tagline: string;
  /** Duration as shown on the booking cards, e.g. "1 hr 30 min". */
  duration: string;
  /** Price as shown, e.g. "£350". Leave undefined for free services. */
  price?: string;
  image: ImageMetadata;
  imageAlt: string;
  /** Plain text; line breaks are kept exactly as written. */
  description?: string;
  /**
   * Where "Book Now" goes. The Wix booking calendar does not exist outside
   * Wix, so by default this opens an email to Amelia. Replace it with a
   * Calendly / Cal.com / Practice Better link to take bookings online.
   */
  bookingUrl: string;
};

const enquiry = (service: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(`Booking enquiry: ${service}`)}`;

/**
 * Services with their own page and booking button: the free discovery call and the
 * Diet & Lifestyle Analysis. The 1:1 packages are only described (on /general-1);
 * people start with a discovery call rather than booking a package directly.
 */
export const services: Service[] = [
  {
    slug: 'free-phone-consultation-1',
    name: 'Free Phone Consultation',
    tagline: 'Discovery call',
    duration: '15 min',
    image: freePhoneImage,
    imageAlt: 'Heirloom tomatoes in a market crate',
    description:
      "Book in a free 20 minute consultation over the phone to chat about your symptoms. In this phone call we can also explore the options for working together and I can explain how my approach can be applied to your unique situation, offering some potential routes to begin improvements. I work mostly through zoom so where you're based doesn’t matter, as long as you have access to Wi-Fi.",
    bookingUrl: enquiry('Free Phone Consultation'),
  },
  {
    slug: 'diet-lifestyle-analysis',
    name: 'Diet & lifestyle Analysis',
    tagline: 'A Focused Mini Consultation',
    duration: '1 hr',
    price: '£75',
    image: dietImage,
    imageAlt: 'Plates of colourful food being shared at a table',
    bookingUrl: enquiry('Diet & Lifestyle Analysis'),
  },
];

/** Plain-language duration for screen readers, e.g. "1 hour 30 minutes". */
export const spokenDuration = (duration: string) =>
  duration.replace(/\bhr\b/g, 'hour').replace(/\bmin\b/g, 'minutes');
