import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleOnHover } from '../utils/animations';

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => (
  <motion.div 
    className="bg-[#2A1B3D] rounded-xl p-6 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300"
    variants={fadeInUp}
    whileHover="hover"
  >
    <motion.h3 
      className="text-xl font-semibold mb-4 text-purple-500"
      variants={scaleOnHover}
    >
      {title}
    </motion.h3>
    <motion.div 
      className="flex flex-wrap gap-2"
      variants={staggerContainer}
    >
      {skills.map((skill, index) => (
        <motion.span 
          key={index} 
          className="px-3 py-1 bg-purple-900/50 rounded-full text-sm text-purple-200"
          variants={fadeInUp}
          whileHover={{
            scale: 1.05,
            backgroundColor: "rgba(139,92,246,0.4)"
          }}
          transition={{ duration: 0.2 }}
        >
          {skill}
        </motion.span>
      ))}
    </motion.div>
  </motion.div>
);

const ExperienceCard = ({ role, company, period, achievements }: { 
  role: string; 
  company: string; 
  period: string;
  achievements: string[];
}) => (
  <motion.div 
    className="bg-[#2A1B3D] rounded-xl p-6 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300"
    variants={fadeInUp}
    whileHover="hover"
  >
    <motion.div 
      className="mb-4"
      variants={staggerContainer}
    >
      <motion.h3 
        className="text-xl font-semibold text-purple-500"
        variants={scaleOnHover}
      >
        {role}
      </motion.h3>
      <motion.p 
        className="text-gray-400"
        variants={fadeInUp}
      >
        {company}
      </motion.p>
      <motion.p 
        className="text-sm text-gray-500"
        variants={fadeInUp}
      >
        {period}
      </motion.p>
    </motion.div>
    <motion.ul 
      className="space-y-2"
      variants={staggerContainer}
    >
      {achievements.map((achievement, index) => (
        <motion.li 
          key={index} 
          className="flex items-start gap-2"
          variants={fadeInUp}
          custom={index}
        >
          <span className="text-purple-500">•</span>
          <span className="text-gray-300">{achievement}</span>
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);

const Experience = () => {
  const skills = {
    "Programming Languages": ["Python", "SQL"],
    "Tools & Platforms": ["Jupyter Notebook", "VS Code", "Git/GitHub", "MySQL", "Power BI", "MS Excel"],
    "Python Libraries": ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn", "SciPy", "PySpark", "TensorFlow", "PyTorch"],
    "Data Science": ["Time Series Analysis", "Forecasting", "Feature Engineering", "Data Visualization"],
    "Soft Skills": ["Problem-Solving", "Critical Thinking", "Communication", "Attention to Detail"]
  };

  const experiences = [
    {
      role: "Data Science Intern",
      company: "Unified Mentors",
      period: "November 2024 - March 2025",
      achievements: [
        "Implemented advanced machine learning algorithms for predictive analytics, improving model accuracy by 30%.",
        "Developed and optimized data processing pipelines using PySpark, reducing data preparation time by 40%.",
        "Created interactive dashboards using Power BI for real-time monitoring of key performance metrics."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Compsoft Technologies, Bengaluru",
      period: "Jan 2023 - March 2023",
      achievements: [
        "Developed predictive models using Scikit-learn and TensorFlow for client solutions in web development and machine learning.",
        "Collaborated on deploying deep learning frameworks (PyTorch) to optimize system performance.",
        "Automated data pipelines using Python and SQL, reducing processing time by 30%."
      ]
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
        className="text-3xl font-bold mb-12 text-center"
        variants={fadeInUp}
      >
        Experience & Skills
      </motion.h2>
      
      {/* Experience */}
      <motion.div 
        className="mb-16 space-y-6"
        variants={staggerContainer}
      >
        <motion.h3 
          className="text-2xl font-semibold mb-6 text-center"
          variants={fadeInUp}
        >
          Professional Experience
        </motion.h3>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </motion.div>

      {/* Skills */}
      <motion.div variants={staggerContainer}>
        <motion.h3 
          className="text-2xl font-semibold mb-6 text-center"
          variants={fadeInUp}
        >
          Technical Skills
        </motion.h3>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
        >
          {Object.entries(skills).map(([category, skillList]) => (
            <SkillCard key={category} title={category} skills={skillList} />
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Experience; 