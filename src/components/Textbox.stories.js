import React from "react";
import { TextBox } from "./Textbox";

export default {
  title: "Example/Textbox",
  component: TextBox,
  parameters: { layout: "centered" },
};

export const textbox = () => <TextBox />;
