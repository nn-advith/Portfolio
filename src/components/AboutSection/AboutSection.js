import React from 'react';
import { AboutContainer, AboutHeading,AboutPic,AboutPicImg,  AboutImage, AboutImgWrap, AboutImgWrapOverlay, AboutInfo, AboutRow, Column1, Column2 } from './AboutSectionEle';
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
                Hello!
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