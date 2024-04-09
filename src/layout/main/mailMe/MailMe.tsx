import React from "react";
import {StyledMailMe} from "./StyledMailMe";
import {ContactMeForm} from "./ContactMeForm";

const MailMe = (props: any) => {
    return (
        <StyledMailMe id='mailMe' theme={props.theme}>
            <h2>Contact</h2>
            <p>Here you can contact me</p>
            <ContactMeForm theme={props.theme}/>
        </StyledMailMe>
    )
}

export default MailMe