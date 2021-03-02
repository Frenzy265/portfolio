import styled from "styled-components/macro";
import { Arrows } from "./Arrows";

const CardContainer = styled.div`
  background: var(--secondary-color);
  border-radius: 40px;
  width: 300px;
  height: 400px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  color: var(--primary-color);

  h2 {
    font-weight: bold;
    font-size: 1.2rem;
  }

  p {
    font-weight: lighter;
  }
`;

export const Card = () => {
  return (
    <CardContainer>
      <TextContainer>
        <h2>
          Trainee Web Development Neue Fisch - Pool and Tool for Digital Talents
        </h2>
        <h2>09/2020 - 12/2020</h2>
        <p>
          Intensiv-Coding-Bootcamp in Vollzeit 540 Stunden Programmierpraxis mit
          Eigenentwicklung einer Web App als Abschlussprojekt
        </p>
      </TextContainer>
      <Arrows />
    </CardContainer>
  );
};
