import styled, {keyframes} from "styled-components";

export const fadeIn =  keyframes`
    0% {
        opacity: 0;
        margin-top: 80px;
    }
    100% {
        opacity: 1;
        margin-top:0;
    }

`

export const scroll = keyframes`
    0% { transform: translateX(0); }
	100% { transform: translateX(calc(-150px * 5))}
`

export const popUp = keyframes`
    0%{
        transform: translateX(-100px);
        opacity: 0%
    }
    100%{
        transform: translateX(0px);
        opacity: 100%;
    }
`

export const fadeinout = keyframes`
    0%{
        transform: translateX(0px);
        opacity: 0%;
    }
    99%{
        transform: translateX(800%);
        opacity: 100%;
    }
    
    100%{
        transform: translateX(800%);
        opacity: 0%;
    }
`

export const popStay = keyframes`
    0%{
        transform: translateX(0px);
        opacity: 100%;
    }
    100%{
        transform: translateX(0px);
        opacity: 100%;
    }
`

export const wrapperLR = keyframes`
    0%{
        transform: translateX(0%);
    }
    100%{
        transform: translateX(120%);
    }
`