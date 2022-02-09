import styled, {keyframes} from 'styled-components';
import {Link as LinkS} from "react-scroll";

//animations

const fadeIn =  keyframes`
    0% {
        opacity: 0;
        margin-top: -80px;
    }
    100% {
        opacity: 1;
        margin-top:0;
    }

`

const fadeIn2 =  keyframes`
    0% {
        opacity: 0;
        margin-left: -80px;
    }
    100% {
        opacity: 1;
        margin-left:0;
    }

`


export const Nav = styled.nav`
   background: transparent;
   width:100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    top:0;
    z-index: 100;
    animation: ${fadeIn} 0.6s;
    transition: all 0.3s ease-in-out;
    filter: ${({isOpen}) => (isOpen ? 'grayscale(100%)': 'graysacle(0%)')};
    
    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 100%; 
`


export const NavLogo = styled.div`
    color: white;
    position: fixed;
    transform:translate(10%, 35%);
    ${'' /* justify-self: flex-start; */}
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 15px;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 0px;
    z-index: 101;
    transition: 0.3s  ease-in-out;
    animation: ${fadeIn2} 0.6s;
    @media screen and (max-width: 770px){
        transform: translate(10%, 90%);
        font-size: 1.2rem;
        transition: 0.3s  ease-in-out;
    }

    &:hover{
        
    }
`



export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    justify-self: flex-end;
    opacity: 100%;
    transform: translateX(10%);
    transition: 0.3s ease-in-out;
    @media screen and (max-width: 770px) {
        opacity: 0%;
        transform: translateX(-20%);
        transition: 0.3s ease-in-out;
    }
`

export const NavItem = styled.div`
   height: 60px;  
`

export const NavLink = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 0.8rem;
    margin-top: 0.9rem;
    margin-bottom: 1.2rem;
    padding: 0 1rem;
    height: 50%;
    cursor: pointer;
    letter-spacing: 1.4px;
    border-right: ${({slash}) => (slash? '1px solid #fff':'none')};

    &:hover {
        text-decoration: line-through;
        transition: 0.2s ease-in-out
    }
`