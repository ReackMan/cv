import React from "react";
import {StyledCardText} from "./StyledCardText";

type CardTextPropsType = {
    cardText: string
    stackText: string
}

export const CardText = (props: CardTextPropsType) => {
    return (
        <StyledCardText>
            <span>{props.cardText}</span>
            <p>Tech stack:{props.stackText}</p>
        </StyledCardText>
    )
}

