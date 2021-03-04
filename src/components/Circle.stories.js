import React from "react";
import Circle from "./Circle";
import Emoji from "../assets/emoji.png";

export default {
  title: "Example/Circle",
  component: Circle,
  parameters: { layout: "centered" },
};

export const titleCircle = () => <Circle title="skills" />;
export const imageCircle = () => <Circle imgSrc={Emoji} />;
