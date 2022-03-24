import styled,{ keyframes } from "styled-components";
import {Link as LinkR} from 'react-router-dom';


const fadeIn =  keyframes`
    0% {
        opacity: 0;
        margin-left: -80px;
    }
    100% {
        opacity: 1;
        margin-left:0;
    }

`
export const SideSocialLine = styled.div`
    position: absolute;
    left: 1.4rem;
    bottom: 0%;
    background: #fff;
    width: 2px;
    height: 45%;
    opacity: 50%;

`

export const SideSocialContainer  = styled.div`
    position: fixed;
    animation: ${fadeIn} 0.6s;
    bottom: 0;
    left: 0.5%;
    height: 35%;
    z-index: 990;
    transition: 0.3s all ease-in-out;
    
    @media screen and (max-width: 770px){
        left: -25%;
        transition: 0.3s all ease-in-out;
    }
`

export const SocialMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: transparent;
`

export const SocialLink = styled.a`
    opacity: 40%;
    margin-left: 0.9rem;
    margin-bottom: 0.8rem; 
    color: #fff;
    font-size: 1.2rem;
    transition: 0.3s all ease;
    -webkit-tap-highlight-color: transparent;
    &:hover{
        opacity: 100%;
        transform: translateY(-.3rem);
        transition: 0.3s all ease;
    }
`
