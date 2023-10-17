import gsap from "gsap";
import React, {useLayoutEffect, useRef} from "react";
import avatar from '../../../assets/images/avatar.png'
import {StyledWelcome, WelcomeImg, WelcomeName, WelcomeText} from "./StyledWelcome";

const Welcome = (props: any) => {

    const comp = useRef(); // create a ref for the root level element (for scoping)
    const circle = useRef();

    useLayoutEffect(() => {

        // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
        let ctx = gsap.context(() => {

            // Our animations can use selector text like ".box"
            // this will only select '.box' elements that are children of the component
            // gsap.to(".box", {...});
            // @ts-ignore
            gsap.from(circle.current, {
                scrollTrigger: {
                    trigger: comp, toggleActions: 'restart none none none'
                }, duration: 3, opacity: 0, x: 500, scale: 0.3, ease: "bounce"
            });

        }, comp); // <- IMPORTANT! Scopes selector text

        return () => ctx.revert(); // cleanup

    }, []); // <- empty dependency Array, so it doesn't re-run on every render

// ...

    return (
        <StyledWelcome ref={comp}>
            <WelcomeText theme={props.theme}>
                <p>Hi 👋,</p>
                <p>My name is</p>
                <WelcomeName> Artem DM </WelcomeName>
                <h1>A Web Developer</h1>
            </WelcomeText>
            <WelcomeImg ref={circle} src={avatar}/>
        </StyledWelcome>
    )
}

export default Welcome