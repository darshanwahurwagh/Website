const ProjectModal = ({ project }) => {
  return (
    <div className="modal fade" id="projectModal" tabIndex="-1" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{project?.title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p className="mb-2" id="projDesc">{project?.description}</p>
            <p className="small text-secondary mb-2">
              <i className="bi bi-tools me-1"></i>
              <span id="projStack">{project?.stack}</span>
            </p>
            <a 
              id="projLink" 
              href={project?.link || "#"} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline-primary btn-sm"
            >
              <i className="bi bi-box-arrow-up-right me-1"></i>See Live
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
