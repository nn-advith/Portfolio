import styled, {keyframes} from 'styled-components';

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

export const ResumeLine = styled.div`
    position: absolute;
    right: 1.4rem;
    bottom: 0%;
    background: #fff;
    width: 2px;
    height: 45%;
    opacity: 50%;

`

export const ResumeContainer = styled.div`
    position: fixed;
    animation: ${fadeIn} 0.6s;
    justify-content: center;
    bottom: 0;
    right: 0.5%;
    height: 35%;
    z-index: 990;
    transition: 0.3s all ease-in-out;
    @media screen and (max-width: 770px){
        right: -25%;
        transition: 0.3s all ease-in-out;
    }
`

export const ResumeText = styled.a`
    position: absolute;
    display: flex;
    justify-content: right;
    align-items: center;
    width: 150px;
    font-size: 1rem;
    transform: rotate(90deg);
    color: #fff;
    right: -3.4rem;
    bottom: 90%;
    opacity: 40%;
    letter-spacing: 1px;
    transition: 0.3s all ease;

    &:visited{
        text-decoration: none;
    }
    &:link{
        text-decoration: none;
    }
    &:active{
        text-decoration: none;
    }

    &:hover{
        opacity: 100%;
        transform: translateY(-.3rem) rotate(90deg);
        transition: 0.3s all ease;
        text-decoration: none;
    }
`