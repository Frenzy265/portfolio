import styled from "styled-components/macro";
import { Link } from "react-scroll";

export const Nav = styled.nav`
  background: var(--primary-color);
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: flex-end;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: inherit;
  width: 50%;
  z-index: 1;

  position: relative;
  margin: 0px;
  align-items: center;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0 10px;
`;

export const NavItem = styled.li`
  width: 100px;
  height: 30px;
  background: var(--secondary-color);
  color: var(--primary-color);
  font-size: 1rem;
  border-radius: 25px;
  border: none;
  outline: none;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  display: inline;

  &.active {
    color: var(--tertiary-color);
  }

  :last-child {
    display: inline;
  }

  :hover {
    color: var(--tertiary-color);
  }
`;

export const BurgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-60%, 50%);
    font-size: 3rem;
    cursor: pointer;
  }
`;
