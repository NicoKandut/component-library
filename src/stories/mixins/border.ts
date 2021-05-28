import { css, ThemeProps } from "styled-components";
import { Theme } from "../types/theme";
import { px } from "./utils/units";

/**
 * Applies a standard border based on the theme
 */
export const defaultBorder = ({ theme }: ThemeProps<Theme>) => css`
  border-color: ${theme.colors.accentColor};
  border-width: ${px(theme.dimensions.borderWidth)};
  ${borderRadius}
  border-style: solid;
`;

/**
 * Applies border radius based on the theme.
 */
export const borderRadius = ({ theme }: ThemeProps<Theme>) => css`
  border-radius: ${px(theme.dimensions.borderRadius)};
`;
