import React from "react";
import {StyledMailMe} from "./StyledMailMe";

const MailMe = (props: any) => {
    return (
        <StyledMailMe theme={props.theme}>
            <h2>For any questions please mail me:</h2>
            <p>
                <a href="">reackman</a>
                <a href="">@yandex.ru</a>
            </p>
        </StyledMailMe>
    )
}

export default MailMe