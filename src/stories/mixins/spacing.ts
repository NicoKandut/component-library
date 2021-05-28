import { css, ThemeProps } from "styled-components";
import { Theme } from "../types/theme";
import { supportsFlexGap, supportsGap } from "./utils/browserSupport";
import { px } from "./utils/units";

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
export const gap = (amount: number) =>
  supportsGap
    ? css`
        gap: ${px(amount)};
      `
    : css`
        > :not(:last-child) {
          margin-right: ${px(amount)};
          margin-bottom: ${px(amount)};
        }
      `;

/**
 * Applies horizontal spacing between children of an element.
 * @param amount The amount of spacing eg. "5px"
 */
export const flexRowGap = (amount: number) =>
  supportsFlexGap
    ? css`
        gap: ${px(amount)};
      `
    : css`
        > :not(:last-child) {
          margin-right: ${px(amount)};
        }
      `;

/**
 * Applies vertical spacing between children of an element.
 * @param amount The amount of spacing eg. "5px"
 */
export const flexColumnGap = (amount: number) =>
  supportsFlexGap
    ? css`
        gap: ${px(amount)};
      `
    : css`
        > :not(:last-child) {
          margin-bottom: ${px(amount)};
        }
      `;
