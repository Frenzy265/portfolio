import styled from "styled-components/macro";

const Circle = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: var(--tertiary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: var(--secondary-color);
    font-size: 10rem;
    margin: 30px;
  }

  svg {
    width: 70px;
  }
`;

export default Circle;
