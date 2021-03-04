import React from "react";
import Caption from "./Caption";

export default {
  title: "Example/Caption",
  component: Caption,
  parameters: { layout: "centered" },
};

export const caption = () => (
  <Caption>
    Back
    <br />
    ground
  </Caption>
);
