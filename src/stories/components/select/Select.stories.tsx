import React from "react";
import { withKnobs, object, text } from "@storybook/addon-knobs";
import { Select } from "./Select";

export default {
  title: "Design System/Atoms/Select",
  component: [Select],
  decorators: [withKnobs],
};

export const defaultSelect = () => (
  <Select
    options={object("Options", { opt1: "One", opt2: "Two", opt3: "Three" })}
    value={text("Value", "opt1")}
    onChange={() => {}}
  />
);
