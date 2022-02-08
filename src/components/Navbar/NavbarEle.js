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
    animation: ${fadeIn} 1s;
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
    color: black;
    position: absolute;
    transform:translate(10%, 35%);
    ${'' /* justify-self: flex-start; */}
    cursor: pointer;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-left: 15px;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 5px;
    z-index: 101;
    transition: 0.3s  ease-in-out;
    @media screen and (max-width: 768px){
        transform: translate(10%, 50%);
        font-size: 1.2rem;
        transition: 0.3s  ease-in-out;
    }
`



export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    justify-self: flex-end;
    @media screen and (max-width: 768px) {
        display: none;
        transition: 0.3s ease-in-out;
    }
`

export const NavItem = styled.div`
   height: 80px;  
`

export const NavLink = styled(LinkS)`
    color: #000;
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-top: 1.2rem;
    margin-bottom: 1.2rem;
    padding: 0 1rem;
    height: 50%;
    cursor: pointer;
    letter-spacing: 1.4px;
    border-right: ${({slash}) => (slash? '1px solid #000':'none')};

    &:hover {
        text-decoration: line-through;
        transition: 0.2s ease-in-out
    }
`