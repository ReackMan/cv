import React from "react";
import About from "./about/About";
import WorkExperience from "./workExperience/WorkExperience";
import Education from "./education/Education";
import {StyledAboutMe} from "./StyledAboutMe";

const AboutMe = (props: any) => {

    return (
        <StyledAboutMe>
            <About theme={props.theme}/>
            <WorkExperience theme={props.theme}/>
            <Education theme={props.theme}/>
        </StyledAboutMe>
    )
}

export default AboutMe