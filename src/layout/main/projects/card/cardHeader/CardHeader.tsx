import React from "react";
import {StyledCardHeader} from "./StyledCardHeader";

type HeaderPropsType = {
    headerText: string
    imgSrc: string
    imgAlt: string
    titleSize: string
    theme: any
}

export const CardHeader = (props: HeaderPropsType) => {
    return <StyledCardHeader titleSize={props.titleSize} theme={props.theme}>
        <img src={props.imgSrc} alt="image card"/>
        <h3>{props.headerText}</h3>
    </StyledCardHeader>
}

