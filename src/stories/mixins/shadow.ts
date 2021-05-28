import { css, ThemeProps } from "styled-components";
import { Theme } from "../types/theme";
import { px } from "./utils/units";

/**
 * Applies a box shadow based on theme
 */
export const boxShadow = ({ theme }: ThemeProps<Theme>) => css`
  box-shadow: 0 0 ${px(theme.shadow.radius)} ${theme.shadow.color};
`;

/**
 * Applies a drop shadow based on theme
 */
export const dropShadow = ({ theme }: ThemeProps<Theme>) => css`
  filter: drop-shadow(0 0 ${px(theme.shadow.radius)} ${theme.shadow.color});
`;
