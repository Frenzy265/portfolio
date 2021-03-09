import styled from "styled-components/macro";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  justify-self: start;

  li {
    font-size: 2rem;
    font-weight: 300;
  }
`;

export const SkillsList = () => {
  const skills = [
    "HTML",
    "CSS",
    "React",
    "Styled-Components",
    "Git Workflow",
    "Node.js",
    "Express.js",
    "Mongo DB",
    "Scrum",
    "Projektmanagment",
  ];

  return (
    <List>
      {skills?.map((skill) => (
        <li key={skill}>{skill}</li>
      ))}
    </List>
  );
};
