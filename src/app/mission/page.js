'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiHeart, FiShield, FiStar, FiUsers, FiTarget, FiZap } from 'react-icons/fi';
import { FaHandHoldingHeart, FaHome, FaUserShield } from 'react-icons/fa';
import { BsLightbulb, BsGraphUp } from 'react-icons/bs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Mission = () => {
  const heroRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const commitmentRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const missionInView = useInView(missionRef, { once: true, margin: '-100px' });
  const valuesInView = useInView(valuesRef, { once: true, margin: '-100px' });
  const commitmentInView = useInView(commitmentRef, { once: true, margin: '-100px' });

  const coreValues = [
    {
      icon: FiHeart,
      title: 'Compassion',
      description: 'Delivering care with empathy, kindness, and unwavering respect for every individual\'s dignity and well-being.',
      gradient: 'from-[#339967] to-[#1495d9]',
      delay: 0.1,
    },
    {
      icon: FiShield,
      title: 'Integrity',
      description: 'Upholding honesty, transparency, and the highest ethical standards in every aspect of our home care services.',
      gradient: 'from-[#1495d9] to-[#339967]',
      delay: 0.2,
    },
    {
      icon: FiStar,
      title: 'Excellence',
      description: 'Committed to exceptional quality, reliability, and continuous improvement in home healthcare delivery.',
      gradient: 'from-[#339967] to-[#1495d9]',
      delay: 0.3,
    },
    {
      icon: FiUsers,
      title: 'Respect',
      description: 'Honoring each client\'s uniqueness, independence, and fundamental right to choice and self-determination.',
      gradient: 'from-[#1495d9] to-[#339967]',
      delay: 0.4,
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Collaboration',
      description: 'Partnering with families, healthcare professionals, and communities to provide comprehensive, holistic care.',
      gradient: 'from-[#339967] to-[#1495d9]',
      delay: 0.5,
    },
    {
      icon: BsLightbulb,
      title: 'Innovation',
      description: 'Embracing cutting-edge technologies and progressive care methodologies to enhance client outcomes and quality of life.',
      gradient: 'from-[#1495d9] to-[#339967]',
      delay: 0.6,
    },
    {
      icon: BsGraphUp,
      title: 'Accountability',
      description: 'Taking full responsibility for our actions while continuously measuring and improving our performance metrics.',
      gradient: 'from-[#339967] to-[#1495d9]',
      delay: 0.7,
    },
  ];

  const commitments = [
    {
      icon: FaHome,
      title: 'Safe & Comfortable Living',
      description: 'Enabling individuals to remain in the familiar comfort of their own homes with confidence and security.',
      stats: '24/7 Support',
    },
    {
      icon: FaUserShield,
      title: 'Personalized Care Plans',
      description: 'Tailoring every service to meet unique individual needs, preferences, and health requirements.',
      stats: 'Custom Solutions',
    },
    {
      icon: FiTarget,
      title: 'Independence & Dignity',
      description: 'Preserving autonomy and self-respect while providing the support needed to thrive at home.',
      stats: 'Client-Centered',
    },
    {
      icon: FiZap,
      title: 'Peace of Mind',
      description: 'Offering families reassurance through reliable, professional, and compassionate care services.',
      stats: 'Trusted Care',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-48 md:pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Gradient Orbs */}
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

          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 100 - 50, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
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

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(#339967 1px, transparent 1px), linear-gradient(90deg, #1495d9 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
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
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full border border-[#339967]/30 mb-8"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#339967] to-[#1495d9] animate-pulse" />
              <span className="text-sm font-semibold text-[#339967]">Our Mission & Purpose</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
            >
              <span className="bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
                Empowering Lives
              </span>
              <br />
              <span className="text-gray-900">Through Care</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            >
              Transforming home healthcare with compassion, innovation, and an unwavering commitment to excellence
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section ref={missionRef} className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#339967]/10 rounded-full"
          />
          <motion.div
            animate={{
              rotate: [360, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-[#1495d9]/10 rounded-full"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full border border-[#339967]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#339967] to-[#1495d9] animate-pulse" />
              <span className="text-sm font-semibold text-[#339967]">What Drives Us</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Mission
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            {/* Glowing Border Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#339967] to-[#1495d9] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity blur-xl" />

            <div className="relative bg-white rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 shadow-2xl border border-gray-100">
              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#339967] rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#1495d9] rounded-br-3xl" />

              <p className="text-2xl sm:text-3xl md:text-4xl text-gray-800 leading-relaxed text-center font-light">
                Our mission is to deliver{' '}
                <span className="font-bold bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
                  compassionate, personalized, and high-quality
                </span>{' '}
                home care services that empower individuals to live{' '}
                <span className="font-bold bg-gradient-to-r from-[#1495d9] to-[#339967] bg-clip-text text-transparent">
                  safely, comfortably, and independently
                </span>{' '}
                in their own homes. We strive to uphold the{' '}
                <span className="font-bold bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
                  highest standards of care
                </span>
                , ensuring dignity, respect, and peace of mind for our clients and their families.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section ref={valuesRef} className="relative py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #339967 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#1495d9]/10 to-[#339967]/10 rounded-full border border-[#1495d9]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#1495d9] to-[#339967] animate-pulse" />
              <span className="text-sm font-semibold text-[#1495d9]">The Foundation of Excellence</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seven fundamental principles that guide every decision we make and every service we provide
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: value.delay }}
                className="group"
              >
                <div className="relative h-full bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden">
                  {/* Hover Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow`}
                  >
                    <value.icon className="text-3xl text-white" />

                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${value.gradient} blur-lg opacity-0 group-hover:opacity-50 transition-opacity`} />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-[#339967] group-hover:to-[#1495d9] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>

                  {/* Decorative Corner */}
                  <div className={`absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl ${value.gradient} opacity-0 group-hover:opacity-10 transition-opacity rounded-tl-full`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section ref={commitmentRef} className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#339967]/20 to-[#1495d9]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={commitmentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full border border-[#339967]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#339967] to-[#1495d9] animate-pulse" />
              <span className="text-sm font-semibold text-[#339967]">Our Promise to You</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Commitment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four pillars that define our dedication to exceptional home care services
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={commitmentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'linear-gradient(45deg, #339967, #1495d9, #339967)',
                      backgroundSize: '200% 200%',
                    }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <div className="absolute inset-[2px] bg-white rounded-2xl" />
                  </motion.div>

                  <div className="relative">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#339967] to-[#1495d9] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <commitment.icon className="text-2xl text-white" />
                    </div>

                    {/* Stats Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full mb-4">
                      <span className="text-xs font-bold bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
                        {commitment.stats}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {commitment.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {commitment.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Experience the Difference
            </h2>
            <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed">
              Join countless families who trust us with their most precious asset   the well-being of their loved ones
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-[#339967] rounded-full font-bold text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.3)] transition-all"
            >
              <span>Get Started Today</span>
              <FiTarget className="text-xl" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Mission;
