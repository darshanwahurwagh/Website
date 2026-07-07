import { useState } from 'react';
import ProjectModal from './ProjectModal';

const projectsData = [
  {
    id: 1,
    title: 'Calculator',
    description: 'A simple and responsive calculator built using HTML, CSS, and JavaScript. It performs basic arithmetic operations and displays a custom welcome message. Designed with a clean UI and light/Dark-themed buttons, it reflects both functionality and personal branding',
    shortDesc: 'A simple and responsive calculator built using HTML, CSS, and JavaScript.',
    stack: 'HTML,CSS & Javascript',
    link: 'https://darshanwahurwagh.github.io/calculator/',
    img: 'https://i.ibb.co/Hpzj6RrC/x.jpg',
    tags: 'ui,components,bootstrap',
    badges: ['Basic Math Operations', 'Responsive Layout', 'Dark & light Theme']
  },
  {
    id: 2,
    title: 'Weather App',
    description: 'A responsive weather application that fetches real-time weather data using the OpenWeatherMap API. Users can enter a city name to view current temperature, weather conditions, and humidity levels..',
    shortDesc: 'A responsive weather application that fetches real-time weather data using the OpenWeatherMap.',
    stack: 'Html, CSS & JavaScript',
    link: 'https://darshanwahurwagh.github.io/weather-app/',
    img: 'https://i.ibb.co/mrPFVtmb/x.jpg',
    tags: 'react,spa,api',
    badges: ['City Based weather Search', 'Realtime Data']
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Personal responsive site to showcase skills and resume',
    shortDesc: 'Personal responsive site to showcase skills and resume',
    stack: 'HTML, CSS, JavaScript',
    link: 'https://darshanwahurwagh.github.io/Responsive_Portfolio/',
    img: 'https://i.ibb.co/6crjw59r/x.jpg',
    tags: 'landing,seo,performance',
    badges: ['Clean UI', 'Accessibility', 'Responsive']
  }
];

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    const titleMatch = project.title.toLowerCase().includes(q);
    const tagsMatch = project.tags.toLowerCase().includes(q);
    return titleMatch || tagsMatch;
  });

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-4">
          <h2 className="section-title mb-0">Projects</h2>
          <div className="input-group w-auto">
            <span className="input-group-text"><i className="bi bi-search"></i></span>
            <input 
              type="search" 
              className="form-control" 
              id="projectSearch" 
              placeholder="Search projects..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="row g-4" id="projectGrid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-md-6 col-lg-4 project-card" data-tags={project.tags}>
              <div className="card soft-card h-100">
                <div className="proj-thumb">
                  <img src={project.img} className="img-fluid" alt={`${project.title} Project`} />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title"><strong>{project.title}</strong></h5>
                  <p className="card-text text-secondary">{project.shortDesc}</p>
                  <div className="mt-auto d-flex gap-2 flex-wrap">
                    {project.badges.map((badge, index) => (
                      <span key={index} className="badge text-bg-light border">{badge}</span>
                    ))}
                  </div>
                </div>
                <div className="card-footer bg-transparent border-0">
                  <button 
                    className="btn btn-outline-primary btn-sm" 
                    data-bs-toggle="modal" 
                    data-bs-target="#projectModal"
                    onClick={() => setSelectedProject(project)}
                  >
                    Open Project
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div id="emptyState" className="text-center text-secondary mt-4">
            <i className="bi bi-emoji-frown fs-1 d-block mb-2"></i>
            <p className="mb-0">No projects found for your search.</p>
          </div>
        )}
      </div>

      <ProjectModal project={selectedProject} />
    </section>
  );
};

export default Projects;
