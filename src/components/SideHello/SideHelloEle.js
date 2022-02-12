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

export const SideHelloLine = styled.div`
    position: absolute;
    right: 1.4rem;
    bottom: 0%;
    background: #fff;
    width: 2px;
    height: 40%;
    opacity: 50%;

`

export const SideHelloContainer = styled.div`
    position: fixed;
    animation: ${fadeIn} 0.6s;
    justify-content: center;
    bottom: 0;
    right: 0.5%;
    height: 30%;
    z-index: 990;
    transition: 0.3s all ease-in-out;
    @media screen and (max-width: 770px){
        right: -25%;
        transition: 0.3s all ease-in-out;
    }
`

export const SideHelloText = styled.div`
    position: absolute;
    display: flex;
    justify-content: right;
    align-items: center;
    width: 150px;
    transform: rotate(90deg);
    color: #fff;
    right: -3.4rem;
    bottom: 13rem;
    opacity: 40%;
    letter-spacing: 0.5px;
    transition: 0.3s all ease;
    &:hover{
        opacity: 100%;
        transform: translateY(-.3rem) rotate(90deg);
        transition: 0.3s all ease;
    }
`