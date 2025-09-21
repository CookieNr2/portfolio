import './ProjectCard.scss';

interface ProjectCardProps {
  name: string;
  icon: string;
  className?: string;
  liveLink?: string;
  githubLink?: string;
  description?: string;
  image?: string;
}

function ProjectCard({ name, icon, className, liveLink, githubLink, description, image }: ProjectCardProps) {
  return (
    <div className={`project-card ${className ?? ''}`}>
      <div className="project-content">
        <div className="project-image">
          {image && <img src={image} alt={name} className="project-img" />}
        </div>
        <div className="project-info">
          <div className="project-header">
            <span className="project-icon">{icon}</span>
            <span className="project-name">{name}</span>
          </div>
          {description && <p className="project-description">{description}</p>}
          <div className="project-links">
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noopener noreferrer" className="project-btn live-btn">
                <span>🚀</span>
                <span>Live Demo</span>
              </a>
            )}
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-btn github-btn">
                <span>⚡</span>
                <span>Code</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
