import React from "react";
import {EducationPlace} from "./EducationPlace";
import {StyledEducation} from "./StyledEducation";

const Education = (props: any) => {

    return (
        <StyledEducation theme={props.theme}>
            <h2>Education</h2>
            <EducationPlace position='Junior+ Frontend Developer' schedule='Full Time'
                       orgName='IT-Incubator'
                       dates='Oct 2023 - Now' theme={props.theme}/>
        </StyledEducation>
    )
}

export default Education