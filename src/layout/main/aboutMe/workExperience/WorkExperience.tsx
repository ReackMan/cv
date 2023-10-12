import React from "react";
import {WorkPlace} from "./WorkPlace";
import {StyledWorkExperience} from "./StyledWorkExperience";

const WorkExperience = () => {
    return (
        <StyledWorkExperience>
            <h2>Work Experience</h2>
            <WorkPlace position='Junior Web Developer' schedule='Full Time'
                       orgName='Dr. Rajkumar’s Learning App' place='Bengaluru'
                       dates='Sep 2021 - Dec 2021'/>
            <WorkPlace position='Web Development Intern' schedule='Internship'
                       orgName='IonPixelz Web Solutions' place='Bengaluru'
                       dates='Sep 2021 - Dec 2021'/>
            <WorkPlace position='SEO / SEM Specialist' schedule='Internship'
                       orgName='HAAPS' place='Bengaluru'
                       dates='Sep 2021 - Dec 2021'/>
        </StyledWorkExperience>
    )
}

export default WorkExperience