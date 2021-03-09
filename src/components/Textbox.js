import styled from "styled-components/macro";
import Quote from "../assets/icon-metro-quote.svg";

const Box = styled.div`
  color: var(--secondary-color);
  width: 500px;

  h2 {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 0 20px;
  }

  p {
    font-size: 1.2rem;
    padding: 0 20px;
  }

  img {
    height: 40px;
  }
`;

export const TextBox = () => {
  return (
    <>
      <Box>
        <img src={Quote} alt="quote" />
        <h2>Sei mutig, erlaube Fehler, lerne Neues!</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
        </p>
        <img
          src={Quote}
          alt="quote"
          style={{
            transform: "scaleY(-1)",
            float: "right",
          }}
        />
      </Box>
    </>
  );
};
