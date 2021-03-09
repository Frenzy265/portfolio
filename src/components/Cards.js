import styled from "styled-components/macro";
import { Card } from "./Card";

const CardContainer = styled.div`
  width: 50vw;

  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  overflow-x: auto;
  align-self: flex-start;
`;

export const Cards = () => {
  return (
    <>
      <CardContainer>
        <Card
          title="Trainee Web Development Neue Fisch - Pool and Tool for Digital Talents"
          period="09/2020 - 12/2020"
          description="Intensiv-Coding-Bootcamp in Vollzeit 540 Stunden Programmierpraxis mit
  Eigenentwicklung einer Web App als Abschlussprojekt"
        />
        <Card
          title="Trainee Web Development Neue Fisch - Pool and Tool for Digital Talents"
          period="09/2020 - 12/2020"
          description="Intensiv-Coding-Bootcamp in Vollzeit 540 Stunden Programmierpraxis mit
  Eigenentwicklung einer Web App als Abschlussprojekt"
        />
        <Card
          title="Trainee Web Development Neue Fisch - Pool and Tool for Digital Talents"
          period="09/2020 - 12/2020"
          description="Intensiv-Coding-Bootcamp in Vollzeit 540 Stunden Programmierpraxis mit
  Eigenentwicklung einer Web App als Abschlussprojekt"
        />
        <Card
          title="Trainee Web Development Neue Fisch - Pool and Tool for Digital Talents"
          period="09/2020 - 12/2020"
          description="Intensiv-Coding-Bootcamp in Vollzeit 540 Stunden Programmierpraxis mit
  Eigenentwicklung einer Web App als Abschlussprojekt"
        />
      </CardContainer>
    </>
  );
};
