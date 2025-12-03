'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

const Blogs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const blogs = [
    {
      slug: 'benefits-of-in-home-care-for-seniors',
      title: 'The Benefits of In-Home Care for Seniors',
      excerpt: 'Discover how in-home care services can improve quality of life for seniors while allowing them to maintain independence and dignity in familiar surroundings.',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80',
      author: 'Dr. Sarah Mitchell',
      date: 'December 1, 2024',
      category: 'Senior Care',
      gradient: 'from-[#339967] to-[#1495d9]',
    },
    {
      slug: 'caring-for-loved-ones-with-dementia',
      title: 'Caring for Loved Ones with Dementia: A Guide',
      excerpt: 'Essential tips and strategies for family caregivers supporting loved ones with dementia, including communication techniques and daily care routines.',
      image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=800&q=80',
      author: 'Emily Roberts',
      date: 'November 28, 2024',
      category: 'Dementia Care',
      gradient: 'from-[#1495d9] to-[#339967]',
    },
    {
      slug: 'importance-of-respite-care-for-family-caregivers',
      title: 'The Importance of Respite Care for Family Caregivers',
      excerpt: 'Learn why taking breaks is crucial for family caregivers and how respite care services can prevent burnout while ensuring quality care for your loved ones.',
      image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=800&q=80',
      author: 'Michael Chen',
      date: 'November 25, 2024',
      category: 'Caregiver Support',
      gradient: 'from-[#339967] to-[#1495d9]',
    },
  ];

  return (
    <section ref={ref} id="blogs" className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-[#1495d9]/5">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-[#339967]/20 to-[#1495d9]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.06, 0.03, 0.06],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-[#1495d9]/20 to-[#339967]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Icon */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-10 text-[#1495d9]/20 text-5xl"
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
            <span className="text-sm font-semibold text-[#339967]">Latest Insights</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
              Our Blog
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice, tips, and insights on home care, senior health, and caregiver support
          </p>
        </motion.div>

        {/* Blog Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              {/* Blog Card */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image Area */}
                <div className="relative h-64 overflow-hidden">
                  {/* Background Image */}
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${blog.gradient} opacity-40`} />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className={`px-4 py-2 bg-gradient-to-r ${blog.gradient} rounded-full shadow-lg`}>
                      <span className="text-xs font-semibold text-white uppercase tracking-wide">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                </div>

                {/* Content Area */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <FaCalendarAlt className="text-[#339967]" />
                      <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaUser className="text-[#1495d9]" />
                      <span>{blog.author}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-[#339967] transition-colors">
                    {blog.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {blog.excerpt}
                  </p>

                  {/* Read More Button */}
                  <Link href={`/blog/${blog.slug}`}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${blog.gradient} text-white text-sm font-semibold rounded-full shadow-lg hover:shadow-xl transition-all`}
                    >
                      Read More
                      <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;
