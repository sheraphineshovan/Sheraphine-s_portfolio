import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <ThemeToggle />
        <Router>
          <Navbar />
          <main className="bg-gray-50 dark:bg-gray-900">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Projects />
                  <Certificates />
                  <Contact />
                </>
              } />
            </Routes>
          </main>
          <Footer />
          <BackToTop />
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App; 