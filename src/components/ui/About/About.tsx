import './About.scss';
import InfoItem from "../../InfoItem/InfoItem";
import photoSvg from "../../../assets/photo.svg";

function About() {
  return (
    <div className="main-content">
      <div className="intro-section">
        <div className="description">
          <div className="quote-line"></div>
          <p>Skilled in React, HTML, CSS, Sass, TypeScript, and accessibility, with backend experience in Node.js, Express.js, and MongoDB. I create clean, responsive, and user-friendly applications through modern development practices and thoughtful design.</p>
        </div>
        
        <div className="personal-info">
          <InfoItem icon="🏺" text="Crafting code with the same care I give to pottery." />
          <InfoItem icon="🌍" text="Based in Spain" />
          <InfoItem icon="💼" text="Front-end Developer at Zurich" />
          <InfoItem icon="📧" text="oksana.klochak@gmail.com" />
        </div>
      </div>

      <div className="avatar-section">
        <div className="avatar-placeholder">
          <img src={photoSvg} alt="Oksana Klochak" className="avatar-image" />
        </div>
      </div>
    </div>
  );
}

export default About;
