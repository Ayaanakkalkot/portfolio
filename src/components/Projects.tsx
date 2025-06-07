import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleOnHover, slideInFromLeft, slideInFromRight } from '../utils/animations';

const ProjectCard = ({ 
  title, 
  description, 
  tools,
  period,
  index,
  image
}: { 
  title: string; 
  description: string[]; 
  tools: string;
  period: string;
  index: number;
  image: string;
}) => (
  <motion.div 
    className="group relative bg-[#2A1B3D] rounded-xl overflow-hidden"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
  >
    {/* Background Glow Effect */}
    <motion.div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      style={{
        background: 'radial-gradient(circle at center, rgba(139,92,246,0.15), rgba(59,130,246,0.1), transparent)',
      }}
    />
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
      {/* Content Section */}
      <motion.div 
        className="space-y-6"
        variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
      >
        <div>
          <motion.p 
            className="text-purple-500 text-sm mb-2"
            variants={fadeInUp}
          >
            Featured Project
          </motion.p>
          <motion.h3 
            className="text-2xl font-bold text-white mb-2"
            variants={fadeInUp}
          >
            {title}
          </motion.h3>
          <motion.span 
            className="text-sm text-gray-400"
            variants={fadeInUp}
          >
            {period}
          </motion.span>
        </div>

        <motion.div 
          className="bg-[#1A0B2E] rounded-lg p-6 space-y-3 backdrop-blur-sm bg-opacity-50"
          variants={fadeInUp}
          whileHover={{ scale: 1.02 }}
        >
          {description.map((desc, i) => (
            <motion.p 
              key={i} 
              className="text-gray-300"
              variants={fadeInUp}
              custom={i}
            >
              {desc}
            </motion.p>
          ))}
        </motion.div>

        <motion.div 
          className="space-y-2"
          variants={fadeInUp}
        >
          <p className="text-sm text-purple-400">Tools & Libraries:</p>
          <div className="flex flex-wrap gap-2">
            {tools.split(', ').map((tool, i) => (
              <motion.span
                key={i}
                className="px-3 py-1 bg-purple-900/30 rounded-full text-sm text-purple-200"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(139,92,246,0.4)"
                }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Image Section */}
      <motion.div 
        className="relative h-[400px] lg:h-[450px] rounded-xl overflow-hidden"
        variants={index % 2 === 0 ? slideInFromRight : slideInFromLeft}
      >
        {/* Background glow effect */}
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 rounded-xl blur-lg"
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Image container */}
        <motion.div 
          className="relative h-full w-full rounded-xl overflow-hidden group"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Project image */}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center rounded-xl transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-[#1A0B2E]/50 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 mix-blend-overlay group-hover:opacity-60 transition-opacity duration-300" />

          {/* Hover effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600/0 via-blue-600/10 to-purple-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* Floating elements */}
          <motion.div
            className="absolute -top-6 -right-6 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      title: "Walmart Weekly Sales Analysis",
      period: "April 2024 - May 2024",
      description: [
        "Conducted time series analysis on Walmart's historical weekly sales data to forecast revenue and uncover trends related to seasonality, holiday effects.",
        "Trained and optimized Random Forest, XGBoost, and LightGBM models, achieving up to 94% forecast accuracy across multiple departments and stores.",
        "Designed interactive Power BI dashboards to visualize trends, highlight underperforming periods, and identify actionable insights that improved peak-season planning"
      ],
      tools: "Python, Pandas, NumPy, Scikit-learn, Power BI, SQL, XGBoost, LightGBM",
      image: "/images/Forecast.jpeg"
    },
    {
      title: "Health Guard: Multi Disease Detection",
      period: "Dec 2023 - Jan 2024",
      description: [
        "Implemented an AI-driven system capable of detecting multiple diseases from medical images and patient data achieving 89% diagnostic accuracy.",
        "The goal is to assist healthcare professionals in early diagnosis, improve patient outcomes, and optimize the efficiency of medical examinations."
      ],
      tools: "Python, Pandas, NumPy, TensorFlow, Keras, Scikit-learn, OpenCV, XGBoost, SVM, CNN, Jupyter Notebook",
      image: "/images/Health.jpg"
    },
    {
      title: "Data Analytics Customer Segmentation",
      period: "June 2023 - July 2023",
      description: [
        "Prepared a robust customer segmentation model to categorize a company's customer base into distinct groups based on similar characteristics and behaviors.",
        "This segmentation aims to enable more targeted marketing strategies, personalized customer experiences, improved customer retention rates and improving marketing ROI by 25%."
      ],
      tools: "Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, SQL, Excel, Jupyter Notebook",
      image: "/images/Customer.png"
    },
    {
      title: "Loan Application Prediction",
      period: "Feb 2022 - March 2022",
      description: [
        "Analyzed a predictive model that determines the likelihood of loan approval based on applicant data.",
        "Identify and analyze the most influential factors that affect loan approval decisions.",
        "Trained and evaluated models (Logistic Regression, Decision Trees, Random Forest) to predict loan approvals with 92% accuracy."
      ],
      tools: "Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn, Jupyter Notebook",
      image: "/images/Loan.png"
    }
  ];

  return (
    <motion.section 
      className="py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.h2 
        className="text-3xl font-bold mb-12 text-center relative"
        variants={fadeInUp}
      >
        Featured Projects
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
      
      <motion.div 
        className="space-y-16"
        variants={staggerContainer}
      >
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects; 