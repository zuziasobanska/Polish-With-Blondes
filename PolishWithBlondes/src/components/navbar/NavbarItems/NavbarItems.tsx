import { NavbarItem } from "../NavbarItem/NavbarItem";

export const NavbarItems = () => {

  return (
    <>
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


  );
};

export default NavbarItems;
