import {PlacePropsType} from "../AboutMeTypes";
import {Organization} from "../placeDescription/Organization";
import {Location} from "../placeDescription/Location";
import {Date} from "../placeDescription/Date";
import React from "react";
import {StyledWorkPlace} from "./StyledWorkExperience";

export const WorkPlace = (props: PlacePropsType) => {
    return (
        <StyledWorkPlace theme={props.theme} queue={props.queue}>
            <h3>{props.position}</h3>
            <button>{props.schedule}</button>
            <Organization iconId='office' width="16" height="12" viewBox="0 0 16 12" orgName={props.orgName}/>
            <Location iconId='location' width="16" height="12" viewBox="0 0 16 12" place={props.place}/>
            <Date iconId='calendar' width="16" height="12" viewBox="0 0 16 12" dates={props.dates}/>
        </StyledWorkPlace>
    )
}