import React from "react";
import {WorkPlace} from "./WorkPlace";
import {StyledWorkExperience} from "./StyledWorkExperience";
// @ts-ignore
// import {ScrollTrigger} from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

const WorkExperience = (props: any) => {


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

    const workPlaces = [
        {
            position: 'Junior Web Developer',
            schedule: 'Full Time',
            orgName: 'LLC "Гарант-СП"',
            place: 'Sergiev Posad',
            dates: 'Apr 2022 - Jul 2023'
        },
        {
            position: 'Junior Web Developer',
            schedule: 'Full Time',
            orgName: 'Freelancehunt.ru',
            place: 'Freelance',
            dates: 'May 2019 - Feb 2020'
        }
    ]

    return (
        <StyledWorkExperience>
            <h2>Work Experience</h2>
            {workPlaces.map((p, index) =>
                <WorkPlace position={p.position} schedule={p.schedule} place={p.place}
                           orgName={p.orgName} dates={p.dates} queue={`${index}`} theme={props.theme} /> )}
        </StyledWorkExperience>
    )
}

export default WorkExperience