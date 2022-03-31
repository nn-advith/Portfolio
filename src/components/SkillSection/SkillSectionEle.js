import styled from 'styled-components';

import { fadeIn } from '../Animations/Animations';

export const SkillContainer = styled.div`
    position: fixed;
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

export const SkillWrapper = styled.div `
    display: flex;
    flex-direction: column;
    width: 85%;
    
    height: 100%;
   
    @media screen and (max-width: 770px){
        margin-top: 30%;
        
    }
    @media screen and (min-width: 770px){
        margin-top: 20%;
    }
    @media screen and (min-width: 1100px){
        margin-top: 10%;
    }
`

export const SkillTitle = styled.div `
    color: #fff;
    font-weight: 700;
    transition: 0.3s ease-in-out;

    @media screen and (max-width: 770px){
        font-size: 1.5rem;
        margin-bottom: 7%;
        margin-top: 30px;
    }
    @media screen and (min-width: 770px){
        font-size: 2rem;
        margin-bottom: 2%;  

    }
    @media screen and (min-width: 1100px){
        font-size: 3rem;
        margin-bottom: 1%;
    }
    
    
`

export const SkillGrid = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    

    .ml{
        
        @media screen and (max-width: 770px){
            margin-left: 0;
        }
        @media screen and (min-width: 770px){
            margin-left: 0;
        }
        @media screen and (min-width: 1100px){
            margin-left: 5px;
        }
    }

    .mr{
        
        @media screen and (max-width: 770px){
            margin-right: 0;
        }
        @media screen and (min-width: 770px){
            margin-right: 0;
        }
        @media screen and (min-width: 1100px){
            margin-right: 5px;
        }
    }
    @media screen and (max-width: 770px){
        flex-direction: column;
        align-items: center;
        overflow-y : scroll;
        overflow-x : hidden;
        height: 80%;
        padding-bottom: 50px;
    }

    @media screen and (min-width: 770px){
        flex-direction: column;
        align-items: center;
        overflow-y : scroll;
        overflow-x : hidden;
    }

    @media screen and (min-width: 1100px){
        flex-direction: row;
        overflow-y : hidden;
        overflow-x : hidden;
    }
`

export const SkillGridItem = styled.div`
    position: relative;
    background-color: transparent;
    
    
    padding:50px 20px 50px 0px;

    @media screen and (max-width: 770px){
        width: 100%;
        

    }

    @media screen and (min-width: 770px){
        width: 80%;
        
    }

    @media screen and (min-width: 1100px){
        width: 50%;
        height: 100%;
    }
`

export const CertiGridItem = styled.div`
    position: relative;
    background-color: transparent;
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
    border-left: 2px solid #6702e4;
    
    @media screen and (max-width: 770px){
        width: 100%;
        margin-top: 30px;
        padding: 0px;
    }

    @media screen and (min-width: 770px){
        width: 80%;
        margin-top: 30px;
        padding: 0px;
    }

    @media screen and (min-width: 1100px){
        width: 50%;
    }
    
`

export const CertiTitle = styled.div`
    width: 100%;
    color: #fff;
    font-size: 1.5rem;
    letter-spacing: 1px;
    padding: 20px 20px;
`

export const CertiScroll = styled.div`
    width: 100%;
    height: 400px;
    display: grid;
    overflow-y: hidden;
    overflow-x: scroll;
    scroll-behavior: smooth;
    scroll-snap-type: y mandatory;
    margin-bottom: 5%;
   

`

export const CertiItemCont = styled.div`
   
    width: 90%;
    height: 400px;
    scroll-snap-align: start;
    background: #111;
    margin: 0 20px;
   
`

export const CertiItem = styled.div`
    height: 400px;
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items:center;

`

export const NextLink = styled.div`
    position: absolute;
    background: transparent;
    right: 3%;
    top: 55%;
    transform: rotate(90deg);

    @media screen and (max-width: 770px){
        right: 6%;
        top: 86%;
    }

    .next{
        color: #fff;
        opacity: 60%;
        &:link{
            text-decoration: none;
        }
        &:active{
            text-decoration: none;
        }
        &:visited{
            text-decoration: none;
        }
    }
`

export const PrevLink = styled.div`
    position: absolute;
    background: transparent;
    right:3%;
    top: 50%;
    transform: rotate(90deg);

    @media screen and (max-width: 770px){
        right: 6%;
        top: 78%;
    }

    .previous{
        color: #fff;
        opacity: 60%;
        &:link{
            text-decoration: none;
        }
        &:active{
            text-decoration: none;
        }
        &:visited{
            text-decoration: none;
        }
    }
`

export const CertiBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5% 0;
`

export const Certilogo = styled.img`
    height: 40%;
    width: 80%;
    object-fit: contain;
`

export const CTitle = styled.div`
    color: #6702e4;
    width: 80%;
    text-align: center;
    letter-spacing: 0.7px;
    font-size: 1.5rem;
    padding: 3% 0px;
    
`

export const CertiLink = styled.a`
    color: #fff;
    padding: 2% 0px;
    font-size: 1.2rem;
    opacity: 60%;
    transition: 0.3s ease-in-out;

    &:hover{
        opacity: 100%;
        transition: 0.3s ease-in-out;
    }
`