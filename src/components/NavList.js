import styled from "styled-components/macro";
import PropTypes from "prop-types";
import { Link } from "react-scroll";

const Button = styled.button`
  width: 100px;
  height: 25px;
  background: var(--secondary-color);
  color: var(--primary-color);
  font-size: small;
  text-align: center;
  line-height: 25px;
  border-radius: 25px;
  margin-bottom: 5px;
  margin-right: 10px;
  border: none;
  position: absolute;
  outline: none;

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

const sections = ["About", "Background", "Projects", "Skills"];

const Navigation = ({ open }) => {
  return (
    <>
      <nav>
        <Button>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
          >
            contact
          </Link>
        </Button>
        <UnorderedList open={open}>
          {sections?.map((section) => (
            <NavItem key={section}>
              <Link
                to={`${section}`}
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
              >
                {section}
              </Link>
            </NavItem>
          ))}
        </UnorderedList>
      </nav>
    </>
  );
};

export default Navigation;

Navigation.propTypes = {
  open: PropTypes.bool,
};
