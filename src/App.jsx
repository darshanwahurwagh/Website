import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  useEffect(() => {
    // Initialize Bootstrap ScrollSpy after content is mounted
    if (window.bootstrap) {
      const dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'));
      dataSpyList.forEach((dataSpyEl) => {
        window.bootstrap.ScrollSpy.getInstance(dataSpyEl) || new window.bootstrap.ScrollSpy(dataSpyEl);
      });
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
