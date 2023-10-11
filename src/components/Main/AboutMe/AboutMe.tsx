import React from "react";
import styled from "styled-components";
import About from "./About";
import WorkExperience from "./WorkExperience";
import Education from "./Education";

const AboutMe = () => {
    return (
        <StyledAboutMe>
            <About/>
            <WorkExperience/>
            <Education/>
        </StyledAboutMe>
    )
}

const StyledAboutMe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  
  width: 710px;
  background-color: transparent;
  margin: 0 49px 200px 38px;
`

export default AboutMe