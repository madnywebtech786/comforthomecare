'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiCheck, FiUsers, FiHeart, FiShield, FiPhone } from 'react-icons/fi';
import { FaHandHoldingHeart, FaUserMd, FaClipboardList, FaUserNurse } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

const CDHCIPage = () => {
  const heroRef = useRef(null);
  const whatIsRef = useRef(null);
  const benefitsRef = useRef(null);
  const qualifyRef = useRef(null);
  const stepsRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const whatIsInView = useInView(whatIsRef, { once: true, margin: '-100px' });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-100px' });
  const qualifyInView = useInView(qualifyRef, { once: true, margin: '-100px' });
  const stepsInView = useInView(stepsRef, { once: true, margin: '-100px' });
  const servicesInView = useInView(servicesRef, { once: true, margin: '-100px' });
  const ctaInView = useInView(ctaRef, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: FiCheck,
      title: 'Direct Billing to AHS',
      description: 'We handle invoicing directly with Alberta Health Services, making the entire process easy and stress-free for you and your family.',
      gradient: 'from-[#339967] to-[#1495d9]',
      delay: 0.1,
    },
    {
      icon: FiUsers,
      title: 'No Need to Hire or Manage Caregivers',
      description: 'Instead of dealing with payroll, scheduling, and administrative responsibilities, you simply work with your Comfort Home Care Care Coordinator, who arranges all services for you.',
      gradient: 'from-[#1495d9] to-[#339967]',
      delay: 0.2,
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Professional, Compassionate In-Home Care',
      description: 'Our team provides personalized care delivered by trained caregivers, health aides, and nurses dedicated to supporting your wellbeing.',
      gradient: 'from-[#339967] to-[#1495d9]',
      delay: 0.3,
    },
    {
      icon: FiShield,
      title: 'A Consistent & Reliable Care Team',
      description: 'We believe that continuity builds trust. You\'ll get to know the caregivers who support you no revolving door or unfamiliar faces.',
      gradient: 'from-[#1495d9] to-[#339967]',
      delay: 0.4,
    },
  ];

  const qualifications = [
    'You must be an Alberta resident with a valid Alberta Health Care card',
    'Your care needs must be safely supported at home',
    'You must meet eligibility determined by an AHS Home Care Case Manager',
  ];

  const steps = [
    {
      number: '01',
      title: 'Call 811 and request a home care assessment',
      description: 'Start your journey by contacting Alberta Health Services',
    },
    {
      number: '02',
      title: 'Meet with an AHS Home Care Case Manager',
      description: 'An Alberta Health Services Home Care Case Manager will visit the person needing care',
    },
    {
      number: '03',
      title: 'Contact Comfort Home Care to begin services',
      description: 'Once approved for the program, you can contact Comfort Home Care to begin services',
    },
  ];

  const services = [
    {
      icon: FaUserMd,
      title: 'Companion Care',
      description: 'Loneliness and isolation can affect overall wellbeing. Our caregivers provide friendly companionship, help with light housekeeping, escorting to appointments, conversation, hobbies, and meaningful daily engagement.',
      gradient: 'from-[#339967] to-[#1495d9]',
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Personal Care',
      description: 'Daily routines become easier with caring support. We assist with bathing, dressing, grooming, toileting, mobility, meal preparation, medication reminders, and overall comfort in your home.',
      gradient: 'from-[#1495d9] to-[#339967]',
    },
    {
      icon: FaUserNurse,
      title: 'Nursing Care',
      description: 'Our skilled nursing team offers medical support right at home wound care, chronic condition management, post-surgical care, monitoring vitals, and coordination with your healthcare providers to ensure safety and peace of mind.',
      gradient: 'from-[#339967] to-[#1495d9]',
    },
    {
      icon: FiHeart,
      title: 'Specialized Support',
      description: 'We offer personalized care plans for individuals living with Alzheimer\'s, dementia, Parkinson\'s, diabetes, mobility challenges, palliative needs, and other chronic conditions. Every care plan is designed with dignity and compassion at its core.',
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

        <div className="container mx-auto px-4 sm:px-6 relative z-10 ">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-sm font-semibold">CDHCI Program Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Client Directed Home Care (CDHCI) with <span className="block mt-2">Comfort Home Care</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Get professional, compassionate home care services through Alberta's CDHCI Program with substantially reduced personal costs
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

      {/* What Is CDHCI Section */}
      <section ref={whatIsRef} className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={whatIsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#339967] to-[#1495d9] text-white px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">About the Program</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Is Client Directed Home Care?
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 md:p-12 border border-gray-100">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  The <strong className="text-[#339967]">Client Directed Home Care Invoicing (CDHCI) Program</strong> is a partnership by Alberta Health Services (AHS) and Alberta Blue Cross that gives eligible Albertans more choice and flexibility in their home care journey. Through this program, clients can receive publicly funded home care services from a qualified private provider such as Comfort Home Care at a <strong>substantially reduced personal cost</strong>.
                </p>

                <p>
                  With CDHCI, approved clients are given a set amount of funding that can be used toward home care services from an approved organization of their choosing.
                </p>

                <p className="bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 border-l-4 border-[#339967] p-6 rounded-lg">
                  <strong className="text-[#339967] text-xl block mb-2">✓ Comfort Home Care is proudly an approved vendor</strong>
                  This means you may be able to receive our high-quality, compassionate care while benefiting from government-supported funding.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#339967] to-[#1495d9] text-white px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-sm font-semibold">Your Benefits</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What This Means for You
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the advantages of working with Comfort Home Care through the CDHCI program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: benefit.delay }}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-transparent overflow-hidden"
                >
                  {/* Gradient Border on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                  <div className="absolute inset-[2px] bg-white rounded-2xl"></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-2">
                      <BsCheckCircleFill className={`text-[#339967] mt-1 flex-shrink-0`} />
                      {benefit.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section ref={qualifyRef} className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={qualifyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#339967] to-[#1495d9] text-white px-4 py-2 rounded-full mb-6">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold">Eligibility</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How Do You Qualify?
              </h2>
              <p className="text-lg text-gray-600">
                To be eligible for CDHCI-funded home care services:
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-gray-100">
              <div className="space-y-6">
                {qualifications.map((qual, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={qualifyInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-[#339967]/5 hover:to-[#1495d9]/5 transition-colors duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#339967] to-[#1495d9] flex items-center justify-center flex-shrink-0 shadow-lg">
                      <FiCheck className="text-white text-lg" />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed pt-1">
                      {qual}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Getting Started Steps Section */}
      <section ref={stepsRef} className="py-16 sm:py-20 md:py-24 bg-white">
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
              How to Get Started
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Your Care Coordinator will help manage the setup, planning, and ongoing support needed to ensure everything runs smoothly
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-8">
            {steps.map((step, index) => (
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
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {step.title}
                      </h3>
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
            ))}
          </div>

          {/* Contact Box */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-[#339967] to-[#1495d9] rounded-2xl p-8 text-center shadow-2xl">
              <FiPhone className="text-5xl text-white mx-auto mb-4" />
              <p className="text-white text-xl mb-4">Questions? Call us anytime:</p>
              <a
                href="tel:+14035602518"
                className="text-4xl font-bold text-white hover:underline inline-block hover:scale-105 transition-transform duration-300"
              >
                (403) 560-2518
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services We Offer Section */}
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
              How We Can Support You
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive home care services available through the CDHCI program
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="text-2xl text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Get Started with CDHCI?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact Comfort Home Care today to learn more about accessing high-quality home care through the Client Directed Home Care Program
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+14035602518"
                className="group px-8 py-4 bg-white text-[#339967] rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2 text-lg"
              >
                <FiPhone className="text-xl" />
                (403) 560-2518
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

export default CDHCIPage;
