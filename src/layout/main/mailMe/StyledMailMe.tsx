import styled from "styled-components";

export const StyledMailMe = styled.section`
  text-align: center;
  
  h2 {
    color: var(--colors-heading, #1E0E62);
    text-align: center;

    /* Heading / H2 Header */
    font-family: DM Sans, sans-serif;
    font-size: 58px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px; /* 120.69% */
    letter-spacing: -1px;
    margin: 0;
  }
  
  a {
    margin: 0;
    text-align: center;

    /* Heading / H2 Header */
    font-family: DM Sans,sans-serif;
    font-size: 58px;
    font-style: normal;
    font-weight: 700;
    line-height: 70px; /* 120.69% */
    letter-spacing: -1px;

    background: var(--Gradient-Heading, linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`