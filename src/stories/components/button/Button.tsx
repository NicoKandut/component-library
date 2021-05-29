import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import styled, { css, ThemeProps } from "styled-components";
import {
  defaultBorder,
  defaultForeground,
  dropShadow,
  flexRowWithSpacing,
  primaryHover,
  secondaryHover,
} from "../../mixins";
import { Theme } from "../../types/theme";

type ButtonProps = { block?: boolean } & Pick<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "key" | keyof ButtonHTMLAttributes<HTMLButtonElement>
> &
  ThemeProps<Theme>;

const BaseButton = (props: ButtonProps) => {
  return <button {...props} />;
};

/**
 * Basic form of the text button.
 */
const StyledButton = styled(BaseButton)(
  ({ theme, block }: ButtonProps) => css`
    ${flexRowWithSpacing}

    height: ${theme.dimensions.blockHeight};
    padding: 0 ${theme.dimensions.bigSpacing};
    font-size: ${theme.fontSizes.content};

    transition: all ${theme.timings.longTransitionTime} ease-out;

    ${block
      ? css`
          text-align: center;
          place-content: center;
          width: 100%;

          :active {
            transform: scaleX(1.03) scaleY(1.1);
          }
        `
      : css`
          :active {
            transform: scale(1.1);
          }
        `}
  `
);

/**
 * Basic button. Uses theme colors.
 */
export const PrimaryButton = styled(StyledButton)`
  ${defaultBorder}
  ${primaryHover}
`;

/**
 * Basic button. Uses theme colors.
 */
export const SecondaryButton = styled(StyledButton)`
  ${defaultBorder}
  ${secondaryHover}
`;

/**
 * Full-width PrimaryButton.
 */
export const BlockButton = styled(PrimaryButton)``;

/**
 * Button without background. For use with icons.
 */
export const SubtleButton = styled(StyledButton)`
  ${defaultForeground}
  ${dropShadow}

  background-color: transparent;
  border: none;
`;
