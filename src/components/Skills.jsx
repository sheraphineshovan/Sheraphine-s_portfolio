import { motion } from 'framer-motion';
import {
  Code,
  Storage,
  Psychology,
  Web,
  Cloud,
  DataObject
} from '@mui/icons-material';

const Skills = () => {
  const skills = [
    {
      category: 'Programming Languages',
      icon: <Code />,
      items: ['Python', 'SQL', 'JavaScript', 'HTML', 'CSS', 'TypeScript']
    },
    {
      category: 'Database & Query',
      icon: <Storage />,
      items: ['SQL', 'MongoDB']
    },
    {
      category: 'Data Science',
      icon: <Psychology />,
      items: [
        'Pandas',
        'Sklearn',
        'TensorFlow',
        'Machine Learning',
        'Deep Learning',
        'Data Analysis',
        'Data Visualization'
      ]
    },
    {
      category: 'Web Development',
      icon: <Web />,
      items: ['ReactJS', 'NodeJS', 'MongoDB', 'AWS Cloud']
    },
    {
      category: 'Cloud Computing',
      icon: <Cloud />,
      items: ['AWS EC2', 'S3', 'RDS', 'and others']
    },
    {
      category: 'Version Control',
      icon: <DataObject />,
      items: ['Git', 'GitHub']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-primary text-center mb-8"
        >
          <span className="font-bold text-4xl">Technical</span>
          <span className="text-gradient font-bold text-4xl"> Skills</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          A comprehensive overview of my technical expertise and tools I work with.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-blue-600 dark:text-blue-400 text-3xl">{skill.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 