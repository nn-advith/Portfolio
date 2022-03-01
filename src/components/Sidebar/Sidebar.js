import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { 
    SidebarContainer,
    CloseIcon,
    Icon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SidebarLine,
    SideSocialLink,
    SideSocialMenu

  } from './SidebarEle';
const Sidebar = ({isOpen, deskMode,  toggle, setSection}) => {
  return (
    <>
       <SidebarLine isOpen={isOpen} deskMode={deskMode}></SidebarLine>
       <SidebarContainer isOpen={isOpen} deskMode={deskMode} onClick={toggle}>
    
            <SidebarWrapper>
              <SidebarMenu>
                <SidebarLink  onClick={() => {toggle(); setSection(1);}}>1. About</SidebarLink>
                <SidebarLink  onClick={() => {toggle(); setSection(2);}}>2. Skills</SidebarLink>
                <SidebarLink  onClick={() => {toggle(); setSection(3);}}>3. Work</SidebarLink>
                <SidebarLink  onClick={() => {toggle(); setSection(4);}}>4. Contact Me</SidebarLink>
              </SidebarMenu>
            </SidebarWrapper>
            <SideSocialMenu>
                <SideSocialLink href="//www.github.com/nn-advith"  target="_blank" rel="noreferrer noopener"><FaGithub/></SideSocialLink>
                <SideSocialLink href="https://www.linkedin.com/in/n-n-advith-5583691b3/" target="_blank" rel="noreferrer noopener"><FaLinkedin/></SideSocialLink>
                <SideSocialLink href="https://www.instagram.com/nn_advith/" target="_blank" rel="noreferrer noopener"><FaInstagram/></SideSocialLink>
            </SideSocialMenu>
      </SidebarContainer>
    </>
  );
};

export default React.memo(Sidebar);
