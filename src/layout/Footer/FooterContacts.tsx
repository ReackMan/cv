import React from "react";
import styled from "styled-components";
import {mainTheme} from "../styles/Theme";


export const FooterContacts = (props: any) => {
    return (
        <StyledFooterContacts theme={props.theme}>
            <span>+7(916)298-84-34</span>
            <span>reackman@yandex.ru</span>
        </StyledFooterContacts>
    )
}

const StyledFooterContacts = styled.div<{ theme: any }>`
  grid-area: contacts;
  flex-basis: 609px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  //gap: 64px;
  color: ${props => props.theme === 'light' ?
          mainTheme.colors.fontLight : mainTheme.colors.customText};
  
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
   
  @media screen and (max-width: 576px) {
    justify-content: center;
  }
  
`
