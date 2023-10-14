import React from "react";
import styled from "styled-components";
import Welcome from "./welcome/Welcome";
import AboutMe from "./aboutMe/AboutMe";
import TechStack from "./techStack/TechStack";
import Projects from "./projects/Projects";
import MailMe from "./mailMe/MailMe";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import abstract from '../../assets/images/abstract.png'

const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper direction='column'>
                    <Welcome/>
                    <AboutMe/>
                    <TechStack/>
                    <Projects/>
                    <MailMe/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    )
}

const StyledMain = styled.div`
  width: 100%;

  margin: 150px 49px 0 38px;
  background-image: url(${abstract});
  background-position: 113% -3%;
  background-repeat: no-repeat;
`

export default Main