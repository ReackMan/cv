import React from "react";
import {StyledCardText} from "./StyledCardText";

type CardTextPropsType = {
    cardText: string
    stackText: string
    theme: any
}

export const CardText = (props: CardTextPropsType) => {
    return (
        <StyledCardText theme={props.theme}>
            <span>{props.cardText}</span>
            <p>Tech stack: {props.stackText}</p>
        </StyledCardText>
    )
}

