import './Projects.scss';
import ProjectCard from "../ProjectCard/ProjectCard";
import snakeImg from "../../assets/snake.jpg";
import csswitchImg from "../../assets/csswitch-design-lab.jpg";

function Projects() {
  return (
    <section className="featured-work">
      <h3>Featured Work</h3>
      <div className="projects-grid">
        <ProjectCard 
          name="CSSwitch Design Lab" 
          icon="🎮" 
          liveLink="https://csswitch-design-lab.fly.dev/"
          githubLink="https://github.com/CookieNr2/csswitch-design-lab"
          description="A Configurator for Nintendo Switch - Interactive design tool for customizing Nintendo Switch consoles with real-time preview and color options."
          image={csswitchImg}
        />
        
        <ProjectCard 
          name="Snake Vs Colors" 
          icon="🐍" 
          liveLink="https://cookienr2.github.io/snake-vs-colors/"
          githubLink="https://github.com/CookieNr2/snake-vs-colors"
          description="An arcade-style game built with JavaScript and the HTML <canvas> element. Players control a snake to eat colored dots while avoiding obstacles."
          image={snakeImg}
        />
      </div>
    </section>
  );
}

export default Projects;
