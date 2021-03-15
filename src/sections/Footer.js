import styled from "styled-components/macro";
import ContactCards from "../components/ContactCards";

const Container = styled.footer`
  height: 300px;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  display: grid;
  grid-template-rows: 40% 60%;
  place-items: center;
  padding: 20px;

  p {
    color: var(--primary-color);
    font-size: 1rem;
    margin: 0px;
    justify-self: center;
    align-self: flex-end;
  }
`;

const Footer = () => {
  return (
    <>
      <Container id="contact">
        <p>Get in touch with Franziska</p>
        <ContactCards />
      </Container>
    </>
  );
};

export default Footer;
