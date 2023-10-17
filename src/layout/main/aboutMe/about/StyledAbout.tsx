import styled from "styled-components";

export const StyledAbout = styled.div<{ theme: any }>`
  display: flex;
  flex-direction: column;
  gap: 38px;

  background-color: transparent;

  margin: 0;

  h2 {
    margin: 0;
    font-size: 42px;
    font-weight: 700;
    line-height: 52px; /* 123.81% */
    letter-spacing: -0.4px;
  }
  
  p {
    margin: 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px; /* 144.444% */
  }
`