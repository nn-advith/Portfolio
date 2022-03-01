import styled from 'styled-components';
import { fadeIn } from '../Animations/Animations';


export const TabsContainer = styled.div`
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

export const TabWrapper = styled.div`
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    height: 50%;

    @media screen and (max-width: 770px){
       width: 90%;
       height: 60%;
    }
    @media screen and (min-width: 770px){
        width: 80%;
       height: 60%;
    @media screen and (min-width: 1100px){
        width:50%;
       height: 40%;
    }
`

export const TabRow = styled.div`
    display: grid;
    grid-auto-columns: 1fr 4fr;
    align-items: center;
    width: 100%;
    grid-template-areas: 'col1 col2';

    @media screen and (max-width: 770px) {
        grid-template-areas: 'col1' 'col2';
    }

`

export const Column1 = styled.div`
    margin-bottom: 15px;
    grid-area: col1;
    height: 100%;

    @media screen and (max-width: 770px){
        height: 50px;
    }
    

`
export const Column2 = styled.div`
    margin-bottom: 15px;
    grid-area: col2;
    @media screen and (max-width: 770px){
        height: 200px;
    }
`

export const TabList =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
    border-right: 2px solid #6702e4;
    @media screen and (max-width: 770px){
        flex-direction: row;
    }

`

export const TabLink = styled.button`
    display: flex;
    padding: 0.6rem 2rem;
    justify-content: left;
    align-items: center;
    color: #fff;
    background: transparent;
    border: none;
    border-left: 1px solid transparent;
    width: 100%;
    cursor:pointer;
    transition: 0.2s ease-in-out;


    &:hover {
        color: #fff;
        border-left: 1px solid #fff;
        background: #202020;
    
    }

    &:focus{
        color: #6702e4;
        border-left: 1px solid #fff;
        background: #202020;  
       
    }

    @media screen and (max-width: 770px){
        justify-content: center;
    }


`

export const TabInfo = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    color: #fff;
    text-align: justify;
    padding-left: 2rem;
    @media screen and (max-width: 770px){
      padding-left: 0;
    }
    @media screen and (min-width: 770px){
        padding-left: 2rem;
    @media screen and (min-width: 1100px){
        padding-left: 2rem;
    }
    

`