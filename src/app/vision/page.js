'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiEye, FiTrendingUp, FiAward, FiHeart, FiTarget, FiMapPin } from 'react-icons/fi';
import { FaRocket, FaHandsHelping, FaHome, FaMedal, FaLightbulb, FaUsers } from 'react-icons/fa';
import { BsGraphUpArrow, BsShieldCheck, BsStars } from 'react-icons/bs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Vision = () => {
  const heroRef = useRef(null);
  const visionRef = useRef(null);
  const pillarsRef = useRef(null);
  const impactRef = useRef(null);
  const futureRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const visionInView = useInView(visionRef, { once: true, margin: '-100px' });
  const pillarsInView = useInView(pillarsRef, { once: true, margin: '-100px' });
  const impactInView = useInView(impactRef, { once: true, margin: '-100px' });
  const futureInView = useInView(futureRef, { once: true, margin: '-100px' });

  const visionPillars = [
    {
      icon: FaRocket,
      title: 'Leadership in Excellence',
      description: 'Setting the gold standard as Alberta\'s premier home healthcare provider through unwavering commitment to quality and innovation.',
      gradient: 'from-[#339967] to-[#1495d9]',
      stats: 'Industry Leader',
    },
    {
      icon: BsStars,
      title: 'Innovation-Driven Care',
      description: 'Pioneering cutting-edge healthcare solutions and technologies that revolutionize the home care experience.',
      gradient: 'from-[#1495d9] to-[#339967]',
      stats: 'Forward Thinking',
    },
    {
      icon: FiHeart,
      title: 'Enhanced Quality of Life',
      description: 'Transforming lives through personalized care that enables independence, dignity, and fulfillment at home.',
      gradient: 'from-[#339967] to-[#1495d9]',
      stats: 'Client-Focused',
    },
    {
      icon: FaHandsHelping,
      title: 'Community of Care',
      description: 'Building a supportive ecosystem where aging and recovery at home are embraced with compassion and expertise.',
      gradient: 'from-[#1495d9] to-[#339967]',
      stats: 'Community First',
    },
    {
      icon: BsShieldCheck,
      title: 'Trust & Integrity',
      description: 'Earning lasting trust through transparent practices, ethical standards, and consistent delivery of exceptional care.',
      gradient: 'from-[#339967] to-[#1495d9]',
      stats: 'Trusted Partner',
    },
    {
      icon: FaMedal,
      title: 'Recognition for Excellence',
      description: 'Being acknowledged across Alberta as the benchmark for outstanding home healthcare services and client satisfaction.',
      gradient: 'from-[#1495d9] to-[#339967]',
      stats: 'Award-Winning',
    },
  ];

  const impactAreas = [
    {
      icon: FiMapPin,
      title: 'Across Alberta',
      value: '7+ Cities',
      description: 'Expanding our reach throughout Alberta\'s communities',
      gradient: 'from-[#339967] to-[#1495d9]',
    },
    {
      icon: FaUsers,
      title: 'Lives Transformed',
      value: '1000+',
      description: 'Clients empowered to live independently at home',
      gradient: 'from-[#1495d9] to-[#339967]',
    },
    {
      icon: FiTrendingUp,
      title: 'Care Excellence',
      value: '99%',
      description: 'Client satisfaction and family peace of mind',
      gradient: 'from-[#339967] to-[#1495d9]',
    },
    {
      icon: FiAward,
      title: 'Quality Standards',
      value: 'Premium',
      description: 'Exceeding industry benchmarks in every service',
      gradient: 'from-[#1495d9] to-[#339967]',
    },
  ];

  const futureGoals = [
    {
      icon: FaLightbulb,
      title: 'Advanced Care Technology',
      description: 'Integrating AI-powered monitoring, telehealth solutions, and smart home technologies for enhanced care delivery.',
      timeline: '2025-2026',
    },
    {
      icon: BsGraphUpArrow,
      title: 'Service Expansion',
      description: 'Extending specialized care programs and reaching more communities across Alberta with comprehensive services.',
      timeline: '2025-2027',
    },
    {
      icon: FaHandsHelping,
      title: 'Healthcare Partnerships',
      description: 'Collaborating with hospitals, clinics, and specialists to create seamless care transitions and holistic health support.',
      timeline: 'Ongoing',
    },
    {
      icon: FaUsers,
      title: 'Caregiver Excellence Program',
      description: 'Launching advanced training initiatives to ensure our team remains at the forefront of home healthcare expertise.',
      timeline: '2025',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-48 md:pb-32 overflow-hidden">
        {/* Futuristic Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large Gradient Orbs */}
          <motion.div
            animate={{
              scale: [1, 1.4, 1],
              x: [0, 100, 0],
              y: [0, -80, 0],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-bl from-[#339967]/40 to-[#1495d9]/40 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              x: [0, -80, 0],
              y: [0, 80, 0],
              opacity: [0.08, 0.15, 0.08],
            }}
            transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#1495d9]/40 to-[#339967]/40 rounded-full blur-3xl"
          />

          {/* Animated Rings */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                scale: [1, 1.5],
                opacity: [0.3, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                border: '2px solid',
                borderImage: 'linear-gradient(45deg, #339967, #1495d9) 1',
                borderRadius: '50%',
              }}
            />
          ))}

          {/* Floating Stars */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -150, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 0.7, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 12 + Math.random() * 8,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-1 h-1 bg-gradient-to-r from-[#339967] to-[#1495d9] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {/* Hexagonal Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `linear-gradient(30deg, #339967 12%, transparent 12.5%, transparent 87%, #339967 87.5%, #339967),
                             linear-gradient(150deg, #1495d9 12%, transparent 12.5%, transparent 87%, #1495d9 87.5%, #1495d9),
                             linear-gradient(30deg, #1495d9 12%, transparent 12.5%, transparent 87%, #1495d9 87.5%, #1495d9),
                             linear-gradient(150deg, #339967 12%, transparent 12.5%, transparent 87%, #339967 87.5%, #339967)`,
            backgroundSize: '80px 140px',
            backgroundPosition: '0 0, 0 0, 40px 70px, 40px 70px',
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge with Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#1495d9]/10 to-[#339967]/10 rounded-full border border-[#1495d9]/30 mb-8"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1495d9] to-[#339967]"
              />
              <FiEye className="text-[#1495d9] text-lg" />
              <span className="text-sm font-semibold text-[#1495d9]">Our Vision for the Future</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
            >
              <span className="text-gray-900">Shaping the</span>
              <br />
              <span className="bg-gradient-to-r from-[#1495d9] to-[#339967] bg-clip-text text-transparent">
                Future of Care
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Leading Alberta towards a future where exceptional home healthcare is accessible, innovative, and life-changing
            </motion.p>

            {/* Animated Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={heroInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex flex-col items-center gap-2"
              >
                <span className="text-sm text-gray-500">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
                  <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1 h-2 bg-gradient-to-b from-[#339967] to-[#1495d9] rounded-full"
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Vision Statement Section */}
      <section ref={visionRef} className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Animated Background Circles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                rotate: i % 2 === 0 ? [0, 360] : [360, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 50 + i * 10, repeat: Infinity, ease: 'linear' }}
              className={`absolute ${i === 0 ? 'top-0 left-0' : i === 1 ? 'top-1/2 right-0' : 'bottom-0 left-1/2'} w-[600px] h-[600px] border-2 border-${i % 2 === 0 ? '[#339967]' : '[#1495d9]'}/10 rounded-full`}
              style={{
                transform: `translate(-50%, -50%)`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={visionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1495d9]/10 to-[#339967]/10 rounded-full border border-[#1495d9]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1495d9] to-[#339967] animate-pulse" />
              <span className="text-sm font-semibold text-[#1495d9]">Where We're Headed</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Vision
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={visionInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Multi-layered Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1495d9] to-[#339967] rounded-3xl opacity-30 group-hover:opacity-40 transition-opacity blur-2xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#339967] to-[#1495d9] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-3xl" />

            <div className="relative bg-white rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 shadow-2xl border-2 border-gray-100 overflow-hidden">
              {/* Animated Corner Accents */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#1495d9] to-transparent rounded-br-full opacity-20"
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#339967] to-transparent rounded-tl-full opacity-20"
              />

              {/* Decorative Border Elements */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-4 border-l-4 border-[#1495d9] rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[#339967] rounded-br-3xl" />
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#339967]/50 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[#1495d9]/50 rounded-bl-3xl" />

              <p className="relative text-2xl sm:text-3xl md:text-4xl text-gray-800 leading-relaxed text-center font-light">
                Our vision is to be the{' '}
                <span className="font-bold bg-gradient-to-r from-[#1495d9] to-[#339967] bg-clip-text text-transparent">
                  leading provider of home healthcare services
                </span>{' '}
                in Alberta, recognized for{' '}
                <span className="font-bold bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
                  excellence, innovation, and unwavering commitment
                </span>{' '}
                to improving the quality of life for every client. We aim to create a{' '}
                <span className="font-bold bg-gradient-to-r from-[#1495d9] to-[#339967] bg-clip-text text-transparent">
                  thriving community
                </span>{' '}
                where aging and recovery at home are fully supported with care, trust, and integrity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Pillars Section */}
      <section ref={pillarsRef} className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `linear-gradient(45deg, #339967 25%, transparent 25%, transparent 75%, #339967 75%, #339967),
                               linear-gradient(45deg, #1495d9 25%, transparent 25%, transparent 75%, #1495d9 75%, #1495d9)`,
              backgroundSize: '60px 60px',
              backgroundPosition: '0 0, 30px 30px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full border border-[#339967]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#339967] to-[#1495d9] animate-pulse" />
              <span className="text-sm font-semibold text-[#339967]">Building Tomorrow</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Pillars of Our Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Six foundational elements driving our journey to transform home healthcare in Alberta
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visionPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={pillarsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden">
                  {/* Animated Background Gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-5`}
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
                  />

                  {/* Icon Container with Pulse Effect */}
                  <div className="relative mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                      className={`w-16 h-16 rounded-xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow relative`}
                    >
                      <pillar.icon className="text-3xl text-white relative z-10" />

                      {/* Pulse Ring */}
                      <motion.div
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-100`}
                      />
                    </motion.div>

                    {/* Stats Badge */}
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full border border-gray-200">
                      <FiTarget className="text-xs text-gray-600" />
                      <span className="text-xs font-bold text-gray-700">
                        {pillar.stats}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-[#339967] group-hover:to-[#1495d9] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {pillar.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Decorative Element */}
                  <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-tl from-gray-100 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section ref={impactRef} className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Radial Gradient Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-radial from-[#339967]/5 via-transparent to-[#1495d9]/5" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={impactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1495d9]/10 to-[#339967]/10 rounded-full border border-[#1495d9]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1495d9] to-[#339967] animate-pulse" />
              <span className="text-sm font-semibold text-[#1495d9]">Measurable Impact</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Vision in Numbers
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Demonstrating excellence through tangible results and continuous growth
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {impactAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={impactInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  {/* Animated Shine Effect */}
                  <motion.div
                    animate={{
                      x: ['-100%', '200%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <area.icon className="text-3xl text-white" />
                    </div>

                    {/* Value */}
                    <motion.div
                      className={`text-5xl font-bold bg-gradient-to-r ${area.gradient} bg-clip-text text-transparent mb-3`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {area.value}
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {area.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* Decorative Corner Glow */}
                  <div className={`absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-tl ${area.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-full blur-2xl`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals Section */}
      <section ref={futureRef} className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-[#339967] to-[#1495d9] rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={futureInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full border border-[#339967]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#339967] to-[#1495d9] animate-pulse" />
              <span className="text-sm font-semibold text-[#339967]">Innovation Roadmap</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Path Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic initiatives shaping the future of home healthcare excellence
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {futureGoals.map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                animate={futureInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-[#339967]/30 overflow-hidden">
                  {/* Timeline Badge */}
                  <div className="absolute top-6 right-6 px-3 py-1 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full border border-[#339967]/30">
                    <span className="text-xs font-bold bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
                      {goal.timeline}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#339967] to-[#1495d9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <goal.icon className="text-2xl text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#339967] transition-colors">
                    {goal.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {goal.description}
                  </p>

                  {/* Progress Indicator */}
                  <div className="mt-6 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={futureInView ? { width: '70%' } : {}}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className="h-full bg-gradient-to-r from-[#339967] to-[#1495d9] rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-br from-[#1495d9] via-[#339967] to-[#1495d9] overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Flowing Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, -200],
                opacity: [0, 0.5, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
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

          {/* Gradient Waves */}
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, white 2px, transparent 2px),
                               radial-gradient(circle at 80% 80%, white 2px, transparent 2px)`,
              backgroundSize: '100px 100px',
            }}
          />
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
              <FiEye className="text-white text-xl" />
              <span className="text-sm font-semibold text-white">Join Our Vision</span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Be Part of the Future
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
              Experience the future of home healthcare today. Let us show you how compassionate, innovative care can transform lives.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="/#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#1495d9] rounded-full font-bold text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] transition-all"
              >
                <span>Start Your Journey</span>
                <FaRocket className="text-xl" />
              </motion.a>

              <motion.a
                href="/mission"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-sm text-white rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all"
              >
                <span>Learn Our Mission</span>
                <FiHeart className="text-xl" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Vision;
