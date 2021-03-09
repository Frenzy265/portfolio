import React from "react";
import ContactCards from "../components/ContactCards";
import Caption from "../components/Caption";
import Section from "../components/Section";

export const Contact = () => {
  return (
    <>
      <Section id="Contact">
        <Caption>Contact</Caption>
        <ContactCards />
      </Section>
    </>
  );
};
