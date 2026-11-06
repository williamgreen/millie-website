/**
 * Site-wide settings. Edit these values in one place and every page updates.
 */
export const site = {
  /** Brand name shown in the header and footer. */
  name: 'Amelia Peace Nutrition',
  /** Used as the suffix of every page <title>, as on the original site. */
  titleSuffix: 'Amelia Peace Nutritional Therapy',
  url: 'https://www.ameliapeacenutrition.com',
  description:
    '- Amelia Peace Nutrition -  heal yourself naturally, starting with what is on your plate',
  email: 'ameliapeacenutrition@gmail.com',
  phone: '07867122963',
  instagram: {
    handle: '@ameliap_nt',
    url: 'https://www.instagram.com/ameliap_nt/',
  },
  linkedin: 'https://www.linkedin.com/in/amelia-peace-932527b0/',
  address: {
    venue: 'The Nursery',
    full: '76 The Nursery, Bedminster, Bristol, UK',
    street: '76 The Nursery',
    locality: 'Bedminster',
    region: 'ENG',
    postalCode: 'BS3 3EB',
    country: 'GB',
  },
  /**
   * MailerLite account used for the "Stay up to date" newsletter pop-up
   * (the same MailerLite Universal snippet the Wix site loads).
   * Set to an empty string to disable it.
   */
  mailerliteAccount: '1423185',
} as const;

export type NavItem = { label: string; href: string };

/** Main navigation – same items, order and URLs as the original site. */
export const nav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about-5' },
  { label: 'Diet & Lifestyle Analysis', href: '/about-6' },
  { label: '1:1 Serives', href: '/general-1' },
  { label: 'How I Work', href: '/team-3' },
  { label: 'Book Online', href: '/book-online' },
  { label: 'Projects', href: '/projects-8' },
];
