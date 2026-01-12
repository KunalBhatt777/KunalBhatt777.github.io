import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { organizations } from '../data/portfolioData';

const Organizations = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="organizations" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Student <span className="gradient-text">Clubs & Organizations</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Leadership roles and contributions to student organizations
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {organizations.map((org, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-600 hover:border-primary transition-all group"
            >
              {/* Organization Name */}
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
                  {org.name}
                </h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-blue-700 mx-auto mt-2"></div>
              </div>

              {/* Role */}
              <div className="text-center mb-4">
                <span className="inline-block px-4 py-2 bg-primary dark:bg-blue-600 text-white rounded-full text-sm font-semibold">
                  {org.role}
                </span>
              </div>

              {/* Period */}
              <div className="text-center mb-4">
                <span className="text-primary font-semibold">{org.period}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed text-center">
                {org.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Organizations;

