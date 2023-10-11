import React from "react";
import styled from "styled-components";
import Welcome from "./Welcome/Welcome";
import AboutMe from "./AboutMe/AboutMe";

const Main = () => {
    return (
        <StyledMain>
            <Welcome/>
            <AboutMe/>
        </StyledMain>
    )
}

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  //background-color: #5effbe;


  margin: 0 49px 200px 38px;
`

export default Main