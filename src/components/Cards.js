import styled from "styled-components/macro";
import { Card } from "./Card";
import Jhh from "../assets/logo-jhh.svg";
import Svw from "../assets/SVW.png";

const CardContainer = styled.div`
  padding: 30px 0px;
  width: 100vh;
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  overflow-x: auto;
  overflow-y: hidden;
  align-self: flex-start;

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
    border-radius: 10px;
  }

  ::-webkit-scrollbar {
    width: 1em;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary-color);
    border-radius: 10px;
  }
`;

const backgroundDetails = [
  {
    title:
      "Trainee Web Development Neue Fische - Pool and Tool for Digital Talents",
    subtitle: "09/2020 - 12/2020",
    description:
      "Intensiv-Coding-Bootcamp in Vollzeit 540 Stunden Programmierpraxis mit Eigenentwicklung einer Web App als Abschlussprojekt",
    website: "https://www.neuefische.de/",
    websiteName: "www.neuefische.de",
    imgSrc: "https://media.giphy.com/media/SqqLcBeVxlgsIAhzsB/giphy.gif",
  },
  {
    title: "Senior Projektmanagerin jaeger + haeckerhase gmbh",
    subtitle: "08/2012 - 08/2020",
    description:
      "Konzeption, Panung und Umsetzung von Corporate Events, Steuerung und Führung interdisziplinärer Teams, Budgeterstellung, -kontrolle, und -abrechnung",
    website: "https://www.jaeger-haeckerhase.de/",
    websiteName: "www.jaeger-haeckerhase.de",
    imgSrc: Jhh,
  },
  {
    title: "Master of Arts",
    subtitle: "03/2010 - 07/2012",
    description:
      "Betriebswirtschaft und Kultur-, Freizeit-, Sportmanagement an der Reihnhold-Würth Hochschule Künzelsau der Hochschule Heilbronn",

    website: "https://www.hs-heilbronn.de/campus-kuenzelsau",
    websiteName: "www.hs-heilbronn.de",
    imgSrc:
      "https://cdn0.scrvt.com/5b9bbd140a15e188780a6244ebe572d4/4d9009dd2a39df61/1f062d85471e/v/27efaeac00f4/DJI_0380-HDR.jpg",
  },
  {
    title: "Bachelor of Arts",
    subtitle: "03/2006 - 09/2009",
    description:
      "Betriebswirtschaft und Kultur-, Freizeit-, Sportmanagement an der Reihnhold-Würth Hochschule Künzelsau der Hochschule Heilbronn",

    website: "https://www.hs-heilbronn.de/campus-kuenzelsau",
    websiteName: "www.hs-heilbronn.de",
    imgSrc:
      "https://cdn0.scrvt.com/5b9bbd140a15e188780a6244ebe572d4/f7dec4dd1f908ed0/7db8696c5be9/v/214af12c56bc/201805_SHA-KUEN_sRGB-1200px_026.jpg",
  },
];

const projectDetails = [
  {
    title: "RecycleBar",
    subtitle: "Reduce, Reuse, Recycle",
    description:
      "Als Abschlussprojekt im Rahmen des Bootcamps war es die Aufgabe, eine eigene Web-App zu entwickeln. Die Idee, das Design und die vollständige Umsetzung aller Seiten und Funktionalitäten war mir dabei selbst überlassen. ",
    website: "https://recycle-bar.herokuapp.com/",
    websiteName: "Deployment RecycleBar",
    imgSrc:
      "https://github.com/Frenzy265/recycle/raw/main/Franziska-Klaus_RecycleBar.gif",
  },
  {
    title: "SV Werder Bremen",
    subtitle: "Das Weserstadion für dein Zuhause",
    description:
      "In Zeiten von Corona und Fußballschauen zu Hause auf der Couch fehlt es oft an der richtigen Fußballstimmung. Das soll sich mit der App ändern, indem sie ein bisschen Weser-Stadion ins eigene Wohnzimmer bringt.",
    website: "https://svw.frenzy265.vercel.app/",
    websiteName: "Deployment SVW",
    imgSrc: Svw,
  },
  {
    title: "Portfolio",
    subtitle: "Ein Selbstversuch",
    description:
      "Meine eigene Protfolio-Website dient dazu, gelerntes zu vertiefen und neue Erfahrungen zu machen.",
  },
];

export const CardsCarrer = () => {
  return (
    <>
      <CardContainer>
        {backgroundDetails.map((backgroundDetail, index) => (
          <Card
            key={index}
            title={backgroundDetail.title}
            subtitle={backgroundDetail.subtitle}
            description={backgroundDetail.description}
            website={backgroundDetail.website}
            websiteName={backgroundDetail.websiteName}
            imgSrc={backgroundDetail.imgSrc}
          />
        ))}
      </CardContainer>
    </>
  );
};

export const CardsProjects = () => {
  return (
    <>
      <CardContainer>
        {projectDetails.map((projectDetail, index) => (
          <Card
            cardTypeProjects={true}
            key={index}
            title={projectDetail.title}
            subtitle={projectDetail.subtitle}
            description={projectDetail.description}
            website={projectDetail.website}
            websiteName={projectDetail.websiteName}
            imgSrc={projectDetail.imgSrc}
          />
        ))}
      </CardContainer>
    </>
  );
};
