import React from 'react';
import { AboutContainer, AboutHeading,AboutPic, AboutImgWrap,  AboutInfo, AboutRow, Column1, Column2, AboutInfoLine, TimeLineItem, TimeLineHeading, TimeLineText } from './AboutSectionEle';
import photo from '../../images/me.png';

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
                Education : 

                <AboutInfoLine >
                  <TimeLineItem>
                      <TimeLineHeading>
                        2005-2017
                      </TimeLineHeading>
                      <TimeLineText>
                        <span className='subhead'>Early Schooling</span> <br/>
                        Dr. M R S M English Medium School, Mangalore.
                      </TimeLineText>
                  </TimeLineItem>
                  <TimeLineItem>
                  <TimeLineHeading>
                        2017-2019
                      </TimeLineHeading>
                      <TimeLineText>
                        <span className='subhead'>Pre-University</span> <br/>
                        Sharada P U College, Mangalore.
                      </TimeLineText>
                  </TimeLineItem>
                  <TimeLineItem>
                  <TimeLineHeading>
                        2019-2023(Expected)
                      </TimeLineHeading>
                      <TimeLineText>
                        <span className='subhead'>Bachelor of Engineering</span> <br/>
                        Ramaiah Institute of Technology, Bangalore.
                      </TimeLineText>
                  </TimeLineItem>
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