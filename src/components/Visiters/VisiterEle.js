import styled from "styled-components";
import { fadeIn } from "../Animations/Animations";

export const VisiterContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items:center;
    color: #fff;
    width: 100%;
    height: 80%;
    background: transparent;
    z-index: 95;
    animation: ${fadeIn} 1s;
    opacity: ${({currSection, active}) => (currSection === active ? '100%': '0%')};
    transform: ${({currSection, active}) => (currSection === active ? 'translateY(0%)': (active<currSection ? 'translateY(-100%)': 'translateY(100%)'))};
    transition: 1s all ease-in-out;
`

export const VisiterInputSection = styled.div`
    display: flex;
    width: 100%;

    justify-content: center;
    align-items: center;
    &media screen and (max-width: 770px){
        display: flex;
        flex-direction: column;
    }
`

export const VisiterForm = styled.form`
    width: 100%;
    display: flex;  
    justify-content: center;
`

export const VisiterInput = styled.input`
    background:transparent;
    color: #fff;
    border: none;
    width: 20%;
    height: 3rem;
    margin: 0 5%;
    padding: 5px 5px;
    border-bottom: 2px solid #6702e4;
    
    &::placeholder{
        color: #6702e4;
        font-size: 1rem;
        letter-spacing: 1px;
    }

    &:focus{
        outline: none;

    }
`

export const VisiterText = styled.div`
    display: flex;
    width: 30%;
    align-items: end;
    justify-content: space-around;
    transition: 0.3s all ease;

    @media screen and (max-width: 770px){
        width: 60%;
        transition: 0.3s all ease
    }
    
`

export const VisiterButton = styled.button`
    width: 50px;
    height: 20px;

    border-radius: 16px;
    transform: scale(2);
    border: none;
    background: #6702e4;
    font-size: 0.6rem;
    text-align:center;
    transition: 0.3s all ease-in-out;
    line-height: 20px;


    &:hover{
        background: #000;
        color: #6702e4;
        transform: scale(2) ;
        line-height: 25px;

        transition: 0.3s all ease-in-out;

    }

`