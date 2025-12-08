'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaCalendar, FaHeart, FaDollarSign, FaBriefcase, FaUsers, FaGraduationCap, FaUpload, FaPhone, FaEnvelope, FaUser, FaPaperPlane, FaCheckCircle, FaTimes } from 'react-icons/fa';
import { BsStars, BsLightbulb } from 'react-icons/bs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Careers = () => {
  const heroRef = useRef(null);
  const benefitsRef = useRef(null);
  const formRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: '-100px' });
  const benefitsInView = useInView(benefitsRef, { once: true, margin: '-100px' });
  const formInView = useInView(formRef, { once: true, margin: '-100px' });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualifications: '',
  });

  const [resume, setResume] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const benefits = [
    {
      icon: FaCalendar,
      title: 'Flexible Schedules & Convenient Assignments',
      description: 'You will have an opportunity to identify the schedule that fits best with your lifestyle',
      gradient: 'from-[#339967] to-[#1495d9]',
      delay: 0.1,
    },
    {
      icon: FaHeart,
      title: 'Ongoing Training',
      description: 'Advance with a comprehensive learning platform that includes orientation and on-going training',
      gradient: 'from-[#1495d9] to-[#339967]',
      delay: 0.2,
    },
    {
      icon: FaDollarSign,
      title: 'Competitive Wages & Benefits',
      description: 'Competitive wages, benefit packages, and recognitions are offered',
      gradient: 'from-[#339967] to-[#1495d9]',
      delay: 0.3,
    },
    {
      icon: FaBriefcase,
      title: 'Career Growth Opportunities',
      description: 'Build your career with advancement opportunities and professional development programs',
      gradient: 'from-[#1495d9] to-[#339967]',
      delay: 0.4,
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
      if (!allowedTypes.includes(file.type)) {
        alert('Please upload a PDF or Word document');
        return;
      }

      // Validate file size (5MB max)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      setResume({
        file,
        name: file.name,
        size: (file.size / 1024).toFixed(2) + ' KB',
      });
    }
  };

  const removeResume = () => {
    setResume(null);
    const fileInput = document.getElementById('resume');
    if (fileInput) fileInput.value = '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.phone || !formData.qualifications) {
      alert('Please fill in all required fields');
      return;
    }

    if (!resume) {
      alert('Please upload your resume');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    setTimeout(() => {
      console.log('Application submitted:', { ...formData, resume: resume.name });
      setIsSubmitting(false);
      setSubmitStatus('success');

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', qualifications: '' });
        setResume(null);
        setSubmitStatus(null);
        const fileInput = document.getElementById('resume');
        if (fileInput) fileInput.value = '';
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-48 md:pb-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

          {/* Floating Icons */}
          {[...Array(15)].map((_, i) => (
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full border border-[#339967]/30 mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <BsStars className="text-[#339967] text-lg" />
              </motion.div>
              <span className="text-sm font-semibold text-[#339967]">Join Our Team</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8"
            >
              <span className="text-gray-900">Build Your Career in</span>
              <br />
              <span className="bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
                Compassionate Care
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10"
            >
              Make a meaningful difference in people's lives while enjoying competitive benefits, flexible schedules, and endless growth opportunities
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#application"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-[#339967] to-[#1495d9] text-white rounded-full font-bold text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(51,153,103,0.4)] transition-all"
              >
                <span>Apply Now</span>
                <FaPaperPlane className="text-xl" />
              </motion.a>

              <motion.a
                href="#benefits"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-700 rounded-full font-bold text-lg border-2 border-gray-200 hover:border-[#339967] shadow-lg hover:shadow-xl transition-all"
              >
                <span>View Benefits</span>
                <BsLightbulb className="text-xl" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section ref={benefitsRef} id="benefits" className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-[#1495d9]/5">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.03, 0.06, 0.03],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-[#339967]/20 to-[#1495d9]/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.06, 0.03, 0.06],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-tl from-[#1495d9]/20 to-[#339967]/20 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
            {/* Left Content - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={benefitsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.2, type: 'spring' }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full border border-[#339967]/30"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#339967] to-[#1495d9] animate-pulse" />
                <span className="text-sm font-semibold text-[#339967] uppercase tracking-wide">Why Join Us</span>
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                  <span className="text-gray-900">Benefits of Working</span>
                  <br />
                  <span className="bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
                    With Comfort Home Care
                  </span>
                </h2>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="text-gray-600 text-base sm:text-lg leading-relaxed"
              >
                Caregivers are provided with an opportunity to make a powerful impact on peoples' lives and to make a difference every single day
              </motion.p>

              {/* Benefits List */}
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  const marginClass = index === 0 ? '' : index === 1 ? 'md:ml-8' : index === 2 ? 'md:ml-16' : 'md:ml-24';
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + benefit.delay }}
                      className={`relative ${marginClass}`}
                    >
                      <div className="relative pl-6 pr-4 py-4 bg-white/50 backdrop-blur-sm rounded-r-2xl border border-gray-100 shadow-md hover:shadow-lg transition-all group">
                        {/* Gradient Left Border */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${benefit.gradient}`} />

                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className={`shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${benefit.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                            <IconComponent className="text-2xl text-white" />
                          </div>

                          {/* Content */}
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {benefit.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {benefit.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={benefitsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="relative aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=1978&auto=format&fit=crop"
                    alt="Healthcare Professional"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#339967]/30 via-transparent to-transparent" />
                </div>

                {/* Decorative Corner Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#339967] to-[#1495d9] rounded-full blur-2xl opacity-30" />
              </div>

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-2xl p-4 border-2 border-[#339967]/20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#339967] to-[#1495d9] flex items-center justify-center">
                    <FaUsers className="text-2xl text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">100+</div>
                    <div className="text-xs text-gray-600 font-medium">Team Members</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section ref={formRef} id="application" className="relative py-16 sm:py-20 md:py-24 overflow-hidden">
        {/* Background Elements */}
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

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full border border-[#339967]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#339967] to-[#1495d9] animate-pulse" />
              <span className="text-sm font-semibold text-[#339967]">Start Your Journey</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Apply Today
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take the first step towards a rewarding career in home healthcare
            </p>
          </motion.div>

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#339967] to-[#1495d9] rounded-3xl opacity-20 blur-xl" />

            <div className="relative bg-white rounded-3xl p-8 sm:p-10 md:p-12 shadow-2xl border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <FaUser className="text-[#339967]" />
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#339967] focus:ring-4 focus:ring-[#339967]/10 transition-all outline-none text-gray-900 placeholder-gray-400"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email and Phone */}
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Email Field */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <FaEnvelope className="text-[#1495d9]" />
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#1495d9] focus:ring-4 focus:ring-[#1495d9]/10 transition-all outline-none text-gray-900 placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  {/* Phone Field */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                      <FaPhone className="text-[#339967]" />
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#339967] focus:ring-4 focus:ring-[#339967]/10 transition-all outline-none text-gray-900 placeholder-gray-400"
                      placeholder="(403) 555-0123"
                    />
                  </div>
                </div>

                {/* Qualifications Field */}
                <div className="space-y-2">
                  <label htmlFor="qualifications" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <FaGraduationCap className="text-[#1495d9]" />
                    Qualifications & Experience <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="qualifications"
                    name="qualifications"
                    value={formData.qualifications}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-5 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:border-[#1495d9] focus:ring-4 focus:ring-[#1495d9]/10 transition-all outline-none text-gray-900 placeholder-gray-400 resize-none"
                    placeholder="Tell us about your education, certifications, relevant experience, and what makes you a great fit for our team..."
                  />
                </div>

                {/* Resume Upload */}
                <div className="space-y-2">
                  <label htmlFor="resume" className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                    <FaUpload className="text-[#339967]" />
                    Upload Resume <span className="text-red-500">*</span>
                  </label>

                  {!resume ? (
                    <div className="relative">
                      <input
                        type="file"
                        id="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="hidden"
                      />
                      <label
                        htmlFor="resume"
                        className="flex flex-col items-center justify-center w-full px-6 py-10 bg-gradient-to-br from-gray-50 to-[#339967]/5 border-2 border-dashed border-gray-300 rounded-xl cursor-pointer hover:border-[#339967] hover:bg-[#339967]/5 transition-all group"
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#339967] to-[#1495d9] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                          <FaUpload className="text-2xl text-white" />
                        </div>
                        <p className="text-base font-semibold text-gray-700 mb-1">
                          Click to upload your resume
                        </p>
                        <p className="text-sm text-gray-500">
                          PDF or Word document (Max 5MB)
                        </p>
                      </label>
                    </div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-between p-4 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-xl border border-[#339967]/30"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#339967] to-[#1495d9] flex items-center justify-center">
                          <FaCheckCircle className="text-xl text-white" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{resume.name}</p>
                          <p className="text-sm text-gray-600">{resume.size}</p>
                        </div>
                      </div>
                      <motion.button
                        type="button"
                        onClick={removeResume}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-10 h-10 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-colors"
                      >
                        <FaTimes className="text-red-600" />
                      </motion.button>
                    </motion.div>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitStatus === 'success'}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full px-8 py-5 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'bg-green-500 text-white'
                      : 'bg-gradient-to-r from-[#339967] to-[#1495d9] text-white hover:shadow-[0_10px_40px_rgba(51,153,103,0.4)]'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-6 h-6 border-3 border-white border-t-transparent rounded-full"
                      />
                      <span>Submitting Application...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <FaCheckCircle className="text-2xl" />
                      <span>Application Submitted Successfully!</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <FaPaperPlane className="text-xl" />
                    </>
                  )}
                </motion.button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border border-green-200 rounded-xl"
                  >
                    <p className="text-green-700 text-center font-medium">
                      Thank you for your application! We'll review your information and get back to you soon.
                    </p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;
