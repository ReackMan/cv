import styled from "styled-components";
import {DatePropsType} from "../AboutMeTypes";
import React from "react";
import {Icon} from "../../../../components/icon/Icon";

export const Date = (props: DatePropsType) => {
    return (
        <StyledDate>
            <Icon iconId={props.iconId} width={props.width} height={props.height}
                  viewBox={props.viewBox}/>
            <span>{props.dates}</span>
        </StyledDate>
    )
}
const StyledDate = styled.div`
  grid-area: date;
  justify-self: end;
  
  span {
    color: var(--light-Content, #A7A7A7);
    font-size: 12px;
    font-weight: 500;
    line-height: 28px; /* 233.333% */
    letter-spacing: 1px;
    margin-left: 5px;
  }
`