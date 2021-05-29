import styled from "styled-components";
import { flexRow, flexRowWithSpacing } from "../../mixins";

export const FlexRow = styled.div`
  ${flexRow}
`;

export const FlexRowWithSpacing = styled(FlexRow)`
  ${flexRowWithSpacing}
`;
