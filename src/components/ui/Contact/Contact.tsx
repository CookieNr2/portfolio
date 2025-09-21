import './Contact.scss';
import githubSvg from "../../../assets/github.svg";

function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/oklochak/" target="_blank" rel="noopener noreferrer" className="contact-link linkedin">
          <span>in</span>
        </a>
        <a href="https://github.com/CookieNr2/" target="_blank" rel="noopener noreferrer" className="contact-link github">
          <img src={githubSvg} alt="GitHub" width="20" height="20" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
