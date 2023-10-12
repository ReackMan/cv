import {OrganizationPropsType} from "../AboutMeTypes";
import {Logo} from "../../../../components/logo/Logo";
import React from "react";
import styled from "styled-components";

export const Organization = (props: OrganizationPropsType) => {
    return (
        <StyledOrganization>
            <Logo iconId={props.iconId} width={props.width} height={props.height}
                  viewBox={props.viewBox} text={props.orgName}/>
        </StyledOrganization>
    )
}
const StyledOrganization = styled.div`
  grid-area: org;

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