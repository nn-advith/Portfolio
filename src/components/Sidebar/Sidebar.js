import React from 'react';

import { 
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarLine,

  } from './SidebarEle';
const Sidebar = ({isOpen, deskMode,  toggle, setSection}) => {
  return (
    <>
       <SidebarLine isOpen={isOpen} deskMode={deskMode}></SidebarLine>
       <SidebarContainer isOpen={isOpen} deskMode={deskMode} onClick={toggle}>
    
            <SidebarWrapper>
              <SidebarMenu>
                <SidebarLink to="about" onClick={() => {toggle(); setSection(1);}}>1. About</SidebarLink>
                <SidebarLink to="description" onClick={() => {toggle(); setSection(2);}}>2. Skills</SidebarLink>
                <SidebarLink to="signup" onClick={() => {toggle(); setSection(3);}}>3. Contact Me</SidebarLink>
              </SidebarMenu>
            </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default React.memo(Sidebar);
