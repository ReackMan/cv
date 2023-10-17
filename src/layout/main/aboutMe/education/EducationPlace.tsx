import {PlacePropsType} from "../AboutMeTypes";
import {Organization} from "../placeDescription/Organization";
import {Date} from "../placeDescription/Date";
import React from "react";

import {StyledEducationPlace} from "./StyledEducation";

export const EducationPlace = (props: PlacePropsType) => {
    return (
        <StyledEducationPlace theme={props.theme}>
            <h3>{props.position}</h3>
            <button>{props.schedule}</button>
            <Organization iconId='office' width="16" height="12" viewBox="0 0 16 12" orgName={props.orgName}/>
            <Date iconId='calendar' width="16" height="12" viewBox="0 0 16 12" dates={props.dates}/>
        </StyledEducationPlace>
    )
}