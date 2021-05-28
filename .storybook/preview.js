import { addDecorator } from "@storybook/react";
import { withThemes } from "@react-theming/storybook-addon";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../src/stories/themes";

addDecorator(withThemes(ThemeProvider, [dark, light]));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
