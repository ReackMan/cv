import {LocationPropsType} from "../AboutMeTypes";
import React from "react";
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

export const Location = (props: LocationPropsType) => {
    return (
        <StyledLocation>
            <Icon iconId={props.iconId} width={props.width} height={props.height}
                  viewBox={props.viewBox}/>
            <span>{props.place}</span>
        </StyledLocation>
    )
}
const StyledLocation = styled.div`
  grid-area: place;
  
  span {
    color: var(--light-Content, #A7A7A7);
    font-size: 12px;
    font-weight: 500;
    line-height: 28px; /* 233.333% */
    letter-spacing: 1px;
    margin-left: 5px;
  }
`