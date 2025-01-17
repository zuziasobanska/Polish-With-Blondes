import './navbar.scss';
import { NavbarItem } from './NavbarItem/NavbarItem';
import logo from '../../assets/logo1.png';
import hamburger from '../../assets/hamburger.png';

export const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <>
          <NavbarItem
            to="/"
            content={<img src={logo} alt="Logo" className="logo" />}
            type="NavLink"
          />
          <NavbarItem to="/lessons" content="Book a lesson" type="NavLink" />
          <NavbarItem
            to="https://buymeacoffee.com/polishwithblnds/extras"
            content="Worksheets"
            type="a"
          />
          <NavbarItem
            to="https://www.youtube.com/@polishwithblondes/podcasts"
            content="Podcast"
            type="a"
          />
          <NavbarItem
            to="https://buymeacoffee.com/polishwithblnds"
            content="Buy us a coffee"
            type="a"
          />
          <NavbarItem to="/about" content="About us" type="NavLink" />
          <NavbarItem to="/contact" content="Contact" type="NavLink" />
        </>
      </ul>

      <div className="hamburger">
        <img src={hamburger} />
      </div>
    </nav>
  );
};

export default Navbar;
