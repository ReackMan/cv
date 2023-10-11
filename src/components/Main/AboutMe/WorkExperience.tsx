import React from "react";
import styled from "styled-components";
import office from '../../../assets/images/office.svg'
import location from '../../../assets/images/location.svg'
import date from '../../../assets/images/date.svg'

const WorkExperience = () => {
    return (
        <StyledWorkExperience>
            <h2>Work Experience</h2>
            <WorkPlace position='Junior Web Developer' schedule='Full Time'
                       orgName='Dr. Rajkumar’s Learning App' place='Bengaluru'
                       dates='Sep 2021 - Dec 2021'/>
            <WorkPlace position='Web Development Intern' schedule='Internship'
                       orgName='IonPixelz Web Solutions' place='Bengaluru'
                       dates='Sep 2021 - Dec 2021'/>
            <WorkPlace position='SEO / SEM Specialist' schedule='Internship'
                       orgName='HAAPS' place='Bengaluru'
                       dates='Sep 2021 - Dec 2021'/>
        </StyledWorkExperience>
    )
}

const StyledWorkExperience = styled.div`
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

const WorkPlace = (props: any) => {
    return (
        <StyledWorkPlace>
            <h3>{props.position}</h3>
            <button>{props.schedule}</button>
            <Organization src={office} orgName={props.orgName}/>
            <Location src={location} place={props.place}/>
            <Date src={date} dates={props.dates}/>
        </StyledWorkPlace>
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

const StyledWorkPlace = styled.div`
  display: grid;
  grid-template-areas: 
  'h3 h3 p'
  'org place date';
  
  //grid-template-rows: 28px 17px 2px;

  h3 {
    grid-area: h3;
  }
  
  hr {
    grid-area: hr;
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
  
  hr {
    width: 2px;
    height: 696px;
    transform: rotate(-90deg);
    flex-shrink: 0;
    color: var(--colors-grey, #EBEAED);;
  }

`

export default WorkExperience