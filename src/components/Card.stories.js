import React from "react";
import { Card } from "./Card";

export default {
  title: "Example/Card",
  component: Card,
  parameters: { layout: "centered" },
};

export const card = () => <Card />;
