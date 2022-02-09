import styled, {keyframes} from 'styled-components';

export const HeroContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items:center;
    color: #fff;
    width: 100%;
    height: 80%;
    background: transparent;
    z-index: 95;
    opacity: ${({currSection, active}) => (currSection === active ? '100%': '0%')};
    transform: ${({currSection, active}) => (currSection === active ? 'translateY(0%)': (active<currSection ? 'translateY(-100%)': 'translateY(100%)'))};
    transition: 1s all ease-in-out;
`

export const HeroWrapper =  styled.div`
    display: grid;
    justify-content: left:
    align-items: center;
    width: 70%
`

export const HeroText1 = styled.div`
    display: flex;
    justify-content: left;
    align-items:center;
    margin-left: 7px;
    letter-spacing: 2px;
    transition: 0.2s all ease-in-out;
    color: #6702e4;

    @media screen and (max-width: 770px){
        font-size: 0.8rem;
        height:0.9rem;
        margin-left: 2px;
        transition: 0.2s all ease-in-out;
    }
    @media screen and (min-width: 770px){
        font-size: 1.2rem;
        height:1.4rem;
        transition: 0.2s all ease-in-out;
    }
    @media screen and (min-width: 1100px){
        font-size: 2rem;
        height:2.2rem;
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

    @media screen and (max-width: 770px){
        font-size: 3rem;
        height: 3.2rem;
        transition: 0.2s all ease-in-out;
    }

    @media screen and (min-width: 770px){
        font-size: 7rem;
        height:7.2rem;
        transition: 0.2s all ease-in-out;
    }
    @media screen and (min-width: 1100px){
        font-size: 10rem;
        height:10.2rem;
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
    margin-left: 5px;
    @media screen and (max-width: 770px){
        font-size: 1.5rem;
        height: 2rem;
        margin-left: 1px;
        transition: 0.2s all ease-in-out;

    }
    @media screen and (min-width: 770px){
        font-size: 4rem;
        height:4.2rem;
        margin-left: 2px;
        transition: 0.2s all ease-in-out;
    }
    @media screen and (min-width: 1100px){
        font-size: 5rem;
        height:5.2rem;
        margin-left: 5px;
        transition: 0.2s all ease-in-out;
    }
`