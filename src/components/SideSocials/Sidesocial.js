import React from 'react';
import { SideSocialContainer, SocialLink, SocialMenu, SideSocialLine } from './SidesocialEle';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Sidesocial = () => {
  return (
    <>
        <SideSocialContainer>
            <SideSocialLine />
            <SocialMenu>
                <SocialLink href="//www.github.com/nn-advith" target="_blank" rel="noreferrer noopener"><FaGithub/></SocialLink>
                <SocialLink href="https://www.linkedin.com/in/n-n-advith-5583691b3/" target="_blank" rel="noreferrer noopener"><FaLinkedin/></SocialLink>
                <SocialLink href="https://www.instagram.com/nn_advith/" target="_blank" rel="noreferrer noopener"><FaInstagram/></SocialLink>
            </SocialMenu>
        </SideSocialContainer>
    </>
  );
};

export default Sidesocial;
