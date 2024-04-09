import React from "react";
import {StyledAbout} from "./StyledAbout";

const About = (props: any) => {
    return (
        <StyledAbout id='aboutMe' theme={props.theme}>
            <h2>About Me</h2>
            {/*<div>{'I am a frontend developer with experience in creating a SPA. ' +*/}
            {/*    'I am proficient in a range of technologies and programming languages ' +*/}
            {/*    'such as HTML, CSS, JavaScript, React, Redux, Redux-Toolkit, Axios, ' +*/}
            {/*    'React-Router-Dom, TypeScript and others. \n' +*/}

            {/*    'Experience in developing and maintaining web applications' +*/}
            {/*    'of various levels of complexity. I have the skills to create adaptive and cross-browser design.\n' +*/}

            {/*    'I am ready to work in a team, I have experience ' +*/}
            {/*    'in developing large projects with analysts, designers and testers. ' +*/}
            {/*    'I have good communication skills and the ability to work under pressure. ' +*/}
            {/*    'I am ready for new challenges and constant professional growth.'}</div>*/}
            <p>I am a frontend developer with experience in creating a SPA. I am proficient in
                a range of technologies and programming languages such as HTML, CSS,
                JavaScript, React, Redux, Redux-Toolkit, Axios, React-Router-Dom, TypeScript and others.</p>
            <p>Experience in developing and maintaining web applications of various levels of complexity.
                I have the skills to create adaptive and cross-browser design.</p>
            <p>Now I am improving my skills in this direction and expanding them with new technologies.
                I have good communication skills and the ability to work under pressure.
                I am ready to work in a team, for new challenges and constant professional growth.</p>
        </StyledAbout>
    )
}

export default About