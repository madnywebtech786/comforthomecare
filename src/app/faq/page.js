'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FiChevronDown, FiSearch, FiHelpCircle } from 'react-icons/fi';
import { FaQuestionCircle, FaFileContract, FaUserNurse, FaClock, FaDollarSign, FaCar } from 'react-icons/fa';
import { BsStars, BsLightning } from 'react-icons/bs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQ = () => {
  const heroRef = useRef(null);
  const generalRef = useRef(null);
  const processRef = useRef(null);
  const servicesRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const generalInView = useInView(generalRef, { once: true, margin: '-100px' });
  const processInView = useInView(processRef, { once: true, margin: '-100px' });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });

  const [openQuestion, setOpenQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      id: 'general',
      name: 'General Inquiries',
      icon: FaQuestionCircle,
      gradient: 'from-[#339967] to-[#1495d9]',
      description: 'Common questions about our home care services',
      ref: generalRef,
    },
    {
      id: 'process',
      name: 'Service Process',
      icon: FaFileContract,
      gradient: 'from-[#1495d9] to-[#339967]',
      description: 'Information about contracts, billing, and scheduling',
      ref: processRef,
    },
    {
      id: 'services',
      name: 'Care Services',
      icon: FaUserNurse,
      gradient: 'from-[#339967] to-[#1495d9]',
      description: 'Specific questions about our healthcare offerings',
      ref: servicesRef,
    },
  ];

  const faqs = {
    general: [
      {
        question: 'Does Comfort Home Care provide 24/7 care services?',
        answer: 'Yes, Comfort Home Care provides comprehensive 24/7 home care services in Calgary and surrounding areas. We arrange schedules with 2-4 professional caregivers who work in shifts to ensure continuous, quality care for your loved ones around the clock.',
        icon: FaClock,
      },
      {
        question: 'What are your home care service rates in Calgary?',
        answer: 'At Comfort Home Care, we believe quality home healthcare should be accessible and affordable. We offer competitive, flexible pricing tailored to fit your budget and care needs. Contact us for a personalized quote based on your specific requirements.',
        icon: FaDollarSign,
      },
      {
        question: 'Do your Health Care Aides provide housekeeping services?',
        answer: 'Yes, our certified Health Care Aides (HCAs) can perform light housekeeping duties as part of their care services. However, our primary focus remains on direct client care and interaction, which comprises approximately 80% of their time with your loved one.',
        icon: FaUserNurse,
      },
      {
        question: 'Will I have the same caregiver consistently?',
        answer: 'Comfort Home Care strives to match you with one primary caregiver who best fits your needs and preferences. If your main caregiver is unavailable due to illness or leave, we provide a carefully matched replacement HCA who meets your requirements. We facilitate proper training and client-caregiver introductions to ensure continuity of care.',
        icon: FaUserNurse,
      },
      {
        question: 'Do your caregivers provide transportation services?',
        answer: 'Yes, if you prefer a caregiver who drives, Comfort Home Care can match you with professional caregivers who are comfortable providing transportation. Our caregivers can drive clients to medical appointments, grocery shopping, social outings, and other essential destinations.',
        icon: FaCar,
      },
      {
        question: 'Is there a fee for caregiver transportation services?',
        answer: 'Transportation fees depend on the vehicle used. If our caregiver uses your personal vehicle, there is no additional charge. However, if our caregiver uses their own vehicle for client transportation, a small additional fee applies to cover insurance and mileage.',
        icon: FaDollarSign,
      },
      {
        question: 'What are the minimum hours required for companionship care?',
        answer: 'Comfort Home Care requires a minimum of 3 hours per visit for all home care services, including companionship care. This ensures our caregivers have adequate time to provide meaningful support and build strong relationships with clients.',
        icon: FaClock,
      },
    ],
    process: [
      {
        question: 'How do I apply for GST exemption on home care services?',
        answer: 'You can apply for GST exemption through Alberta Health Services (AHS), who will determine your eligibility based on medical necessity. If you\'re already registered for GST exemption, simply provide Comfort Home Care with your completed Schedule A form from AHS as proof of exemption status.',
        icon: FaFileContract,
      },
      {
        question: 'Is there a contract lock-in period for your services?',
        answer: 'No, Comfort Home Care does not require a lock-in agreement. While we ask you to sign a service agreement, you maintain full flexibility. If you need to discontinue services, we simply require a 2-week written notice of cancellation to ensure smooth transition planning.',
        icon: FaFileContract,
      },
      {
        question: 'Do I pay for home care services during vacation or temporary absence?',
        answer: 'No, Comfort Home Care does not charge for services when you\'re away or temporarily don\'t need care. We simply require 2 weeks advance notice of your absence so we can adjust scheduling accordingly. You only pay for the care you actually receive.',
        icon: FaDollarSign,
      },
      {
        question: 'How quickly can a caregiver start providing services?',
        answer: 'After completing a comprehensive home assessment, Comfort Home Care performs careful client-caregiver matching to find the perfect fit for your specific needs and preferences. We arrange an introduction meeting, and if everything goes well, your dedicated caregiver can begin services immediately. Our priority is finding the right match for quality, long-term care.',
        icon: FaClock,
      },
    ],
    services: [
      {
        question: 'What home care services does Comfort Home Care provide in Calgary?',
        answer: 'Comfort Home Care offers comprehensive home healthcare services including personal care, companionship, medication management, meal preparation, light housekeeping, mobility assistance, dementia care, post-surgical care, palliative care, and specialized nursing services. We customize care plans to meet each client\'s unique needs.',
        icon: FaUserNurse,
      },
      {
        question: 'Who provides specialized medical tasks beyond HCA scope of practice?',
        answer: 'If medical tasks fall outside the Health Care Aide scope of practice such as injections, bladder scanning, or administering narcotic medications Comfort Home Care can provide you with a Registered Nurse (RN) or Licensed Practical Nurse (LPN) at a different hourly rate to ensure safe, professional medical care.',
        icon: FaUserNurse,
      },
      {
        question: 'Do caregivers have insurance coverage for transportation services?',
        answer: 'Yes, all Comfort Home Care caregivers who provide transportation using their personal vehicles carry comprehensive third-party liability insurance coverage. If you prefer our caregiver to use your vehicle, you\'ll need to add them to your personal auto insurance policy.',
        icon: FaCar,
      },
      {
        question: 'What is the rate for overnight home care shifts?',
        answer: 'Comfort Home Care charges the same competitive hourly rate for overnight care as daytime shifts. This ensures your loved ones receive consistent, high-quality 24/7 care without premium overnight fees.',
        icon: FaDollarSign,
      },
      {
        question: 'What is your emergency response protocol?',
        answer: 'All Comfort Home Care caregivers are extensively trained in emergency response procedures and hold current CPR certification. They are skilled in following your established Goals of Care designation and will contact 911 immediately when necessary. Your caregiver is prepared to handle any emergency situation with professionalism and care.',
        icon: FaUserNurse,
      },
    ],
  };

  const toggleQuestion = (categoryId, index) => {
    const questionKey = `${categoryId}-${index}`;
    setOpenQuestion(openQuestion === questionKey ? null : questionKey);
  };

  const scrollToCategory = (categoryId) => {
    const element = document.getElementById(categoryId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const getFilteredFaqs = (categoryFaqs) => {
    if (!searchQuery) return categoryFaqs;
    return categoryFaqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const hasResults = () => {
    return Object.values(faqs).some((categoryFaqs) => getFilteredFaqs(categoryFaqs).length > 0);
  };

  const renderFAQSection = (category, categoryFaqs, sectionInView) => {
    const filteredFaqs = getFilteredFaqs(categoryFaqs);
    if (searchQuery && filteredFaqs.length === 0) return null;

    const IconComponent = category.icon;

    return (
      <div id={category.id} ref={category.ref} className="scroll-mt-32">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={sectionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg`}>
              <IconComponent className="text-3xl text-white" />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
                {category.name}
              </h2>
              <p className="text-gray-600 mt-1">{category.description}</p>
            </div>
          </div>
          <div className={`h-1 w-24 bg-gradient-to-r ${category.gradient} rounded-full`} />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, index) => {
            const questionKey = `${category.id}-${index}`;
            const isOpen = openQuestion === questionKey;
            const FaqIconComponent = faq.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={sectionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 overflow-hidden">
                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  <div className="absolute inset-[2px] bg-white rounded-2xl" />

                  {/* Question Button */}
                  <button
                    onClick={() => toggleQuestion(category.id, index)}
                    className="relative w-full p-6 text-left flex items-start gap-4 group"
                  >
                    {/* Icon */}
                    <div
                      className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center shadow-lg transition-transform ${
                        isOpen ? 'scale-110' : ''
                      }`}
                    >
                      <FaqIconComponent className="text-xl text-white" />
                    </div>

                    {/* Question Text */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-[#339967] transition-colors">
                        {faq.question}
                      </h3>
                    </div>

                    {/* Toggle Icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#339967]/10 flex items-center justify-center transition-colors">
                        <FiChevronDown className="text-xl text-gray-600 group-hover:text-[#339967]" />
                      </div>
                    </motion.div>
                  </button>

                  {/* Answer */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? 'auto' : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden"
                  >
                    <div className="px-6 pb-6 pl-[88px]">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-48 md:pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              x: [0, 50, 0],
              y: [0, -50, 0],
              opacity: [0.06, 0.12, 0.06],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-[#339967]/30 to-[#1495d9]/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              x: [0, -50, 0],
              y: [0, 50, 0],
              opacity: [0.06, 0.12, 0.06],
            }}
            transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-gradient-to-tl from-[#1495d9]/30 to-[#339967]/30 rounded-full blur-3xl"
          />

          {/* Question Mark Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 0.4, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute text-[#339967]/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 20 + 10}px`,
              }}
            >
              ?
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full border border-[#339967]/30 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <FiHelpCircle className="text-[#339967] text-lg" />
              </motion.div>
              <span className="text-sm font-semibold text-[#339967]">Help Center</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
            >
              <span className="text-gray-900">Frequently Asked</span>
              <br />
              <span className="bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
                Questions
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10"
            >
              Find answers to common questions about our home care services in Calgary
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-2xl text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for answers..."
                  className="w-full pl-16 pr-6 py-5 bg-white border-2 border-gray-200 rounded-full focus:border-[#339967] focus:ring-4 focus:ring-[#339967]/10 transition-all outline-none text-lg placeholder-gray-400 shadow-xl"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="sticky top-20 z-30 py-4 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-xl bg-gradient-to-r ${category.gradient} text-white`}
                >
                  <IconComponent className="text-lg" />
                  <span className="font-semibold">{category.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-bl from-[#339967]/20 to-[#1495d9]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          {!hasResults() ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#339967]/20 to-[#1495d9]/20 flex items-center justify-center mx-auto mb-6">
                <FiSearch className="text-5xl text-gray-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No results found</h3>
              <p className="text-gray-600">Try adjusting your search query</p>
            </motion.div>
          ) : (
            <div className="space-y-20">
              {/* General Inquiries */}
              {renderFAQSection(categories[0], faqs.general, generalInView)}

              {/* Service Process */}
              {renderFAQSection(categories[1], faqs.process, processInView)}

              {/* Care Services */}
              {renderFAQSection(categories[2], faqs.services, servicesInView)}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#339967] to-[#1495d9] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-2 h-2 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-8"
            >
              <BsLightning className="text-white text-xl" />
              <span className="text-sm font-semibold text-white">Still Have Questions?</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              We're Here to Help
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
              Our care coordinators are ready to answer all your questions and help you get started with quality home care services
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#339967] rounded-full font-bold text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] transition-all"
              >
                <span>Contact Us</span>
                <BsStars className="text-xl" />
              </motion.a>

              <motion.a
                href="tel:+14035602518"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                <span>(403) 560-2518</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
