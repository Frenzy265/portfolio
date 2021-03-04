import styled from "styled-components/macro";

const Container = styled.div`
  h1 {
    color: var(--tertiary-color);
    font-size: 6rem;
    font-weight: 800;
    margin-block-end: 0px;
    margin-block-start: 0px;
  }
`;

export const Caption = () => {
  return (
    <Container>
      <h1>
        back
        <br />
        ground
      </h1>
    </Container>
  );
};
