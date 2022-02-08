import React, {useState} from 'react';
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { 
    Nav,
    NavLogo,
    NavbarContainer,
    NavItem,
    NavMenu,
    NavLink,
    HamIcon,
} from './NavbarEle';

const Navbar = ({isOpen,toggle, setSection}) => {

    // window.addEventListener('scroll', console.log(window.pageYOffset));
    const toggleHome = () =>{
        scroll.scrollToTop()
    }

    return (
    <>

        <Nav isOpen={isOpen}>
        
        <NavbarContainer >

        {/* <NavLogo to='/' onClick={toggleHome}>NNA</NavLogo>    */}
       
        <NavMenu>
            <NavItem>
                <NavLink slash='true' onClick={() => {setSection(1);}}>About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink slash='true' onClick={() => { setSection(2);}}>Skills</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => { setSection(3);}}>Contact</NavLink>
            </NavItem>
        </NavMenu>
        </NavbarContainer>
        </Nav>
    </>
    );
};

export default React.memo(Navbar);
