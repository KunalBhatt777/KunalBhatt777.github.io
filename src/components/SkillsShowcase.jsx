import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
  FaPython, FaJava, FaGitAlt, FaGithub, FaDocker,
  FaAws, FaBootstrap, FaUnity, FaPhp, FaLinux, FaAngular
} from 'react-icons/fa';
import { skills } from '../data/portfolioData';

const SkillsShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap = {
    FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,
    FaPython, FaJava, FaGitAlt, FaGithub, FaDocker,
    FaAws, FaBootstrap, FaUnity, FaPhp, FaLinux, FaAngular
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6"
        >
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group relative flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-700 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className="relative">
                  {Icon ? (
                    <>
                      {/* Monotone version */}
                      <Icon
                        className="text-5xl text-gray-400 group-hover:opacity-0 transition-opacity duration-300"
                      />
                      {/* Colored version on hover */}
                      <Icon
                        className="text-5xl absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ color: skill.color }}
                      />
                    </>
                  ) : (
                    <div className="text-5xl text-gray-400">?</div>
                  )}
                </div>

                {/* Skill Name - Shows on hover */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
                  <div className="bg-gray-900 dark:bg-gray-700 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg">
                    {skill.name}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900 dark:bg-gray-700"></div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsShowcase;

