import styled from "styled-components/macro";

const Caption = styled.h1`
  color: var(--tertiary-color);
  font-weight: 800;
  margin-block-end: 0px;
  margin-block-start: 0px;
  align-self: start;
  line-height: 80%;

  @media (max-width: 768px) {
    justify-self: start;
  }
`;

export default Caption;
