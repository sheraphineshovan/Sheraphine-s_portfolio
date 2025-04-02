import { motion } from 'framer-motion';
import { DarkMode, LightMode } from '@mui/icons-material';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`fixed top-20 right-4 z-[100] p-2 rounded-full 
        ${isDarkMode ? 'bg-gray-800 text-yellow-400' : 'bg-white text-gray-800'}
        shadow-lg hover:scale-110 transition-all duration-200
        border-2 ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}`}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      title={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDarkMode ? (
        <LightMode className="w-6 h-6" />
      ) : (
        <DarkMode className="w-6 h-6" />
      )}
    </motion.button>
  );
};

export default ThemeToggle; 