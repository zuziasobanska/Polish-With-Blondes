import './Footer.scss';
import { NavbarItem } from '../Navbar/NavbarItem/NavbarItem';
import { FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";


export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-outer-container">
      <div className="footer-container">
        <div className="footer-column-left">
          <ul className="inner-column">
          <NavbarItem to="/lessons" content="Book a lesson" type="NavLink" />
          <NavbarItem
            to="https://buymeacoffee.com/polishwithblnds/extras"
            content="Worksheets"
            type="a"
          />
               <NavbarItem
            to="https://www.youtube.com/@polishwithblondes"
            content="Our Youtube channel"
            type="a"
          />
          <NavbarItem
            to="https://www.youtube.com/@polishwithblondes/podcasts"
            content="Podcast"
            type="a"
          />         <NavbarItem
            to="https://buymeacoffee.com/polishwithblnds"
            content="Support our work"
            type="a"
          />
          <NavbarItem to="/about" content="About us" type="NavLink" />
          <NavbarItem to="/contact" content="Contact" type="NavLink" />
          </ul>
        </div>
        <div className="footer-column-right">
          <div className="footer-icons">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} color="white" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} color="white" />
      </a>
      <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
        <FaYoutube size={30} color="white" />
      </a>
      {/* <a href="" target="_blank" rel="noopener noreferrer">
        <FaTiktok size={30} color="white" />
      </a> */}
    </div>
    <div className='inner-column-right'>
      <p>Copyright {currentYear} Polish With Blondes</p>
          <div className="footer-policies">
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Cookie Policy</p>
          </div>
    </div>
          
        </div>
      </div>
    </footer>
  );
};





