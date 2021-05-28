import { DefaultTheme } from "styled-components";

export interface Theme extends DefaultTheme {
  name: string;
  dimensions: {
    borderRadius: number;
    borderWidth: number;
    spacing: number;
    bigSpacing: number;
    hugeSpacing: number;
    gutter: number;
    blockHeight: number;
    bodyWidth: number;
  };
  colors: {
    text: string;
    accentColor: string;
    accentText: string;
    accentHover: string;
    backgroundColor: string;
    backgroundColor2: string;
    subduedText: string;
    layerBg: string;
    layerBgSolid: string;
    layerBgHighlight: string;
    liked: string;
    activeForeground: string;
  };
  shadow: {
    radius: number;
    color: string;
  };
  timings: {
    transitionTime: number;
    longTransitionTime: number;
  };
  fontSizes: {
    content: number;
    bigTitle: number;
  };
}
