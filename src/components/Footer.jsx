const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
        <div className="small">© {new Date().getFullYear()} Darshan Wahurwagh. All rights reserved.</div>
        <div className="d-flex gap-3">
          <a href="#home" className="link-secondary text-decoration-none">Home</a>
          <a href="#projects" className="link-secondary text-decoration-none">Projects</a>
          <a href="#contact" className="link-secondary text-decoration-none">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
