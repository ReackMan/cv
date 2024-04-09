import styled from "styled-components";

export const TechIconAnimation = styled.div<{ index: number }>`
    animation-delay: ${props => props.index * 100 + 'ms'};
    animation-duration: 200ms;
    animation-timing-function: ease;
    //animation-delay: 0ms;
    animation-name: icon_animation;
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: 1;

    @keyframes icon_animation {
        0% {
            opacity: 0;
            transform: scale3d(0.3, 0.3, 0.3);
        }
        50% {
            opacity: 1;
        }
    }
`

export const WelcomeHello = styled.span`
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-name: hello_wave;
    animation-name: hello_wave;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    display: inline-block;

    @keyframes hello_wave {
        0% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
        50% {
            -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
        }
        100% {
            -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
        }
    }
`

export const WelcomeImgBlock = styled.div<{ ref: any }>`
    animation: image_pulse 2s infinite;
    background-image: linear-gradient(90deg, #e70faa, #00c0fd);
    border-radius: 50%;
    box-shadow: 16px 16px 24px #0a0a0a, -16px -16px 24px #282828;
    flex: 0 1 400px;
    max-height: 400px;
    min-height: 400px;
    position: relative;


    @keyframes image_pulse {
        0% {
            box-shadow: 0 0 0 0 rgba(204, 169, 44, .4);
        }
        70% {
            box-shadow: 0 0 0 20px rgba(204, 169, 44, 0);
        }
        100% {
            box-shadow: 0 0 0 0 rgba(204, 169, 44, 0);
        }
    }
    
    @media screen and (max-width: 948px){
        display: none;
    }
`