import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaUniversity, FaBriefcase } from 'react-icons/fa';
import { workExperience, education, languages } from '../data/portfolioData';

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const SkillBar = ({ skill, index }) => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
      className="mb-4"
    >
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-primary dark:text-blue-400 font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: 'easeOut' }}
          className="bg-gradient-to-r from-primary to-blue-700 h-2.5 rounded-full"
        ></motion.div>
      </div>
    </motion.div>
  );

  const getIcon = (type, index) => {
    if (type === 'education') {
      if (index === 0) return FaUniversity;
      if (index === 1) return FaGraduationCap;
    }
    return FaBriefcase;
  };

  return (
    <section id="resume" className="section-padding bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 dark:text-white">
            My <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional experience and academic achievements
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Work Experience - Timeline Style */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 dark:text-white">
              <FaBriefcase className="text-primary" />
              Work Experience
            </h3>
            <div className="relative">
              {workExperience.map((job, index) => {
                const isLast = index === workExperience.length - 1;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="relative flex gap-6 pb-10"
                  >
                    {/* Timeline Line */}
                    {!isLast && (
                      <div className="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-primary to-blue-300"></div>
                    )}

                    {/* Icon Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center shadow-lg">
                        <FaBriefcase className="text-white text-lg" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="inline-block mb-2">
                        <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400 rounded-full text-xs font-semibold">
                          {job.period}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{job.position}</h4>
                      <p className="text-primary dark:text-blue-400 font-semibold mb-3 text-sm">{job.company}</p>
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{job.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Education - Timeline Style */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 dark:text-white">
              <FaGraduationCap className="text-primary" />
              Education
            </h3>
            <div className="relative">
              {education.slice(0, 2).map((edu, index) => {
                const Icon = getIcon('education', index);
                const isLast = index === 1;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="relative flex gap-6 pb-10"
                  >
                    {/* Timeline Line */}
                    {!isLast && (
                      <div className="absolute left-6 top-14 w-0.5 h-full bg-gradient-to-b from-primary to-blue-300"></div>
                    )}

                    {/* Icon Circle */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center shadow-lg">
                        <Icon className="text-white text-lg" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="inline-block mb-2">
                        <span className="px-3 py-1 bg-primary/10 dark:bg-primary/20 text-primary dark:text-blue-400 rounded-full text-xs font-semibold">
                          {edu.period}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h4>
                      <p className="text-primary dark:text-blue-400 font-semibold mb-3 text-sm">{edu.institution}</p>
                      {edu.description && (
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{edu.description}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Languages - Full Width Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 max-w-6xl mx-auto"
        >
          <h3 className="text-2xl font-bold mb-6 text-center dark:text-white">Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {languages.map((lang, index) => (
              <SkillBar key={index} skill={lang} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;

