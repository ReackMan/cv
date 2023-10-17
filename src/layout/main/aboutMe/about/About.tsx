import React from "react";
import {StyledAbout} from "./StyledAbout";

const About = (props: any) => {
    return (
        <StyledAbout theme={props.theme}>
            <h2>About Me</h2>
            <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your
                future website. It helps you to combine slides, panels and other components and export it as a set of
                static files: HTML/CSS/JS.</p>
        </StyledAbout>
    )
}

export default About