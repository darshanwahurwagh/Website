import { useEffect, useRef } from 'react';

const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const fill = e.target.querySelector('.skill-fill');
          if (fill) {
            fill.style.width = fill.dataset.skill + '%';
          }
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.5 });

    const skillBars = skillsRef.current.querySelectorAll('.skill-bar');
    skillBars.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={skillsRef}>
      {/* Skills Categories */}
      <section id="skills-categories" className="py-5 bg-body-tertiary">
        <div className="container">
          <h2 className="section-title mb-3">Skills</h2>
          <div className="row g-4">
            
            {/* Frontend */}
            <div className="col-md-6 col-lg-4">
              <div className="card soft-card skill-card p-4 h-100 text-center">
                <h4 className="mb-3">Frontend</h4>
                <div className="d-flex justify-content-center flex-wrap gap-4">
                  <div className="skill-item">
                    <i className="devicon-html5-plain colored skill-icon"></i>
                    <p>HTML5</p>
                  </div>
                  <div className="skill-item">
                    <i className="devicon-css3-plain colored skill-icon"></i>
                    <p>CSS3</p>
                  </div>
                  <div className="skill-item">
                    <i className="devicon-bootstrap-plain colored skill-icon"></i>
                    <p>Bootstrap</p>
                  </div>
                  <div className="skill-item">
                    <i className="devicon-javascript-plain colored skill-icon"></i>
                    <p>JavaScript</p>
                  </div>
                  <div className="skill-item">
                    <i className="devicon-react-original colored skill-icon"></i>
                    <p>React</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <div className="col-md-6 col-lg-4">
              <div className="card soft-card skill-card p-4 h-100 text-center">
                <h4 className="mb-3">Backend</h4>
                <div className="d-flex justify-content-center flex-wrap gap-4">
                  <div className="skill-item">
                    <i className="devicon-c-plain colored skill-icon"></i>
                    <p>C</p>
                  </div>
                  <div className="skill-item">
                    <i className="devicon-java-plain colored skill-icon"></i>
                    <p>Java</p>
                  </div>
                  <div className="skill-item">
                    <i className="devicon-nodejs-plain colored skill-icon"></i>
                    <p>Node js</p>
                  </div>
                  <div className="skill-item">
                    <i className="devicon-express-original skill-icon"></i>
                    <p>Express js</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Database */}
            <div className="col-md-6 col-lg-4">
              <div className="card soft-card skill-card p-4 h-100 text-center">
                <h4 className="mb-3">Database</h4>
                <div className="d-flex justify-content-center flex-wrap gap-4">
                  <div className="skill-item">
                    <i className="devicon-mysql-plain colored skill-icon"></i>
                    <p>MySQL</p>
                  </div>
                  <div className="skill-item">
                    <i className="devicon-mongodb-plain colored skill-icon"></i>
                    <p>MongoDB</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills progress bar Section with Icons */}
      <section id="skills" className="py-5 bg-body-tertiary">
        <div className="container">
          <div className="row g-4">
            
            {/* HTML5 */}
            <div className="col-md-6 col-lg-4">
              <div className="card soft-card p-4 h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span><i className="fab fa-html5 text-danger me-2"></i><strong>HTML5</strong></span>
                  <span className="small text-secondary">Advanced</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" data-skill="90"></div></div>
              </div>
            </div>

            {/* CSS3 */}
            <div className="col-md-6 col-lg-4">
              <div className="card soft-card p-4 h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span><i className="fab fa-css3-alt text-primary me-2"></i><strong>CSS3</strong></span>
                  <span className="small text-secondary">Intermediate</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" data-skill="55"></div></div>
              </div>
            </div>

            {/* Bootstrap */}
            <div className="col-md-6 col-lg-4">
              <div className="card soft-card p-4 h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span><i className="fab fa-bootstrap text-purple me-2"></i><strong>Bootstrap</strong></span>
                  <span className="small text-secondary">Intermediate</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" data-skill="50"></div></div>
              </div>
            </div>

            {/* JavaScript */}
            <div className="col-md-6 col-lg-4">
              <div className="card soft-card p-4 h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span><i className="fab fa-js-square text-warning me-2"></i><strong>JavaScript</strong></span>
                  <span className="small text-secondary">Beginner</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" data-skill="30"></div></div>
              </div>
            </div>

            {/* React */}
            <div className="col-md-6 col-lg-4">
              <div className="card soft-card p-4 h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span><i className="fab fa-react text-info me-2"></i><strong>React</strong></span>
                  <span className="small text-secondary">Beginner</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" data-skill="15"></div></div>
              </div>
            </div>

            {/* C */}
            <div className="col-md-6 col-lg-4">
              <div className="card soft-card p-4 h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span><i className="devicon-c-plain text-dark me-2"></i><strong>C</strong></span>
                  <span className="small text-secondary">Intermediate</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" data-skill="45"></div></div>
              </div>
            </div>

            {/* Java */}
            <div className="col-md-6 col-lg-4">
              <div className="card soft-card p-4 h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span><i className="fab fa-java text-danger me-2"></i><strong>Java</strong></span>
                  <span className="small text-secondary">Beginner</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" data-skill="10"></div></div>
              </div>
            </div>

            {/* Node js */}
            <div className="col-md-6 col-lg-4">
              <div className="card soft-card p-4 h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span><i className="devicon-nodejs-plain colored me-2"></i><strong>Node js</strong></span>
                  <span className="small text-secondary">Intermediate</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" data-skill="60"></div></div>
              </div>
            </div>
            
            {/* Express js */}
            <div className="col-md-6 col-lg-4">
              <div className="card soft-card p-4 h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span><i className="devicon-express-original text-dark me-2"></i><strong>Express js</strong></span>
                  <span className="small text-secondary">Intermediate</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" data-skill="60"></div></div>
              </div>
            </div>
            
            {/* SQL */}
            <div className="col-md-6 col-lg-4">
              <div className="card soft-card p-4 h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span><i className="fas fa-database text-warning me-2"></i><strong>SQL</strong></span>
                  <span className="small text-secondary">Intermediate</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" data-skill="40"></div></div>
              </div>
            </div>

            {/* MongoDB */}
            <div className="col-md-6 col-lg-4">
              <div className="card soft-card p-4 h-100">
                <div className="d-flex align-items-center justify-content-between mb-2">
                  <span><i className="devicon-mongodb-plain text-success me-2"></i><strong>MongoDB</strong></span>
                  <span className="small text-secondary">Advanced</span>
                </div>
                <div className="skill-bar"><div className="skill-fill" data-skill="95"></div></div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
