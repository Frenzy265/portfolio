import styled from "styled-components/macro";

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  justify-self: start;

  @media (max-width: 768px) {
    justify-self: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  li {
    font-size: 2rem;
    font-weight: 300;

    @media (max-width: 768px) {
      min-width: 120px;
      height: 50px;
      margin: 5px;
      padding: 5px;
    }
  }
`;

export const SkillsList = () => {
  const skills = [
    "HTML",
    "CSS",
    "React",
    "Styled-Components",
    "GitWorkflow",
    "Node.js",
    "Express.js",
    "MongoDB",
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
