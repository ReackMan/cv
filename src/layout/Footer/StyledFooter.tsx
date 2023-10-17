import styled from "styled-components";

export const StyledFooter = styled.footer<{ theme: any }>`

  margin: 0 49px 30px 38px; 
  height: 176px;
  width: 100%;
  
  p {
    display: flex;
    flex-wrap: wrap;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px; /* 144.444% */
    justify-content: end;
    align-items: end;
    gap: 4px;
    
    grid-area: description;
    
    margin: 0;
    
    @media screen and (max-width: 992px) {
      justify-content: center;
      align-items: center;
    }
  }
  
  text {
    background: var(--Gradient-Heading, linear-gradient(90deg, #13B0F5 -2.06%, #E70FAA 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
  }
`
export const StyledFooterLogo = styled.div`
  grid-area: logo;
`
export const StyledFooterLine = styled.div<{ queue?: string }>`
  grid-area: ${props => props.queue === '1' ? 'svg' : 'svg2'};
  
  display: ${props => props.queue === '1' ? 'block' : 'none'};
  
  @media screen and (max-width: 992px) {
    display: ${props => props.queue === '2' ? 'block' : 'block'};
  }
`