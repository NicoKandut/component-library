import { css, ThemeProps } from "styled-components";
import { Theme } from "../types/theme";
import { boxShadow } from "./shadow";

/**
 * Element becomes accentColor on hover, and is highlighted when active/focused
 */
export const primaryHover = ({ theme }: ThemeProps<Theme>) => css`
  ${focusable}

  color: ${theme.colors.accentText};
  background: ${theme.colors.accentColor};

  :hover {
    background-color: ${theme.colors.accentHover};
  }
`;

/**
 * Element becomes accentColor on hover, and is highlighted when active/focused
 */
export const secondaryHover = ({ theme }: ThemeProps<Theme>) => css`
  ${focusable}

  color: ${theme.colors.accentColor};
  background: transparent;

  :hover {
    background-color: ${theme.colors.accentHover};
    color: ${theme.colors.accentText};
  }
`;

export const focusable = ({ theme }: ThemeProps<Theme>) => css`
  :focus {
    border-color: ${theme.colors.activeForeground};
  }
`;

export const defaultForeground = ({ theme }: ThemeProps<Theme>) => css`
  color: ${theme.colors.text};
`;

/**
 * Element will look like a new layer
 */
export function layer({ theme }: ThemeProps<Theme>) {
  return css`
    background-color: ${theme.colors.layerBg};
    ${boxShadow({ theme })}
  `;
}
