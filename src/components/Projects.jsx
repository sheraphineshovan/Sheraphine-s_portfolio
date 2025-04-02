import { motion } from 'framer-motion';
import { GitHub, Launch } from '@mui/icons-material';

const Projects = () => {
  const projects = [
    {
      title: "BlogIT - MERN Blog Platform",
      description: " A full-stack blog application built with the MERN stack, featuring user authentication, secure password hashing, and a modern UI. Users can create, edit, and manage blog posts, hosted on an AWS EC2 instance.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Bootstrap CSS"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/sheraphineshovan/Blogit",
      demo: null
    },
    {
      title: "PIMA Diabetes Prediction",
      description: "Machine learning model for diabetes classification based on various health factors, with EDA and data visualization. Features an interactive UI built with Gradio for user-friendly predictions.",
      technologies: ["Python", "scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/sheraphineshovan/Capstone_Projects/blob/main/PIMA_Diabetes_Prediction.ipynb",
      demo: null
    },
    {
      title: "Conversational AI Model",
      description: "A conversational AI powered by the LLaMA-2 model for analyzing and responding to CSV data queries. Includes a vector store for efficient retrieval and a Gradio-based UI for seamless CSV file uploads",
      technologies: ["Python", "NLP", "TensorFlow", "Pandas", "Vector Store"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/sheraphineshovan/LLaMA2-CCVapp",
      demo: null
    },
    {
      title: "Snake & Ladder Game",
      description: "A modern implementation of the classic Snake and Ladder game using MERN stack and TypeScript. Features multiplayer support, real-time game state management, and interactive UI.",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      github: "https://github.com/sheraphineshovan/Snake-And-Ladder-MERN-Stack",
      demo: null
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
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="heading-primary text-center mb-8"
          
        >
          <span className=" font-bold text-4xl">Featured</span>
         <span className="text-gradient font-bold text-4xl">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-12"
        >
          A collection of my recent projects showcasing my skills and expertise.
        </motion.p>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors"
                  >
                    <GitHub fontSize="large" />
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-blue-400 transition-colors"
                    >
                      <Launch fontSize="large" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm"
                    >
                      {tech}
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

export default Projects; 