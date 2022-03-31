import React, { useState } from 'react';
import { CertiTitle, SkillContainer, SkillGrid, SkillGridItem, CertiGridItem,  SkillTitle, SkillWrapper, CertiScroll, CertiItem, CertiItemCont, PrevLink, 
        NextLink, Certilogo, CTitle, CertiLink, CertiBox } from './SkillSectionEle';
import { Certificates } from './Certifications';
import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md';
import {FiExternalLink} from 'react-icons/fi';

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
Est ullamco duis occaecat occaecat veniam incididunt Lorem amet voluptate qui ullamco nisi sint. Dolor proident consectetur sint aliqua aliqua non nisi do minim irure ut amet. Irure et et in pariatur laborum sit. Culpa voluptate dolore nulla cupidatat dolor non officia qui labore sunt irure. Sit dolor non consectetur dolor in dolor.

Eu ad officia excepteur laboris ut dolore eu. Nostrud quis exercitation excepteur non amet nisi est dolor adipisicing aliqua fugiat deserunt in quis. Mollit enim tempor ad velit ipsum consequat est aute consectetur ad ex.

Irure adipisicing culpa nisi velit. Pariatur nostrud est adipisicing pariatur ex do pariatur mollit nulla est amet sunt officia commodo. Ea amet excepteur anim duis magna. Dolor quis mollit adipisicing voluptate mollit eu ipsum excepteur. Eu aute ex commodo ullamco voluptate labore mollit consectetur. Sunt id duis ea elit eu mollit culpa sit nostrud irure eiusmod.
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