import styled, {keyframes} from 'styled-components';

import { fadeIn, wrapperLR, popUp, popStay } from '../Animations/Animations';

export const HeroContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: left;
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
    width: 45%;
    position: relative;
    opacity: 0%;
    padding-top: 50px;
    animation: ${({visited, active}) => (visited[active] === 0 ? popUp: popStay)};
    animation-delay: ${({visited, active}) => (visited[active] === 0 ? '1s': '0s')};
    overflow: hidden;
    height: auto;
    animation-duration: 1.3s;
    animation-fill-mode: forwards;


    transition: 0.2s all ease-in-out;
    @media screen and (max-width: 770px){
        width: 85%;
        margin-left: 10%;
        transition: 0.2s all ease-in-out;
    }
    @media screen and (min-width: 770px){
        width: 65%;
        margin-left: 10%;
    }
    @media screen and (min-width: 1100px){
        width: 45%;
        margin-left: 15%;
    }
`

export const HeroText1 = styled.div`
    display: flex;
   
    width: inherit;
    justify-content: left;
    align-items:center;
    text-align:left;
    letter-spacing: 2px;
    transition: 0.2s all ease-in-out;
    color: #6702e4;

    position: relative;





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
    align-items:top;
    transition: 0.2s all ease-in-out;
    letter-spacing: 1px;
    font-weight:700;
    color: #aaa;
    padding-left: 5px;
    text-align:left;




    @media screen and (max-width: 770px){
        font-size: 1.3rem;
        height: 2rem;
        padding-left: 1px;
        transition: 0.2s all ease-in-out;

    }
    @media screen and (min-width: 770px){
        font-size: 2.8rem;
        height:5rem;
        padding-left: 2px;
        transition: 0.2s all ease-in-out;
    }
    @media screen and (min-width: 1100px){
        font-size: 4rem;
        height:6rem;
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
    color: #777;
    padding-top: 20px;
    padding-left: 5px;
    padding-bottom: 25px;
    text-align:left;

    ${'' /* position: relative;
    overflow:hidden;
    opacity: 0%;
    animation: ${({visited, active}) => (visited[active] === 0 ? popUp: 'none')};
    animation-delay: 1s;
    animation-duration: 0.8s;
    animation-fill-mode: forwards; */}




    @media screen and (max-width: 770px){
        font-size: 0.8rem;
        height:1.4rem;
        margin-top: 3rem;   
        padding-left: 1px;
        transition: 0.2s all ease-in-out;

    }
    @media screen and (min-width: 770px){
        font-size: 1rem;
        height: 1.5rem;
        margin-top: 3rem;
        padding-left: 4px;
        transition: 0.2s all ease-in-out;
    }
    @media screen and (min-width: 1100px){
        font-size: 1rem;
        height: 1.5rem;
        padding-left: 5px;
        transition: 0.2s all ease-in-out;
    }
`

export const Wrapper = styled.div`
position: absolute;
    width: 100%;
    background: transparent;
    z-index: 10;
    left: -50px;
    height: 100%;
    animation-name: ${({visited, active}) => (visited[active] === 0 ? wrapperLR: 'none')};
    animation-duration: 1.3s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
`

export const Acc = styled.div`
    position: absolute;
    width: 20px;
    height: inherit;
    background-color:${({c}) => c === 'p' ? '#6702e4': '#ffffff' };

    
`
