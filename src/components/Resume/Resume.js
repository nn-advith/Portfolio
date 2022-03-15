import React from 'react'
import { ResumeContainer, ResumeLine, ResumeText } from './ResumeEle';
import resume from '../../resume/resume.pdf'

const Resume = ({setCurrSection}) => {

  const handleClick = () => {
    
  }

  return (
    <>
        <ResumeContainer>
            <ResumeLine />
            <ResumeText href={resume} target="_blank" rel="noreferrer noopener">
            My Resume.
            </ResumeText>
        </ResumeContainer>
    </>
  );
}

export default Resume;