import { useState, useEffect } from 'react';

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-bs-theme', saved);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.setAttribute('data-bs-theme', next);
    localStorage.setItem('theme', next);
  };

  return (
    <nav id="navbar" className="navbar navbar-expand-lg bg-body position-fixed w-100 top-0 shadow-sm" style={{ zIndex: 1040 }}>
      <div className="container">
        <a className="navbar-brand fw-bold" href="#home"><strong>Portfolio</strong></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navContent" aria-controls="navContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
          <div className="d-flex gap-2 ms-lg-3">
            <button className="btn btn-primary btn-sm" id="themeToggle" aria-label="Toggle theme" onClick={toggleTheme}>
              {theme === 'dark' ? <i className="bi bi-sun"></i> : <i className="bi bi-moon-stars"></i>}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
