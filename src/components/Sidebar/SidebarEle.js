import styled from "styled-components";
import { Link as LinkS } from 'react-scroll';


export const SidebarLine = styled.div`
    background: #000;
    position: fixed;
    top: ${({isOpen})=> (isOpen ? '10%': '100%')};
    opacity: ${({isOpen})=> (isOpen ? '1': '0')};
    left: 10%;
    width: 3.5px;
    height: 100%; 
    z-index: 100;
    transition: 0.3s ease-in-out;
    display: ${({deskMode}) => (deskMode ? 'none': 'initial')}

`

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 99;
    width: 70%;
    height:100%;
    background: #fff;
    filter: brightness(0.9);
    display: grid;
    align-items: center;
    justify-content: center;
    top:0;
    right: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0%')};
    right: ${({isOpen}) => (isOpen ? '0' : '-100%')}; 
    display: ${({deskMode}) => (deskMode ? 'none': 'grid')}
`


export const SidebarWrapper = styled.div`
    color: #fff;
    margin-top: 150px;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-colums: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 760px){
        grid-template-rows: repeat(6, 80px);
    }
`

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: left;
    font-size: 0.9rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #000;
    letter-spacing: 1.2px;
    cursor: pointer;

    &:hover {
        text-decoration: line-through;
        transition: 0.2s ease-in-out;
    }
`


