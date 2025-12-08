'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPhone, FiMenu, FiX, FiChevronDown } from 'react-icons/fi';
import { FaHeartbeat } from 'react-icons/fa';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      href: '#',
      dropdown: [
        { name: 'Our Mission', href: '/mission' },
        { name: 'Our Vision', href: '/vision' },
      ],
    },
    {
      name: 'Services',
      href: '#',
      dropdown: [
        { name: 'Alzheimer\'s & Dementia Support', href: '/services/alzheimers-dementia-support' },
        { name: 'Health Care Aide Services', href: '/services/health-care-aide-services' },
        { name: 'Companion Care Services', href: '/services/companion-care-services' },
        { name: 'Diabetes Care Services', href: '/services/diabetes-care-services' },
        { name: 'Hospice & Palliative Care', href: '/services/hospice-palliative-care' },
        { name: 'Nursing Care Services', href: '/services/nursing-care-services' },
        { name: 'Post-Rehabilitative Support', href: '/services/post-rehabilitative-support' },
        { name: 'Respite Care', href: '/services/respite-care' },
        { name: 'Cleaning Services', href: '/services/cleaning-services' },
      ],
    },
    { name: 'Careers', href: '/careers' },
    { name: 'FAQs', href: '/faq' },
    { name: 'Blog', href: '/#blog' },
    { name: 'Contact Us', href: '#contact' },
    { name: 'CDHCI', href: '#cdhci' },
    { name: 'VIP Program', href: '#vip' },
  ];

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    setActiveDropdown(null);
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <>
      {/* Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#339967] to-[#1495d9] z-50"></div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-1 left-0 right-0 z-40 bg-white shadow-lg border-b border-gray-200/50"
      >
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-[#339967] to-[#1495d9] p-1 shadow-lg" style={{ boxShadow: '0 10px 30px rgba(51, 153, 103, 0.3)' }}>
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src="/images/home-care-logo.jpeg"
                    alt="Comfort Home Care Services"
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-lg font-bold bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
                  Comfort Home Care
                </h1>
                <p className="text-xs text-gray-600">Calgary, AB</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group">
                  {link.dropdown ? (
                    <>
                      <button
                        className="px-4 py-2 text-base font-semibold bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent hover:from-[#1495d9] hover:to-[#339967] transition-all flex items-center gap-1 group"
                        onMouseEnter={() => setActiveDropdown(index)}
                      >
                        {link.name}
                        <FiChevronDown className="text-[#339967] group-hover:rotate-180 transition-transform duration-300" />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            onMouseLeave={() => setActiveDropdown(null)}
                            className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                          >
                            {link.dropdown.map((item, idx) => (
                              <Link
                                key={idx}
                                href={item.href}
                                className="block px-4 py-3 text-sm font-medium bg-gradient-to-r from-gray-700 to-gray-700 bg-clip-text text-transparent hover:from-[#339967] hover:to-[#1495d9] transition-all"
                              >
                                {item.name}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className="px-4 py-2 text-base font-semibold bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent hover:from-[#1495d9] hover:to-[#339967] transition-all relative group"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Phone & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a
                href="tel:+14035602518"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-gray-700 hover:text-[#339967] transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#339967] to-[#1495d9] flex items-center justify-center shadow-lg" style={{ boxShadow: '0 10px 20px rgba(51, 153, 103, 0.3)' }}>
                  <FiPhone className="text-white" />
                </div>
                <span className="font-semibold">(403) 560-2518</span>
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-[#339967] to-[#1495d9] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                style={{ boxShadow: '0 10px 30px rgba(51, 153, 103, 0.4)' }}
              >
                <FaHeartbeat />
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleDrawer}
              className="lg:hidden w-12 h-12 rounded-full bg-gradient-to-br from-[#339967] to-[#1495d9] flex items-center justify-center shadow-lg"
            >
              {isDrawerOpen ? (
                <FiX className="text-white text-2xl" />
              ) : (
                <FiMenu className="text-white text-2xl" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Healthcare Decorative Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute top-2 right-32 w-3 h-3 text-[#339967]/30"
        >
          <FaHeartbeat />
        </motion.div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleDrawer}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed inset-0 w-full h-full bg-white shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.03, 0.06, 0.03],
                  }}
                  transition={{ duration: 20, repeat: Infinity }}
                  className="absolute -top-1/4 -right-1/4 w-96 h-96 bg-gradient-to-br from-[#339967]/20 to-[#1495d9]/20 rounded-full blur-3xl"
                />
                <motion.div
                  animate={{
                    scale: [1.2, 1, 1.2],
                    rotate: [360, 180, 0],
                    opacity: [0.06, 0.03, 0.06],
                  }}
                  transition={{ duration: 25, repeat: Infinity }}
                  className="absolute -bottom-1/4 -left-1/4 w-96 h-96 bg-gradient-to-br from-[#1495d9]/20 to-[#339967]/20 rounded-full blur-3xl"
                />
              </div>

              {/* Drawer Header */}
              <div className="relative z-10 p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#339967] to-[#1495d9] p-1 shadow-xl">
                      <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                        <Image
                          src="/images/home-care-logo.jpeg"
                          alt="Logo"
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h2 className="font-bold bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent text-lg">Comfort Home Care</h2>
                      <p className="text-xs text-gray-600">Calgary, AB</p>
                    </div>
                  </div>
                  <motion.button
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleDrawer}
                    className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-all"
                  >
                    <FiX className="text-gray-700 text-2xl" />
                  </motion.button>
                </div>
              </div>

              {/* Drawer Links */}
              <div className="relative z-10 p-6 space-y-3 flex-1">
                {navLinks.map((link, index) => (
                  <div key={index}>
                    {link.dropdown ? (
                      <>
                        <motion.button
                          whileTap={{ scale: 0.98 }}
                          onClick={() => toggleDropdown(index)}
                          className="w-full flex items-center justify-between px-5 py-4 rounded-2xl border border-gray-200 hover:border-[#339967] transition-all font-semibold bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent"
                        >
                          {link.name}
                          <motion.div
                            animate={{ rotate: activeDropdown === index ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FiChevronDown className="text-xl text-[#339967]" />
                          </motion.div>
                        </motion.button>
                        <AnimatePresence>
                          {activeDropdown === index && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden ml-4 mt-3 space-y-2"
                            >
                              {link.dropdown.map((item, idx) => (
                                <Link
                                  key={idx}
                                  href={item.href}
                                  onClick={toggleDrawer}
                                  className="block px-5 py-3 rounded-xl border border-gray-200 hover:border-[#339967] transition-all font-medium bg-gradient-to-r from-gray-700 to-gray-700 bg-clip-text text-transparent hover:from-[#339967] hover:to-[#1495d9]"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={toggleDrawer}
                        className="block px-5 py-4 rounded-2xl border border-gray-200 hover:border-[#339967] transition-all font-semibold bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="relative z-10 p-6 space-y-4 border-t border-gray-200 mt-auto">
                <a
                  href="tel:+14035602518"
                  className="flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-[#339967] to-[#1495d9] shadow-lg hover:shadow-xl transition-all group"
                >
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FiPhone className="text-[#339967]" />
                  </div>
                  <span className="font-bold text-white">(403) 560-2518</span>
                </a>
                <button className="w-full px-6 py-4 bg-white rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-[#339967] bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
                  <FaHeartbeat className="text-[#339967]" />
                  Get Started
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
