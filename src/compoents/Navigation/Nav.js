import React from "react";
import { NavBar, NavLink, NavLogo, NavMenu } from "./Nav.Style";

function Nav() {
  return (
    <NavBar>
      <NavLogo src="images/4.jpg" />
      <NavMenu>
        <NavLink to="footer" smooth={true} duration={2000}>
          Footer
        </NavLink>
        <NavLink to="card" spy={true} smooth={true} offset={50} duration={1000}>
          Card
        </NavLink>
        <NavLink to="hero" spy={true} smooth={true} offset={50} duration={1000}>
          Hero
        </NavLink>
        <NavLink
          to="background"
          spy={true}
          smooth={true}
          offset={50}
          duration={1000}
        >
          Background
        </NavLink>
      </NavMenu>
    </NavBar>
  );
}

export default Nav;
