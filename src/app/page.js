'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Blogs from '@/components/Blogs';
import Footer from '@/components/Footer';
import WorkingAreas from '@/components/WorkingAreas';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <WhyChooseUs />
        <Process />
        <WorkingAreas />
        <Testimonials />
        <Contact />
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}
