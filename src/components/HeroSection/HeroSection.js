import React, {useState} from 'react';
import { HeroContainer, HeroWrapper, HeroText1, HeroText2, HeroText3, HeroText4, Wrapper, Acc } from './HeroSectionEle';

const HeroSection = ({currSection, active, visited}) => {

  const [p, setP] = useState('p');
  const [w, setW] = useState('w');

  return (
    <>
    <HeroContainer currSection={currSection} active={active}>
    <HeroWrapper visited={visited} active={active}>
      <Wrapper visited={visited} active={active}><Acc c={w}></Acc></Wrapper>
       <HeroText1 >Hi, my name is </HeroText1>
       <HeroText2 >N N Advith.</HeroText2>
       <HeroText3 >I'm a programmer.</HeroText3>
       <HeroText4 >I like to design and build web applications while delving in other technologies.
        
       </HeroText4>
    </HeroWrapper>
    </HeroContainer>
    </>
  );
}

export default HeroSection