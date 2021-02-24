import React from "react";
import NavList from "./NavList";

export default {
  title: "Example/NavList",
  component: NavList,
  parameters: { layout: "centered" },
};

export const navitem = () => <NavList />;
