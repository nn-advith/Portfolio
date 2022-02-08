import React from 'react';
import { SideSocialContainer, SocialLink, SocialMenu } from './SidesocialEle';

import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Sidesocial = () => {
  return (
    <>
        <SideSocialContainer>
            <SocialMenu>
                <SocialLink href="//www.github.com/nn-advith"><FaGithub/></SocialLink>
                <SocialLink href="https://www.linkedin.com/in/n-n-advith-5583691b3/"><FaLinkedin/></SocialLink>
                <SocialLink href="https://www.instagram.com/nn_advith/"><FaInstagram/></SocialLink>
            </SocialMenu>
        </SideSocialContainer>
    </>
  );
};

export default Sidesocial;
