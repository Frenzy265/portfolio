import styled from "styled-components/macro";
import PropTypes from "prop-types";

export const Nav = styled.nav`
  background: var(--secondary-color);
  color: var(--primary-color);
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: inherit;
  width: inherit;
  z-index: 1;
  padding: 0 50px;
  position: relative;
  margin: 0px;
  align-items: center;
`;

export const Logo = styled.p`
  color: var(--primary-color);
  font-size: 1rem;
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0 10px;
`;

export const NavItem = styled.li`
  width: 120px;
  height: 30px;
  background: var(--secondary-color);
  color: var(--primary-color);
  font-size: 1rem;
  border-radius: 25px;
  margin: 5px 10px 0px 0px;
  border: none;
  outline: none;
  cursor: pointer;
  display: none;

  :last-child {
    display: inline;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  :hover {
    color: var(--tertiary-color);
  }

  @media (max-width: 768px) {
    display: none;
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
    font-size: 2rem;
    cursor: pointer;
  }
`;

NavItem.propTypes = {
  open: PropTypes.bool,
};
