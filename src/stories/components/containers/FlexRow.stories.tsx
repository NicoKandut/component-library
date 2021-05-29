import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import styled from "styled-components";
import { FlexRow, FlexRowWithSpacing } from "./FlexRow";

export default {
  title: "Design System/Containers/Flex Row",
  component: [FlexRow, FlexRowWithSpacing],
  decorators: [withKnobs],
};

const Item = styled.div`
  height: 100px;
  width: 200px;
  background: #aa808080;
  border: solid #8080aa80 1px;
`;

export const tight = () => (
  <FlexRow>
    <Item />
    <Item />
    <Item />
  </FlexRow>
);

export const withSpacing = () => (
  <FlexRowWithSpacing>
    <Item />
    <Item />
    <Item />
  </FlexRowWithSpacing>
);
