import React from 'react';
import { HeroContainer, HeroWrapper, HeroText1, HeroText2, HeroText3, HeroText4 } from './HeroSectionEle';

const HeroSection = ({currSection, active}) => {

  return (
    <>
    <HeroContainer currSection={currSection} active={active}>
    <HeroWrapper>
       <HeroText1>Hi, my name is</HeroText1>
       <HeroText2>N N Advith.</HeroText2>
       <HeroText3>I'm a programmer.</HeroText3>
       <HeroText4>I like to design and build front-end applications while delving in other technologies.</HeroText4>
    </HeroWrapper>
    </HeroContainer>
    </>
  );
}

export default HeroSection