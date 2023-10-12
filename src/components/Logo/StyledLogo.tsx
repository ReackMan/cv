import styled from "styled-components";

export const StyledLogo = styled.div<{ textAlign?: string, flexBasis?: string }>`
  flex-basis: ${props => props.flexBasis};
  text-align: ${props => props.textAlign};
`