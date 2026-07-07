import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      id="backToTop" 
      className="btn btn-primary rounded-circle p-3" 
      aria-label="Back to top"
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  );
};

export default BackToTop;
