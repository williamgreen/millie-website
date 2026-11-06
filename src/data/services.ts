import type { ImageMetadata } from 'astro';
import { site } from './site';
import freePhoneImage from '../assets/images/service-free-phone-consultation.jpg';
import foundationImage from '../assets/images/service-3-month-foundation.jpg';
import transformationImage from '../assets/images/service-transformation.jpg';
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
    slug: '3-month-foundation-package',
    name: '3 Month Foundation Package',
    tagline: 'Work with me',
    duration: '1 hr 30 min',
    price: '£350',
    image: foundationImage,
    imageAlt: 'Clementines piled up at a market stall',
    description: `Rather than a 'one size fits all approach' I consider each individual to be unique and recommend personalised nutrition and lifestyle programmes to best help your symptoms.
I suspect that the reason you are here is because you are ready to embark on that journey.

Initial consultation:

Pre appointment health questionnaire:
If you decide you would like to work with me, I will send you a detailed health questionnaire for me to get all the information I need before the session. This will include any medications you are on, family health history and your main health concerns.

All new clients will start with a 75 - 90 minutes session in which we will use the questionnaire to talk through and delve deeper into your current health status and lifestyle. The information gained in the pre-appointment questionnaire will allow me a more detailed picture to best help and allow us to better focus our time together.

You will receive:
• A bespoke plan of food & lifestyle recommendations, tailored to your needs
• Recommendations for high-quality supplements, if required.
• Recommendations for functional testing, if necessary.
• A clear focus until we meet again.`,
    bookingUrl: enquiry('3 Month Foundation Package'),
  },
  {
    slug: 'transformation-package',
    name: 'Transformation Package',
    tagline: 'Follow up',
    duration: '1 hr',
    price: '£500',
    image: transformationImage,
    imageAlt: 'Crates of red tomatoes at a market',
    description: `Six weeks after your initial consultation we will meet for a follow up - this is a chance to discuss what's working for you and what needs to be adjusted. We can build on the original plan and introduce more points.

• Interpretation and analysis of test results and new points on the plan to reflect the information highlighted.
• A chance to discuss any new symptoms
• Additional research
• A clear plan to go away with or until we meet again
• Email support, if required

From here, the amount of follow up sessions and the length in-between will be on a case by case basis. We can be flexible and discuss what will work for you.`,
    bookingUrl: enquiry('Transformation Package'),
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
