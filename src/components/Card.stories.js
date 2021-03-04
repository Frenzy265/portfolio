import React from "react";
import { Card } from "./Card";

export default {
  title: "Example/Card",
  component: Card,
  parameters: { layout: "centered" },
};

export const card = () => (
  <Card
    title="Trainee Web Development Neue Fisch - Pool and Tool for Digital Talents"
    period="09/2020 - 12/2020"
    description="Intensiv-Coding-Bootcamp in Vollzeit 540 Stunden Programmierpraxis mit
  Eigenentwicklung einer Web App als Abschlussprojekt"
  />
);
