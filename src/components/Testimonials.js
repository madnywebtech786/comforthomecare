'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectCoverflow } from 'swiper/modules';
import { FaStar, FaQuoteLeft, FaHeart } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const testimonials = [
    {
      name: 'Margaret Thompson',
      role: 'Client Family Member',
      content: 'The team at Comfort Home Care has been absolutely wonderful. They treated my mother with such dignity and respect. We couldn\'t have asked for better care.',
      rating: 5,
      gradient: 'from-[#339967] to-[#1495d9]',
      location: 'Calgary, AB',
    },
    {
      name: 'Robert Chen',
      role: 'Client',
      content: 'Professional, compassionate, and reliable. The caregivers are not just skilled—they genuinely care. I feel safe and well-cared for in my own home.',
      rating: 5,
      gradient: 'from-[#1495d9] to-[#339967]',
      location: 'Airdrie, AB',
    },
    {
      name: 'Sarah Johnson',
      role: 'Daughter of Client',
      content: 'Finding Comfort Home Care was a blessing. They made the transition to home care seamless and provided peace of mind for our entire family.',
      rating: 5,
      gradient: 'from-[#339967] to-[#1495d9]',
      location: 'Okotoks, AB',
    },
    {
      name: 'David Martinez',
      role: 'Client',
      content: 'The personalized care plan they created for me addresses all my needs. The staff is friendly, professional, and always goes the extra mile.',
      rating: 5,
      gradient: 'from-[#1495d9] to-[#339967]',
      location: 'Cochrane, AB',
    },
    {
      name: 'Elizabeth Wong',
      role: 'Client Family Member',
      content: 'Excellent service from start to finish. The assessment was thorough, and the care has been consistently outstanding. Highly recommend!',
      rating: 5,
      gradient: 'from-[#339967] to-[#1495d9]',
      location: 'Calgary, AB',
    },
  ];

  return (
    <section ref={ref} className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-white via-[#339967]/5 to-[#1495d9]/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#339967]/20 to-[#1495d9]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.3, 1, 1.3],
            rotate: [360, 180, 0],
            opacity: [0.15, 0.05, 0.15],
          }}
          transition={{ duration: 35, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1495d9]/20 to-[#339967]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Decorative Icons */}
      <motion.div
        animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-20 text-[#339967]/30 text-5xl"
      >
        <FaHeart />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-20 right-10 text-[#1495d9]/30 text-4xl"
      >
        <BsStars />
      </motion.div>

      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 space-y-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full border border-[#339967]/30"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#339967] to-[#1495d9] animate-pulse" />
            <span className="text-sm font-semibold text-[#339967]">Client Stories</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
              What Our Families Say
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Don't just take our word for it. Hear from the families we've had the privilege to serve.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative max-w-7xl mx-auto"
        >
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            className="testimonials-swiper py-8 sm:py-12 px-4"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
                coverflowEffect: {
                  rotate: 0,
                  stretch: 0,
                  depth: 0,
                  modifier: 1,
                },
              },
              768: {
                slidesPerView: 'auto',
                spaceBetween: 30,
                coverflowEffect: {
                  rotate: 20,
                  stretch: 0,
                  depth: 200,
                  modifier: 1,
                },
              },
            }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="!w-full md:!w-auto">
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-full md:w-[500px] max-w-[90vw] mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r ${testimonial.gradient}`} />

                  {/* Quote Icon */}
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className={`absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br ${testimonial.gradient} opacity-10 rounded-full flex items-center justify-center`}
                  >
                    <FaQuoteLeft className="text-4xl opacity-50" />
                  </motion.div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.6 + i * 0.1, type: 'spring' }}
                      >
                        <FaStar className="text-yellow-400 text-xl" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 relative z-10">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 relative z-10">
                    {/* Avatar */}
                    <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center shadow-lg`}>
                      <span className="text-white text-xl font-bold">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>

                    <div>
                      <div className="font-bold text-gray-800">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {testimonial.location}
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className={`absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br ${testimonial.gradient} opacity-5 rounded-full`}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
        >
          {[
            { number: '98%', label: 'Satisfaction Rate', gradient: 'from-[#339967] to-[#1495d9]' },
            { number: '500+', label: 'Happy Families', gradient: 'from-[#1495d9] to-[#339967]' },
            { number: '4.9/5', label: 'Average Rating', gradient: 'from-[#339967] to-[#1495d9]' },
            { number: '10+', label: 'Years of Excellence', gradient: 'from-[#1495d9] to-[#339967]' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1 + index * 0.1, type: 'spring' }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all text-center border border-gray-100"
            >
              <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .testimonials-swiper {
          overflow: visible !important;
          padding: 2rem 0 4rem 0;
        }
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .testimonials-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #cbd5e1;
          opacity: 1;
          transition: all 0.3s;
        }
        .testimonials-swiper .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #339967, #1495d9);
          width: 30px;
          border-radius: 5px;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
