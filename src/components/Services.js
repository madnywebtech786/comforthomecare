'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { FaBrain, FaHandHoldingHeart, FaUserFriends, FaSyringe, FaHeart, FaUserMd, FaWheelchair, FaClock, FaBroom } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const services = [
    {
      icon: FaBrain,
      title: 'Alzheimer\'s and Dementia Support Services',
      description: 'Specialized care and support for individuals living with Alzheimer\'s and dementia, focusing on comfort and dignity.',
      gradient: 'from-[#339967] to-[#1495d9]',
      slug: 'alzheimers-dementia-support',
      image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=600&q=80',
    },
    {
      icon: FaHandHoldingHeart,
      title: 'Health Care Aide Services',
      description: 'Professional healthcare aides providing essential daily living support and personal care assistance.',
      gradient: 'from-[#1495d9] to-[#339967]',
      slug: 'health-care-aide-services',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80',
    },
    {
      icon: FaUserFriends,
      title: 'Companion Care Services',
      description: 'Compassionate companionship to reduce isolation and provide emotional support and social engagement.',
      gradient: 'from-[#339967] to-[#1495d9]',
      slug: 'companion-care-services',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    },
    {
      icon: FaSyringe,
      title: 'Diabetes Care Services',
      description: 'Expert diabetes management including monitoring, medication assistance, and lifestyle support.',
      gradient: 'from-[#1495d9] to-[#339967]',
      slug: 'diabetes-care-services',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80',
    },
    {
      icon: FaHeart,
      title: 'Hospice and Palliative Care',
      description: 'Compassionate end-of-life care focused on comfort, pain management, and emotional support.',
      gradient: 'from-[#339967] to-[#1495d9]',
      slug: 'hospice-palliative-care',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80',
    },
    {
      icon: FaUserMd,
      title: 'Nursing Care Services',
      description: 'Professional nursing care including wound care, medication management, and health monitoring.',
      gradient: 'from-[#1495d9] to-[#339967]',
      slug: 'nursing-care-services',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&q=80',
    },
    {
      icon: FaWheelchair,
      title: 'Post-Rehabilitative Support',
      description: 'Dedicated support during recovery, helping clients regain independence after illness or injury.',
      gradient: 'from-[#339967] to-[#1495d9]',
      slug: 'post-rehabilitative-support',
      image: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=600&q=80',
    },
    {
      icon: FaClock,
      title: 'Respite Care',
      description: 'Temporary relief care for family caregivers, ensuring loved ones receive quality care while you rest.',
      gradient: 'from-[#1495d9] to-[#339967]',
      slug: 'respite-care',
      image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=600&q=80',
    },
    {
      icon: FaBroom,
      title: 'Cleaning Services',
      description: 'Professional home cleaning services to maintain a safe, healthy, and comfortable living environment.',
      gradient: 'from-[#339967] to-[#1495d9]',
      slug: 'cleaning-services',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80',
    },
  ];

  return (
    <section ref={ref} id="services" className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#339967]/20 to-[#1495d9]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.06, 0.03, 0.06],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1495d9]/20 to-[#339967]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Healthcare Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-10 text-[#339967]/20 text-5xl"
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
            <span className="text-sm font-semibold text-[#339967]">Our Services</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
              Comprehensive Home Care
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Professional, compassionate care services tailored to meet your unique needs and enhance your quality of life.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                {/* Service Card */}
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                  {/* Image Area */}
                  <div className="relative h-56 overflow-hidden bg-gray-100">
                    {/* Background Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-60`} />

                    {/* Icon in Bottom Left Corner */}
                    <div className="absolute bottom-4 left-4 z-10">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} shadow-xl flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform`}>
                        <IconComponent className="text-3xl text-white" />
                      </div>
                    </div>

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                  </div>

                  {/* Content Area */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug min-h-[3.5rem]">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>

                    {/* Read More Button */}
                    <Link href={`/services/${service.slug}`}>
                      <motion.button
                        whileHover={{ x: 5 }}
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#339967] to-[#1495d9] text-white text-sm font-semibold rounded-lg transition-all"
                      >
                        Read More
                        <svg
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-6 text-lg">
            Need help choosing the right service?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-[#339967] to-[#1495d9] text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all"
            style={{ boxShadow: '0 20px 50px rgba(51, 153, 103, 0.4)' }}
          >
            Schedule a Free Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
