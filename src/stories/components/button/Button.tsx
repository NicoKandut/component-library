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
import { px, s } from "../../mixins/utils/units";
import { Theme } from "../../types/theme";

type ButtonProps = { block?: boolean } & Pick<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  "key" | keyof ButtonHTMLAttributes<HTMLButtonElement>
> &
  ThemeProps<Theme>;

/**
 * Basic form of the text button.
 */
const BaseButton = styled.button(
  ({ theme, block }: ButtonProps) => css`
    ${flexRowWithSpacing}

    height: ${px(theme.dimensions.blockHeight)};
    padding: 0 ${px(theme.dimensions.bigSpacing)};
    font-size: ${px(theme.fontSizes.content)};

    transition: all ${s(theme.timings.longTransitionTime)} ease-out;

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
export const PrimaryButton = styled(BaseButton)`
  ${defaultBorder}
  ${primaryHover}
`;

/**
 * Basic button. Uses theme colors.
 */
export const SecondaryButton = styled(BaseButton)`
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
export const SubtleButton = styled(BaseButton)`
  ${defaultForeground}
  ${dropShadow}

  background-color: transparent;
  border: none;
`;
