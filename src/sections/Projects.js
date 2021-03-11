import Caption from "../components/Caption";
import { CardsProjects } from "../components/Cards";
import Section from "../components/Section";

const Projects = () => {
  return (
    <>
      <Section id="projects">
        <Caption>
          pro
          <br />
          jects
        </Caption>
        <CardsProjects />
      </Section>
    </>
  );
};

export default Projects;
