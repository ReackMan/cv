import React from "react";
import {WorkPlace} from "./WorkPlace";
import {StyledWorkExperience} from "./StyledWorkExperience";
import gsap from "gsap";
// @ts-ignore
// import {ScrollTrigger} from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

const WorkExperience = (ref?: any) => {


    // const h2 = useRef(null)
    // // const wExp = useRef()
    //
    // useLayoutEffect(() => {
    //     let ctx = gsap.context(() => {
    //         // @ts-ignore
    //
    //
    //         gsap.fromTo(h2.current, {scale: 0}, {
    //             y: -400, duration: 3, scale: 1.4,
    //             scrollTrigger: {
    //                 // @ts-ignore
    //                 trigger: h2
    //             },
    //         })
    //     },)
    //     return () => ctx.revert();
    // }, []);


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

export default WorkExperience