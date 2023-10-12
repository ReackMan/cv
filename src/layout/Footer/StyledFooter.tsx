import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: grid;
  grid-template-areas: 
  'logo contacts socials'
  'svg svg svg'
  'menu description description';
  
  grid-template-columns: 6fr 4fr 2fr;

  margin: 0 49px 60px 38px; 
  height: 176px;
  
  p {
    display: flex;
    color: var(--dark-content, #666);
    font-family: Poppins,sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 144.444% */
    justify-content: end;
    align-items: end;
    gap: 4px;
    
    grid-area: description;
    
    margin: 0;
  }
  
  text {
    background: var(--Gradient-Heading, linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: Poppins,sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
  }
`
export const StyledFooterLogo = styled.div`
  grid-area: logo;
`
export const StyledFooterLine = styled.div`
  grid-area: svg;
  
  
`