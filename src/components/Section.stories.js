import React from "react";
import Circle from "./Circle";
import { SkillsList } from "./SkillsList";
import Section from "./Section";
import Emoji from "../assets/emoji.png";
import { TextBox } from "./Textbox";
import { Cards } from "./Cards";
import Caption from "./Caption";

export default {
  title: "Example/Section",
  component: Section,
  parameters: { layout: "centered" },
};

export const sectionSkills = () => (
  <Section>
    <Circle>
      <h1>Skills</h1>
      <svg viewBox="0 0 100 100">
        <path
          d="M3.375,53.375a50,50,0,1,0,50-50A49.992,49.992,0,0,0,3.375,53.375Zm58.774,0L42.462,33.88a4.64,4.64,0,1,1,6.563-6.562l22.933,23a4.634,4.634,0,0,1,.144,6.394L49.5,79.385a4.632,4.632,0,1,1-6.563-6.538Z"
          transform="translate(-3.375 -3.375)"
        />
      </svg>
    </Circle>
    <SkillsList />
  </Section>
);

export const sectionProfile = () => (
  <Section>
    <Circle>
      <img src={Emoji} alt="Profile" />
    </Circle>
    <TextBox />
  </Section>
);

export const sectionBackground = () => (
  <Section>
    <Caption>
      Back
      <br />
      ground
    </Caption>
    <Cards />
  </Section>
);
