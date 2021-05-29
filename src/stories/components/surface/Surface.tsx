import styled from "styled-components";
import { borderRadius, boxShadow, gutter, layer } from "../../mixins";

export default styled.div`
  display: grid;
  ${gutter}
  ${layer}
  ${boxShadow}
  ${borderRadius}
  width: 100%;
`;
