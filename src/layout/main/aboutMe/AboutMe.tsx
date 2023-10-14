import React from "react";
import About from "./about/About";
import WorkExperience from "./workExperience/WorkExperience";
import Education from "./education/Education";
import {StyledAboutMe} from "./StyledAboutMe";

const AboutMe = () => {

    return (
        <StyledAboutMe>
            <About/>
            <WorkExperience/>
            <Education/>
        </StyledAboutMe>
    )
}

export default AboutMe