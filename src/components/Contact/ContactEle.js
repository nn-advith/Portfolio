import styled from 'styled-components';
import {fadeIn,  popUp,popStay, fadeinout,popUp2 , fadeinout2} from '../Animations/Animations';

export const ContactContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items:center;
    color: #fff;
    width: 100%;
    height: 90%;
    background: transparent;
    z-index: 95;
    padding-top: 5%;
    animation: ${fadeIn} 1s;
    opacity: ${({currSection, active}) => (currSection === active ? '100%': '0%')};
    transform: ${({currSection, active}) => (currSection === active ? 'translateY(0%)': (active<currSection ? 'translateY(-100%)': 'translateY(100%)'))};
    transition: 1s all ease-in-out;

    @media screen and (max-width: 770px){
        height: 100%;
        transition: 1s ease-in-out;
    }
`

export const ContactWrapper = styled.div`
    display: flex;
    margin-right: auto;
    margin-left:auto;
    justify-content: center;
`

export const ContactRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    width: 82%;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 770px) {
        grid-template-areas: 'col1' 'col2';
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    border-right: 2px solid #6702e4;
    overflow: hidden;

`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
    overflow: hidden;
`

export const ColumnWrapper = styled.div`
    width:100%;
    display: flex;
    height: 40vh;
    flex-direction: column;
    justify-content: right;
    opacity: 0%;
    animation: ${({visited, active}) => (visited[active] === 0 ? popStay: popUp)};
    animation-delay: ${({visited, active}) => (visited[active] === 0 ? '0s': '1s')};
    animation-duration: 1s;
    animation-fill-mode: forwards;
    @media screen and (max-width: 770px){
        height: 30vh;
    }

`

export const   ContactText1 = styled.div`
    display: flex;
    justify-content: right;
    align-items:center;
    transition: 0.2s all ease-in-out;
    letter-spacing: 2px;
    font-weight:700;
    padding: 20px 0;
    text-align: right;
    @media screen and (max-width: 770px){
        font-size: 3rem;
        height: 3.2rem;
        transition: 0.2s all ease-in-out;
    }

    @media screen and (min-width: 770px){
        font-size: 3.5rem;
        height:3.7rem;
        transition: 0.2s all ease-in-out;
    }
    @media screen and (min-width: 1100px){
        font-size: 4rem;
        height:4.2rem;
        transition: 0.2s all ease-in-out;
    }
`


export const ColumnText2 = styled.div`
    display: flex;
    justify-content: right;
    text-align: right;
    align-items:center;
    transition: 0.2s all ease-in-out;
    letter-spacing: 1px;
    opacity: 40%;
    
    padding-left: 5px;
    @media screen and (max-width: 770px){
        font-size: 0.8rem;
        margin-top: 3rem;   
        padding-left: 1px;
        transition: 0.2s all ease-in-out;

    }
    @media screen and (min-width: 770px){
        font-size: 1.2rem;
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


export const ContactForm = styled.form`
    width: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
    opacity: 0%;
    animation: ${({visited, active}) => (visited[active] === 0 ? popStay: popUp2)};
    animation-delay: ${({visited, active}) => (visited[active] === 0 ? '0s': '1s')};
    animation-duration: 1s;
    animation-fill-mode: forwards;
`

export const ContactInput = styled.input`
    background:transparent;
    color: #fff;
    border: none;
    width: 80%;
    height: 3rem;
    margin: 3% 0px;
    border-bottom: 1px solid #fff;
    transition: 0.3 ease-in-out;
    font-size: 1.2rem;
    letter-spacing: 1px;
    
    &::placeholder{
        color: #6702e4;
        font-size: 0.8rem;
        letter-spacing: 1px;
    }

    &:focus{
        outline: none;

    }
    @media screen and (max-width: 770px){
        width: 100%;
        transition: 0.3 ease-in-out;
    }
`

export const ContactText = styled.div`
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


export const ContactButton = styled.button`
    width: 150px;
    position: relative;
    height: 50px;
    background: transparent;
    padding: 7px;
    margin: 5% 0;
    border:none;
    outline: none;
    cursor: pointer;

    .but{
        position: relative;
        width: 100%;
        height: 100%;
        background: #6702e4;
        overflow: hidden;
    }

    .border{
        position: absolute;
        width: 100%;
        height: 20px;
        left: 0px;
        border: 0.2px solid #444;
    }

    .t{
        top: 0px;
        border-bottom: none;
    }

    .b{
        bottom: 0px;
        border-top: none;
    }

    .slide{
        position: absolute;
        left: -350px;
        width: 120%;
        height: 100%;
        background: #222;
        transform: skew(-10deg);
        transition: 0.5s ease-in-out;
    }

    .text{
        text-align: center;
        line-height: 35px;
        font-size: 0.8rem;
        top: 0; 
        left: -65px;   
        letter-spacing: 1.6px;
        font-weight: 400;
        position: absolute;
        width: 100%;
        color: #fff;
        z-index:10;
    }

    .dot{
        position: absolute;
        right: 0;
        bottom: 0;
        width: 4px;
        height: 4px;
        background: #222;
        transition: 0.5s ease-in-out;
    }

    &:hover{
        .slide{
            left: -10px;
            transition: 0.4s ease-in-out;
        }

        .dot{
            background: #fff;
            transition: 0.4s ease-in-out;
        }
    }
`

export const ContactError = styled.div`
    opacity : ${({error}) => (error ? '100%': '0%')};
    color: red;
    width: 100%;
    letter-spacing: 0.3px;
    text-align: right;
    transition: 0.3s all ease-in-out;

    @media screen and (max-width: 770px){
        margin-top: 50%;
        transition: 0.3s all ease-in-out;

    }

    @media screen and (max-width: 1100px){
        transition: 0.3s all ease-in-out;
        margin-top: 20%;
    }

    @media screen and (min-width: 1100px){
        transition: 0.3s all ease-in-out;
        margin-top: 20%;
    }
`