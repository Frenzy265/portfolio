import styled from "styled-components/macro";
import { Card } from "./Card";

const CardContainer = styled.div`
  width: 50vw;

  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  overflow-x: auto;
`;

export const Cards = () => {
  return (
    <>
      <CardContainer>
        <Card />
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </>
  );
};
