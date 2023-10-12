import React from "react";
import styled from "styled-components";
import Welcome from "./welcome/Welcome";
import AboutMe from "./aboutMe/AboutMe";
import TechStack from "./techStack/TechStack";
import Projects from "./projects/Projects";
import MailMe from "./mailMe/MailMe";

const Main = () => {
    return (
        <StyledMain>
            <Welcome/>
            <AboutMe/>
            <TechStack/>
            <Projects/>
            <MailMe/>
        </StyledMain>
    )
}

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin: 0 150px 200px 107px;
`

export default Main