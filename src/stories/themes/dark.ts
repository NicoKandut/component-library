import merge from "lodash/merge";
import { Theme } from "../types/theme";
import branding from "./branding";
import { structual } from "./structural";

export const dark: Theme = merge({}, structual, branding, {
  name: "Dark",
  colors: {
    text: "#fff",
    backgroundColor: "#121212",
    backgroundColor2: "#fff",
    subduedText: "#ffffff80",
    layerBg: "#ffffff11",
    layerBgSolid: "#222222",
    layerBgHighlight: "#ffffff22",
    liked: "#ff0d50",
    activeForeground: "#fff",
  },
});
