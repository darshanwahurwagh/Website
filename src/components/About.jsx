const About = () => {
  return (
    <section id="about" className="py-5 bg-body-tertiary">
      <div className="container">
        <h2 className="section-title mb-3">About Me</h2>
        <div className="row align-items-center">
          <div className="col-md-6">
            <p>
              I&apos;m a Full Stack Developer with a strong foundation in modern web technologies and a deep interest in building scalable, user-centric applications. I specialize in frontend and backend development with focus on creating responsive, high-performance web experiences.
              <br /><br />
              I am open to internships, freelance projects, and full-time opportunities in Web Development and Software Engineering.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="list-unstyled">
              <li><i className="bi bi-geo-alt-fill text-danger me-2"></i>Based in Pune</li>
              <li><i className="bi bi-mortarboard-fill text-primary me-2"></i>Master’s in Computer Science</li>
              <li><i className="bi bi-lightning-charge-fill text-warning me-2"></i>Passionate about Web Development and Programming</li>
            </ul>
            <a href="#contact" className="btn btn-outline-primary">Let&apos;s collaborate</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
