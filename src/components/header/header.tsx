import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <img className="brand-logo" src="/logo.jpg" alt="logo" />

      <p className="brand-name">Craft Beer Emporium</p>

      <Link to={'/manage'} className="manage">
        Manage
      </Link>
    </div>
  );
};

export default Header;
