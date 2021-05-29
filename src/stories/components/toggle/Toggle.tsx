import React, { MouseEventHandler } from "react";
import styled, { css } from "styled-components";
import { defaultBorder, defaultForeground } from "../../mixins";
import { supportsAspectRatio } from "../../mixins/utils/browserSupport";
import { Theme } from "../../types/theme";
import { FlexRowWithSpacing } from "../containers/FlexRow";

const Track = styled.div(
  (props) => css`
    height: 24px;
    width: 50px;
    ${defaultBorder}
    border-radius: 30px;
    background-color: ${props.theme.colors.backgroundColor};
    transition: transform ${props.theme.timings.longTransitionTime} ease-in-out;
  `
);

function circleStyling() {
  return supportsAspectRatio
    ? css`
        height: 100%;
        aspect-ratio: 1/1;
      `
    : css`
        height: 100%;
        width: 22px;
      `;
}

const Thumb = styled.div(
  (props: { value: boolean; theme: Theme }) => css`
    ${circleStyling()}

    background-color: ${props.value
      ? props.theme.colors.accentColor
      : props.theme.colors.thumbColor};
    border-radius: 100px;
    transition: all ${props.theme.timings.transitionTime} ease-in-out;
    transform: translate(${props.value ? "26px" : "0px"});
  `
);

interface ToggleProps {
  value: boolean;
  onToggle: MouseEventHandler;
}

export function Toggle(props: ToggleProps) {
  const { value, onToggle } = props;

  return (
    <Track onClick={onToggle}>
      <Thumb value={value} />
    </Track>
  );
}

const Label = styled.span`
  ${defaultForeground}
`;

interface LabeledToggleProps extends ToggleProps {
  children: JSX.Element | string;
}

export function LabeledToggle(props: LabeledToggleProps) {
  const { children, value, onToggle } = props;

  return (
    <FlexRowWithSpacing>
      <Toggle value={value} onToggle={onToggle} />
      <Label>{children}</Label>
    </FlexRowWithSpacing>
  );
}
