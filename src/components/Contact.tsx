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
            className="mb-12 space-y-4"
            variants={staggerContainer}
          >
            <motion.p 
              className="text-xl"
              variants={fadeInUp}
            >
              <motion.a 
                href="mailto:ayaanakkalkot540@gmail.com" 
                className="text-purple-400 hover:text-purple-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                ayaanakkalkot540@gmail.com
              </motion.a>
            </motion.p>
            <motion.p 
              className="text-xl"
              variants={fadeInUp}
            >
              <motion.a 
                href="tel:+918217636776" 
                className="text-purple-400 hover:text-purple-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                +91 8217636776
              </motion.a>
            </motion.p>
            <motion.div 
              className="flex justify-center gap-6"
              variants={staggerContainer}
            >
              <motion.a 
                href="https://linkedin.com/in/ayaan-akkalkot-79a33a29a" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                LinkedIn
              </motion.a>
              <motion.a 
                href="https://github.com/Ayaanakkalkot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                GitHub
              </motion.a>
            </motion.div>
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