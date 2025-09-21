import './Footer.scss';

interface FooterProps {
  year?: number;
  name?: string;
}

function Footer({ year = 2025, name = "Oksana Klochak" }: FooterProps) {
  return (
    <footer className="footer">
      <p className="footer-text">
        Created with ♥ by {name} © {year}
      </p>
    </footer>
  );
}

export default Footer;
