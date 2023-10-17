import styled from "styled-components";
import {mainTheme} from "../../../styles/Theme";

export const StyledWorkExperience = styled.div<{ theme: any }>`
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
export const StyledWorkPlace = styled.div<{ theme: any, queue?: string }>`
  display: grid;
  grid-template-areas: 
  'h3 h3 p'
  'org place date';

  grid-template-rows: 28px 17px 26px;
  grid-template-columns: 10fr 10fr 165px;

  border-bottom: 2px solid #EBEAED;

  h3 {
    margin: 0;
    padding: 0;
    grid-area: h3;

    font-size: 20px;
    font-weight: 400;
    line-height: 28px; /* 140% */
    letter-spacing: 1px;
  }

  hr {
    grid-area: hr;
  }

  button {
    grid-area: p;
    margin: 0;
    padding: 0;

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

  hr {
    width: 2px;
    height: 696px;
    transform: rotate(-90deg);
    flex-shrink: 0;
    color: var(--colors-grey, #EBEAED);;
  }
  
  @media screen and (max-width: 634px) {
    grid-template-rows: ${props => props.queue === '1' 
            ? '28px 34px 26px' : '28px 17px 26px'};
  }
  
  @media screen and (max-width: 565px) {
    grid-template-rows: ${props => props.queue === '2' || '1' 
            ? '28px 34px 26px' : '28px 17px 26px'};
  }
  
  @media screen and (max-width: 467px) {
    grid-template-rows: ${props => props.queue === '2' 
            ? '56px 34px 26px' : props.queue === '1' ? '28px 34px 26px' : '28px 17px 26px'};
  }

  @media screen and (max-width: 438px) {
    grid-template-rows: ${props => props.queue === '1'
            ? '28px 61px 26px' : props.queue === '2' ? '56px 34px 26px' : '28px 17px 26px'};
  }

  @media screen and (max-width: 433px) {
    grid-template-rows: ${props => props.queue === '1'
            ? '56px 61px 26px' : props.queue === '2' ? '56px 34px 26px' : '28px 17px 26px'};
  }

  @media screen and (max-width: 413px) {
    grid-template-rows: ${props => props.queue === '1'
            ? '56px 61px 26px' : props.queue === '2' ? '56px 34px 26px' : '56px 17px 26px'};
  }

  @media screen and (max-width: 395px) {
    grid-template-columns: 10fr 10fr 105px;
    grid-template-rows: ${props => props.queue === '1'
            ? '28px 34px 26px' : props.queue === '2' ? '56px 34px 26px' : '28px 34px 26px'};
  }

  @media screen and (max-width: 378px) {
    grid-template-rows: ${props => props.queue === '1'
            ? '28px 61px 26px' : props.queue === '2' ? '56px 34px 26px' : '28px 34px 26px'};
  }
  
  @media screen and (max-width: 373px) {
    grid-template-rows: ${props => props.queue === '1'
            ? '56px 61px 26px' : props.queue === '2' ? '56px 34px 26px' : '28px 34px 26px'};
  }
  
  @media screen and (max-width: 353px) {
    grid-template-rows: ${props => props.queue === '1'
            ? '56px 61px 26px' : props.queue === '2' ? '56px 34px 26px' : '56px 34px 26px'};
  }
  
  @media screen and (max-width: 335px) {
    grid-template-rows: ${props => props.queue === '1'
            ? '56px 61px 26px' : props.queue === '2' ? '84px 34px 26px' : '56px 34px 26px'};
  }
  
  @media screen and (max-width: 332px) {
    grid-template-rows: ${props => props.queue === '1'
            ? '56px 61px 26px' : props.queue === '2' ? '84px 61px 26px' : '56px 34px 26px'};
  }
  
  
`