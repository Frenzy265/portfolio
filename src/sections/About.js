import Section from "../components/Section";
import Circle from "../components/Circle";
import { TextBox } from "../components/Textbox";
import Emoji from "../assets/emoji.png";

const About = () => {
  return (
    <Section id="about">
      <Circle imgSrc={Emoji} />
      <TextBox />
    </Section>
  );
};

export default About;
