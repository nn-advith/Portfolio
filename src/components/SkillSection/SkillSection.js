import React, { useState } from 'react';
import { CertiTitle, SkillContainer, SkillGrid, SkillGridItem, CertiGridItem,  SkillTitle, SkillWrapper, CertiScroll, CertiItem, CertiItemCont, PrevLink, 
        NextLink, Certilogo, CTitle, CertiLink, Languages, LangItem, TechImageContainer, TechImage, Slider, SliderTrack, Slide, Column1, Column2 } from './SkillSectionEle';
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
import flask from '../../images/tech/flask.png';

const SkillSection = ({currSection, active, visited}) => {

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
    <SkillTitle visited={visited} active={active}>Skills.<div className='wrapper'><div className='accent'></div></div></SkillTitle>
        <SkillGrid>
        {/* <Column1> */}
            <SkillGridItem className='mr' visited={visited} active={active}>
            <CertiTitle>Languages</CertiTitle>
                <Languages>
                    <LangItem>HTML<div className='dot'></div></LangItem>
                    <LangItem>CSS<div className='dot'></div></LangItem>
                    <LangItem>JavaScript<div className='dot'></div></LangItem>
                    <LangItem>Python<div className='dot'></div></LangItem>
                    <LangItem>C++<div className='dot'></div></LangItem>    
                </Languages>
                <br/>
                <CertiTitle>Worked with</CertiTitle>
                <Slider>
                <div className='accent p'></div>
                <div className='accent w'></div>
                    <SliderTrack>
                        <Slide><TechImage src={react}/></Slide>
                        <Slide><TechImage src={node}/></Slide>
                        <Slide><TechImage src={mongodb}/></Slide>
                        <Slide><TechImage src={mysql}/></Slide>
                        <Slide><TechImage src={streamlit}/></Slide>
                        <Slide><TechImage src={flask}/></Slide>
                        <Slide><TechImage src={react}/></Slide>
                        <Slide><TechImage src={node}/></Slide>
                        <Slide><TechImage src={mongodb}/></Slide>
                        <Slide><TechImage src={mysql}/></Slide>
                        <Slide><TechImage src={streamlit}/></Slide>
                        <Slide><TechImage src={flask}/></Slide>
                    </SliderTrack>
                </Slider>
            </SkillGridItem>

            <CertiGridItem className='ml' visited={visited} active={active}>
                <CertiTitle className='cimp'>Certificates & Certifications</CertiTitle>
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