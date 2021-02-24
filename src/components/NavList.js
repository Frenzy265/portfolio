import styled from "styled-components/macro";

const NavItem = styled.li`
  width: 100px;
  height: 25px;
  background: var(--secondary-color);
  color: var(--primary-color);
  font-size: small;
  text-align: center;
  line-height: 25px;
  list-style: none;
  border-radius: 25px;
  margin-bottom: 5px;
  margin-right: 10px;

  a {
    text-decoration: none;
    color: inherit;
  }

  :hover {
    color: var(--tertiary-color);
  }
`;

const sections = ["Contact", "About", "Background", "Projects", "Skills"];

const NavList = () => {
  return (
    <>
      <ul>
        {sections?.map((section) => (
          <NavItem key={section}>
            <a href="#">{section}</a>
          </NavItem>
        ))}
      </ul>
    </>
  );
};

export default NavList;
