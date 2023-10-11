import React from "react";
import styled from "styled-components";


const HeaderMenu = () => {
    return (
        <StyledHeaderMenu>
            <span>Home</span>
            <span>About</span>
            <span>Tech Stack</span>
            <span>Projects</span>
            <span>Contact</span>
        </StyledHeaderMenu>
    )
}

const StyledHeaderMenu = styled.div`
  order: 2;
  flex-basis: 609px;
  
  display: flex;
  justify-content: space-between;
`

export default HeaderMenu