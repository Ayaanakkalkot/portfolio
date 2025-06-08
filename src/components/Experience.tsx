import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, scaleOnHover } from '../utils/animations';

interface Skill {
  name: string;
  icon: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SkillCard = ({ title, skills }: SkillCategory) => (
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
      className="flex flex-wrap gap-4 justify-center"
      variants={staggerContainer}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index} 
          className="group flex flex-col items-center w-24"
          variants={fadeInUp}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
        >
          {/* Icon Container */}
          <motion.div 
            className="w-12 h-12 rounded-lg bg-purple-900/50 p-2 flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] mb-2"
            whileHover={{
              backgroundColor: "rgba(139,92,246,0.4)"
            }}
          >
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Icon */}
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-8 h-8 relative z-10 object-contain"
            />
          </motion.div>
          
          {/* Skill Name - Always visible */}
          <span className="text-xs text-gray-300 text-center">
            {skill.name}
          </span>
        </motion.div>
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
  const skills: Record<string, Skill[]> = {
    "Programming Languages": [
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" }
    ],
    "Tools & Platforms": [
      { name: "Jupyter Notebook", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Power BI", icon: "https://www.vectorlogo.zone/logos/microsoft_powerbi/microsoft_powerbi-icon.svg" },
      { name: "MS Excel", icon: "https://img.icons8.com/color/48/microsoft-excel-2019--v1.png" }
    ],
    "Python Libraries": [
      { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
      { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
      { name: "Matplotlib", icon: "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg" },
      { name: "Seaborn", icon: "https://raw.githubusercontent.com/mwaskom/seaborn/master/doc/_static/logo-mark-lightbg.svg" },
      { name: "Scikit-learn", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "SciPy", icon: "https://images.seeklogo.com/logo-png/44/1/scipy-logo-png_seeklogo-441155.png" },
      { name: "PySpark", icon: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Apache_Spark_logo.svg" },
      { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
      { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" }
    ],
    "Data Science": [
      { name: "Time Series Analysis", icon: "https://cdn-icons-png.flaticon.com/512/2784/2784459.png" },
      { name: "Forecasting", icon: "https://cdn-icons-png.flaticon.com/512/6361/6361249.png" },
      { name: "Feature Engineering", icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png" },
      { name: "Data Visualization", icon: "https://cdn-icons-png.flaticon.com/512/2382/2382533.png" }
    ],
    "Soft Skills": [
      { name: "Problem-Solving", icon: "https://cdn-icons-png.flaticon.com/512/4133/4133589.png" },
      { name: "Critical Thinking", icon: "https://cdn-icons-png.flaticon.com/512/2797/2797387.png" },
      { name: "Communication", icon: "https://cdn-icons-png.flaticon.com/512/745/745205.png" },
      { name: "Attention to Detail", icon: "https://cdn-icons-png.flaticon.com/512/4149/4149677.png" }
    ]
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