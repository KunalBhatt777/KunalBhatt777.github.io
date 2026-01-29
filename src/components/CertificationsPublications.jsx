import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaBook, FaExternalLinkAlt } from 'react-icons/fa';
import { certificationsPublications } from '../data/portfolioData';

const CertificationsPublications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap = {
    FaCertificate: FaCertificate,
    FaBook: FaBook,
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

  const certifications = certificationsPublications.filter(item => item.type === 'certification');
  const publications = certificationsPublications.filter(item => item.type === 'publication');

  return (
    <section id="certifications" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            Certifications & <span className="gradient-text">Publications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and published research work
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="space-y-12"
        >
          {/* Certifications Section */}
          {certifications.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <FaCertificate className="mr-3 text-primary" />
                Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((item, index) => {
                  const Icon = iconMap[item.icon] || FaCertificate;
                  return (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-primary text-3xl mt-1 group-hover:scale-110 transition-transform">
                          <Icon />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                            {item.issuer}
                          </p>
                          <p className="text-gray-500 dark:text-gray-500 text-sm">
                            {item.date}
                          </p>
                        </div>
                        <FaExternalLinkAlt className="text-gray-400 group-hover:text-primary transition-colors" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          )}

          {/* Publications Section */}
          {publications.length > 0 && (
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
                <FaBook className="mr-3 text-primary" />
                Publications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {publications.map((item, index) => {
                  const Icon = iconMap[item.icon] || FaBook;
                  return (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="text-primary text-3xl mt-1 group-hover:scale-110 transition-transform">
                          <Icon />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                            {item.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
                            {item.publisher}
                          </p>
                          <p className="text-gray-500 dark:text-gray-500 text-sm">
                            {item.date}
                          </p>
                        </div>
                        <FaExternalLinkAlt className="text-gray-400 group-hover:text-primary transition-colors" />
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsPublications;

