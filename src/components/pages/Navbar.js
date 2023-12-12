import React, { useState } from "react";
import "./styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import Button from "./Button";
import Image from "./Image";

// This the variable that holds the state of the menu bar
const Navbar = ({scrollToSection}) => {
  const [menuOpen, setMenuOpen] = useState(false);

// This is the navigation bar with two menu items with anchor links and a button that have react router navigation 'NavLinks' & 'Links'.
// The "scrollToSection" is called, which is passed down from the App.js component.
  return (
    <nav>
      <Link to="/" className="title">
        <Image className={'logo'} src={"./images/logoLuckyBeard.png"} alt={"Logo"}/>
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <Image  src={"./images/hamburger-icon.png"} alt={"Hamberger Icon"}/>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <Button styles={'menu-header'} text={'For buyers'} onClick={() => scrollToSection('section-1')}/> 
        <Button styles={'menu-header'} text={'For sellers'} onClick={() => scrollToSection('section-2')}/> 
        <NavLink to="/request">
          <Button styles={'button-header'} text={'Request a demo'}/>
        </NavLink>    
      </ul>
    </nav>
  );
};

export default Navbar;