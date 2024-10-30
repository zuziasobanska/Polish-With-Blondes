import './navbar.scss';
import logo from '../../assets/logo1.png';
import hamburger from '../../assets/hamburger.png';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" />
      <ul>
        <li>
          <a href="">Book a lesson</a>
        </li>
        <li>
          <a href="">Worksheets</a>
        </li>
        <li>
          <a href="">Podcasts</a>
        </li>
        <li>
          <a href="https://www.youtube.com/@polishwithblondes" target="_blank">
            Youtube
          </a>
        </li>
        <li>
          <a href="https://buymeacoffee.com/polishwithblnds" target="_blank">
            support our work
          </a>
        </li>
        <li>
          <a href="">About us</a>
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
