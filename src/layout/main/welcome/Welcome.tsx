import React from "react";
import avatar from '../../../assets/images/avatar.png'
import {StyledWelcome, WelcomeImg, WelcomeName, WelcomeText} from "./StyledWelcome";

const Welcome = () => {
    return (
        <StyledWelcome>
            <WelcomeText>
                <p>Hi 👋,</p>
                <p>My name is</p>
                <WelcomeName> Artem DM </WelcomeName>
                <h1>A Web Developer</h1>
            </WelcomeText>
            <WelcomeImg src={avatar}/>
        </StyledWelcome>
    )
}

export default Welcome