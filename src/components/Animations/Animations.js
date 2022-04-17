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