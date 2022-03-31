import React from 'react';

import { 
    Nav,
    NavLogo,
    NavbarContainer,
    NavItem,
    NavMenu,
    NavLink,

} from './NavbarEle';

const Navbar = ({isOpen,toggle, setSection}) => {
    
    return (
    <>
        <Nav isOpen={isOpen}>
        <NavbarContainer >       
        <NavMenu>
            <NavItem>
                <NavLink slash='true'  onClick={() => {setSection(1);}}>About</NavLink>
            </NavItem>
            <NavItem>
                <NavLink slash='true' onClick={() => { setSection(2);}}>Skills</NavLink>
            </NavItem>
            <NavItem>
                <NavLink slash='true' onClick={() => { setSection(3);}}>Projects</NavLink>
            </NavItem>
            <NavItem>
                <NavLink onClick={() => { setSection(4);}}>Contact</NavLink>
            </NavItem>
        </NavMenu>
        </NavbarContainer>
        </Nav>
    </>
    );
};

export default React.memo(Navbar);
