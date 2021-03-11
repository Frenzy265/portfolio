import React from "react";
import styled from "styled-components/macro";
import ContactCard from "./ContactCard";
import * as FaIcon from "react-icons/fa";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
`;

const ContactDetails = [
  {
    title: "Xing",
    icon: <FaIcon.FaXing />,
    color: "#007877",
    link: "https://www.xing.com/profile/Franziska_Klaus2/cv",
  },
  {
    title: "Github",
    icon: <FaIcon.FaGithub />,
    color:
      "radial-gradient(circle, var(--secondary-color) 18%, var(--primary-color) 18%)",
    link: "https://github.com/Frenzy265",
  },

  {
    title: "LinkedIn",
    icon: <FaIcon.FaLinkedinIn />,
    color: "#005DC9",
    link: "https://linkedin.com/in/frenzy265",
  },
];

const ContactCards = () => {
  return (
    <Container>
      {ContactDetails.map((detail, index) => (
        <a key={index} href={detail.link} rel="noreferrer" target="_blank">
          <ContactCard hoverColor={detail.color}>{detail.icon}</ContactCard>
        </a>
      ))}
    </Container>
  );
};

export default ContactCards;
