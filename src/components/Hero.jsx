import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { GitHub, LinkedIn, Email, Download } from '@mui/icons-material';

const Hero = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const profileImage = "https://media.licdn.com/dms/image/v2/D5603AQH2L3952GHpvQ/profile-displayphoto-shrink_800_800/B56ZWjRUhqGQAc-/0/1742200982266?e=1749081600&v=beta&t=ODpXyI-fTTH5kcyesGDhYFkRTzaGiZg3jX5cHkeeFqc";

  const handleDownloadResume = () => {
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1FMXk2nHVARG26rbWzbBJn2U2mLEwiyQ6';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={fadeIn.initial}
            animate={fadeIn.animate}
            transition={fadeIn.transition}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              <span>Hello there, </span> 
              <span>I'm</span> <br /> <span className="text-gradient">Sheraphine Shovan</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-8"
            >
              Cloud Practitioner & Data Scientist
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-gray-600 dark:text-gray-400 max-w-2xl mb-8"
            >
              Passionate about building scalable cloud solutions and developing machine learning models to solve real-world problems.
            </motion.p>
            <div className="flex gap-4 mb-8">
              <a
                href="https://github.com/sheraphineshovan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <GitHub fontSize="large" />
              </a>
              <a
                href="https://www.linkedin.com/in/sheraphine-shovan-m/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <LinkedIn fontSize="large" />
              </a>
              <a
                href="mailto:sheraphineshovan@gmail.com"
                className="text-gray-800 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Email fontSize="large" />
              </a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary w-full sm:w-auto"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-secondary w-full sm:w-auto border border-blue-600 rounded-md px-6 py-3"
              >
                View Projects
              </motion.a>
              <motion.button
                onClick={handleDownloadResume}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2" />
                Download Resume
              </motion.button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-64 h-64 mx-auto mb-8 md:mb-0 md:w-96 md:h-96"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <img
              src="/profile-photo.jpg"
              alt="Sheraphine Shovan"
              className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-gray-800 shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 