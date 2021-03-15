import React, { useState } from "react";
import {
  BurgerMenu,
  Nav,
  NavbarContainer,
  NavItem,
  NavLink,
  NavMenu,
} from "./HeaderElements";
import * as IoIcon from "react-icons/io5";

const Header = () => {
  const [open, setOpen] = useState(false);
  const sections = ["about", "carrer", "projects", "skills", "contact"];

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <BurgerMenu toggle={toggle}>
            {open ? (
              <IoIcon.IoClose onClick={toggle} />
            ) : (
              <IoIcon.IoMenu onClick={toggle} />
            )}
          </BurgerMenu>
          <NavMenu>
            {sections?.map((section, index) => (
              <NavItem key={index}>
                <NavLink
                  to={`${section}`}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  onClick={toggle}
                >
                  {section}
                </NavLink>
              </NavItem>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
