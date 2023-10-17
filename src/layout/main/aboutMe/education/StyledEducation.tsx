import styled from "styled-components";
import {mainTheme} from "../../../styles/Theme";

export const StyledEducation = styled.div<{ theme: any }>`
  display: flex;
  flex-direction: column;
  gap: 38px;

  margin: 0;

  h2 {
    margin: 0;
    padding: 0;
    font-size: 42px;
    font-weight: 700;
    line-height: 52px; /* 123.81% */
    letter-spacing: -0.4px;
  }
`
export const StyledEducationPlace = styled.div<{ theme: any }>`
  display: grid;
  grid-template-areas: 
  'h3 h3 p'
  'org org date';
  
  grid-template-rows: 28px 17px 26px;
  grid-template-columns: 2fr 2fr 165px;
  
  border-bottom: 2px solid #EBEAED;

  h3 {
    grid-area: h3;
    margin: 0;
    padding: 0;

    font-size: 20px;
    font-weight: 400;
    line-height: 28px; /* 140% */
    letter-spacing: 1px;
  }

  
  button {
    grid-area: p;

    width: 84px;
    height: 24px;
    flex-shrink: 0;
    
    justify-self: end;

    color: ${props => props.theme === 'light'
            ? '#018C0F' : mainTheme.colors.accentDark};
    text-align: center;
    font-size: 9px;
    font-weight: 600;

    border-radius: 100px;
    border-color: transparent;
    background: ${props => props.theme === 'light'
            ? '#D7FFE0' : mainTheme.colors.accentLight};
  }

  @media screen and (max-width: 649px) {
    grid-template-rows: 56px 17px 26px;
  }

  @media screen and (max-width: 458px) {
    grid-template-rows: 84px 34px 26px;
  }

  @media screen and (max-width: 375px) {
    grid-template-columns: 2fr 2fr 105px;
  }


`