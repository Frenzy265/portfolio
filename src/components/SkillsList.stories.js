import React from "react";
import { SkillsList } from "./SkillsList";

export default {
  title: "Example/SkillsList",
  component: SkillsList,
  parameters: { layout: "centered" },
};

export const skillsList = () => <SkillsList />;
