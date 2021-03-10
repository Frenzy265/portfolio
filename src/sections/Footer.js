import styled from "styled-components/macro";
import ContactCards from "../components/ContactCards";

const Container = styled.footer`
  width: 100vw;
  height: 200px;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  display: grid;
  grid-template-columns: 50% 50%;
  place-items: center;

  p {
    color: var(--primary-color);
    font-size: 1rem;
    margin: 0px;
  }
`;

const Footer = () => {
  return (
    <>
      <Container id="Contact">
        <div>
          <p>
            <strong>Get in touch with me</strong>
          </p>
          <p>Franziska Klaus</p>
        </div>
        <ContactCards />
      </Container>
    </>
  );
};

export default Footer;
