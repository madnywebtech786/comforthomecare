'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CityCard from './CityCard';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

export default function WorkingAreas() {
  const Cities = [
    { name: 'Airdrie', src: '/images/cities/Airdrie.png' },
    { name: 'Calgary', src: '/images/cities/Calgary.png' },
    { name: 'Chesteremere', src: '/images/cities/Chesteremere.png' },
    { name: 'Cochrane', src: '/images/cities/Cochrane.png' },
    { name: 'Strathmore', src: '/images/cities/Strathmore.jpg' },
    { name: 'Highriver', src: '/images/cities/highriver.jpg' },
    { name: 'okotoks', src: '/images/cities/okotoks.jpg' },

  ];
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <div className='relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-tr from-gray-50 via-white to-[#1495d9]/5' ref={ref}>
      <div className='lg:w-max mx-auto text-center flex flex-col gap-3'>
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
            <span className="text-sm font-semibold text-[#339967]">Where We Excel</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
              Working Areas
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore Our Expertise and Impact Zones
          </p>
        </motion.div>
   
      </div>
      <div className='w-full h-full p-5 lg:pl-10'>
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          draggable
          loop={true}
          autoplay={{ delay: 3000 }}
          className='!h-full'
          breakpoints={{
            // For screens >= 640px (Tablet)
            720: {
              slidesPerView: 2, // Show 4 slides on tablet
            },
            // For screens >= 1024px (Laptop and above)
            1024: {
              slidesPerView: 4, // Show 7 slides on laptop and above
            },
            1240: {
              slidesPerView: 4, // Show 7 slides on laptop and above
            },
          }}
        >
          {Cities.map((city, index) => (
            <SwiperSlide key={'city'+index}>
              <div
                className='w-full p-5'
                key={index + 'city'}
              >
                <CityCard name={city.name} src={city.src} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
    </div>
  );
}
