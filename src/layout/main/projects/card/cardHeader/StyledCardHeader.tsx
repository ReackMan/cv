import styled from "styled-components";
import {mainTheme} from "../../../../styles/Theme";

export const StyledCardHeader = styled.div<{ titleSize: string, theme: any }>`
  width: 100%;
  img {
    width: 100%;
    height: 220px;
    border-radius: 20px 20px 0 0;
    margin: 0 0 27px 0;
    object-fit: cover;
  }
  
  h3 {
    
    margin: 0 25px 17px 15px;

    color: ${props => props.theme === 'light'
            ? '#000' : mainTheme.colors.fontDark};
    font-size: 28px;
    font-weight: 500;
    line-height: 26px; /* 92.857% */
  }
  
`