import React, { useState } from 'react';
import { CertiTitle, SkillContainer, SkillGrid, SkillGridItem, CertiGridItem,  SkillTitle, SkillWrapper, CertiScroll, CertiItem, CertiItemCont, PrevLink, 
        NextLink, Certilogo, CTitle, CertiLink, Languages, LangItem, TechImageContainer, TechImage } from './SkillSectionEle';
import { Certificates } from './Certifications';
import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md';
import {FiExternalLink} from 'react-icons/fi';

//image imports
import react from '../../images/tech/react.png';
import node from '../../images/tech/node.png';
import mongodb from '../../images/tech/mongodb.png';
import mysql from '../../images/tech/mysql.png';
import streamlit from '../../images/tech/streamlit.png';
import axios from '../../images/tech/axios.png';

const SkillSection = ({currSection, active}) => {

    const [currCerti, setCurrCerti] = useState(1);

    const goPrev = () => {
        if( currCerti === 1){
            setCurrCerti(Certificates.length)
        }
        else{
            setCurrCerti(currCerti-1);
        }
    }

    const goNext = () => {
        if( currCerti === Certificates.length){
            setCurrCerti(1)
        }
        else{
            setCurrCerti(currCerti+1);
        }
    }


  return (
    <SkillContainer currSection={currSection} active={active}>
    <SkillWrapper>
    <SkillTitle>Skills.</SkillTitle>
        <SkillGrid>
            <SkillGridItem className='mr'>
            <CertiTitle>Languages</CertiTitle>
                <Languages>
                    <LangItem>HTML</LangItem>
                    <LangItem>CSS</LangItem>
                    <LangItem>JavaScript</LangItem>
                    <LangItem>Python</LangItem>
                    <LangItem>C++</LangItem>    
                </Languages>
                <br/>
                <CertiTitle>Worked with</CertiTitle>
                <TechImageContainer>
                    <TechImage src={react}/>
                    <TechImage src={node}/>
                    <TechImage src={mongodb}/>
                    <TechImage src={mysql}/>
                    <TechImage src={axios}/>
                    <TechImage src={streamlit}/>
                </TechImageContainer>
            </SkillGridItem>
            <CertiGridItem className='ml'>
                <CertiTitle>Certificates & Certifications</CertiTitle>
                <CertiScroll>
                    {Certificates.map(cert => (
                        <CertiItemCont id={cert.id} key={cert.id}>
                            <CertiItem >
                                <Certilogo src={cert.imgsrc}/>
                                
                                <CTitle>{cert.title}</CTitle>
                                <CertiLink href={cert.link} target="_blank" rel="noreferrer noopener"><FiExternalLink/></CertiLink>
                                

                            </CertiItem>
                            </CertiItemCont>
                    ))}
                  
                
                </CertiScroll>
                <PrevLink onClick={goPrev}><a className='previous' href={`#c`+currCerti}><MdNavigateBefore /></a></PrevLink>
                    <NextLink onClick={goNext}><a className='next' href={`#c`+currCerti}><MdNavigateNext/></a></NextLink>
            </CertiGridItem> 

        </SkillGrid>
</SkillWrapper>
    </SkillContainer>
  )
}

export default SkillSection