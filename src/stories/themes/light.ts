import { dark } from "./dark";
import merge from "lodash/merge";

export const light = merge({}, dark, {
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
    thumbColor: "#00000033",
  },
});
