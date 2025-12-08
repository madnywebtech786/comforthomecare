import { pageMetadata, structuredData } from '@/lib/metadata';

// FAQ questions for structured data
const faqData = [
  // General Inquiries
  { question: 'What services does Comfort Home Care provide?', answer: 'We offer comprehensive home healthcare services including personal care assistance, companionship, medication management, dementia and Alzheimer\'s care, palliative care, post-surgery recovery support, respite care, and specialized nursing services. Our caregivers are trained to support clients with activities of daily living while promoting independence and dignity.' },
  { question: 'What areas do you serve in Calgary and Alberta?', answer: 'We proudly serve Calgary and surrounding communities including Airdrie, Chestermere, Cochrane, Strathmore, High River, and Okotoks. Our 24/7 availability ensures families across the region have access to quality home care when they need it most.' },
  { question: 'Are your caregivers licensed and certified?', answer: 'Yes, all our caregivers are thoroughly vetted, licensed Health Care Aides (HCAs), Registered Nurses (RNs), or Licensed Practical Nurses (LPNs) depending on your care needs. They undergo comprehensive background checks, ongoing training, and are insured and bonded for your peace of mind.' },
  { question: 'What are your rates and payment options?', answer: 'Our rates vary based on the level of care required, frequency of visits, and caregiver qualifications. We offer flexible payment options and can help navigate insurance coverage, veterans benefits, and GST exemptions for eligible medical services. Contact us for a personalized care plan and transparent pricing.' },
  { question: 'Is there a minimum number of hours required?', answer: 'We understand every family\'s needs are unique. While we offer flexible scheduling from a few hours per week to 24/7 live-in care, some services may have minimum hour requirements. Our care coordinators will work with you to design a schedule that fits your budget and care needs.' },
  { question: 'Do you provide 24/7 care services?', answer: 'Absolutely. We provide round-the-clock care services including overnight care, live-in caregivers, and continuous monitoring for clients who require constant support. Our 24/7 availability ensures your loved ones receive consistent, professional care at any time of day or night.' },
  { question: 'Can I choose my caregiver?', answer: 'Yes! We carefully match caregivers to clients based on personality, care needs, language preferences, and special requirements. If you\'re not completely satisfied with your caregiver match, we\'ll work with you to find the perfect fit at no additional charge.' },

  // Service Process
  { question: 'How do I get started with home care services?', answer: 'Getting started is easy. Contact us for a free consultation where we\'ll assess your loved one\'s needs, discuss care preferences, and create a personalized care plan. We can typically begin services within 24-48 hours of your initial consultation, or immediately for urgent situations.' },
  { question: 'What happens during the initial assessment?', answer: 'Our comprehensive assessment includes evaluating medical conditions, mobility, cognitive function, medication needs, daily living activities, home safety, and social support. We discuss care goals, preferences, and any concerns with you and your family to develop a tailored care plan.' },
  { question: 'How quickly can care services begin?', answer: 'For standard care needs, services typically begin within 24-48 hours of your assessment. For urgent or emergency situations such as hospital discharge or crisis care, we can mobilize caregivers within hours to ensure your loved one receives immediate support.' },
  { question: 'What if I need to change or cancel services?', answer: 'We understand care needs can change. You can adjust your care schedule, increase or decrease hours, or temporarily pause services with reasonable notice. Our flexible contracts ensure you\'re never locked into services you don\'t need, and we\'re here to adapt as your situation evolves.' },

  // Care Services
  { question: 'What does personal care assistance include?', answer: 'Personal care includes assistance with bathing, grooming, dressing, toileting, mobility support, transfers, and maintaining personal hygiene. Our compassionate caregivers provide dignified support while encouraging independence and respecting privacy at all times.' },
  { question: 'Do you provide dementia and Alzheimer\'s care?', answer: 'Yes, we specialize in memory care for clients with dementia, Alzheimer\'s, and other cognitive conditions. Our trained caregivers use evidence-based approaches to manage behavioral changes, provide cognitive stimulation, ensure safety, and support both clients and families through the journey.' },
  { question: 'Can you help with medication management?', answer: 'Our Health Care Aides can provide medication reminders and assistance, while our licensed nurses (RNs and LPNs) can administer medications, manage complex medication schedules, monitor for side effects, and coordinate with physicians to ensure safe and effective treatment.' },
  { question: 'Do you offer respite care for family caregivers?', answer: 'Yes, respite care is one of our most valued services. We provide temporary relief for family caregivers, whether you need a few hours, a day, a weekend, or an extended break. This allows you to rest, handle personal matters, or take a vacation knowing your loved one is in capable, caring hands.' },
  { question: 'What is the difference between HCA and nursing care?', answer: 'Health Care Aides (HCAs) provide personal care, companionship, and assistance with daily activities. Registered Nurses (RNs) and Licensed Practical Nurses (LPNs) offer medical care including wound care, injections, IV therapy, catheter care, and complex health monitoring. We\'ll help determine which level of care is appropriate for your needs.' },
];

export const metadata = {
  title: pageMetadata.faq.title,
  description: pageMetadata.faq.description,
  keywords: pageMetadata.faq.keywords,
  openGraph: {
    ...pageMetadata.faq.openGraph,
    type: 'website',
    locale: 'en_CA',
    siteName: 'Comfort Home Care Services',
  },
};

export default function FaqLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData.faqPage(faqData)),
        }}
      />
      {children}
    </>
  );
}
