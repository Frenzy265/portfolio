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
`;

const backgroundDetails = [
  {
    title: "Software Engineer",
    subtitle: "Seit 05/2021",
    description:
      "Intensiv-Coding-Bootcamp in Vollzeit: 540 Stunden Programmierpraxis mit Eigenentwicklung einer Web App als Abschlussprojekt",
    website: "https://fulfillmenttools.com/",
    websiteName: "www.fulfillmenttools.com",
    imgSrc:
      "https://fulfillmenttools.com/wp-content/uploads/2020/07/FT_Logo_2022_RZ_RGB_pos-trim.png",
  },
  {
    title: "Software Engineer fulfillmenttools",
    subtitle: "Seit 05/2021",
    description:
      "Intensiv-Coding-Bootcamp in Vollzeit: 540 Stunden Programmierpraxis mit Eigenentwicklung einer Web App als Abschlussprojekt",
    website: "https://fulfillmenttools.com/",
    websiteName: "www.fulfillmenttools.com",
    imgSrc:
      "https://fulfillmenttools.com/wp-content/uploads/2020/07/FT_Logo_2022_RZ_RGB_pos-trim.png",
  },
  {
    title:
      "Trainee Web Development Neue Fische - Pool and Tool for Digital Talents",
    subtitle: "09/2020 - 12/2020",
    description:
      "Intensiv-Coding-Bootcamp in Vollzeit: 540 Stunden Programmierpraxis mit Eigenentwicklung einer Web App als Abschlussprojekt",
    website: "https://www.neuefische.de/",
    websiteName: "www.neuefische.de",
    imgSrc: "https://media.giphy.com/media/KZqFcmN3p7d3YZuKfE/giphy.gif",
  },
  {
    title: "Senior Projektmanagerin jaeger + haeckerhase gmbh",
    subtitle: "08/2012 - 08/2020",
    description:
      "Konzeption, Planung und Umsetzung von Corporate Events, Steuerung und Führung interdisziplinärer Teams, Budgeterstellung, -kontrolle, und Abrechnung",
    website: "https://www.jaeger-haeckerhase.de/",
    websiteName: "www.jaeger-haeckerhase.de",
    imgSrc: Jhh,
  },
  {
    title: "Master of Arts",
    subtitle: "03/2010 - 07/2012",
    description:
      "Betriebswirtschaft und Kultur-, Freizeit-, Sportmanagement an der Reinhold-Würth Hochschule Künzelsau der Hochschule Heilbronn",

    website: "https://www.hs-heilbronn.de/campus-kuenzelsau",
    websiteName: "www.hs-heilbronn.de",
    imgSrc:
      "https://cdn0.scrvt.com/5b9bbd140a15e188780a6244ebe572d4/4d9009dd2a39df61/1f062d85471e/v/27efaeac00f4/DJI_0380-HDR.jpg",
  },
  {
    title: "Bachelor of Arts",
    subtitle: "03/2006 - 09/2009",
    description:
      "Betriebswirtschaft und Kultur-, Freizeit-, Sportmanagement an der Reinhold-Würth Hochschule Künzelsau der Hochschule Heilbronn",

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
    website: "https://recycle-7pq8.onrender.com",
    websiteName: "Deployment RecycleBar",
    imgSrc:
      "https://github.com/Frenzy265/recycle/raw/main/Franziska-Klaus_RecycleBar.gif",
  },
  {
    title: "SV Werder Bremen",
    subtitle: "Das Weserstadion für dein Zuhause",
    description:
      "In Zeiten von Corona und Fußballschauen zu Hause auf der Couch fehlt es oft an der richtigen Fußballstimmung. Das soll sich mit der App ändern, indem sie ein bisschen Weserstadion ins eigene Wohnzimmer bringt.",
    website: "https://svw.onrender.com",
    websiteName: "Deployment SVW",
    imgSrc: Svw,
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
