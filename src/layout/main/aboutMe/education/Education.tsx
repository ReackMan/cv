import React from "react";
import {EducationPlace} from "./EducationPlace";
import {StyledEducation} from "./StyledEducation";

const Education = () => {
    return (
        <StyledEducation>
            <h2>Education</h2>
            <EducationPlace position='Bachelor in Electronics & Communication' schedule='Full Time'
                       orgName='Bangalore Instutute of Technology'
                       dates='Aug 2015 - Dec 2020'/>
        </StyledEducation>
    )
}

export default Education