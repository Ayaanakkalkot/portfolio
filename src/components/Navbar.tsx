import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { fadeIn, staggerContainer } from '../utils/motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Initial check
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrolled]);

  const handleResumeDownload = () => {
    const resumeUrl = '/resume/Ayaan_Akkalkot_Resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Ayaan_Akkalkot_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#1A0B2E]/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <motion.div 
        className="max-w-7xl mx-auto flex justify-between items-center h-20 px-4 sm:px-6 lg:px-8"
        variants={staggerContainer}
      >
        <motion.div 
          className="relative text-xl sm:text-2xl font-bold group cursor-pointer"
          variants={fadeIn("up", 0.3)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <div className="relative ring-1 ring-purple-500/20 rounded-lg px-3 sm:px-4 py-2">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-80}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text cursor-pointer"
            >
              {isMobile ? 'AA Portfolio' : 'Ayaan Akkalkot Portfolio'}
            </Link>
          </div>
        </motion.div>

        {/* Resume Download Button */}
        <motion.div
          className="relative group cursor-pointer"
          variants={fadeIn("up", 0.3)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" />
          <button
            onClick={handleResumeDownload}
            className="relative flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg ring-1 ring-purple-500/20 bg-transparent"
          >
            <ArrowDownTrayIcon className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text font-bold">
              {isMobile ? 'CV' : 'Resume'}
            </span>
          </button>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar; 