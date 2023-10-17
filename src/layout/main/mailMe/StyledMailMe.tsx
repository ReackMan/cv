import styled from "styled-components";
import {mainTheme} from "../../styles/Theme";

export const StyledMailMe = styled.section<{ theme: any }>`
  text-align: center;
  
  h2 {
    color: ${props => props.theme === 'light'
            ? '#1E0E62' : mainTheme.colors.accentDark};
    text-align: center;

    /* Heading / H2 Header */
    font-family: DM Sans, sans-serif;
    font-size: 58px;
    font-weight: 700;
    line-height: 70px; /* 120.69% */
    letter-spacing: -1px;
  }
  
  p {
    text-align: center;

    /* Heading / H2 Header */
    font-family: DM Sans,sans-serif;
    font-size: 58px;
    font-weight: 700;
    line-height: 70px; /* 120.69% */
    letter-spacing: -1px;

    background: var(--Gradient-Heading, linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    @media screen and (max-width: 595px) {
      display: flex;
      flex-direction: column;
      font-size: 48px;
    }
  }
`