import { motion } from 'framer-motion';
import { School, Work, LocationOn } from '@mui/icons-material';

const About = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-900 pt-24">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={fadeIn.initial}
          whileInView={fadeIn.whileInView}
          viewport={fadeIn.viewport}
          transition={fadeIn.transition}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Certified Cloud Practitioner and Data Scientist with a strong foundation in Cloud Computing,
            Python, SQL, Machine Learning, Deep Learning, Data Analysis, and Data Visualization.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Education */}
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.whileInView}
            viewport={fadeIn.viewport}
            transition={{ ...fadeIn.transition, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <School className="text-blue-600 dark:text-blue-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Education</h3>
            <div className="text-gray-600 dark:text-gray-400">
              <p className="font-medium">Bachelor of Engineering</p>
              <p>Jeppiaar Engineering College, Chennai</p>
              <p>CGPA: 8.04 (2024)</p>
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.whileInView}
            viewport={fadeIn.viewport}
            transition={{ ...fadeIn.transition, delay: 0.4 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <Work className="text-blue-600 dark:text-blue-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
            <div className="text-gray-600 dark:text-gray-400">
              <p className="font-medium">Full Stack Development</p>
              <p>Data Science & AWS Cloud</p>
              <p>Multiple Personal Projects</p>
            </div>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={fadeIn.initial}
            whileInView={fadeIn.whileInView}
            viewport={fadeIn.viewport}
            transition={{ ...fadeIn.transition, delay: 0.6 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <LocationOn className="text-blue-600 dark:text-blue-400 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Location</h3>
            <div className="text-gray-600 dark:text-gray-400">
              <p className="font-medium">Bangalore, India</p>
              <p>Open to Remote Work</p>
              <p>Available for Relocation</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 