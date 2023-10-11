import React from "react";
import styled from "styled-components";
import office from '../../../assets/images/office.svg'
import location from '../../../assets/images/location.svg'
import date from '../../../assets/images/date.svg'

const Education = () => {
    return (
        <StyledWorkEducation>
            <h2>Education</h2>
            <EducationPlace position='Junior Web Developer' schedule='Full Time'
                       orgName='Dr. Rajkumar’s Learning App' place='Bengaluru'
                       dates='Sep 2021 - Dec 2021'/>
        </StyledWorkEducation>
    )
}

const StyledWorkEducation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;

  //background-color: #ff0000;

  margin: 0;
  
  h2 {
    margin: 0;
    padding: 0;
    color: var(--Solid-Heading, #42446E);
    font-family: Poppins,sans-serif;
    font-size: 42px;
    font-style: normal;
    font-weight: 700;
    line-height: 52px; /* 123.81% */
    letter-spacing: -0.4px;
  }
`

const EducationPlace = (props: any) => {
    return (
        <StyledWorkEducationPlace>
            <h3>{props.position}</h3>
            <button>{props.schedule}</button>
            <Organization src={office} orgName={props.orgName}/>
            <Location src={location} place={props.place}/>
            <Date src={date} dates={props.dates}/>
        </StyledWorkEducationPlace>
    )
}

//Organization

const Organization = (props: any) => {
    return (
        <StyledOrganization>
            <img src={props.src} alt=""/>
            <span>{props.orgName}</span>
        </StyledOrganization>
    )
}

const StyledOrganization = styled.div`
  grid-area: org;
`

//Location

const Location = (props: any) => {
    return (
        <StyledLocation>
            <img src={props.src} alt=""/>
            <span>{props.place}</span>
        </StyledLocation>
    )
}

const StyledLocation = styled.div`
  grid-area: place;
`

//Date

const Date = (props: any) => {
    return (
        <StyledDate>
            <img src={props.src} alt=""/>
            <span>{props.dates}</span>
        </StyledDate>
    )
}

const StyledDate = styled.div`
  grid-area: date;
`

//StyledWorkPlace

const StyledWorkEducationPlace = styled.div`
  display: grid;
  grid-template-areas: 
  'h3 h3 p'
  'org place date';
  
  //grid-template-rows: 28px 17px 2px;

  h3 {
    grid-area: h3;
  }

  
  button {
    grid-area: p;

    width: 84px;
    height: 24px;
    flex-shrink: 0;

    color: var(--Button-text, #018C0F);
    text-align: center;
    font-family: Poppins, sans-serif;
    font-size: 9px;
    font-style: normal;
    font-weight: 600;
    line-height: 26px; /* 288.889% */

    border-radius: 100px;
    background: var(--Button-success, #D7FFE0);
  }
  
  
`

export default Education