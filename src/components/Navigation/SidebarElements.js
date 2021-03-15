import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

export const SidebarContainer = styled.aside`
  background-color: var(--secondary-color);
  color: var(--primary-color);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.open ? "100%" : "0")};
  top: ${(props) => (props.open ? "0" : "-100%")};
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-60%, 50%);
  font-size: 4rem;
  cursor: pointer;
`;

export const SidebarWrapper = styled.ul`
  width: 100%;
  height: 60%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SidebarItem = styled.li`
  font-size: 2rem;
  height: 50px;
  margin: 30px;
  display: flex;
  justify-content: center;
`;

export const SidebarLink = styled(Link)`
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

SidebarContainer.propTypes = {
  open: PropTypes.bool,
};
