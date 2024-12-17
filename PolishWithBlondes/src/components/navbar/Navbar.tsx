import './navbar.scss';
import logo from '../../assets/logo1.png';
import hamburger from '../../assets/hamburger.png';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
        </li>
        <li>
          <a href="">Book a lesson</a>
        </li>
        <li>
          <a href="">Newsletter</a>
        </li>
        <li>
          <a href="">Worksheets</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
        <li>
          <a href="https://buymeacoffee.com/polishwithblnds" target="_blank">
            support our work
          </a>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
      <div className="hamburger">
        <img src={hamburger} />
      </div>
    </nav>
  );
};

export default Navbar;
