import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import Surface from "./Surface";
import styled from "styled-components";

export default {
  title: "Design System/Containers/Surface",
  component: [Surface],
  decorators: [withKnobs],
};

const Child = styled.div`
  height: 100px;
`;

export const defaultSurface = () => (
  <Surface>
    <Child />
  </Surface>
);
