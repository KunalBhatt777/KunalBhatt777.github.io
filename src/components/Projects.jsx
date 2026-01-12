import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaMedal, FaGamepad, FaTwitter, FaIdBadge, FaChartLine } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap = {
    FaMedal: FaMedal,
    FaGamepad: FaGamepad,
    FaTwitter: FaTwitter,
    FaIdBadge: FaIdBadge,
    FaChartLine: FaChartLine,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A showcase of my technical projects spanning Machine Learning, Game Development, and Data Analysis
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => {
            const Icon = iconMap[project.icon];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden group"
              >
                {/* Icon Header */}
                <div className="bg-gradient-to-br from-primary to-blue-700 p-8 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity"></div>
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="text-white text-5xl z-10"
                  >
                    <Icon />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h5 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed line-clamp-6">
                    {project.description}
                  </p>
                </div>

                {/* Hover Effect Border */}
                <div className="h-1 bg-gradient-to-r from-primary to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

