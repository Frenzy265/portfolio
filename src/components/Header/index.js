import React, { useState } from "react";
import {
  BurgerMenu,
  Logo,
  Nav,
  NavbarContainer,
  NavItem,
  NavMenu,
} from "./HeaderElements";
import * as IoIcon from "react-icons/io5";
import styled from "styled-components/macro";
import { Link } from "react-scroll";

const NavLink = styled(Link)`
  display: inline;

  @media (max-width: 768px) {
    display: none;
  }
  :last-child {
    display: inline;
  }
`;

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
          <Logo>Franziska Klaus</Logo>
          <BurgerMenu toggle={toggle}>
            {open ? (
              <IoIcon.IoClose onClick={toggle} />
            ) : (
              <IoIcon.IoMenu onClick={toggle} />
            )}
          </BurgerMenu>
          <NavMenu>
            {sections?.map((section, index) => (
              <NavLink
                key={index}
                to={`${section}`}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
              >
                <NavItem onClick={toggle}>{section}</NavItem>
              </NavLink>
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Header;
