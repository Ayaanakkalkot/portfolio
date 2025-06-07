import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleOnHover, pulseAnimation } from '../utils/animations';

const CertificationCard = ({ title, year, platform }: { title: string; year: string; platform: string }) => (
  <motion.div
    className="bg-[#2A1B3D] rounded-xl p-6 relative overflow-hidden group"
    variants={fadeInUp}
    whileHover={{ 
      scale: 1.02,
      boxShadow: "0 0 20px rgba(139,92,246,0.3)"
    }}
  >
    {/* Glow effect */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      }}
    />
    
    <div className="relative z-10">
      <motion.div 
        className="text-xl font-semibold mb-2 text-purple-400"
        variants={fadeInUp}
      >
        {title}
      </motion.div>
      <motion.div 
        className="text-sm text-gray-400 mb-2"
        variants={fadeInUp}
      >
        {platform}
      </motion.div>
      <motion.div 
        className="text-xs text-gray-500"
        variants={fadeInUp}
      >
        {year}
      </motion.div>
    </div>
  </motion.div>
);

const Contact = () => {
  const certifications = [
    {
      title: "Python Zero to Mastery",
      platform: "Udemy",
      year: "2022"
    },
    {
      title: "The Complete SQL Bootcamp",
      platform: "Udemy",
      year: "2023"
    },
    {
      title: "Data Analyst Bootcamp",
      platform: "Udemy",
      year: "2024"
    },
    {
      title: "Power BI - Business Intelligence",
      platform: "Udemy",
      year: "2024"
    }
  ];

  return (
    <motion.section 
      className="py-16 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={staggerContainer}
      >
        {/* Certifications and Interests Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
          variants={staggerContainer}
        >
          {/* Certifications Section */}
          <motion.div className="space-y-6">
            <motion.h3 
              className="text-2xl font-semibold mb-6"
              variants={fadeInUp}
            >
              Certifications
            </motion.h3>
            <motion.div 
              className="grid gap-4"
              variants={staggerContainer}
            >
              {certifications.map((cert, index) => (
                <CertificationCard 
                  key={index}
                  title={cert.title}
                  platform={cert.platform}
                  year={cert.year}
                />
              ))}
            </motion.div>
          </motion.div>

          {/* Interests Section */}
          <motion.div>
            <motion.h3 
              className="text-2xl font-semibold mb-6"
              variants={fadeInUp}
            >
              Interests
            </motion.h3>
            <motion.div 
              className="bg-[#2A1B3D] rounded-xl p-6"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="flex flex-wrap gap-3"
                variants={staggerContainer}
              >
                {["Fishing", "Cricket", "Fitness", "Cooking"].map((interest, index) => (
                  <motion.span 
                    key={index} 
                    className="px-4 py-2 bg-purple-900/50 rounded-full text-purple-200"
                    variants={fadeInUp}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(139,92,246,0.4)"
                    }}
                    custom={index}
                  >
                    {interest}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Let's Connect Section */}
        <motion.div className="relative">
          <motion.div 
            className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent via-purple-500 to-transparent"
            animate={{
              opacity: [0.3, 0.6, 0.3],
              height: ["80px", "100px", "80px"]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.h2 
            className="text-3xl font-bold mb-12"
            variants={fadeInUp}
          >
            Let's Connect
          </motion.h2>
          
          <motion.div 
            className="mb-12 flex items-center justify-center gap-8 flex-wrap"
            variants={staggerContainer}
          >
            <motion.a 
              href="mailto:ayaanakkalkot540@gmail.com" 
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
              <span>ayaanakkalkot540@gmail.com</span>
            </motion.a>

            <motion.a 
              href="tel:+918217636776" 
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
              </svg>
              <span>+91 8217636776</span>
            </motion.a>

            <motion.a 
              href="https://linkedin.com/in/ayaan-akkalkot-79a33a29a" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-xl"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
              </svg>
              <span>LinkedIn</span>
            </motion.a>

            <motion.a 
              href="https://github.com/Ayaanakkalkot" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-400 hover:text-purple-300 text-xl"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </motion.a>
          </motion.div>

          <motion.div 
            className="relative w-24 h-24 mx-auto"
            variants={fadeInUp}
          >
            <motion.div 
              className="absolute inset-0 bg-purple-600/20 rounded-full blur-3xl"
              animate="pulse"
              variants={pulseAnimation}
            />
            <motion.div 
              className="relative bg-[#2A1B3D] rounded-full w-full h-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-3xl">A</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact; 