import styled from "styled-components/macro";
import { Arrows } from "./Arrows";
import PropTypes from "prop-types";

const CardContainer = styled.div`
  background: var(--secondary-color);
  border-radius: 40px;
  width: 300px;
  height: 400px;
  padding: 10px 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  color: var(--primary-color);

  h2 {
    font-weight: 400;
    font-size: 1.2rem;
  }

  p {
    font-weight: lighter;
  }
`;

export const Card = ({ title, period, description }) => {
  return (
    <CardContainer>
      <TextContainer>
        <h2>{title}</h2>
        <h2>{period}</h2>
        <p>{description}</p>
      </TextContainer>
      <Arrows />
    </CardContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
