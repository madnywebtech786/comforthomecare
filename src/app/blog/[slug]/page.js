'use client';

import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaShareAlt } from 'react-icons/fa';

const BlogDetailPage = () => {
  const params = useParams();
  const slug = params.slug;

  // Blog data with full content
  const blogsData = {
    'benefits-of-in-home-care-for-seniors': {
      title: 'The Benefits of In-Home Care for Seniors',
      subtitle: 'Improving Quality of Life Through Professional Home Care',
      category: 'Senior Care',
      author: 'Dr. Sarah Mitchell',
      date: 'December 1, 2024',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1200&q=80',
      gradient: 'from-[#339967] to-[#1495d9]',
      excerpt: 'Discover how in-home care services can improve quality of life for seniors while allowing them to maintain independence and dignity in familiar surroundings.',
      content: [
        {
          heading: 'Introduction',
          text: 'As our loved ones age, one of the most important decisions families face is determining the best care approach. In-home care has emerged as a preferred option for many seniors and their families, offering a unique blend of professional support and personal comfort. This comprehensive guide explores the numerous benefits of in-home care and why it might be the right choice for your family.',
        },
        {
          heading: 'Maintaining Independence and Dignity',
          text: 'One of the most significant advantages of in-home care is that it allows seniors to maintain their independence while receiving the support they need. Living at home means continuing daily routines, sleeping in their own bed, and being surrounded by familiar belongings and memories. This sense of normalcy is crucial for mental and emotional well-being.',
        },
        {
          heading: 'Personalized One-on-One Attention',
          text: 'Unlike facility-based care where staff members must divide their attention among multiple residents, in-home care provides dedicated one-on-one support. Care plans are customized to meet individual needs, preferences, and schedules. This personalized approach ensures that seniors receive the specific assistance they require, whether it\'s help with daily activities, medication management, or companionship.',
        },
        {
          heading: 'Comfort of Familiar Surroundings',
          text: 'There\'s no place like home, and this is especially true for seniors. Familiar surroundings provide comfort, security, and a sense of belonging. Being at home means staying connected to the community, maintaining relationships with neighbors, and continuing to participate in local activities. The emotional benefits of remaining in a cherished environment cannot be overstated.',
        },
        {
          heading: 'Family Involvement and Peace of Mind',
          text: 'In-home care facilitates greater family involvement in the care process. Family members can visit freely, participate in care decisions, and maintain close relationships without the constraints of facility visiting hours. Professional caregivers also provide regular updates, giving families peace of mind knowing their loved ones are safe and well-cared for.',
        },
        {
          heading: 'Cost-Effective Solution',
          text: 'While costs vary depending on the level of care needed, in-home care can often be more economical than residential facility care. Families only pay for the specific services required, whether that\'s a few hours per day or around-the-clock care. This flexibility allows for better budget management and cost control.',
        },
        {
          heading: 'Reduced Risk of Infections',
          text: 'Staying at home significantly reduces exposure to contagious illnesses that can spread quickly in communal living environments. This is particularly important for seniors with compromised immune systems or chronic health conditions. The one-on-one nature of in-home care minimizes health risks while maintaining social interaction.',
        },
        {
          heading: 'Conclusion',
          text: 'In-home care offers a compassionate, flexible, and effective solution for seniors who need assistance with daily living. By choosing in-home care, families can ensure their loved ones receive quality care while maintaining independence, dignity, and quality of life. If you\'re considering care options for a senior family member, in-home care deserves serious consideration as a path to comfortable, personalized support.',
        },
      ],
    },
    'caring-for-loved-ones-with-dementia': {
      title: 'Caring for Loved Ones with Dementia: A Comprehensive Guide',
      subtitle: 'Essential Tips and Strategies for Dementia Caregivers',
      category: 'Dementia Care',
      author: 'Emily Roberts',
      date: 'November 28, 2024',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1581594549595-35f6edc7b762?w=1200&q=80',
      gradient: 'from-[#1495d9] to-[#339967]',
      excerpt: 'Essential tips and strategies for family caregivers supporting loved ones with dementia, including communication techniques and daily care routines.',
      content: [
        {
          heading: 'Understanding Dementia',
          text: 'Dementia is not a specific disease but rather a general term for a decline in mental ability severe enough to interfere with daily life. Alzheimer\'s disease is the most common type of dementia, but there are many forms. Understanding the condition is the first step in providing effective care and support for your loved one.',
        },
        {
          heading: 'Creating a Safe Home Environment',
          text: 'Safety is paramount when caring for someone with dementia. Simple modifications can make a significant difference: remove tripping hazards, install adequate lighting, secure potentially dangerous items, and consider safety devices like door alarms. A safe environment reduces stress for both the caregiver and the person with dementia.',
        },
        {
          heading: 'Effective Communication Strategies',
          text: 'Communication challenges are common in dementia care. Use simple, clear sentences and speak slowly. Make eye contact and use gentle touch to maintain connection. Be patient and allow extra time for responses. Avoid arguing or correcting mistakes; instead, redirect attention when needed. Non-verbal communication often becomes more important as dementia progresses.',
        },
        {
          heading: 'Establishing Daily Routines',
          text: 'Consistency and routine provide comfort and reduce anxiety for people with dementia. Establish regular schedules for meals, activities, and bedtime. Familiar routines help maintain a sense of normalcy and can reduce confusion. However, remain flexible – some days will be better than others, and that\'s okay.',
        },
        {
          heading: 'Managing Challenging Behaviors',
          text: 'Dementia can cause frustrating behaviors like aggression, wandering, or sundowning. Remember that behavior is a form of communication. Try to identify triggers and patterns. Respond with patience and reassurance rather than confrontation. Sometimes distraction or redirection is the most effective approach. Don\'t take behaviors personally – they\'re symptoms of the disease, not personal attacks.',
        },
        {
          heading: 'Engaging Activities and Stimulation',
          text: 'Meaningful activities enhance quality of life and can slow cognitive decline. Adapt activities to current abilities: music therapy, simple crafts, looking at photo albums, or gentle exercise. Focus on the process, not the outcome. Activities should be enjoyable and provide a sense of accomplishment without causing frustration.',
        },
        {
          heading: 'Self-Care for Caregivers',
          text: 'Caring for someone with dementia is emotionally and physically demanding. Caregiver burnout is real and common. Take regular breaks, accept help from others, join support groups, and consider respite care services. Taking care of yourself isn\'t selfish – it\'s essential for providing quality care long-term.',
        },
        {
          heading: 'Seeking Professional Support',
          text: 'You don\'t have to do this alone. Professional in-home care services can provide valuable support, from a few hours of respite to full-time care. Trained dementia caregivers bring expertise, compassion, and fresh energy to the caregiving journey. Don\'t hesitate to reach out for help – it\'s a sign of strength, not weakness.',
        },
      ],
    },
    'importance-of-respite-care-for-family-caregivers': {
      title: 'The Importance of Respite Care for Family Caregivers',
      subtitle: 'Preventing Burnout While Ensuring Quality Care',
      category: 'Caregiver Support',
      author: 'Michael Chen',
      date: 'November 25, 2024',
      readTime: '7 min read',
      image: 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=1200&q=80',
      gradient: 'from-[#339967] to-[#1495d9]',
      excerpt: 'Learn why taking breaks is crucial for family caregivers and how respite care services can prevent burnout while ensuring quality care for your loved ones.',
      content: [
        {
          heading: 'What is Respite Care?',
          text: 'Respite care is temporary care provided to give family caregivers a much-needed break from their caregiving responsibilities. This service can range from a few hours to several days or weeks, allowing caregivers time to rest, recharge, and attend to their own needs. Respite care can take place at home, in adult day centers, or residential facilities.',
        },
        {
          heading: 'The Reality of Caregiver Stress',
          text: 'Family caregiving, while rewarding, is one of the most demanding roles anyone can undertake. Studies show that caregivers experience higher rates of depression, anxiety, and physical health problems compared to non-caregivers. The 24/7 nature of caregiving can lead to exhaustion, social isolation, and neglect of one\'s own health needs. Recognizing these challenges is the first step toward addressing them.',
        },
        {
          heading: 'Why Respite Care Matters',
          text: 'Taking regular breaks through respite care isn\'t a luxury – it\'s a necessity. Respite care helps prevent caregiver burnout, reduces stress and health problems, maintains family relationships, and allows caregivers to tend to personal responsibilities. Importantly, well-rested caregivers provide better quality care. When you take care of yourself, you\'re better equipped to care for your loved one.',
        },
        {
          heading: 'Types of Respite Care Services',
          text: 'Respite care comes in various forms to meet different needs and preferences. In-home respite care brings professional caregivers to your home. Adult day programs offer supervised activities in a community setting. Short-term residential respite provides temporary stays in assisted living or nursing facilities. Emergency respite addresses unexpected situations. The key is finding the option that works best for your family.',
        },
        {
          heading: 'Overcoming Guilt and Hesitation',
          text: 'Many family caregivers feel guilty about taking breaks or worry that no one else can provide adequate care. These feelings are natural but misguided. Taking time for yourself doesn\'t mean you love your family member any less. Professional respite caregivers are trained, experienced, and capable. Your loved one benefits from the fresh energy and perspective that respite caregivers bring.',
        },
        {
          heading: 'Planning for Regular Respite',
          text: 'The most effective approach to respite care is making it a regular part of your caregiving routine rather than waiting until you\'re completely overwhelmed. Schedule respite care in advance – weekly, monthly, or whatever frequency works for your situation. Use respite time intentionally: rest, pursue hobbies, maintain friendships, attend medical appointments, or simply enjoy activities you love.',
        },
        {
          heading: 'Finding Quality Respite Care',
          text: 'When selecting respite care services, look for licensed and insured providers, trained and experienced caregivers, positive reviews and references, flexible scheduling options, and services tailored to your loved one\'s specific needs. Don\'t hesitate to interview providers and ask questions. The right fit makes all the difference.',
        },
        {
          heading: 'Making Respite Care a Priority',
          text: 'Respite care is not a sign of weakness or failure – it\'s a smart, responsible caregiving strategy. By taking regular breaks and caring for yourself, you\'re ensuring that you can continue providing quality care for the long term. Your health and well-being matter. Remember: you can\'t pour from an empty cup. Respite care helps keep your cup filled so you can continue caring for your loved one with patience, compassion, and energy.',
        },
      ],
    },
  };

  const blog = blogsData[slug] || blogsData['benefits-of-in-home-care-for-seniors'];

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
              className={`absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br ${blog.gradient} rounded-full blur-3xl`}
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Back Button */}
            <Link href="/#blogs">
              <motion.button
                whileHover={{ x: -5 }}
                className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all border border-gray-200"
              >
                <FaArrowLeft className="text-[#339967]" />
                <span className="font-semibold text-gray-700">Back to Blog</span>
              </motion.button>
            </Link>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-max flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-gray-100 mb-6"
            >
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${blog.gradient} animate-pulse`} />
              <span className="text-sm font-semibold text-gray-700">{blog.category}</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r ${blog.gradient} bg-clip-text text-transparent`}
            >
              {blog.title}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed mb-8"
            >
              {blog.subtitle}
            </motion.p>

            {/* Meta Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-200"
            >
              <div className="flex items-center gap-2 text-gray-600">
                <FaUser className="text-[#339967]" />
                <span className="font-medium">{blog.author}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaCalendarAlt className="text-[#1495d9]" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FaClock className="text-[#339967]" />
                <span>{blog.readTime}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* Image */}
              <div className="relative aspect-[21/9]">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent`} />
              </div>
            </div>
          </motion.div>
        </section>

        {/* Content */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-16">
          <div className="relative max-w-6xl mx-auto">
            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-white rounded-3xl shadow-lg p-8 md:p-12 space-y-8"
            >
              {blog.content.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <h2 className={`text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r ${blog.gradient} bg-clip-text text-transparent`}>
                    {section.heading}
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {section.text}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Share Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="mt-12 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-3xl p-8 border border-[#339967]/20"
            >
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${blog.gradient} flex items-center justify-center`}>
                    <FaShareAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Share this article</h3>
                    <p className="text-sm text-gray-600">Help others discover valuable care insights</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-[#1877f2] flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaFacebook className="text-white text-xl" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-[#1da1f2] flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaTwitter className="text-white text-xl" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-[#0077b5] flex items-center justify-center shadow-lg hover:shadow-xl transition-all"
                  >
                    <FaLinkedin className="text-white text-xl" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-12 text-center bg-white rounded-3xl shadow-xl p-12"
            >
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                Need Professional Care Services?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our experienced team is here to provide compassionate, personalized care for your loved ones.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-10 py-5 bg-gradient-to-r ${blog.gradient} text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-3xl transition-all`}
              >
                Schedule a Free Consultation
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetailPage;
