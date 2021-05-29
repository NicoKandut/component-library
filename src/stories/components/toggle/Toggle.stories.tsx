import React from "react";
import { withKnobs, boolean, text } from "@storybook/addon-knobs";
import { LabeledToggle, Toggle } from "./Toggle";

export default {
  title: "Design System/Atoms/Toggle",
  component: [Toggle],
  decorators: [withKnobs],
};

export const defaultToggle = () => (
  <Toggle value={boolean("Value", false)} onToggle={() => {}} />
);

export const labeledToggle = () => (
  <LabeledToggle value={boolean("Value", false)} onToggle={() => {}}>
    {text("Label", "Toggle me!")}
  </LabeledToggle>
);
