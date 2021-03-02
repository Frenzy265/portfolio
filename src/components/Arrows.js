import styled from "styled-components/macro";

const Container = styled.div`
  align-self: flex-end;
  padding: 0 10px 10px 0;
  svg {
    fill: var(--tertiary-color);
    height: 20px;
  }
`;

export const Arrows = () => {
  return (
    <>
      <Container>
        <svg viewBox="0 0 20 34.979">
          <path
            d="M25.217,23.679,11.981,10.453a2.489,2.489,0,0,1,0-3.53,2.521,2.521,0,0,1,3.541,0l15,14.986a2.5,2.5,0,0,1,.073,3.447L15.532,40.447a2.5,2.5,0,1,1-3.541-3.53Z"
            transform="translate(-11.246 -6.196)"
          />
        </svg>
        <svg viewBox="0 0 20 34.979">
          <path
            d="M25.217,23.679,11.981,10.453a2.489,2.489,0,0,1,0-3.53,2.521,2.521,0,0,1,3.541,0l15,14.986a2.5,2.5,0,0,1,.073,3.447L15.532,40.447a2.5,2.5,0,1,1-3.541-3.53Z"
            transform="translate(-11.246 -6.196)"
          />
        </svg>
        <svg viewBox="0 0 20 34.979">
          <path
            d="M25.217,23.679,11.981,10.453a2.489,2.489,0,0,1,0-3.53,2.521,2.521,0,0,1,3.541,0l15,14.986a2.5,2.5,0,0,1,.073,3.447L15.532,40.447a2.5,2.5,0,1,1-3.541-3.53Z"
            transform="translate(-11.246 -6.196)"
          />
        </svg>
      </Container>
    </>
  );
};
