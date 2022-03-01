import styled from 'styled-components';

import { fadeIn } from '../Animations/Animations';


export const AboutContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items:center;
    color: #fff;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 95;
    animation: ${fadeIn} 1s;
    opacity: ${({currSection, active}) => (currSection === active ? '100%': '0%')};
    transform: ${({currSection, active}) => (currSection === active ? 'translateY(0%)': (active<currSection ? 'translateY(-100%)': 'translateY(100%)'))};
    transition: 1s all ease-in-out;
`
export const AboutRow = styled.div`
    margin-top: 10%;
    display: grid;
    align-items: center;
    width: 100%;
    grid-template-areas: 'col1 col2';
    background: transparent;
    height: 85%;
    transition: 0.3s all ease-in-out;
    @media screen and (max-width: 770px) {
        grid-auto-columns: 1fr 1fr;
        margin-top: 40%;
        overflow: scroll;
        padding-bottom: 1%;
        grid-template-areas: 'col1' 'col2';
        transition: 0.3s all ease-in-out;
    }

    @media screen and (min-width: 770px) {
        width: 88%;
        margin-top: 30%;
        overflow: scroll;
        padding-bottom: 10%;
        transition: 0.3s all ease-in-out;
        grid-auto-columns: 1fr 1fr;
        grid-template-areas: 'col1' 'col2';
        transition: 0.3s all ease-in-out;
    }
    @media screen and (min-width: 1100px) {
        width: 80%;
        margin-top: 10%;
        padding-bottom: 0%;
        transition: 0.3s all ease-in-out;
        grid-auto-columns: 7fr 4.5fr;
        grid-template-areas: 'col1 col2';
        transition: 0.3s all ease-in-out;
    }

`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;

`
export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

`

export const AboutInfo = styled.div`

    padding: 0 20px;
    text-align: left;
   
    @media screen and (max-width: 770px){
        overflow: hidden;
        height: auto;
    }
    @media screen and (min-width: 770px) {
        overflow: hidden;
        height: auto;
    }
    @media screen and (min-width: 1100px) {
        overflow-y: scroll;
        height: 60vh;
        overflow-x: hidden;
        box-shadow: 1px 0px 0 #6702e4;
   

        &::-webkit-scrollbar-track
        {
            background-color: transparent;
        }

        &::-webkit-scrollbar
        {
            width: 5px;
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb
        {
            background-color: #6702e4;	
        }
       
    }

`


export const AboutHeading = styled.div`
    display: flex;
    position: absolute;
    justify-content: left;
    align-items:center;
    color: #6702e4;
    top:13%;
    left: 12%;
    transition: 0.2s all ease-in-out;
    letter-spacing: 1px;
    font-weight:700;
    opacity: 100%;
    padding-left: 5px;
    text-align:left;
    border-bottom: 1px solid #6702e4;
    @media screen and (max-width: 770px){
        font-size: 1.5rem;
        height: 2rem;
        padding-left: 1px;
        top: 10%;
        left: 8%;
        transition: 0.2s all ease-in-out;

    }
    @media screen and (min-width: 770px){
        font-size: 3rem;
        height:3.2rem;
        padding-left: 2px;
        top: 10%;
        left: 10%;
        transition: 0.2s all ease-in-out;
    }
    @media screen and (min-width: 1100px){
        font-size: 3rem;
        height:3.2rem;
        padding-left: 2px;
        top:13%;
    left: 12%;
        transition: 0.2s all ease-in-out;
    }
`





export const AboutImgWrap = styled.div`
    display: flex;
    

    @media screen and (max-width: 1100px){
        justify-content: center;
        padding-bottom: 50px;
    }
`



export const AboutPic = styled.div`
    position: relative;
    width: 70%;
    height: 70%;
    display: flex;
    
    @media screen and (max-width: 1100px){
        margin-top: 20%;
        justify-content: center;
    }

    @media screen and (min-width: 1100px){
        margin-left: 20%;
    }
    
    

    .wrapper{

        
        width: 100%;
        height: 100%;
        border-radius: 3px;
        


        &:hover, &:focus{
            &:after{
                opacity: 0;
                transition: 0.3s all ease-in-out;
            }
            &:before{
                top: 5px;
                left: 5px; 
                transition: 0.3s all ease-in-out;
            }
            .aboutimg{
                filter: none;
                mix-blend-mode: normal;
                transition: 0.3s all ease-in-out;
            }
           
        }
        .aboutimg{
            width: 100%;
            height: 100%;
            border-radius: 3px;
            mix-blend-mode: multiply;
            filter: grayscale(100%) contrast(1);
            transition: 0.3s all ease-in-out;
        }

        &:before{
            position:absolute;
            content:'';
            display: block;
            width: 100%;
            height: 100%;
            top: 10px;
            left: 10px;
            z-index: -1;
            border-radius:3px;
            border: 1px solid white;
            transition: 0.3s all ease-in-out;

        }

        &:after{
            position:absolute;
            content:'';
            display: block;
            width: 100%;
            height: 100%;
            top: 0px;
            background-color: #6702e4;
            border-radius: 3px;
            opacity: 0.4;
            mix-blend-mode: screen;
            transition: 0.3s all ease-in-out;
 
        }
       
    }
`

