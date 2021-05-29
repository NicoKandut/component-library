import { css, ThemeProps } from "styled-components";
import { Theme } from "../types/theme";
import { supportsFlexGap, supportsGap } from "./utils/browserSupport";

/**
 * Default spacing for grid and flex
 */
export const gutter = ({ theme }: ThemeProps<Theme>) => css`
  ${gap(theme.dimensions.gutter)};
  padding: ${theme.dimensions.gutter};
`;

/**
 * Applies spacing between children of an element.
 * @param amount The amount of spacing eg. "5px"
 */
export const gap = (amount: string) =>
  supportsGap
    ? css`
        gap: ${amount};
      `
    : css`
        > :not(:last-child) {
          margin-right: ${amount};
          margin-bottom: ${amount};
        }
      `;

/**
 * Applies horizontal spacing between children of an element.
 * @param amount The amount of spacing eg. "5px"
 */
export const flexRowGap = (amount: string) =>
  supportsFlexGap
    ? css`
        gap: ${amount};
      `
    : css`
        > :not(:last-child) {
          margin-right: ${amount};
        }
      `;

/**
 * Applies vertical spacing between children of an element.
 * @param amount The amount of spacing eg. "5px"
 */
export const flexColumnGap = (amount: string) =>
  supportsFlexGap
    ? css`
        gap: ${amount};
      `
    : css`
        > :not(:last-child) {
          margin-bottom: ${amount};
        }
      `;
