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
        width: 70%;
        margin-top: 10%;
        padding-bottom: 0%;
        transition: 0.3s all ease-in-out;
        grid-auto-columns: 1.5fr 1fr;
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

    padding:5px 20px;
    text-align: right;
    letter-spacing: 0.5px;
    opacity: 0.8;
    display: flex;
    flex-direction: column;
    justify-content: right;
   
   
    @media screen and (max-width: 770px){
        overflow: hidden;
        height: auto;
        text-align: left;
    }
    @media screen and (min-width: 770px) {
        overflow: hidden;
        height: auto;
        text-align: left;
    }
    @media screen and (min-width: 1100px) {
        overflow-y: scroll;
        height: 60vh;
        overflow-x: hidden;
        text-align: right;
        padding-top: 10px;
        font-size: 1.3rem;
        ${'' /* box-shadow: 0.5px 0px 0 #6702e4; */}

   

        &::-webkit-scrollbar-track
        {
            border-radius: 3px;
            background-color: #aaa;
        }

        &::-webkit-scrollbar
        {
            width: 3px;
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb
        {   border-radius: 3px;
            background-color: #6702e4;	
        }
       
    }

`

export const AboutInfoLine = styled.div`
    background: transparent;
    position: relative;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 770px){

        margin-top: 20px;
        padding-left: 20px; 

        border-left: 2px solid #A761FF;
    }

    @media screen and (min-width: 770px){
        margin-top: 20px;
        padding-left: 20px; 
        border-left: 2px solid #A761FF;
    }

    @media screen and (min-width: 1100px){
        top: 8%;
        width: 94%;
        padding-right: 20px; 
        border-right: 2px solid #777;
        border-left: none;
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
    padding-bottom: 40px;
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
    
    
    @media screen and (max-width: 770px){
        margin-top: 10%;
        justify-content: center;
    }

    @media screen and (min-width: 770px){
        margin-top: 10%;
        width: 40%;
         height: 40%;
        justify-content: center;
    }

    @media screen and (min-width: 1100px){
        width: 80%;
        height: 80%;

    }
    
    .wrapper{
        width: 100%;
        height: 100%;
        border-radius: 6px;
        
        &:hover, &:focus{
            &:after{
                opacity: 0;
                transition: 0.3s all ease-in-out;
            }
            &:before{
                top: 3px;
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
            border-radius: 6px;
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
            top: 6px;
            left: 10px;
            z-index: -1;
            border-radius:6px;
            border: 1px solid white;
            transition: 0.3s all ease-in-out;

        }

        &:after{
            position:absolute;
            content:'';
            display: block;
            width: 100%;
            height: 98%;
            top: 0px;
            background-color: #6702e4;
            border-radius: 6px;
            opacity: 0.4;
            mix-blend-mode: screen;
            transition: 0.3s all ease-in-out;
 
        }
       
    }
`
export const TimeLineItem = styled.div`
    padding: 40px 10px;
    display: flex;
    flex-direction: column;

    width: 100%;
    &:after{
        position: absolute;
        content: '';
        width: 15px;
        height: 15px;
        margin-top: 5px;
        right: -11px;
        border-radius: 50%;
        border: 2px solid white;
        background: #6702e4;
    }   
    @media screen and (max-width: 770px ){
        text-align: left;
        align-items: left;
  
        &:after{
            
            left: -11px;
        }
    }
    @media screen and (max-width: 1100px){
        text-align: left;
        align-items: left;

        &:after{
            
            left: -11px;
        }
    }
    @media screen and (min-width: 1100px ){
        align-items: right;
        text-align: right;

    }
`
export const TimeLineHeading = styled.div`
    color: #6702e4;
    font-weight: 700;
    
    text-align:left
    @media screen and (max-width: 770px){

    }

    @media screen and (max-width: 1100px){
        
    }

    @media screen and (min-width: 1100px){
        
    }

`

export const TimeLineText = styled.div`

    .subhead{
        opacity: 0.7;
        font-weight: 200;
    }
    @media screen and (max-width: 770px){

    }

    @media screen and (max-width: 1100px){
        
    }

    @media screen and (min-width: 1100px){
        
    }
`