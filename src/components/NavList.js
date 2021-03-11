import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = styled.button`
  width: 100px;
  height: 25px;
  background: var(--secondary-color);
  color: var(--primary-color);
  font-size: small;
  text-align: center;
  line-height: 25px;
  border-radius: 25px;
  margin: 5px 10px 0px 0px;
  border: none;
  position: absolute;
  outline: none;
  cursor: pointer;

  a {
    text-decoration: none;
    color: inherit;
  }

  :hover {
    color: var(--tertiary-color);
  }
`;

const UnorderedList = styled.ul`
  opacity: ${(props) => (props.open ? "1" : "0")};
  visibility: ${(props) => (props.open ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  position: relative;
  top: 30px;
`;

const NavItem = styled(Button)`
  list-style: none;
  position: relative;
`;

const sections = ["about", "background", "projects", "skills"];

const Navigation = ({ open, toggle }) => {
  return (
    <>
      <nav>
        <Button>
          <Link
            to="/contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
          >
            contact
          </Link>
        </Button>
        <UnorderedList open={open}>
          {sections?.map((section, index) => (
            <Link
              key={index}
              to={`/${section}`}
              activeClass="active"
              spy={true}
              smooth={true}
              offset={-50}
            >
              <NavItem onClick={toggle}>{section}</NavItem>
            </Link>
          ))}
        </UnorderedList>
      </nav>
    </>
  );
};

export default Navigation;

Navigation.propTypes = {
  open: PropTypes.bool,
  toggle: PropTypes.func,
};
