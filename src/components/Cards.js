import styled from "styled-components/macro";
import { Card } from "./Card";
import Jhh from "../assets/logo-jhh.svg";

const CardContainer = styled.div`
  padding: 30px 0px;
  width: 50vw;
  display: grid;
  grid-gap: 1rem;
  grid-auto-flow: column;
  overflow-x: auto;
  align-self: flex-start;
`;

const backgroundDetails = [
  {
    title:
      "Trainee Web Development Neue Fische - Pool and Tool for Digital Talents",
    period: "09/2020 - 12/2020",
    description:
      "Intensiv-Coding-Bootcamp in Vollzeit 540 Stunden Programmierpraxis mit Eigenentwicklung einer Web App als Abschlussprojekt",
    shortTitle: "neue Fische Bootcamp",
    website: "https://www.neuefische.de/",
    websiteName: "www.neuefische.de",
    imgSrc: "https://media.giphy.com/media/SqqLcBeVxlgsIAhzsB/giphy.gif",
  },
  {
    title: "Senior Projektmanagerin jaeger + haeckerhase gmbh",
    period: "08/2012 - 08/2020",
    description:
      "Konzeption, Panung und Umsetzung von Corporate Events, Steuerung und Führung interdisziplinärer Teams, Budgeterstellung, -kontrolle, und -abrechnung",
    shortTitle: "jaeger + haeckerhase gmbh",
    website: "https://www.jaeger-haeckerhase.de/",
    websiteName: "www.jaeger-haeckerhase.de",
    imgSrc: Jhh,
  },
  {
    title: "Master of Arts",
    period: "03/2010 - 07/2012",
    description:
      "Betriebswirtschaft und Kultur-, Freizeit-, Sportmanagement an der Reihnhold-Würth Hochschule Künzelsau der Hochschule Heilbronn",
    shortTitle: "Masterstudium",
    website: "https://www.hs-heilbronn.de/campus-kuenzelsau",
    websiteName: "www.hs-heilbronn.de",
    imgSrc:
      "https://cdn0.scrvt.com/5b9bbd140a15e188780a6244ebe572d4/4d9009dd2a39df61/1f062d85471e/v/27efaeac00f4/DJI_0380-HDR.jpg",
  },
  {
    title: "Bachelor of Arts",
    period: "03/2006 - 09/2009",
    description:
      "Betriebswirtschaft und Kultur-, Freizeit-, Sportmanagement an der Reihnhold-Würth Hochschule Künzelsau der Hochschule Heilbronn",
    shortTitle: "Bachelorstudium",
    website: "https://www.hs-heilbronn.de/campus-kuenzelsau",
    websiteName: "www.hs-heilbronn.de",
    imgSrc:
      "https://cdn0.scrvt.com/5b9bbd140a15e188780a6244ebe572d4/f7dec4dd1f908ed0/7db8696c5be9/v/214af12c56bc/201805_SHA-KUEN_sRGB-1200px_026.jpg",
  },
];

const projectDetails = [
  {
    title: "RecycleBar",
    description:
      "Als Abschlussprojekt im Rahmen des Bootcamps war es die Aufgabe, eine eigene Web-App zu entwickeln. Die Idee, das Design und die vollständige Umsetzung aller Seiten und Funktionalitäten war mir dabei selbst überlassen. ",
    shortTitle: "RecycleBar",
    website: "https://recycle-bar.herokuapp.com/",
    webSiteName: "Deployment Recyclebar",
    imgSrc:
      "https://github.com/Frenzy265/recycle/raw/main/Franziska-Klaus_RecycleBar.gif",
  },
  {
    title: "SV Werder Bremen",
    description:
      "In Zeiten von Corona und Fußballschauen zu Hause auf der Couch fehlt es oft an der richtigen Fußballstimmung. Das soll sich mit der App ändern, indem sie ein bisschen Weser-Stadion ins eigene Wohnzimmer bringt.",
  },
  {
    title: "Portfolio",
    description:
      "Meine eigene Protfolio-Website dient dazu, gelerntes zu vertiefen und Schwerpunktmäßig neue Erfahrungen mit Animationen und Keyframes zu machen.",
  },
];

export const CardsBackground = () => {
  return (
    <>
      <CardContainer>
        {backgroundDetails.map((backgroundDetail, index) => (
          <Card
            key={index}
            title={backgroundDetail.title}
            period={backgroundDetail.period}
            description={backgroundDetail.description}
            shortTitle={backgroundDetail.shortTitle}
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
            key={index}
            title={projectDetail.title}
            description={projectDetail.description}
            shortTitle={projectDetail.shortTitle}
            website={projectDetail.website}
            websiteName={projectDetail.websiteName}
            imgSrc={projectDetail.imgSrc}
          />
        ))}
      </CardContainer>
    </>
  );
};
