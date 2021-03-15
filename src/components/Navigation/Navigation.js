import React, { useState } from "react";
import {
  BurgerMenu,
  Nav,
  NavbarContainer,
  NavItem,
  NavLink,
  NavMenu,
} from "./NavbarElements";

import * as IoIcon from "react-icons/io5";
import {
  CloseIcon,
  SidebarContainer,
  SidebarItem,
  SidebarLink,
  SidebarWrapper,
} from "./SidebarElements";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const sections = ["about", "carrer", "skills", "projects", "contact"];

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <SidebarContainer open={open}>
        <CloseIcon>
          <IoIcon.IoClose onClick={toggle} />
        </CloseIcon>
        <SidebarWrapper>
          {sections?.map((section, index) => (
            <SidebarItem key={index}>
              <SidebarLink
                to={`${section}`}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                onClick={toggle}
              >
                {section}
              </SidebarLink>
            </SidebarItem>
          ))}
        </SidebarWrapper>
      </SidebarContainer>

      <Nav>
        <NavbarContainer>
          <BurgerMenu onClick={toggle}>
            <IoIcon.IoMenu onClick={toggle} />
          </BurgerMenu>
          <NavMenu>
            {sections?.map((section, index) => (
              <NavItem key={index}>
                <NavLink
                  to={`${section}`}
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={-100}
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

export default Navigation;
