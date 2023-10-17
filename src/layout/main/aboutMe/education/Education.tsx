import React from "react";
import {EducationPlace} from "./EducationPlace";
import {StyledEducation} from "./StyledEducation";

const Education = (props: any) => {
    return (
        <StyledEducation theme={props.theme}>
            <h2>Education</h2>
            <EducationPlace position='Bachelor in Electronics & Communication' schedule='Full Time'
                       orgName='Bangalore Instutute of Technology'
                       dates='Aug 2015 - Dec 2020' theme={props.theme}/>
        </StyledEducation>
    )
}

export default Education