import React from "react";
import {StyledCardHeader} from "./StyledCardHeader";

type HeaderPropsType = {
    headerText: string
    imgSrc: string
    imgAlt: string
    titleSize: string
}

export const CardHeader = (props: HeaderPropsType) => {
    return <StyledCardHeader titleSize={props.titleSize}>
        <img src={props.imgSrc} alt="image card"/>
        <h1>{props.headerText}</h1>
    </StyledCardHeader>
}

