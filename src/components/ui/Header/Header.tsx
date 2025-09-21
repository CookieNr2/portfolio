import './Header.scss';

interface HeaderProps {
  name?: string;
  title?: string;
}

function Header({ name = "Oksana Klochak", title = "Front-end Developer" }: HeaderProps) {
  return (
    <header className="header">
      <div className="star-icon">✨</div>
      <h1 className="title">Hey 👋 My name is {name}</h1>
      <p className="header-subtitle">
        And I'm a {title}
      </p>
    </header>
  );
}

export default Header;
