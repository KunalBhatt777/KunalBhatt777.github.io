import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaArrowUp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white transition-colors duration-300 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Contact Icons */}
          <div className="flex items-center gap-6">
            {/* Email */}
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-primary rounded-full transition-all duration-300 group"
              aria-label="Email"
            >
              <FaEnvelope className="text-xl text-white group-hover:scale-110 transition-transform" />
            </motion.a>

            {/* Phone */}
            <motion.a
              href={`tel:${personalInfo.phone}`}
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-primary rounded-full transition-all duration-300 group"
              aria-label="Phone"
            >
              <FaPhone className="text-xl text-white group-hover:scale-110 transition-transform" />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center w-12 h-12 bg-white/10 hover:bg-primary rounded-full transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl text-white group-hover:scale-110 transition-transform" />
            </motion.a>
          </div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-12 h-12 bg-primary hover:bg-blue-700 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            aria-label="Scroll to top"
          >
            <FaArrowUp className="text-white text-xl" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

