import styled from "styled-components/macro";
import { Card } from "./Card";

const CardContainer = styled.div`
  padding: 30px 0px;
  width: 50vw;
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  overflow-x: auto;
  align-self: flex-start;
`;

const backgroundDetails = [
  {
    title:
      "Trainee Web Development Neue Fische - Pool and Tool for Digital Talents",
    period: "09/2020 - 12/2020",
    description:
      "Intensiv-Coding-Bootcamp in Vollzeit 540 Stunden Programmierpraxis mit Eigenentwicklung einer Web App als Abschlussprojekt",
  },
  {
    title:
      "Trainee Web Development Neue Fische - Pool and Tool for Digital Talents",
    period: "09/2020 - 12/2020",
    description:
      "Intensiv-Coding-Bootcamp in Vollzeit 540 Stunden Programmierpraxis mit Eigenentwicklung einer Web App als Abschlussprojekt",
  },
  {
    title:
      "Trainee Web Development Neue Fische - Pool and Tool for Digital Talents",
    period: "09/2020 - 12/2020",
    description:
      "Intensiv-Coding-Bootcamp in Vollzeit 540 Stunden Programmierpraxis mit Eigenentwicklung einer Web App als Abschlussprojekt",
  },
];

const projectDetails = [
  {
    title: "RecycleBar",
    description:
      "Als Abschlussprojekt im Rahmen des Bootcamps war es die Aufgabe, eine eigene Web-App zu entwickeln. Die Idee, das Design und die vollständige Umsetzung aller Seiten und Funktionalitäten war mir dabei selbst überlassen. ",
  },
  {
    title: "RecycleBar",
    description:
      "Als Abschlussprojekt im Rahmen des Bootcamps war es die Aufgabe, eine eigene Web-App zu entwickeln. Die Idee, das Design und die vollständige Umsetzung aller Seiten und Funktionalitäten war mir dabei selbst überlassen. ",
  },
  {
    title: "RecycleBar",
    description:
      "Als Abschlussprojekt im Rahmen des Bootcamps war es die Aufgabe, eine eigene Web-App zu entwickeln. Die Idee, das Design und die vollständige Umsetzung aller Seiten und Funktionalitäten war mir dabei selbst überlassen. ",
  },
];

export const CardsBackground = () => {
  return (
    <>
      <CardContainer>
        {backgroundDetails.map((backgroundDetail, index) => (
          <Card
            key={index}
            title={backgroundDetail.title}
            period={backgroundDetail.period}
            description={backgroundDetail.description}
          />
        ))}
      </CardContainer>
    </>
  );
};

export const CardsProjects = () => {
  return (
    <>
      <CardContainer>
        {projectDetails.map((projectDetail, index) => (
          <Card
            key={index}
            title={projectDetail.title}
            description={projectDetail.description}
          />
        ))}
      </CardContainer>
    </>
  );
};
