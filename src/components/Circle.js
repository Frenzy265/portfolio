import styled from "styled-components/macro";
import propTypes from "prop-types";

const Container = styled.div`
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: var(--tertiary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }

  h1 {
    color: var(--secondary-color);
    margin: 30px;
  }

  svg {
    width: 70px;

    @media (max-width: 768px) {
      width: 0;
    }
  }

  img {
    width: inherit;
  }
`;

const Circle = ({ title, imgSrc }) => {
  return (
    <Container>
      {title ? (
        <>
          <h1>{title}</h1>
          <svg viewBox="0 0 100 100">
            <path
              d="M3.375,53.375a50,50,0,1,0,50-50A49.992,49.992,0,0,0,3.375,53.375Zm58.774,0L42.462,33.88a4.64,4.64,0,1,1,6.563-6.562l22.933,23a4.634,4.634,0,0,1,.144,6.394L49.5,79.385a4.632,4.632,0,1,1-6.563-6.538Z"
              transform="translate(-3.375 -3.375)"
            />
          </svg>
        </>
      ) : (
        <img src={imgSrc} alt="Emoji of me" />
      )}
    </Container>
  );
};

export default Circle;

Circle.propTypes = {
  title: propTypes.string,
  imgSrc: propTypes.any,
};
