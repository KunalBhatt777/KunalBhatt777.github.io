import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebook, FaInstagram, FaHeart, FaArrowUp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white transition-colors duration-300">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{personalInfo.name}</h3>
            <p className="text-gray-300 mb-4">
              Computer Engineer & Software Developer passionate about creating innovative solutions
              through technology.
            </p>
            <div className="flex space-x-4">
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href={personalInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-colors"
              >
                <FaFacebook />
              </a>
              <a
                href={personalInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#resume" className="text-gray-300 hover:text-primary transition-colors">
                  Resume
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#organizations" className="text-gray-300 hover:text-primary transition-colors">
                  Organizations
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary transition-colors">
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a href={`tel:${personalInfo.phone}`} className="hover:text-primary transition-colors">
                  {personalInfo.phone}
                </a>
              </li>
              <li>{personalInfo.address}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} {personalInfo.name}. Made with{' '}
            <FaHeart className="inline text-primary" /> using React & Tailwind CSS
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

