import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaInstagram, FaChevronDown, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: FaFacebook, url: personalInfo.social.facebook, label: 'Facebook' },
    { icon: FaInstagram, url: personalInfo.social.instagram, label: 'Instagram' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black overflow-hidden transition-colors duration-300"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom px-4 z-10">
        <div className="text-center">
          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-white hover:text-primary transition-colors text-2xl"
                aria-label={social.label}
              >
                <social.icon />
              </motion.a>
            ))}
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-gray-300 text-lg md:text-xl mb-4 font-light">
              Hello, I am
            </h4>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
              {personalInfo.name}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-primary font-mono mb-8">
              {personalInfo.title}
            </h2>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#about"
              className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-blue-700 transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Explore My Work
            </a>
            <a
              href="/portfolio/assets/resume.pdf"
              download="Kunal_Bhatt_Resume.pdf"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-full border-2 border-primary hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <FaDownload />
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="text-white text-3xl"
        >
          <FaChevronDown />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;

