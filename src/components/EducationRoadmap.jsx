import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaUniversity, FaSchool } from 'react-icons/fa';
import { education } from '../data/portfolioData';

const EducationRoadmap = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const getIcon = (index) => {
    if (index === 0) return FaUniversity;
    if (index === 1) return FaGraduationCap;
    return FaSchool;
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My academic path and achievements
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="max-w-4xl mx-auto"
        >
          {education.slice(0, 2).map((edu, index) => {
            const Icon = getIcon(index);
            const isLast = index === 1;

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative flex gap-6 pb-12"
              >
                {/* Timeline Line */}
                {!isLast && (
                  <div className="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-primary to-pink-300"></div>
                )}

                {/* Icon Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-pink-600 flex items-center justify-center shadow-lg">
                    <Icon className="text-white text-xl" />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  {/* Period Badge */}
                  <div className="inline-block mb-3">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      {edu.period}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-gray-700 font-medium mb-3 flex items-center gap-2">
                    <FaUniversity className="text-primary" />
                    {edu.institution}
                  </p>

                  {/* Description */}
                  {edu.description && (
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationRoadmap;

