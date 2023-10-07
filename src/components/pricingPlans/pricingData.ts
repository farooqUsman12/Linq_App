import Group from '../../utils/Images/Group.svg';
import User from '../../utils/Images/user.svg';
import Users from '../../utils/Images/users.svg';

export interface PricingCardSchema {
  [key: string]: string | undefined | any;
  img: string;
  headingText: string;
  extraHeadingText?: string;
  subText: string;
  pricingA: string;
  pricingB?: string;
  pricingC?: string;
  buttonText: string;
  pricingDetails: {
    heading: string;
    features: string[];
  };
}
export const PricingCardDataIndividuals: PricingCardSchema[] = [
  {
    img: User,
    headingText: 'Standard',
    extraHeadingText: 'Free forever',
    subText: 'For anyone just getting started',
    pricingA: '$0',
    buttonText: 'Start for Free',
    pricingDetails: {
      heading: 'Key features',
      features: [
        '1 Linq page',
        'Free mobile app',
        'In-house printing and fulfillment',
        'Linq product management',
        'Unlimited page sharing',
        'Custom branded pages',
        'Unlimited content editing',
        'Contact collection and management',
        'Built-in follow-up reminders',
        'Automated follow up messages',
        'Enterprise level security',
        'Real-time analytics',
        '24/7 Support',
      ],
    },
  },
  {
    img: User,
    headingText: 'Pro',
    subText: 'For entrepreneurs and creatives',
    pricingA: '$5/',
    pricingB: 'user/mo',
    pricingC: 'or $50/yr (save 17%)',
    buttonText: 'Try free for 30 days',
    pricingDetails: {
      heading: 'Everything in Standard, plus',
      features: [
        'Up to 5 Linq pages',
        'Business card scanner',
        'Custom lead capture forms',
        'Multimedia embeds',
        'Calendar integration',
        'Collect payments and surveys',
        'Redirect page to any URL',
        '5 CRM integation options',
        'Click-level analytics',
        '15% off Linq products',
      ],
    },
  },
];
export const PricingCardDataBusinesses: PricingCardSchema[] = [
  {
    img: Users,
    headingText: 'Teams',
    subText: 'For small businesses',
    pricingA: 'Dynamic pricing',
    buttonText: 'Try free for 30 days',
    pricingDetails: {
      heading: 'Everything in Pro, plus',
      features: [
        'Unlimited Linq pages',
        'Admin management tools & dashboard',
        'Lead Collection',
        'Bulk employee upload',
        'Bulk content editing',
        'Bulk product activation',
        'Remote product reassignment',
        'Unlimited templates to standardize branding',
        'Subteams & employee grouping',
        'Customized employee permission controls',
        'Team-wide analytics to calculate ROI',
        'Automate contact management and follow-ups',
        '50% off all Linq products',
      ],
    },
  },
  {
    img: Group,
    headingText: 'Enterprise',
    subText: 'For medium to large businesses',
    pricingA: 'Dynamic pricing',
    buttonText: 'Contact Us',
    pricingDetails: {
      heading: 'Everything in Teams, plus',
      features: [
        'Directory Sync (HRIS)',
        'Single Sign On (SSO)',
        'Custom product design consultation',
        'Custom branded QR codes',
        'Free Linq products for your team',
        'Priority support',
        'Dedicated on-going support person',
      ],
    },
  },
];
