import styled from "styled-components";

export const StyledWorkExperience = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;

  //background-color: #ff0000;

  margin: 0;

  a {
    text-decoration: none;
  }

  h2 {
    margin: 0;
    padding: 0;
    color: var(--Solid-Heading, #42446E);
    font-family: Poppins,sans-serif;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 52px; /* 123.81% */
    letter-spacing: -0.4px;
  }
`
export const StyledWorkPlace = styled.div`
  display: grid;
  grid-template-areas: 
  'h3 h3 p'
  'org place date';

  grid-template-rows: 28px 17px 26px;
  grid-template-columns: 2fr 3fr 167px;

  border-bottom: 2px solid #EBEAED;

  h3 {
    margin: 0;
    padding: 0;
    grid-area: h3;

    color: var(--dark-content, #666);
    font-family: Poppins,sans-serif;
    font-size: 20px;
    font-style: normal;
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

    color: var(--Button-text, #018C0F);
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 9px;
    font-style: normal;
    font-weight: 600;

    border-radius: 100px;
    border-color: transparent;
    background: var(--Button-success, #D7FFE0);
  }

  hr {
    width: 2px;
    height: 696px;
    transform: rotate(-90deg);
    flex-shrink: 0;
    color: var(--colors-grey, #EBEAED);;
  }

`