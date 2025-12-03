'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaBrain, FaHandHoldingHeart, FaUserFriends, FaSyringe, FaHeart, FaUserMd, FaWheelchair, FaClock, FaBroom, FaArrowLeft } from 'react-icons/fa';

const ServiceDetailPage = () => {
  const params = useParams();
  const slug = params.slug;

  // Service data with slugs
  const servicesData = {
    'alzheimers-dementia-support': {
      icon: FaBrain,
      title: 'Alzheimer\'s and Dementia Care in Calgary',
      subtitle: 'Alzheimer\'s and Dementia Support',
      description: 'Alzheimer\'s and Dementia Support provides care for people suffering with Dementia or Alzheimer\'s disease and their families.',
      fullDescription: 'Your companion will assist you with day-to-day tasks such as helping around the house and providing transportation to doctor\'s appointments, grocery shopping, and planned outings. You will also feel supported and understood as your companion offers you emotional support and keeps you safe during a time that can be scary and unknown.',
      gradient: 'from-[#339967] to-[#1495d9]',
      image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&q=80',
    },
    'health-care-aide-services': {
      icon: FaHandHoldingHeart,
      title: 'Health Care Aide Services in Calgary',
      subtitle: 'Health Care Aide Services',
      description: 'Professional healthcare aides providing essential daily living support and personal care assistance.',
      fullDescription: 'Our certified Health Care Aides are trained professionals who provide compassionate personal care and support with activities of daily living. They work closely with healthcare professionals to ensure the highest quality of care for you and your loved ones.',
      gradient: 'from-[#1495d9] to-[#339967]',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80',
    },
    'companion-care-services': {
      icon: FaUserFriends,
      title: 'Companion Care Services in Calgary',
      subtitle: 'Companion Care Services',
      description: 'Compassionate companionship to reduce isolation and provide emotional support and social engagement.',
      fullDescription: 'Our companion care services are designed to provide meaningful social interaction and emotional support. Companions help reduce feelings of loneliness and isolation while encouraging engagement in activities that bring joy and fulfillment to daily life.',
      gradient: 'from-[#339967] to-[#1495d9]',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80',
    },
    'diabetes-care-services': {
      icon: FaSyringe,
      title: 'Diabetes Care Services in Calgary',
      subtitle: 'Diabetes Care Services',
      description: 'Expert diabetes management including monitoring, medication assistance, and lifestyle support.',
      fullDescription: 'Our specialized diabetes care services provide comprehensive support for managing diabetes effectively at home. Our trained professionals help monitor blood sugar levels, administer medications, and provide education on diabetes management to ensure optimal health outcomes.',
      gradient: 'from-[#1495d9] to-[#339967]',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80',
    },
    'hospice-palliative-care': {
      icon: FaHeart,
      title: 'Hospice and Palliative Care in Calgary',
      subtitle: 'Hospice and Palliative Care',
      description: 'Compassionate end-of-life care focused on comfort, pain management, and emotional support.',
      fullDescription: 'Our hospice and palliative care services provide compassionate support during end-of-life journey. We focus on comfort, dignity, and quality of life while supporting both patients and their families through this difficult time with professional care and understanding.',
      gradient: 'from-[#339967] to-[#1495d9]',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
    },
    'nursing-care-services': {
      icon: FaUserMd,
      title: 'Nursing Care Services in Calgary',
      subtitle: 'Nursing Care Services',
      description: 'Professional nursing care including wound care, medication management, and health monitoring.',
      fullDescription: 'Our registered nurses and licensed practical nurses provide skilled medical care in the comfort of your home. They deliver professional healthcare services tailored to your specific medical needs with expertise and compassion.',
      gradient: 'from-[#1495d9] to-[#339967]',
      image: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80',
    },
    'post-rehabilitative-support': {
      icon: FaWheelchair,
      title: 'Post-Rehabilitative Support in Calgary',
      subtitle: 'Post-Rehabilitative Support',
      description: 'Dedicated support during recovery, helping clients regain independence after illness or injury.',
      fullDescription: 'Our post-rehabilitative support services help you transition from hospital or rehabilitation facility back to home. We provide ongoing support to continue your recovery journey and regain independence in a comfortable home environment.',
      gradient: 'from-[#339967] to-[#1495d9]',
      image: 'https://images.unsplash.com/photo-1564121211835-e88c852648ab?w=800&q=80',
    },
    'respite-care': {
      icon: FaClock,
      title: 'Respite Care Services in Calgary',
      subtitle: 'Respite Care',
      description: 'Temporary relief care for family caregivers, ensuring loved ones receive quality care while you rest.',
      fullDescription: 'Respite care provides temporary relief for family caregivers who need a break from their caregiving responsibilities. Our professional caregivers step in to provide quality care while you take time for yourself, ensuring your loved one remains safe and well-cared for.',
      gradient: 'from-[#1495d9] to-[#339967]',
      image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&q=80',
    },
    'cleaning-services': {
      icon: FaBroom,
      title: 'Home Cleaning Services in Calgary',
      subtitle: 'Cleaning Services',
      description: 'Professional home cleaning services to maintain a safe, healthy, and comfortable living environment.',
      fullDescription: 'Our professional cleaning services help maintain a clean, safe, and healthy home environment. We understand that a clean home contributes to overall wellbeing and quality of life, especially for those with health concerns or mobility challenges.',
      gradient: 'from-[#339967] to-[#1495d9]',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80',
    },
  };

  const service = servicesData[slug] || servicesData['alzheimers-dementia-support'];
  const IconComponent = service.icon;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-[#339967]/5">
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className={`absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br ${service.gradient} rounded-full blur-3xl`}
            />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            {/* Back Button */}
            <Link href="/#services">
              <motion.button
                whileHover={{ x: -5 }}
                className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                <FaArrowLeft className="text-[#339967]" />
                <span className="font-semibold text-gray-700">Back to Services</span>
              </motion.button>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-100">
                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} animate-pulse`} />
                  <span className="text-sm font-semibold text-gray-700">Our Services</span>
                </div>

                {/* Title */}
                <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                  {service.title}
                </h1>

                {/* Description */}
                <p className="text-xl text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <p className="text-lg text-gray-700 leading-relaxed">
                  {service.fullDescription}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className={`px-8 py-4 bg-gradient-to-r ${service.gradient} text-white rounded-full font-semibold shadow-xl hover:shadow-2xl transition-all text-lg`}
                  >
                    Get a Free Assessment
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Image - Modern Design with Multiple Elements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
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
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-3xl rounded-full -z-10`}
                  />

                  {/* Main Image Container */}
                  <div className="relative">
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
                      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-20 z-10`} />
                      <div className="absolute inset-0 border-4 border-white/20 rounded-3xl z-10" />

                      {/* Image */}
                      <div className="aspect-square bg-gray-200 relative">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Gradient Overlay Bottom */}
                      <div className={`absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10`} />
                    </div>

                    {/* Floating Icon Badge */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8, type: 'spring' }}
                      className="absolute -top-6 -right-6 z-20"
                    >
                      <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl backdrop-blur-sm`}>
                        <IconComponent className="text-5xl text-white" />
                      </div>
                    </motion.div>

                    {/* Floating Quality Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-4 z-20"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-bold text-gray-900">Certified</div>
                          <div className="text-xs text-gray-600">Care Team</div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Decorative Floating Elements */}
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute top-1/4 -right-8 w-16 h-16 opacity-20"
                    >
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${service.gradient}`} />
                    </motion.div>
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                      className="absolute bottom-1/4 -left-8 w-20 h-20 opacity-20"
                    >
                      <div className={`w-full h-full rounded-full bg-gradient-to-br ${service.gradient}`} />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetailPage;
