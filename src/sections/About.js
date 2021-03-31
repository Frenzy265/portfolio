import Section from "../components/Section";
import Circle from "../components/Circle";
import { TextBox } from "../components/Textbox";
import ProfilePicture from "../assets/profil.jpeg";

const About = () => {
  return (
    <Section id="about">
      <Circle imgSrc={ProfilePicture} />
      <TextBox />
    </Section>
  );
};

export default About;
