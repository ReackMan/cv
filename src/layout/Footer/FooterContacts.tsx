import React from "react";
import styled from "styled-components";


export const FooterContacts = () => {
    return (
        <StyledFooterContacts>
            <span>+91 12345 09876</span>
            <span>info@example.com</span>
        </StyledFooterContacts>
    )
}

const StyledFooterContacts = styled.div`
  grid-area: contacts;
  flex-basis: 609px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 64px;
`
