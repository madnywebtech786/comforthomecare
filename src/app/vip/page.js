'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCheck, FiUsers, FiHeart, FiShield, FiPhone, FiClock } from 'react-icons/fi';
import { FaHandHoldingHeart, FaBroom, FaShoppingCart, FaUtensils, FaBath, FaTshirt, FaWalking, FaPills, FaStethoscope, FaSyringe, FaBed, FaComments, FaCar, FaSpa, FaStar, FaFileAlt, FaCalendarAlt, FaAward } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import { GiMedicalPack } from 'react-icons/gi';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const VIPPage = () => {
  const heroRef = useRef(null);
  const understandingRef = useRef(null);
  const eligibilityRef = useRef(null);
  const servicesRef = useRef(null);
  const footCareRef = useRef(null);
  const stepsRef = useRef(null);
  const whyTrustRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const understandingInView = useInView(understandingRef, { once: true, margin: '-100px' });
  const eligibilityInView = useInView(eligibilityRef, { once: true, margin: '-100px' });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const footCareInView = useInView(footCareRef, { once: true, margin: '-100px' });
  const stepsInView = useInView(stepsRef, { once: true, margin: '-100px' });
  const whyTrustInView = useInView(whyTrustRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  const understandingPoints = [
    'The Veterans Independence Program (VIP) is a national initiative funded by Veterans Affairs Canada (VAC) that helps Veterans access essential home care services.',
    'VIP provides financial assistance that can be used to support daily living, reduce caregiver strain, and improve quality of life at home.',
    'VIP does NOT replace other care programs   it enhances them, ensuring Veterans receive the extra help they need.',
  ];

  const eligibleGroups = [
    'Veterans with eligible service',
    'Surviving spouses or primary caregivers',
    'Canadian Armed Forces members meeting VAC criteria',
  ];

  const serviceCategories = [
    {
      title: 'Home Support',
      icon: FaBroom,
      gradient: 'from-[#339967] to-[#1495d9]',
      services: [
        { icon: FaBroom, text: 'Housekeeping' },
        { icon: FaBroom, text: 'Laundry & light cleaning' },
        { icon: FaShoppingCart, text: 'Grocery assistance' },
        { icon: FaUtensils, text: 'Meal planning & meal prep' },
      ],
    },
    {
      title: 'Personal Support',
      icon: FaHandHoldingHeart,
      gradient: 'from-[#1495d9] to-[#339967]',
      services: [
        { icon: FaBath, text: 'Bathing & grooming assistance' },
        { icon: FaTshirt, text: 'Dressing support' },
        { icon: FaWalking, text: 'Mobility & transfer help' },
        { icon: FaPills, text: 'Medication reminders' },
      ],
    },
    {
      title: 'Health & Nursing Services',
      icon: FaStethoscope,
      gradient: 'from-[#339967] to-[#1495d9]',
      services: [
        { icon: FaStethoscope, text: 'Monitoring chronic conditions' },
        { icon: FaSyringe, text: 'Basic nursing care (according to coverage eligibility)' },
      ],
    },
    {
      title: 'Caregiver Relief',
      icon: FaBed,
      gradient: 'from-[#1495d9] to-[#339967]',
      services: [
        { icon: FaBed, text: 'Short-term respite services' },
        { icon: FaComments, text: 'Emotional support for families' },
      ],
    },
    {
      title: 'Transportation Assistance',
      icon: FaCar,
      gradient: 'from-[#339967] to-[#1495d9]',
      services: [
        { icon: FaCar, text: 'Trips to medical appointments and essential outings' },
      ],
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'Verify Eligibility',
      description: 'Review your VAC documentation or look for a "K" number on your Medavie card.',
      icon: FaFileAlt,
    },
    {
      number: '02',
      title: 'Contact Comfort Home Care',
      description: 'Call us at (403) 560-2518. We\'ll help confirm your coverage and explain your available options.',
      icon: FiPhone,
    },
    {
      number: '03',
      title: 'Receive Your Personalized Care Plan',
      description: 'Our care coordinators design a plan that aligns with your needs, lifestyle, and VIP funding.',
      icon: FaCalendarAlt,
    },
  ];

  const whyTrustReasons = [
    {
      icon: FaStar,
      title: 'Specialized Veteran Support',
      description: 'Our team understands the physical, emotional, and health challenges Veterans may experience.',
      gradient: 'from-[#339967] to-[#1495d9]',
    },
    {
      icon: FaFileAlt,
      title: 'Hassle-Free Coordination',
      description: 'We handle communications, approvals, and benefit confirmations with Veterans Affairs   so you don\'t have to.',
      gradient: 'from-[#1495d9] to-[#339967]',
    },
    {
      icon: FiClock,
      title: 'Flexible Scheduling',
      description: 'Choose the level of support you need   weekly, daily, or occasional.',
      gradient: 'from-[#339967] to-[#1495d9]',
    },
    {
      icon: FaAward,
      title: 'Respect, Dignity & Compassion',
      description: 'We honour every Veteran\'s service by offering care that is professional, respectful, and truly client-focused.',
      gradient: 'from-[#1495d9] to-[#339967]',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#339967] via-[#1495d9] to-[#339967] py-16 sm:py-20 md:py-24">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-semibold">VIP - Veterans Independence Program</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Veteran-Focused Home Care Services
            </h1>

            <p className="text-2xl sm:text-3xl text-white/95 font-semibold mb-6">
              Proudly Supporting Those Who Served
            </p>

            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              At Comfort Home Care, we are honoured to provide personalized support for Canadian Veterans through the Veterans Independence Program (VIP). Our goal is simple: to help Veterans continue living at home with dignity, independence, and comfort.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+14035602518"
                className="group px-8 py-4 bg-white text-[#339967] rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                <FiPhone className="text-lg" />
                Call Us: (403) 560-2518
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
              >
                Get Started Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Understanding VIP Section */}
      <section ref={understandingRef} className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={understandingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#339967] to-[#1495d9] text-white px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">About VIP</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Understanding VIP (Veterans Independence Program)
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 md:p-12 border border-gray-100">
              <div className="space-y-6">
                {understandingPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={understandingInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#339967]/5 hover:to-[#1495d9]/5 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#339967] to-[#1495d9] flex items-center justify-center flex-shrink-0 shadow-lg">
                      <FiCheck className="text-white text-lg" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed pt-1">
                      {point}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section ref={eligibilityRef} className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={eligibilityInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#339967] to-[#1495d9] text-white px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Eligibility</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Who Can Access VIP Services?
              </h2>
              <p className="text-lg text-gray-600">
                You may qualify for VIP support if you fall into one of these groups:
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100 mb-8">
              <div className="space-y-6">
                {eligibleGroups.map((group, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={eligibilityInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#339967]/5 hover:to-[#1495d9]/5 transition-colors duration-300"
                  >
                    <BsCheckCircleFill className="text-[#339967] text-2xl flex-shrink-0 mt-1" />
                    <p className="text-gray-700 text-lg leading-relaxed pt-1 font-medium">
                      {group}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={eligibilityInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 border-l-4 border-[#339967] p-8 rounded-xl"
            >
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                If your <strong className="text-[#339967]">Medavie Veterans card includes a "K" number</strong>, you may already be approved for certain services like basic, non-medical foot care.
              </p>
              <div className="flex items-center gap-2 text-[#339967] font-semibold text-lg">
                <FiPhone className="text-xl" />
                <span>Need help checking eligibility? We can guide you.</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#339967] to-[#1495d9] text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Our Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              VIP Services Available Through Comfort Home Care
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive list of home care solutions covered under VIP funding
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {serviceCategories.map((category, index) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <CategoryIcon className="text-2xl text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      {category.title}
                    </h3>

                    <div className="space-y-4">
                      {category.services.map((service, serviceIndex) => {
                        const ServiceIcon = service.icon;
                        return (
                          <div key={serviceIndex} className="flex items-start gap-3">
                            <ServiceIcon className="text-[#339967] text-xl flex-shrink-0 mt-1" />
                            <span className="text-gray-600 leading-relaxed">{service.text}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Each service is designed to promote <strong className="text-[#339967]">safety, independence, and overall wellbeing</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Foot Care Section */}
      <section ref={footCareRef} className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={footCareInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#339967] to-[#1495d9] text-white px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Foot Care Services</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What About Foot Care?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* What VIP Covers */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={footCareInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-[#339967]/5 to-[#1495d9]/5 rounded-2xl p-8 border-2 border-[#339967]/20"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#339967] to-[#1495d9] flex items-center justify-center shadow-lg">
                    <BsCheckCircleFill className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">VIP May Cover</h3>
                </div>
                <p className="text-gray-700 mb-4 font-medium">Basic foot hygiene, including:</p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <FaSpa className="text-[#339967] text-lg flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Nail trimming</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaSpa className="text-[#339967] text-lg flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <FaSpa className="text-[#339967] text-lg flex-shrink-0 mt-1" />
                    <span className="text-gray-600">Non-medical foot care by qualified caregivers or foot care nurses</span>
                  </li>
                </ul>
              </motion.div>

              {/* What VIP Does NOT Cover */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={footCareInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-200"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gray-400 flex items-center justify-center shadow-lg">
                    <GiMedicalPack className="text-white text-xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">VIP Does NOT Cover</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 text-lg flex-shrink-0 mt-1">✕</span>
                    <span className="text-gray-600">Treatment of infections</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 text-lg flex-shrink-0 mt-1">✕</span>
                    <span className="text-gray-600">Diabetic foot ulcers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 text-lg flex-shrink-0 mt-1">✕</span>
                    <span className="text-gray-600">Wound care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-400 text-lg flex-shrink-0 mt-1">✕</span>
                    <span className="text-gray-600">Any procedure that requires a nurse or doctor</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={footCareInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 border-l-4 border-[#339967] p-6 rounded-lg"
            >
              <p className="text-gray-700 text-lg">
                <strong className="text-[#339967]">Comfort Home Care follows VAC guidelines</strong> to ensure safe and appropriate care.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Getting Started Steps Section */}
      <section ref={stepsRef} className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#339967] to-[#1495d9] text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Simple Process</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How to Start Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Simple 3-step process to begin your VIP home care journey
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#339967] to-[#1495d9] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                    <div className="relative z-10 flex items-start gap-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#339967] to-[#1495d9] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                        <span className="text-3xl font-bold text-white">{step.number}</span>
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <StepIcon className="text-[#339967] text-2xl" />
                          <h3 className="text-2xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Connecting Line */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center my-4">
                      <div className="w-1 h-8 bg-gradient-to-b from-[#339967] to-[#1495d9] rounded-full"></div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Trust Section */}
      <section ref={whyTrustRef} className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={whyTrustInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#339967] to-[#1495d9] text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Why Choose Us</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Veterans Trust Comfort Home Care
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {whyTrustReasons.map((reason, index) => {
              const IconComponent = reason.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={whyTrustInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
                >
                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${reason.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                  <div className="absolute inset-[2px] bg-white rounded-2xl"></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {reason.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section ref={ctaRef} className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#339967] via-[#1495d9] to-[#339967] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <FiPhone className="text-6xl text-white mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Access VIP Services?
            </h2>
            <p className="text-xl text-white/90 mb-4 max-w-2xl mx-auto">
              Need help? Call us anytime:
            </p>
            <a
              href="tel:+14035602518"
              className="text-5xl font-bold text-white hover:underline inline-block hover:scale-105 transition-transform duration-300 mb-8"
            >
              (403) 560-2518
            </a>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <a
                href="tel:+14035602518"
                className="group px-8 py-4 bg-white text-[#339967] rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 text-lg"
              >
                <FiPhone className="text-xl" />
                Call Now
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 text-lg"
              >
                Contact Us Today
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VIPPage;
