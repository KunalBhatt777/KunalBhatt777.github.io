import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGlobe, FaBrain, FaGamepad, FaMobile, FaChartLine, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { personalInfo, expertise } from '../data/portfolioData';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const iconMap = {
    FaGlobe: FaGlobe,
    FaBrain: FaBrain,
    FaGamepad: FaGamepad,
    FaMobile: FaMobile,
    FaChartLine: FaChartLine,
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Who am I */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg card-hover">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Who am I?</h3>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <h5 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
              I am {personalInfo.name}, a Software Engineer
            </h5>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{personalInfo.bio}</p>
          </motion.div>

          {/* Personal Info */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg card-hover">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Personal Info</h3>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex">
                <span className="font-semibold min-w-[100px] dark:text-gray-200">Birthdate:</span>
                <span>{personalInfo.birthdate}</span>
              </li>
              <li className="flex">
                <span className="font-semibold min-w-[100px] dark:text-gray-200">Email:</span>
                <a href={`mailto:${personalInfo.email}`} className="text-primary dark:text-blue-400 hover:underline">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex">
                <span className="font-semibold min-w-[100px] dark:text-gray-200">Phone:</span>
                <a href={`tel:${personalInfo.phone}`} className="text-primary dark:text-blue-400 hover:underline">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex flex-col">
                <span className="font-semibold dark:text-gray-200">Address:</span>
                <span className="mt-1">{personalInfo.address}</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href={personalInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-600 hover:text-primary transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </motion.div>

          {/* My Expertise */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg card-hover">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Expertise</h3>
            <div className="w-20 h-1 bg-primary mb-6"></div>
            <div className="space-y-6">
              {expertise.map((item, index) => {
                const Icon = iconMap[item.icon];
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="text-primary text-3xl group-hover:scale-110 transition-transform">
                      <Icon />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</h5>
                      <div className="w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300"></div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

