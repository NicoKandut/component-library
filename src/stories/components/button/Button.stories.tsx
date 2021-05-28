import React from "react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { PrimaryButton, SecondaryButton, SubtleButton } from "./Button";
import { Component } from "react";

export default {
  title: "Design System/Atoms/Button",
  component: [PrimaryButton, SecondaryButton],
  decorators: [withKnobs],
};

const ButtonChildren = () => (
  <>
    <span>{text("Icon", "☆")}</span>
    <span>{text("Label", "Add Item")}</span>
    <span>{text("Icon 2", "»")}</span>
  </>
);

export const primary = () => (
  <PrimaryButton block={boolean("Block", false)}>
    <ButtonChildren />
  </PrimaryButton>
);

export const secondary = () => (
  <SecondaryButton block={boolean("Block", false)}>
    <ButtonChildren />
  </SecondaryButton>
);

export const subtle = () => (
  <SubtleButton block={boolean("Block", false)}>
    <ButtonChildren />
  </SubtleButton>
);
