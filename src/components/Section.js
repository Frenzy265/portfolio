import styled from "styled-components/macro";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  height: 100vh;
  width: 100vw;
  padding: 50px;
  grid-gap: 10px;
`;

export default Section;
