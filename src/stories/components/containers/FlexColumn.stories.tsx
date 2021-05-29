import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { FlexColumn, FlexColumnWithSpacing } from "./FlexColumn";
import styled from "styled-components";

export default {
  title: "Design System/Containers/Flex Column",
  component: [FlexColumn, FlexColumnWithSpacing],
  decorators: [withKnobs],
};

const Item = styled.div`
  height: 300px;
  width: 500px;
  background: #8080aa80;
  border: solid #8080aa80 1px;
`;

export const tight = () => (
  <FlexColumn>
    <Item />
    <Item />
    <Item />
  </FlexColumn>
);

export const withSpacing = () => (
  <FlexColumnWithSpacing>
    <Item />
    <Item />
    <Item />
  </FlexColumnWithSpacing>
);
