import styled from "styled-components";
import {mainTheme} from "../styles/Theme";

export const StyledHeader = styled.header<{ theme: any }>`
  //display: flex;

  margin: 20px 49px 220px 38px;

  background-color: ${props => props.theme === 'light' 
          ? 'rgba(255,255,255,0.18)' : mainTheme.colors.accentLight};
          //? '#D7FFE0' : mainTheme.colors.accentLight};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
  height: 80px;
`