'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaPhoneAlt, FaClipboardCheck, FaHandHoldingHeart } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

const Process = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      title: 'Contact Us',
      description: 'Reach out via phone, email, or our contact form. We\'ll schedule a free consultation to understand your needs.',
      icon: FaPhoneAlt,
      gradient: 'from-[#339967] to-[#1495d9]',
    },
    {
      number: '02',
      title: 'Assessment & Planning',
      description: 'Our team conducts a thorough assessment and creates a personalized care plan tailored to your unique requirements.',
      icon: FaClipboardCheck,
      gradient: 'from-[#1495d9] to-[#339967]',
    },
    {
      number: '03',
      title: 'Care Begins',
      description: 'Your dedicated caregiver starts providing compassionate, professional care right in the comfort of your home.',
      icon: FaHandHoldingHeart,
      gradient: 'from-[#339967] to-[#1495d9]',
    },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-[#339967]/5">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-[#339967]/20 to-[#1495d9]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.05, 0.15],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-tl from-[#1495d9]/20 to-[#339967]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Decorative Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-20 right-10 text-[#339967]/30 text-4xl"
      >
        <BsStars />
      </motion.div>

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full border border-[#339967]/30"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#339967] to-[#1495d9] animate-pulse" />
            <span className="text-sm font-semibold text-[#339967]">Simple Process</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started with quality home care is easy. Follow our simple three-step process.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-[#339967]/20 via-[#1495d9]/20 to-[#339967]/20">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-full bg-gradient-to-r from-[#339967] via-[#1495d9] to-[#339967] origin-left"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className="relative"
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-gray-100 h-full"
                  >
                    {/* Step Number - Background */}
                    <div className="absolute top-8 right-8 text-8xl font-bold  bg-gradient-to-r from-[#339967]/50 to-[#1495d9]/50 bg-clip-text text-transparent">
                      {step.number}
                    </div>

                    {/* Icon Container */}
                    <div className="relative z-10 mb-6">
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 + index * 0.2, type: 'spring' }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} shadow-2xl flex items-center justify-center`}
                        style={{ boxShadow: '0 20px 50px rgba(51, 153, 103, 0.4)' }}
                      >
                        <IconComponent className="text-3xl text-white" />
                      </motion.div>

                      {/* Pulse Effect */}
                      <motion.div
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        className={`absolute inset-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient}`}
                      />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 space-y-4">
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                      className={`absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br ${step.gradient} opacity-10 rounded-full blur-xl`}
                    />
                  </motion.div>

          
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <button
              className="px-10 py-5 bg-gradient-to-r from-[#339967] via-[#1495d9] to-[#339967] text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all"
              style={{ boxShadow: '0 20px 50px rgba(51, 153, 103, 0.4)' }}
            >
              Start Your Journey Today
            </button>
          </motion.div>
          <p className="mt-4 text-gray-600">
            No commitment required. Free consultation available.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
