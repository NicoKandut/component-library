import { dark } from "./dark";
import merge from "lodash/merge";
import { Theme } from "../types/theme";

export const light: Theme = merge({}, dark, {
  name: "Light",
  colors: {
    text: "#000",
    backgroundColor: "#fff",
    backgroundColor2: "#fff",
    subduedText: "#00000080",
    layerBg: "#00000011",
    layerBgSolid: "#dddddd",
    layerBgHighlight: "#00000022",
    activeForeground: "#000",
  },
});
