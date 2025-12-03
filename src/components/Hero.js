'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaArrowRight, FaPhone } from 'react-icons/fa';

import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';

const Hero = () => {
  const slides = [
    {
      title: 'Compassionate Care',
      subtitle: 'At Your Doorstep',
      description: 'Experience professional healthcare services in the comfort of your own home with our dedicated team of certified professionals.',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80',
      gradient: 'from-[#339967] to-[#1495d9]',
      features: ['24/7 Availability', 'Certified Nurses', 'Personalized Care'],
    },
    {
      title: 'Expert Medical',
      subtitle: 'Support & Monitoring',
      description: 'Certified healthcare professionals providing personalized medical care tailored to your unique needs and requirements.',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
      gradient: 'from-[#1495d9] to-[#339967]',
      features: ['Medical Supervision', 'Health Monitoring', 'Emergency Response'],
    },
    {
      title: 'Trusted Home Care',
      subtitle: 'Services in Calgary',
      description: 'Building relationships based on trust, dignity, and respect for over a decade. Your comfort is our priority.',
      image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&q=80',
      gradient: 'from-[#339967] to-[#1495d9]',
      features: [ '500+ Happy Clients', 'Licensed & Insured','10+ Years Experience'],
    },
    {
      title: 'Your Safety',
      subtitle: 'Is Our Priority',
      description: 'Comprehensive care protocols ensuring your safety and wellbeing with professional support at every step.',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80',
      gradient: 'from-[#1495d9] to-[#339967]',
      features: ['Safety First', 'Quality Assured', 'Trusted Professionals'],
    },
  ];

  return (
    <section className="relative min-h-screen pt-20 bg-gradient-to-br from-gray-50 via-white to-[#339967]/5">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
        slidesPerView={1}
        loop={true}
        speed={1000}
        spaceBetween={200}
        className="hero-swiper h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="min-h-screen pt-12 pb-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center h-full max-w-[1800px] mx-auto">
                {/* Left Content */}
                <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-100">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${slide.gradient} animate-pulse`} />
                    <span className="text-sm font-semibold text-gray-700">Comfort Home Care Services</span>
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
                      {slide.title}
                    </h1>
                    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                      {slide.subtitle}
                    </h2>
                  </div>

                  {/* Description */}
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                    {slide.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3">
                    {slide.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-lg border border-[#339967]/20"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${slide.gradient}`} />
                        <span className="text-sm font-medium text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button
                      className={`w-full md:w-max justify-center md:justify-left group px-8 py-4 bg-gradient-to-r ${slide.gradient} text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all flex items-center gap-3 text-base lg:text-lg hover:scale-105`}
                    >
                      Get Started Today
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button
                      className="w-full md:w-max justify-center md:justify-left px-8 py-4 bg-white text-gray-700 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all border-2 border-gray-200 hover:border-[#339967] text-base lg:text-lg flex items-center gap-3 hover:scale-105"
                    >
                      <FaPhone className="text-[#339967]" />
                      (403) 123-4567
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="hidden md:flex flex-wrap gap-8 pt-8 border-t border-gray-200">
                    {[
                      { number: '10+', label: 'Years of Excellence' },
                      { number: '500+', label: 'Happy Families' },
                      { number: '24/7', label: 'Care Support' },
                    ].map((stat, idx) => (
                      <div key={idx}>
                        <div className={`text-3xl lg:text-4xl font-bold bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}>
                          {stat.number}
                        </div>
                        <div className="text-sm text-gray-600 font-medium mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Image - Modern Design with Multiple Elements */}
                <div className="relative order-1 lg:order-2">
                  <div className="relative max-w-lg mx-auto">
                    {/* Glowing Background Effect */}
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.4, 0.6, 0.4],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} blur-3xl rounded-full -z-10`}
                    />

                    {/* Main Image Container with Glass Effect */}
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="relative"
                    >
                      {/* Animated Corner Accents */}
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute -top-4 -left-4 w-24 h-24 -z-10"
                      >
                        <div className={`absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#339967] rounded-tl-3xl`} />
                      </motion.div>
                      <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute -bottom-4 -right-4 w-24 h-24 -z-10"
                      >
                        <div className={`absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#1495d9] rounded-br-3xl`} />
                      </motion.div>

                      {/* Image with Border Effect */}
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        {/* Multi-Layer Border Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${slide.gradient} opacity-20 z-10`} />
                        <div className="absolute inset-0 border-4 border-white/20 rounded-3xl z-10" />

                        {/* Image */}
                        <div className="aspect-square bg-gray-200 relative">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Gradient Overlay Bottom */}
                        <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10`} />
                      </div>

                      {/* Floating Stats Cards - Multiple */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="absolute top-8 -left-6 bg-white rounded-2xl shadow-2xl p-4 z-20 backdrop-blur-sm bg-white/95"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${slide.gradient} flex items-center justify-center`}>
                            <div className="text-lg font-bold text-white">
                              {index === 0 ? '10+' : index === 1 ? '24/7' : index === 2 ? '500+' : '100%'}
                            </div>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-900">
                              {index === 0 ? 'Years' : index === 1 ? 'Support' : index === 2 ? 'Clients' : 'Quality'}
                            </div>
                            <div className="text-xs text-gray-600">
                              {index === 0 ? 'Experience' : index === 1 ? 'Available' : index === 2 ? 'Happy' : 'Care'}
                            </div>
                          </div>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute bottom-8 -right-6 bg-white rounded-2xl shadow-2xl p-4 z-20 backdrop-blur-sm bg-white/95"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${slide.gradient} flex items-center justify-center`}>
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-sm font-bold text-gray-900">Certified</div>
                            <div className="text-xs text-gray-600">Professionals</div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Decorative Elements */}
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute top-1/4 -right-8 w-16 h-16 opacity-20"
                      >
                        <div className={`w-full h-full rounded-full bg-gradient-to-br ${slide.gradient}`} />
                      </motion.div>
                      <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                        className="absolute bottom-1/4 -left-8 w-20 h-20 opacity-20"
                      >
                        <div className={`w-full h-full rounded-full bg-gradient-to-br ${slide.gradient}`} />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .hero-swiper {
          min-height: 100vh;
        }
        .hero-swiper .swiper-pagination {
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          width: auto;
        }
        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          width: 48px;
          border-radius: 6px;
          background: linear-gradient(to right, #339967, #1495d9);
        }
        @media (max-width: 1024px) {
          .hero-swiper .swiper-pagination {
            bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
