import styled from "styled-components/macro";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 2rem;
    font-weight: 300;
  }
`;

export const SkillsList = () => {
  return (
    <List>
      <li>HTML</li>
      <li>CSS</li>
      <li>React</li>
      <li>Styled Components</li>
      <li>Mongo DB</li>
      <li>Express.js</li>
      <li>Node.js</li>
      <li>Git Workflow</li>
      <li>Scrum</li>
      <li>Projektmanagement</li>
    </List>
  );
};
