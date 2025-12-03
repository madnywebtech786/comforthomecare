'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaHeart, FaUsers, FaAward, FaCertificate, FaHandHoldingHeart, FaStethoscope } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const features = [
    { icon: FaHeart, title: 'Compassionate', color: 'from-[#339967] to-[#1495d9]' },
    { icon: FaUsers, title: 'Professional', color: 'from-[#1495d9] to-[#339967]' },
    { icon: FaAward, title: 'Certified', color: 'from-[#339967] to-[#1495d9]' },
    { icon: FaCertificate, title: 'Trusted', color: 'from-[#1495d9] to-[#339967]' },
  ];

  return (
    <section ref={ref} id="about" className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-white via-[#339967]/5 to-[#1495d9]/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#339967]/20 to-[#1495d9]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
            opacity: [0.1, 0.05, 0.1],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-[#1495d9]/20 to-[#339967]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Healthcare Icons */}
      <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-10 text-[#339967]/20 text-5xl"
      >
        <FaStethoscope />
      </motion.div>
      <motion.div
        animate={{ y: [0, 25, 0], x: [0, 15, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-20 text-[#1495d9]/20 text-4xl"
      >
        <FaHandHoldingHeart />
      </motion.div>

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Visual */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative bg-gradient-to-br from-white to-[#339967]/5 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border border-[#339967]/20"
              >
                {/* Animated Corner Accents */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#339967] to-[#1495d9] rounded-2xl shadow-xl flex items-center justify-center"
                  style={{ boxShadow: '0 20px 40px rgba(51, 153, 103, 0.4)' }}
                >
                  <FaHeart className="text-3xl text-white" />
                </motion.div>

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#1495d9] to-[#339967] rounded-2xl shadow-xl flex items-center justify-center"
                  style={{ boxShadow: '0 20px 40px rgba(20, 149, 217, 0.4)' }}
                >
                  <BsStars className="text-2xl text-white" />
                </motion.div>

                {/* Content Grid */}
                <div className="space-y-6 pt-12 pb-8">
                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { number: '10+', label: 'Years Serving Calgary', gradient: 'from-[#339967] to-[#1495d9]' },
                      { number: '500+', label: 'Families Helped', gradient: 'from-[#1495d9] to-[#339967]' },
                      { number: '50+', label: 'Care Professionals', gradient: 'from-[#339967] to-[#1495d9]' },
                      { number: '98%', label: 'Satisfaction Rate', gradient: 'from-[#1495d9] to-[#339967]' },
                    ].map((stat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 + idx * 0.1, type: 'spring' }}
                        className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow"
                      >
                        <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1`}>
                          {stat.number}
                        </div>
                        <div className="text-xs text-gray-600 font-medium">{stat.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Feature Badges */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    {features.map((feature, idx) => {
                      const IconComponent = feature.icon;
                      return (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          animate={isInView ? { opacity: 1, y: 0 } : {}}
                          transition={{ delay: 0.8 + idx * 0.1 }}
                          whileHover={{ scale: 1.05, y: -5 }}
                          className={`bg-gradient-to-br ${feature.color} rounded-xl p-4 shadow-lg flex items-center gap-3`}
                        >
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                            <IconComponent className="text-xl text-white" />
                          </div>
                          <span className="text-white font-semibold text-sm">{feature.title}</span>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 right-20 w-16 h-16 bg-gradient-to-br from-[#1495d9] to-[#339967] rounded-full shadow-xl flex items-center justify-center"
                style={{ boxShadow: '0 20px 40px rgba(20, 149, 217, 0.4)' }}
              >
                <FaUsers className="text-2xl text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full border border-[#339967]/30"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#339967] to-[#1495d9] animate-pulse" />
              <span className="text-sm font-semibold text-[#339967]">Calgary's Trusted Home Care</span>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                <span className="bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
                  Dedicated to Your
                </span>
                <br />
                <span className="text-gray-800">Well-being & Comfort</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-600 leading-relaxed">
                At Comfort Home Care Services, we believe everyone deserves compassionate, professional care in the comfort of their own home. For over a decade, we've been serving families across Calgary and surrounding areas with dedication and excellence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of certified healthcare professionals is committed to providing personalized care that respects your dignity, independence, and unique needs. We're not just caregivers—we're partners in your wellness journey.
              </p>
            </motion.div>

            {/* Key Points */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="space-y-3"
            >
              {[
                'Licensed and certified healthcare professionals',
                'Personalized care plans tailored to your needs',
                '24/7 support and emergency response',
                'Comprehensive range of home care services',
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.9 + idx * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#339967] to-[#1495d9] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform" style={{ boxShadow: '0 10px 20px rgba(51, 153, 103, 0.3)' }}>
                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{point}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-[#339967] to-[#1495d9] text-white rounded-full font-semibold shadow-2xl hover:shadow-3xl transition-all flex items-center gap-2"
                style={{ boxShadow: '0 20px 50px rgba(51, 153, 103, 0.4)' }}
              >
                <FaHeart />
                Learn About Our Services
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-700 rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all border-2 border-gray-200 hover:border-[#339967]"
              >
                Contact Us Today
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
