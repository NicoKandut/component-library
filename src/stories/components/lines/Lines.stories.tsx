import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { HorizontalLine, VerticalLine } from "./Lines";
import styled from "styled-components";

export default {
  title: "Design System/Containers/Lines",
  component: [HorizontalLine, VerticalLine],
  decorators: [withKnobs],
};

const Container = styled.div`
  display: flex;
  min-height: 100px;
  padding: 10px;
`;

export const horizontal = () => <HorizontalLine />;

export const vertical = () => (
  <Container>
    <VerticalLine />
  </Container>
);
