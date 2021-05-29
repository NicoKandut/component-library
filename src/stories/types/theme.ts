import { DefaultTheme } from "styled-components";
import { string, string } from "../mixins/utils/units";

export interface Theme extends DefaultTheme {
  name: string;
  dimensions: {
    borderRadius: string;
    borderWidth: string;
    spacing: string;
    bigSpacing: string;
    hugeSpacing: string;
    gutter: string;
    blockHeight: string;
    bodyWidth: string;
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
    thumbColor: string;
  };
  shadow: {
    radius: string;
    color: string;
  };
  timings: {
    transitionTime: string;
    longTransitionTime: string;
  };
  fontSizes: {
    content: string;
    bigTitle: string;
  };
}
