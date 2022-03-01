import styled, {keyframes} from 'styled-components';

import { fadeIn } from '../Animations/Animations';

export const HeroContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items:center;
    color: #fff;
    width: 100%;
    height: 90%;
    background: transparent;
    z-index: 95;
    animation: ${fadeIn} 1s;
    opacity: ${({currSection, active}) => (currSection === active ? '100%': '0%')};
    transform: ${({currSection, active}) => (currSection === active ? 'translateY(0%)': (active<currSection ? 'translateY(-100%)': 'translateY(100%)'))};
    transition: 1s all ease-in-out;
`

export const HeroWrapper =  styled.div`
    display: grid;
    justify-content: left:
    align-items: center;
    width: 70%;

    transition: 0.2s all ease-in-out;
    @media screen and (max-width: 770px){
        width: 85%;
        transition: 0.2s all ease-in-out;
    }
`

export const HeroText1 = styled.div`
    display: flex;
    justify-content: left;
    align-items:center;
    text-align:left;
    letter-spacing: 2px;
    transition: 0.2s all ease-in-out;
    color: #6702e4;

    @media screen and (max-width: 770px){
        font-size: 0.8rem;
        height:0.9rem;
        padding-left: 2px;
        transition: 0.2s all ease-in-out;
    }
    @media screen and (min-width: 770px){
        font-size: 1.2rem;
        height:1.4rem;
        padding-left: 3px;
        transition: 0.2s all ease-in-out;
    }
    @media screen and (min-width: 1100px){
        font-size: 1.5rem;
        height:1.7rem;
        padding-left: 4px;
        transition: 0.2s all ease-in-out;
    }
`
export const HeroText2 = styled.div`
    display: flex;
    justify-content: left;
    align-items:center;
    transition: 0.2s all ease-in-out;
    letter-spacing: 2px;
    font-weight:700;
    text-align:left;
    @media screen and (max-width: 770px){
        font-size: 3rem;
        height: 3.2rem;
        transition: 0.2s all ease-in-out;
    }

    @media screen and (min-width: 770px){
        font-size: 5rem;
        height:5.2rem;
        transition: 0.2s all ease-in-out;
    }
    @media screen and (min-width: 1100px){
        font-size: 6rem;
        height:6.2rem;
        transition: 0.2s all ease-in-out;
    }
`

export const HeroText3 = styled.div`
    display: flex;
    justify-content: left;
    align-items:center;
    transition: 0.2s all ease-in-out;
    letter-spacing: 1px;
    font-weight:700;
    opacity: 60%;
    padding-left: 5px;
    text-align:left;
    @media screen and (max-width: 770px){
        font-size: 1.5rem;
        height: 2rem;
        padding-left: 1px;
        transition: 0.2s all ease-in-out;

    }
    @media screen and (min-width: 770px){
        font-size: 3rem;
        height:3.2rem;
        padding-left: 2px;
        transition: 0.2s all ease-in-out;
    }
    @media screen and (min-width: 1100px){
        font-size: 4rem;
        height:4.2rem;
        padding-left: 2px;
        transition: 0.2s all ease-in-out;
    }
`

export const HeroText4 = styled.div`
    display: flex;
    justify-content: left;
    align-items:center;
    transition: 0.2s all ease-in-out;
    letter-spacing: 1px;
    opacity: 40%;
    padding-left: 5px;
    text-align:left;
    @media screen and (max-width: 770px){
        font-size: 0.8rem;
        margin-top: 3rem;   
        padding-left: 1px;
        transition: 0.2s all ease-in-out;

    }
    @media screen and (min-width: 770px){
        font-size: 1rem;
        margin-top: 3rem;
        padding-left: 4px;
        transition: 0.2s all ease-in-out;
    }
    @media screen and (min-width: 1100px){
        font-size: 1rem;
        margin-top: 3rem;
        padding-left: 5px;
        transition: 0.2s all ease-in-out;
    }
`