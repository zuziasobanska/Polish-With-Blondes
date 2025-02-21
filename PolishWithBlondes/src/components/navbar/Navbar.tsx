import './navbar.scss';
import { NavbarItem } from './NavbarItem/NavbarItem';
import logo from '../../assets/logo1.png';
import hamburger from '../../assets/hamburger.png';
import NavbarItems from './NavbarItems/NavbarItems';
import { useEffect, useState } from 'react';

export const Navbar = () => {

 const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

     useEffect(() => {
        const onResize = () => {
            setIsMobile(window.innerWidth <= 480);
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

         useEffect(() => {
          if (!isMobile) {
            setBurgerMenuVisible(false)
          }
    }, [isMobile]);


  const [burgerMenuVisible, setBurgerMenuVisible] = useState(false)
  const handleBurgerClick = () => {
    if (!burgerMenuVisible) {
      setBurgerMenuVisible(true);
    }
    else {
      setBurgerMenuVisible(false);
    }
  }


  return (
    <nav className="navbar">
      <NavbarItem
            to="/"
            content={<img src={logo} alt="Logo" className="logo" />}
            type="NavLink"
          />
      <ul>
       <NavbarItems />
      </ul>
      <div className="hamburger" onClick={handleBurgerClick}>
        <img src={hamburger} />
      </div>
      <div className='hamburger-menu'></div>
      {burgerMenuVisible && <NavbarItems />}
    </nav>
  );
};

export default Navbar;
