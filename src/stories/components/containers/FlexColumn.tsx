import styled from "styled-components";
import {
  flexColumn,
  centeredMaxWidth,
  flexColumnWithSpacing,
} from "../../mixins";

export const FlexColumn = styled.div`
  ${flexColumn}

  width: 100%;
  min-height: 100%;
`;

export const FlexColumnWithSpacing = styled(FlexColumn)`
  ${flexColumnWithSpacing}
  ${centeredMaxWidth}
`;
