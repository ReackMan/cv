import styled from "styled-components";

export const StyledEducation = styled.div`
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
export const StyledEducationPlace = styled.div`
  display: grid;
  grid-template-areas: 
  'h3 h3 p'
  'org org date';
  
  grid-template-rows: 28px 17px 26px;
  grid-template-columns: 2fr 2fr 167px;
  
  border-bottom: 2px solid #EBEAED;

  h3 {
    grid-area: h3;
    margin: 0;
    padding: 0;

    color: var(--dark-content, #666);
    font-family: Poppins,sans-serif;
    font-size: 20px;
    font-style: normal;
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
  
  
`