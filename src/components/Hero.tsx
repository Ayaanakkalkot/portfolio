import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useAnimation } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animations';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values for cursor interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation config
  const springConfig = { damping: 15, stiffness: 150 };

  // Create smooth values for rotation
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig);

  // Continuous floating animation
  const floatingAnimation = {
    y: [0, -20, 0],
    rotateZ: [-2, 2, -2],
    scale: [1, 1.02, 1],
  };

  const floatingTransition = {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  };

  // Handle mouse move on the container
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = (event.clientX - rect.left) / rect.width - 0.5;
    const centerY = (event.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(centerX);
    mouseY.set(centerY);
  };

  return (
    <motion.section 
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 py-12 sm:py-20"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      {/* Enhanced glow effects */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square"
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
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-purple-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-radial from-blue-600/20 via-blue-600/10 to-transparent rounded-full blur-3xl transform"
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      <div className="relative z-10 container mx-auto max-w-7xl">
        {/* Intro text */}
        <motion.div 
          className="text-center mb-8 sm:mb-12"
          variants={staggerContainer}
        >
          <motion.p 
            className="text-base sm:text-lg mb-2"
            variants={fadeInUp}
          >
            Hello! I Am <span className="text-purple-500">Ayaan Akkalkot</span>
          </motion.p>
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4"
            variants={fadeInUp}
          >
            A Data Scientist who
          </motion.h1>
          <motion.div 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            variants={fadeInUp}
          >
            Judges a model
            <br className="sm:hidden" />
            <span className="inline-block">
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
            </span>
          </motion.div>
          <motion.p 
            className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto"
            variants={fadeInUp}
          >
            Because if the metrics don't impress you, what else can?
          </motion.p>
        </motion.div>

        {/* 3D Image with enhanced effects */}
        <motion.div 
          className="flex justify-center mb-8 sm:mb-16 perspective-1000"
          variants={fadeInUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            mouseX.set(0);
            mouseY.set(0);
          }}
        >
          <motion.div 
            className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 transform-gpu"
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              transformStyle: "preserve-3d",
            }}
            animate={{
              ...floatingAnimation,
              scale: isHovered ? 1.05 : floatingAnimation.scale,
            }}
            transition={floatingTransition}
          >
            {/* 3D floating effect layers */}
            <motion.div
              className="absolute -inset-3 xs:-inset-4 sm:-inset-6 md:-inset-8 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 rounded-full blur-xl"
              style={{
                transform: "translateZ(-40px)",
              }}
              animate={{
                rotate: [0, 360],
                scale: isHovered ? 1.1 : [1, 1.05, 1],
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: isHovered 
                  ? { duration: 0.3 }
                  : { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Constant white glow */}
            <motion.div 
              className="absolute -inset-2 xs:-inset-3 sm:-inset-4 md:-inset-6 bg-white/20 rounded-full blur-3xl"
              style={{ transform: "translateZ(-20px)" }}
              animate={{
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Image container with 3D effect */}
            <motion.div
              className="relative z-10 w-full h-full rounded-full overflow-hidden ring-2 ring-white/20"
              style={{
                transform: "translateZ(0px)",
              }}
            >
              <motion.img
                src="/images/Ayaan Akkalkot.png"
                alt="Ayaan Akkalkot"
                className="w-full h-full object-cover object-center"
                animate={{
                  scale: isHovered ? 1.1 : [1, 1.05, 1],
                }}
                transition={isHovered 
                  ? { duration: 0.3 }
                  : { duration: 6, repeat: Infinity, ease: "easeInOut" }
                }
              />
              
              {/* Interactive shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/30 to-white/0"
                style={{
                  transform: "translateZ(20px)",
                  mixBlendMode: "overlay",
                }}
                animate={{
                  opacity: isHovered ? 0.5 : [0.2, 0.3, 0.2],
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  opacity: isHovered 
                    ? { duration: 0.3 }
                    : { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  backgroundPosition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }
                }}
              />
            </motion.div>
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
            Recent B.E graduate in CSE (AI & ML) at{' '}
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
            , aggregating a CGPA of 8.83.
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