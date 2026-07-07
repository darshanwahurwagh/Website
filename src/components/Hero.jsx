import avatarImg from '../assets/Avatar.jpeg';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 order-2 order-lg-1">
            <span className="badge rounded-pill badge-skill mb-3">
              <i className="bi bi-lightning-charge me-1"></i>Open to Work
            </span>
            <h1 className="display-5 fw-bold mb-3">
              Hi, I&apos;m <span style={{ color: 'var(--brand)' }}>Darshan Wahurwagh</span>
            </h1>
            <p>Full Stack Developer | A.I | M.E.R.N</p>
            <p className="lead text-secondary">
              I&apos;m a full stack developer passionate about web development & programming, with skills in frontend & backend development technologies, along with relational & non-relational databases.
            </p>

            <div className="d-flex gap-2 mt-3">
              <a href="https://drive.google.com/file/d/11cXreLVri-AbNKyohH7Y28X3-AkhiF4y/view?usp=drivesdk" className="btn btn-primary">
                <i className="bi bi-filetype-pdf me-1"></i>Get Resume
              </a>
              <a href="https://github.com/darshanwahurwagh?tab=repositories" className="btn btn-outline-secondary">
                <i className="bi bi-github"></i> View all projects on Github
              </a>
            </div>
          </div>
          
          <div className="col-lg-6 text-center order-1 order-lg-2">
            <span>
              <div style={{ display: 'inline-block', padding: '5px', borderRadius: '50%', background: 'linear-gradient(135deg, #a541f1, #2477dd)' }}>
                <img src={avatarImg} alt="Your avatar" style={{ width: '320px', height: '320px', borderRadius: '50%', display: 'block' }} />
              </div>
            </span>
             
            <div className="card soft-card p-3 mt-3">
              <div className="d-flex justify-content-between small text-secondary">
                <div className="small text-secondary mt-2"><strong>Currently </strong> : Learning New Technologies</div>
                <span><i className="bi bi-briefcase"></i> Available: Full‑time</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
