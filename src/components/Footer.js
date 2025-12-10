"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaHeartbeat,
} from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Mission", href: "/mission" },
      { name: "Our Vision", href: "/vision" },
      { name: "Careers", href: "/careers" },
      { name: "Blog", href: "#blog" },
    ],
    services: [
      { name: "Personal Care", href: "#personal-care" },
      { name: "Companionship", href: "#companionship" },
      { name: "Medical Support", href: "#medical-support" },
      { name: "Respite Care", href: "#respite-care" },
      { name: "VIP Program", href: "/vip" },
    ],
    resources: [
      { name: "CDHCI", href: "/cdhci" },
      { name: "FAQs", href: "/faq" },
      { name: "Contact Us", href: "#contact" },
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
    ],
  };

  const socialLinks = [
    {
      icon: FaFacebookF,
      href: "#",
      label: "Facebook",
      gradient: "from-[#339967] to-[#1495d9]",
    },
    {
      icon: FaTwitter,
      href: "#",
      label: "Twitter",
      gradient: "from-[#1495d9] to-[#339967]",
    },
    {
      icon: FaInstagram,
      href: "#",
      label: "Instagram",
      gradient: "from-[#339967] to-[#1495d9]",
    },
    {
      icon: FaLinkedinIn,
      href: "#",
      label: "LinkedIn",
      gradient: "from-[#1495d9] to-[#339967]",
    },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 30, repeat: Infinity }}
          className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-gradient-to-br from-[#339967] to-[#1495d9] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.05, 0.03, 0.05],
          }}
          transition={{ duration: 35, repeat: Infinity }}
          className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-gradient-to-tl from-[#1495d9] to-[#339967] rounded-full blur-3xl"
        />
      </div>

      {/* Floating Healthcare Icons */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-20 text-[#339967]/10 text-6xl"
      >
        <FaHeartbeat />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        className="absolute bottom-32 left-20 text-[#1495d9]/10 text-5xl"
      >
        <BsStars />
      </motion.div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Brand Section */}
            <div className="lg:col-span-4 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div
                  className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#339967] to-[#1495d9] p-1 shadow-xl"
                  style={{ boxShadow: "0 10px 30px rgba(51, 153, 103, 0.3)" }}
                >
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                    <Image
                      src="/images/home-care-logo.jpeg"
                      alt="Comfort Home Care Services"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
                    Comfort Home Care
                  </h3>
                  <p className="text-sm text-gray-400">Services</p>
                </div>
              </motion.div>

              <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                Providing compassionate, professional home care services to
                families across Calgary and surrounding areas since 2013.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -3 }}
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center shadow-lg hover:shadow-xl transition-all`}
                      aria-label={social.label}
                    >
                      <IconComponent className="text-lg" />
                    </motion.a>
                  );
                })}
              </div>

              {/* Certifications Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#339967]/10 to-[#1495d9]/10 rounded-full border border-[#339967]/20"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-[#339967] to-[#1495d9] animate-pulse" />
                <span className="text-sm font-semibold text-[#339967]">
                  Licensed & Certified
                </span>
              </motion.div>
            </div>

            {/* Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-[#339967] to-[#1495d9] bg-clip-text text-transparent">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#339967] transition-colors flex items-center gap-2 group text-sm sm:text-base"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-[#339967] to-[#1495d9] group-hover:w-4 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2"
            >
              <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-[#1495d9] to-[#339967] bg-clip-text text-transparent">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#1495d9] transition-colors flex items-center gap-2 group text-sm sm:text-base"
                    >
                      <span className="w-0 h-0.5 bg-gradient-to-r from-[#1495d9] to-[#339967] group-hover:w-4 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-4 space-y-4"
            >
              <h4 className="text-lg font-bold mb-6 bg-gradient-to-r from-[#1495d9] to-[#339967] bg-clip-text text-transparent">
                Contact
              </h4>

              <a
                href="tel:+14035602518"
                className="flex items-center gap-3 text-gray-400 hover:text-[#339967] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#339967] to-[#1495d9] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <FaPhone className="text-base text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-500">
                    Phone
                  </span>
                  <span className="text-sm sm:text-base font-medium">
                    (403) 560-2518
                  </span>
                </div>
              </a>

              <a
                href="mailto:info@comforthomecare.com"
                className="flex items-center gap-3 text-gray-400 hover:text-[#1495d9] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1495d9] to-[#339967] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <FaEnvelope className="text-base text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-500">
                    Email
                  </span>
                  <span className="text-sm sm:text-base font-medium break-all">
                    info@comforthomecare.com
                  </span>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=495+Savannah+Way+NE+Calgary+AB+T3J+2L1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-[#339967] transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#339967] to-[#1495d9] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                  <FaMapMarkerAlt className="text-base text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-500">
                    Address
                  </span>
                  <span className="text-sm sm:text-base font-medium leading-relaxed">
                    495 Savannah Way NE
                    <br />
                    Calgary, AB T3J 2L1
                  </span>
                </div>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800">
          <div className="py-6 sm:py-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-400 text-xs sm:text-sm text-center md:text-left"
              >
                © {currentYear} Comfort Home Care Services. All rights reserved.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-400"
              >
                <span>Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-red-500"
                >
                  <FaHeart />
                </motion.div>
                <span>in Calgary</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex gap-4 sm:gap-6 text-xs sm:text-sm"
              >
                <Link
                  href="#privacy"
                  className="text-gray-400 hover:text-[#339967] transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#terms"
                  className="text-gray-400 hover:text-[#339967] transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#accessibility"
                  className="text-gray-400 hover:text-[#339967] transition-colors"
                >
                  Accessibility
                </Link>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#339967] to-[#1495d9] rounded-full shadow-2xl flex items-center justify-center z-50 group"
          style={{ boxShadow: "0 10px 40px rgba(51, 153, 103, 0.4)" }}
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:-translate-y-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
