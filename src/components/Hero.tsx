import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  return (
    <motion.section 
      className="relative"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Enhanced glow effects */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-gradient-radial from-purple-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-gradient-radial from-blue-600/20 via-blue-600/10 to-transparent rounded-full blur-3xl transform rotate-45" />
      </motion.div>
      
      <div className="relative z-10">
        {/* Intro text */}
        <motion.div 
          className="text-center mb-8"
          variants={staggerContainer}
        >
          <motion.p 
            className="text-lg mb-2"
            variants={fadeInUp}
          >
            Hello! I Am <span className="text-purple-500">Ayaan Akkalkot</span>
          </motion.p>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={fadeInUp}
          >
            A Data Scientist who
          </motion.h1>
          <motion.div 
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={fadeInUp}
          >
            Judges a model
            <br />
            by its <span className="text-purple-500 relative">
              metrics
              <motion.span
                className="absolute inset-0 bg-purple-500/20 blur-lg -z-10"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>...
          </motion.div>
          <motion.p 
            className="text-gray-400"
            variants={fadeInUp}
          >
            Because if the metrics don't impress you, what else can?
          </motion.p>
        </motion.div>

        {/* Image with enhanced effects */}
        <motion.div 
          className="flex justify-center mb-16"
          variants={fadeInUp}
        >
          <motion.div 
            className="relative w-64 h-64"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {/* Constant white glow */}
            <div className="absolute -inset-6 bg-white/20 rounded-full blur-3xl" />
            
            {/* Sparkle effects */}
            <motion.div
              className="absolute -inset-8 overflow-hidden"
              initial="hidden"
              animate="visible"
            >
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* Secondary white glow */}
            <div className="absolute -inset-4 bg-white/15 rounded-full blur-2xl" />

            {/* Image */}
            <div className="relative z-10 w-full h-full rounded-full overflow-hidden ring-2 ring-white/20">
              <img
                src="/images/Ayaan Akkalkot.png"
                alt="Ayaan Akkalkot"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Subtle white overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-b from-white/10 to-transparent" />
          </motion.div>
        </motion.div>

        {/* Education & Skills section with glow effects */}
        <motion.div 
          className="text-center"
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
            variants={fadeInUp}
          >
            I'm a Data Science Student
            <motion.span
              className="absolute inset-0 bg-purple-500/10 blur-xl -z-10"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.h2>
          <motion.p 
            className="text-gray-400 mb-4"
            variants={fadeInUp}
          >
            Currently pursuing B.E in CSE (AI & ML) at{' '}
            <motion.a 
              href="#" 
              className="text-blue-400 hover:text-blue-300 relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Don Bosco Institute of Technology
              <motion.span
                className="absolute inset-0 bg-blue-400/20 blur-sm -z-10"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.a>
          </motion.p>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            A passionate data scientist with expertise in machine learning, data analysis, and visualization.
            I create impactful solutions that bridge the gap between data and business insights.
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero; 