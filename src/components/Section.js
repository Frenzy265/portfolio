import styled from "styled-components/macro";

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  height: auto;
  grid-gap: 20px;
  margin: 100px 30px 200px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto 1fr);
  }
`;

export default Section;
