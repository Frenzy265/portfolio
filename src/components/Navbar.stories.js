import React from "react";
import { Navbar } from "./Navbar";

export default {
  title: "Example/Navbar",
  component: Navbar,
  parameters: { layout: "centered" },
};

export const navbar = () => <Navbar />;
