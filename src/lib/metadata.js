// SEO-Optimized Metadata for Comfort Home Care Madney
// Comprehensive metadata configuration for all pages

const baseUrl = 'https://comforthomecare.com'; // Update with your actual domain
const siteName = 'Comfort Home Care Services';
const businessPhone = '(403) 560-2518';
const businessEmail = 'info@comforthomecare.com';
const businessAddress = '495 Savannah Way NE, Calgary, AB T3J 2L1';

export const defaultMetadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Comfort Home Care Calgary | 24/7 Professional Home Healthcare Services Alberta',
    template: '%s | Comfort Home Care Services',
  },
  description:
    'Award-winning home care services in Calgary & Alberta. 24/7 professional caregivers for seniors, dementia care, palliative care & post-surgery support. Licensed, certified, compassionate care at home.',
  keywords: [
    // Primary Keywords
    'home care services Calgary',
    'home healthcare Calgary',
    'in-home care Alberta',
    'senior care Calgary',
    'elderly care services',

    // Service-Specific Keywords
    'dementia care Calgary',
    'Alzheimer\'s care services',
    'palliative care at home',
    'post-surgery home care',
    'respite care Calgary',
    'nursing care services',
    'health care aide Calgary',
    '24/7 home care',

    // Location Keywords
    'home care Airdrie',
    'home care Chestermere',
    'home care Cochrane',
    'home care Strathmore',
    'home care High River',
    'home care Okotoks',

    // Long-tail Keywords
    'affordable home care Calgary',
    'professional caregivers Calgary',
    'licensed home care providers Alberta',
    'compassionate senior care',
    'aging at home support',
    'independent living assistance',
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: baseUrl,
    siteName: siteName,
    title: 'Comfort Home Care Calgary | 24/7 Professional Home Healthcare Services',
    description:
      'Trusted home care services in Calgary & surrounding areas. Expert caregivers providing compassionate 24/7 care for seniors, dementia patients & recovery support.',
    images: [
      {
        url: `${baseUrl}/images/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Comfort Home Care Services - Professional Home Healthcare Calgary',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Comfort Home Care Calgary | Professional Home Healthcare Services',
    description:
      'Award-winning 24/7 home care in Calgary. Licensed caregivers for seniors, dementia care, palliative care & more. Compassionate, professional, trusted.',
    images: [`${baseUrl}/images/twitter-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification
    // yandex: 'your-yandex-verification',
    // bing: 'your-bing-verification',
  },
};

export const pageMetadata = {
  home: {
    title: 'Comfort Home Care Calgary | 24/7 Professional Home Healthcare Services Alberta',
    description:
      'Award-winning home care services in Calgary & Alberta. 24/7 professional caregivers for seniors, dementia care, palliative care & post-surgery support. Licensed, certified, compassionate care at home. Serving Airdrie, Chestermere, Cochrane & more.',
    keywords: 'home care Calgary, home healthcare services, senior care, 24/7 caregivers, dementia care, palliative care, nursing services Alberta',
    openGraph: {
      title: 'Comfort Home Care Calgary | 24/7 Professional Home Healthcare Services',
      description: 'Trusted home care in Calgary & Alberta. Expert caregivers providing compassionate 24/7 care for seniors, dementia patients & recovery support. Call (403) 560-2518',
      url: baseUrl,
    },
  },

  mission: {
    title: 'Our Mission - Compassionate Home Care Excellence | Comfort Home Care Calgary',
    description:
      'Discover our mission to deliver personalized, high-quality home care services empowering independence, dignity & peace of mind across Calgary & Alberta. 7 core values driving excellence in senior care, dementia support & nursing services.',
    keywords: 'home care mission, compassionate care values, senior care excellence Calgary, integrity in healthcare, quality home care Alberta',
    openGraph: {
      title: 'Our Mission - Compassionate Home Care Excellence',
      description: 'Learn about our commitment to delivering exceptional home care services with compassion, integrity & excellence across Calgary & Alberta.',
      url: `${baseUrl}/mission`,
    },
  },

  vision: {
    title: 'Our Vision - Leading Home Healthcare Provider Alberta | Comfort Home Care',
    description:
      'Our vision: Be Alberta\'s leading home healthcare provider recognized for excellence, innovation & improving quality of life. Discover our strategic pillars, future goals & commitment to transforming aging & recovery at home across Calgary.',
    keywords: 'home healthcare vision Alberta, leading care provider Calgary, innovative senior care, healthcare excellence, future of home care',
    openGraph: {
      title: 'Our Vision - Leading Home Healthcare in Alberta',
      description: 'Shaping the future of home care in Alberta with innovation, excellence & unwavering commitment to quality of life.',
      url: `${baseUrl}/vision`,
    },
  },

  careers: {
    title: 'Careers - Join Our Caregiving Team Calgary | Home Care Jobs Alberta',
    description:
      'Build a rewarding career in home healthcare! Join Comfort Home Care Calgary as a Health Care Aide, caregiver or nurse. Competitive wages, flexible schedules, ongoing training, career growth. Apply now for compassionate caregiving jobs in Alberta.',
    keywords: 'home care jobs Calgary, health care aide careers, caregiver jobs Alberta, nursing positions Calgary, flexible healthcare jobs, HCA employment',
    openGraph: {
      title: 'Careers - Join Our Caregiving Team in Calgary',
      description: 'Rewarding caregiving careers in Calgary. Competitive benefits, flexible schedules, training & growth opportunities. Apply today!',
      url: `${baseUrl}/careers`,
    },
  },

  faq: {
    title: 'FAQ - Home Care Questions Answered | Comfort Home Care Calgary Alberta',
    description:
      'Get answers to common questions about home care services in Calgary & Alberta. Learn about 24/7 care, rates, caregivers, GST exemption, contracts, transportation & nursing services. Expert advice from licensed home healthcare professionals.',
    keywords: 'home care FAQ Calgary, home healthcare questions, senior care costs Alberta, caregiver questions, GST exemption home care, 24/7 care information',
    openGraph: {
      title: 'Frequently Asked Questions - Home Care Services Calgary',
      description: 'Find answers about our home care services, rates, caregivers, scheduling & more. Expert guidance for families in Calgary & Alberta.',
      url: `${baseUrl}/faq`,
    },
  },

  services: {
    alzheimers: {
      title: 'Alzheimer\'s & Dementia Care Services Calgary | Memory Care at Home Alberta',
      description:
        'Specialized Alzheimer\'s & dementia care at home in Calgary. Trained caregivers providing compassionate memory care, cognitive support & daily living assistance. 24/7 professional dementia care services across Alberta. Safe, familiar environment.',
      keywords: 'Alzheimer\'s care Calgary, dementia care services, memory care at home, cognitive care Alberta, dementia caregivers, Alzheimer\'s support',
    },

    healthCareAide: {
      title: 'Health Care Aide Services Calgary | Professional HCA Support Alberta',
      description:
        'Certified Health Care Aides (HCA) providing expert personal care, medication management & daily living support in Calgary & Alberta. Licensed, trained professionals for bathing, grooming, mobility & companionship. Affordable HCA services.',
      keywords: 'health care aide Calgary, HCA services Alberta, personal care support, certified caregivers, professional home care aide',
    },

    companion: {
      title: 'Companion Care Services Calgary | Senior Companionship Alberta',
      description:
        'Compassionate companion care services reducing isolation & loneliness for seniors in Calgary. Professional caregivers providing conversation, activities, meal companionship & social engagement. Quality of life support for elderly at home.',
      keywords: 'companion care Calgary, senior companionship, elderly social support, loneliness prevention, social engagement seniors Alberta',
    },

    diabetes: {
      title: 'Diabetes Care Services Calgary | Diabetic Home Care Management Alberta',
      description:
        'Expert diabetes care & management at home in Calgary. Professional caregivers trained in blood sugar monitoring, medication management, diet support & diabetic foot care. Comprehensive diabetic care services across Alberta.',
      keywords: 'diabetes care Calgary, diabetic home care, blood sugar management, diabetes support services Alberta, diabetic care at home',
    },

    hospice: {
      title: 'Hospice & Palliative Care Calgary | End-of-Life Care at Home Alberta',
      description:
        'Compassionate hospice & palliative care services in Calgary. Dignified end-of-life care at home with pain management, emotional support & family assistance. 24/7 professional palliative caregivers across Alberta. Comfort & peace.',
      keywords: 'hospice care Calgary, palliative care services, end-of-life care at home, compassionate hospice Alberta, dignified care',
    },

    nursing: {
      title: 'Nursing Care Services Calgary | RN & LPN Home Healthcare Alberta',
      description:
        'Professional nursing care at home in Calgary. Registered Nurses (RN) & Licensed Practical Nurses (LPN) providing wound care, injections, medication management & medical monitoring. 24/7 skilled nursing services across Alberta.',
      keywords: 'nursing care Calgary, RN services at home, LPN care Alberta, skilled nursing, home healthcare nurses, medical care at home',
    },

    postRehab: {
      title: 'Post-Rehabilitative Support Calgary | Recovery Care at Home Alberta',
      description:
        'Professional post-surgery & rehabilitation support at home in Calgary. Caregivers assisting with recovery, physical therapy exercises, mobility & daily activities. Safe, comfortable healing environment. Post-operative care across Alberta.',
      keywords: 'post-surgery care Calgary, rehabilitation support at home, recovery care services, post-operative assistance Alberta, healing at home',
    },

    respite: {
      title: 'Respite Care Calgary | Family Caregiver Relief Services Alberta',
      description:
        'Temporary respite care services in Calgary giving family caregivers a break. Professional relief care for seniors & patients, flexible scheduling from hours to weeks. Trusted respite support across Alberta. Peace of mind for families.',
      keywords: 'respite care Calgary, caregiver relief, temporary care services, family caregiver support Alberta, short-term senior care',
    },

    cleaning: {
      title: 'Light Housekeeping & Cleaning Services Calgary | Home Care Assistance Alberta',
      description:
        'Light housekeeping & cleaning services as part of home care in Calgary. Professional caregivers providing laundry, tidying, meal preparation & light cleaning. Safe, clean home environment for seniors & patients across Alberta.',
      keywords: 'housekeeping services Calgary, light cleaning home care, senior housekeeping assistance, home care cleaning Alberta',
    },
  },
};

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'HomeHealthAgency',
    name: siteName,
    url: baseUrl,
    logo: `${baseUrl}/images/home-care-logo.jpeg`,
    image: `${baseUrl}/images/og-image.jpg`,
    description:
      'Professional home care services in Calgary and Alberta providing 24/7 caregiving, senior care, dementia care, palliative care and nursing services.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '495 Savannah Way NE',
      addressLocality: 'Calgary',
      addressRegion: 'AB',
      postalCode: 'T3J 2L1',
      addressCountry: 'CA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '51.1315',
      longitude: '-113.9810',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-403-560-2518',
      contactType: 'customer service',
      areaServed: ['Calgary', 'Airdrie', 'Chestermere', 'Cochrane', 'Strathmore', 'High River', 'Okotoks'],
      availableLanguage: ['English'],
      hoursAvailable: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    sameAs: [
      'https://www.facebook.com/comforthomecare',
      'https://www.instagram.com/comforthomecare',
      'https://www.linkedin.com/company/comforthomecare',
      'https://twitter.com/comforthomecare',
    ],
    priceRange: '$$',
    areaServed: [
      {
        '@type': 'City',
        name: 'Calgary',
        '@id': 'https://www.wikidata.org/wiki/Q36312',
      },
      {
        '@type': 'City',
        name: 'Airdrie',
      },
      {
        '@type': 'City',
        name: 'Chestermere',
      },
      {
        '@type': 'City',
        name: 'Cochrane',
      },
      {
        '@type': 'City',
        name: 'Strathmore',
      },
      {
        '@type': 'City',
        name: 'High River',
      },
      {
        '@type': 'City',
        name: 'Okotoks',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Home Care Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Senior Care Services',
            description: '24/7 professional caregiving for elderly and seniors',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Dementia & Alzheimer\'s Care',
            description: 'Specialized memory care and cognitive support',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Palliative Care',
            description: 'Compassionate end-of-life care at home',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Nursing Services',
            description: 'Professional RN and LPN medical care',
          },
        },
      ],
    },
  },

  localBusiness: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': baseUrl,
    name: siteName,
    image: `${baseUrl}/images/home-care-logo.jpeg`,
    telephone: businessPhone,
    email: businessEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: '495 Savannah Way NE',
      addressLocality: 'Calgary',
      addressRegion: 'AB',
      postalCode: 'T3J 2L1',
      addressCountry: 'CA',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  },

  faqPage: (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }),

  breadcrumb: (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.path}`,
    })),
  }),
};

export default {
  defaultMetadata,
  pageMetadata,
  structuredData,
  baseUrl,
  siteName,
  businessPhone,
  businessEmail,
  businessAddress,
};
