import React from 'react';
import { AboutContainer, AboutHeading,AboutPic, AboutImgWrap,  AboutInfo, AboutRow, Column1, Column2, AboutInfoLine } from './AboutSectionEle';
import photo from '../../images/cat.jpg';

const AboutSection = ({currSection, active}) => {
  return (
    <>
        <AboutContainer currSection={currSection} active={active}>
          <AboutHeading>
          About Me.
        </AboutHeading>
            <AboutRow>
          
              <Column1>
                <AboutInfo>
                Hello! My name is Advith and I like to build things for the web. I grew interested in web development after seeing some amazing websites built by talented people. I'm currently studying Computer Science and Engineering and working towards my Bachelor's degree. My current hobbies include video games and watching anime.  
                <br />
                <br />
                <br />
                This is my timeline:

                <AboutInfoLine >
                  jafkwfdjawf<br /><br />
                  adfjawD<br /><br />
                  jafkwfdjawf<br /><br />
                  adfjawD<br /><br />
                  jafkwfdjawf<br /><br />
                  adfjawD<br /><br />
                  jafkwfdjawf<br /><br />
                  adfjawD<br /><br />
                </AboutInfoLine>

                </AboutInfo>
              </Column1>
              <Column2>
              <AboutImgWrap >
              <AboutPic>
                <div className='wrapper'>
                  <img className='aboutimg' src={photo}/>
                </div>
              </AboutPic>
              </AboutImgWrap>
              
              </Column2>
            </AboutRow>
        </AboutContainer>
    </>
  );
}

export default AboutSection