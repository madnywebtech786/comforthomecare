'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaUpload, FaTimes, FaFileAlt, FaHeartbeat } from 'react-icons/fa';
import { BsStars } from 'react-icons/bs';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      content: '(403) 560-2518',
      link: 'tel:+14035602518',
      gradient: 'from-[#339967] to-[#1495d9]',
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'info@comforthomecare.com',
      link: 'mailto:info@comforthomecare.com',
      gradient: 'from-[#1495d9] to-[#339967]',
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Address',
      content: '495 Savannah Way NE, Calgary, AB T3J 2L1',
      link: 'https://maps.google.com/?q=495+Savannah+Way+NE+Calgary+AB+T3J+2L1',
      gradient: 'from-[#339967] to-[#1495d9]',
    },
    {
      icon: FaClock,
      title: 'Hours',
      content: '24/7 Support Available',
      link: null,
      gradient: 'from-[#1495d9] to-[#339967]',
    },
  ];

  const services = [
    'Personal Care',
    'Companionship',
    'Medical Support',
    'Respite Care',
    'Alzheimer\'s Care',
    'Post-Surgery Care',
    'Other',
  ];

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const newFiles = selectedFiles.map(file => ({
      file,
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: (file.size / 1024).toFixed(2) + ' KB',
      preview: URL.createObjectURL(file),
    }));
    setFiles([...files, ...newFiles]);
  };

  const removeFile = (id) => {
    setFiles(files.filter(f => f.id !== id));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData, files);
  };

  return (
    <section ref={ref} id="contact" className="relative py-16 sm:py-20 md:py-24 overflow-hidden bg-gradient-to-br from-gray-50 via-[#339967]/5 to-[#1495d9]/10">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#339967]/20 to-[#1495d9]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#1495d9]/20 to-[#339967]/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-20 text-[#339967]/30 text-5xl"
      >
        <FaHeartbeat />
      </motion.div>
      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-32 left-10 text-[#1495d9]/30 text-4xl"
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
            <span className="text-sm font-semibold text-[#339967]">Get In Touch</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
              Contact Us Today
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Ready to start your journey with us? We're here to answer all your questions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                        <IconComponent className="text-xl sm:text-2xl text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs sm:text-sm text-gray-500 font-medium mb-1">{info.title}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className={`text-base sm:text-lg font-semibold bg-gradient-to-r ${info.gradient} bg-clip-text text-transparent hover:underline`}
                          >
                            {info.content}
                          </a>
                        ) : (
                          <div className="text-base sm:text-lg font-semibold text-gray-800">{info.content}</div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-br from-[#339967] to-[#1495d9] rounded-3xl p-6 sm:p-8 shadow-2xl text-white relative overflow-hidden"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                className="absolute -bottom-12 -left-12 w-48 h-48 bg-white/10 rounded-full"
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <FaHeartbeat className="text-2xl" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold">Why Choose Us?</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Free consultation & assessment',
                    'Flexible scheduling options',
                    'Licensed & insured professionals',
                    'Personalized care plans',
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + idx * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm sm:text-base">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100">
              <div className="space-y-4 sm:space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#339967] focus:ring-4 focus:ring-[#339967]/10 outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Phone & Email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#339967] focus:ring-4 focus:ring-[#339967]/10 outline-none transition-all"
                      placeholder="(403) 555-1234"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#339967] focus:ring-4 focus:ring-[#339967]/10 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#339967] focus:ring-4 focus:ring-[#339967]/10 outline-none transition-all bg-white"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, idx) => (
                      <option key={idx} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#339967] focus:ring-4 focus:ring-[#339967]/10 outline-none transition-all resize-none"
                    placeholder="Tell us about your care needs..."
                  />
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Attachments (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      multiple
                      onChange={handleFileChange}
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    />
                    <label
                      htmlFor="file-upload"
                      className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl border-2 border-dashed border-gray-300 hover:border-[#339967] cursor-pointer transition-all bg-gray-50 hover:bg-[#339967]/5 group"
                    >
                      <FaUpload className="text-gray-400 group-hover:text-[#339967] transition-colors" />
                      <span className="text-gray-600 group-hover:text-[#339967] font-medium text-sm sm:text-base">
                        Click to upload files
                      </span>
                    </label>
                  </div>

                  {/* File Preview */}
                  {files.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {files.map((file) => (
                        <motion.div
                          key={file.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 20 }}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#339967] to-[#1495d9] flex items-center justify-center">
                              <FaFileAlt className="text-white" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-gray-700">{file.name}</div>
                              <div className="text-xs text-gray-500">{file.size}</div>
                            </div>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(file.id)}
                            className="w-8 h-8 rounded-full bg-red-100 hover:bg-red-200 flex items-center justify-center transition-colors"
                          >
                            <FaTimes className="text-red-600 text-sm" />
                          </button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-[#339967] to-[#1495d9] text-white rounded-xl font-semibold shadow-2xl hover:shadow-3xl transition-all flex items-center justify-center gap-2 text-base sm:text-lg group"
                  style={{ boxShadow: '0 20px 50px rgba(51, 153, 103, 0.4)' }}
                >
                  <span>Send Message</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaPaperPlane className="group-hover:rotate-12 transition-transform" />
                  </motion.div>
                </motion.button>

                <p className="text-sm text-gray-500 text-center">
                  We'll get back to you within 24 hours
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
