import styled from "styled-components";
import {DatePropsType} from "../AboutMeTypes";
import {Logo} from "../../../../components/logo/Logo";
import React from "react";

export const Date = (props: DatePropsType) => {
    return (
        <StyledDate>
            <Logo iconId={props.iconId} width={props.width} height={props.height}
                  viewBox={props.viewBox} text={props.dates}/>
        </StyledDate>
    )
}
const StyledDate = styled.div`
  grid-area: date;
  justify-self: end;
  
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