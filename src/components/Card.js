import styled from "styled-components/macro";
import { Arrows } from "./Arrows";
import PropTypes from "prop-types";
import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const TextContainer = styled.div`
  background: var(--secondary-color);
  border-radius: 40px;
  width: 300px;
  height: 400px;
  padding: 10px 20px;
  display: grid;
  grid-template-rows: repeat(4, auto);
  color: var(--primary-color);

  h2 {
    font-weight: 400;
    font-size: 1.2rem;
    margin: 10px 0px 5px 0px;
  }
  p {
    font-weight: lighter;
    color: var(--primary-color);
    margin: 5px 0px;
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    margin: 5px 0px;
    cursor: pointer;
  }
`;

const ImageContainer = styled(TextContainer)`
  grid-template-rows: ${(props) =>
    props.cardTypeProjects ? "auto 40px" : "repeat(3, auto)"};

  a {
    font-size: 1rem;
    align-self: center;
    justify-self: center;
  }

  img {
    align-self: center;
    justify-self: center;
    max-width: ${(props) => (props.cardTypeProjects ? "" : "70%")};
    max-height: ${(props) => (props.cardTypeProjects ? "300px" : "")};
  }
`;

export const Card = ({
  title,
  subtitle,
  description,
  website,
  websiteName,
  imgSrc,
  cardTypeProjects,
}) => {
  const [flip, setFlip] = useState(false);

  const handleFlipCard = () => {
    setFlip(!flip);
  };

  return (
    <>
      <ReactCardFlip isFlipped={flip}>
        <TextContainer>
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <p>{description}</p>
          {cardTypeProjects ? (
            <a href={website} rel="noreferrer" target="_blank">
              {websiteName}{" "}
            </a>
          ) : (
            ""
          )}
          <Arrows onClick={handleFlipCard} />
        </TextContainer>

        <ImageContainer cardTypeProjects={cardTypeProjects}>
          {cardTypeProjects ? (
            ""
          ) : (
            <a href={website} rel="noreferrer" target="_blank">
              {websiteName}
            </a>
          )}
          <img src={imgSrc} alt={title} />
          <Arrows onClick={handleFlipCard} />
        </ImageContainer>
      </ReactCardFlip>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string.isRequired,
  website: PropTypes.string,
  websiteName: PropTypes.string,
  imgSrc: PropTypes.any,
  cardTypeProjects: PropTypes.bool,
};
