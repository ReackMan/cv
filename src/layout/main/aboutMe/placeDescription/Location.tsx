import {LocationPropsType} from "../AboutMeTypes";
import {Logo} from "../../../../components/logo/Logo";
import React from "react";
import styled from "styled-components";

export const Location = (props: LocationPropsType) => {
    return (
        <StyledLocation>
            <Logo iconId={props.iconId} width={props.width} height={props.height}
                  viewBox={props.viewBox} text={props.place}/>
        </StyledLocation>
    )
}
const StyledLocation = styled.div`
  grid-area: place;
  
  span {
    color: var(--light-Content, #A7A7A7);
    font-family: Poppins,sans-serif;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px; /* 233.333% */
    letter-spacing: 1px;
    margin-left: 5px;
  }
`