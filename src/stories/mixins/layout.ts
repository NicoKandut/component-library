import { css, ThemeProps } from "styled-components";
import { Theme } from "../types/theme";
import { flexColumnGap, flexRowGap, gap } from "./spacing";

/**
 * Basic, reusable flex column.
 */
export const flexColumn = () => css`
  display: flex;
  flex-direction: column;
`;

/**
 * Basic, reusable flex row.
 */
export const flexRow = () => css`
  display: flex;
  align-items: center;
`;

/**
 * Flex row with theme-based spacing between elements
 */
export const flexRowWithSpacing = ({ theme }: ThemeProps<Theme>) => css`
  ${flexRow}
  ${flexRowGap(theme.dimensions.gutter)};
`;

/**
 * Flex column with theme-based spacing between elements
 */
export const flexColumnWithSpacing = ({ theme }: ThemeProps<Theme>) => css`
  ${flexColumn}
  ${flexColumnGap(theme.dimensions.gutter)};
`;

/**
 * Grid with theme-based spacing between elements
 */
export const gridWithSapcing = ({ theme }: ThemeProps<Theme>) => css`
  display: grid;
  ${gap(theme.dimensions.gutter)}
`;

/**
 * Preserves aspect ratio of the element and ensures it is displayed as big as possible.
 * Intended for image and video elements.
 */
export const flexMedia = () => css`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`;

/**
 * Limits content to a maximum width and centers it
 */
export function centeredMaxWidth({ theme }: ThemeProps<Theme>) {
  return css`
    width: 100%;
    max-width: ${theme.dimensions.bodyWidth};
    margin-left: auto;
    margin-right: auto;
  `;
}

/**
 * Default styling for widgets. Fixed height and padding.
 */
export function defaultBlock({ theme }: ThemeProps<Theme>) {
  return css`
    height: ${theme.dimensions.blockHeight};
    padding: 0 ${theme.dimensions.gutter};
  `;
}
