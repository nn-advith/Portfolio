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

export const SideSocialContainer  = styled.div`
    
    position: fixed;
    animation: ${fadeIn} 0.6s;
    bottom: 0;
    left: 1%;
    height: 30%;
    z-index: 990;
    border-left: 1px solid #fff;
    transition: 0.3s all ease-in-out;
    
    @media screen and (max-width: 770px){
        left: -25%;
        transition: 0.3s all ease-in-out;
    }
`

export const SocialMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background: transparent;
`

export const SocialLink = styled.a`
    opacity: 20%;
    margin-left: 0.8rem;
    margin-bottom: 0.8rem;
    color: #fff;
    font-size: 2rem;
    transition: 0.3s all ease;
    &:hover{
        opacity: 100%;
        transition: 0.3s all ease;
    }
`
