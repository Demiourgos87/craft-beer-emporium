import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <img className="brand-logo" src="/logo.jpg" alt="logo" />

      <p className="brand-name">Craft Beer Emporium</p>
    </div>
  );
};

export default Header;
