import { px, s } from "../mixins/utils/units";

export const structual = {
  dimensions: {
    borderRadius: px(3),
    borderWidth: px(2),
    spacing: px(4),
    bigSpacing: px(8),
    hugeSpacing: px(16),
    gutter: px(8),
    blockHeight: px(32),
    bodyWidth: px(1000),
  },
  shadow: {
    radius: px(2),
    color: "#00000000",
  },
  timings: {
    transitionTime: s(0.2),
    longTransitionTime: s(0.2),
  },
  fontSizes: {
    content: px(15),
    bigTitle: px(24),
  },
};
