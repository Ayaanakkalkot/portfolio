import { motion } from "framer-motion";
import { fadeIn, slideInFromLeft, slideInFromRight } from "../utils/motion";

const certifications = [
  {
    title: "Machine Learning Specialization",
    issuer: "Coursera",
    date: "2023",
    image: "/images/coursera-ml.png"
  },
  {
    title: "Data Science Professional",
    issuer: "IBM",
    date: "2023",
    image: "/images/ibm-ds.png"
  },
  {
    title: "Python for Data Science",
    issuer: "DataCamp",
    date: "2023",
    image: "/images/datacamp.png"
  },
  {
    title: "Deep Learning Fundamentals",
    issuer: "DeepLearning.AI",
    date: "2023",
    image: "/images/dl-ai.png"
  }
];

const interests = [
  "Machine Learning",
  "Data Visualization",
  "Neural Networks",
  "Computer Vision",
  "Natural Language Processing",
  "Big Data Analytics",
  "Cloud Computing",
  "Robotics"
];

const Certifications = () => {
  return (
    <div className="relative w-full flex flex-col items-center justify-center">
      {/* Background Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial="hidden"
        animate="visible"
      >
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-0 right-10 w-72 h-72 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
      </motion.div>

      {/* Section Title */}
      <motion.div
        variants={fadeIn("up", 0.5)}
        initial="hidden"
        animate="visible"
        className="w-full flex flex-col items-center justify-center mb-12"
      >
        <h2 className="text-4xl font-bold text-white mb-4">Certifications</h2>
        <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
      </motion.div>

      {/* Certification Cards */}
      <motion.div 
        className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        variants={fadeIn("up", 0.7)}
        initial="hidden"
        animate="visible"
      >
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.title}
            className="relative bg-[#1A0B2E]/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
            whileHover={{ y: -5, scale: 1.02 }}
            variants={index % 2 === 0 ? slideInFromLeft : slideInFromRight}
          >
            <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0B2E] via-transparent to-transparent" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{cert.title}</h3>
            <p className="text-purple-300 mb-1">{cert.issuer}</p>
            <p className="text-sm text-gray-400">{cert.date}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Interests Section */}
      <motion.div
        variants={fadeIn("up", 0.9)}
        initial="hidden"
        animate="visible"
        className="w-full"
      >
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Interests & Expertise</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {interests.map((interest, index) => (
            <motion.div
              key={interest}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.2)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-white">{interest}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Certifications; 