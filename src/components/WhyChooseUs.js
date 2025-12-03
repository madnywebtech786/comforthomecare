'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { FaUsers, FaRoute, FaTrophy, FaCog } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const benefits = [
    {
      icon: FaUsers,
      title: 'Team of Caring Professionals',
      description: 'We are a team of caring and compassionate professionals working together to provide the best possible care for you and your loved ones.',
      color: 'from-[#339967] to-[#1495d9]',
    },
    {
      icon: FaRoute,
      title: 'Care at Each Step of the Way',
      description: 'We have served with thousands of seniors and their families across North America, providing the best care at each step of the way.',
      color: 'from-[#1495d9] to-[#339967]',
    },
    {
      icon: FaTrophy,
      title: 'Proven Track Record of Success',
      description: 'Professional caregivers have a new record of providing expert care to seniors and patients with special needs.',
      color: 'from-[#339967] to-[#1495d9]',
    },
    {
      icon: FaCog,
      title: 'Services Tailored to Your Needs',
      description: 'We help people with specific needs maintain a safe, independent, and dignified lifestyle in home care, senior community referral services and special care services.',
      color: 'from-[#1495d9] to-[#339967]',
    },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-[#1495d9]/5">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-[#339967]/20 to-[#1495d9]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.06, 0.03, 0.06],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-tl from-[#1495d9]/20 to-[#339967]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-10 text-[#339967]/20 text-5xl"
      >
        <BsStars />
      </motion.div>

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full border border-[#339967]/30"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#339967] to-[#1495d9] animate-pulse" />
              <span className="text-sm font-semibold text-[#339967] uppercase tracking-wide">Our Advantage</span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                <span className="text-[#1e3a5f]">Benefits of</span>
                <br />
                <span className="bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
                  Always Best Care
                </span>
                <br />
                <span className="text-[#1e3a5f]">Senior Services</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-base sm:text-lg leading-relaxed"
            >
              Expert care for your loved ones delivered by compassionate professionals
            </motion.p>

            {/* Benefits List */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                const marginClass = index === 0 ? '' : index === 1 ? 'md:ml-8' : index === 2 ? 'md:ml-16' : 'md:ml-24';
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`relative ${marginClass}`}
                  >
                    {/* Card Content */}
                    <div className="relative pl-6 pr-4 py-4 bg-white/50 backdrop-blur-sm rounded-r-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all group">
                      {/* Gradient Left Border */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#339967] to-[#1495d9] " />

                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                          <IconComponent className="text-2xl text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                            {benefit.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

        
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Image Container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Image */}
              <div className="relative aspect-[4/5]">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661964106527-2ddc58dcbc44?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Happy Senior Couple Together"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#339967]/30 via-transparent to-transparent" />
              </div>

              {/* Decorative Corner Element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#339967] to-[#1495d9] rounded-full blur-2xl opacity-30" />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 border-2 border-[#339967]/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#339967] to-[#1495d9] flex items-center justify-center">
                  <FaTrophy className="text-2xl text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">10+</div>
                  <div className="text-xs text-gray-600 font-medium">Years Experience</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
