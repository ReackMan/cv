import styled from "styled-components";

export const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;

  background-color: transparent;

  margin: 0;

  h2 {
    margin: 0;
    color: #42446E;
    font-family: Poppins, sans-serif;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 52px; /* 123.81% */
    letter-spacing: -0.4px;
  }
  
  p {
    margin: 0;
    color: var(--dark-content, #666);
    font-family: Poppins,sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 144.444% */
  }
`