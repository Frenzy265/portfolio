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
          Wir können nur über uns hinauswachsen und uns weiterentwickeln, wenn
          wir Neues wagen und Neues lernen. Und das habe ich getan. Ich habe
          mich im vergangenen Jahr entschieden, meinen Job als Projektmanagerin
          für Corporate Events aufzugeben und einen ganz anderen Weg
          einzuschlagen. Mein Drang nach Veränderung und mein Wunsch, den
          digitalen Wandel mitzugestalten, hat mich zum Web Development geführt.
          Dort habe ich drei Monate remote und in Vollzeit das notwendige
          Handwerkszeug und die Arbeitsmethoden für meinen Einstieg als
          Entwicklerin erlernt. Mit meinem Code möchte ich die Welt ein kleines
          bisschen besser machen. Das ist meine Vision.
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
