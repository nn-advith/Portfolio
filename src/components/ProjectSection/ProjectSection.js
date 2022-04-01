import React, {useState, useEffect, useRef} from 'react';
import { ProjectContainer, ProjectSectionWrapper, ProjectTitle, ProjectView, Card, ProjectMax, ProjectMask,
         ProjectMaxImg, ProjectMaxWrapper, ProjectMaxTitle, ProjectMaxDescription, ProjectMaxTech, ProjectMaxLink, ProjectMaxNav,
        ProjectMaxCarousel, CloseIcon,
        ProjectCarItem} from './ProjectSectionEle';
import {projectData} from './ProjectData.js';
import {FiExternalLink} from 'react-icons/fi';
import {MdNavigateNext, MdNavigateBefore} from 'react-icons/md';



const ProjectSection = ({currSection, active}) => {

    const pdiv = useRef();

    const [po, setPo] = useState(false);
    const [smoothscroll, setSmoothscroll ] = useState(false)

    const changeOpen = () => {
        setPo(!po);
    }

    

    function sleep(mss) {  
        return new Promise(resolve => setTimeout(resolve, mss));  
     }  
     async function changeScroll() {  
        setSmoothscroll(false);
        for (let i = 1; i <=10 ; i++) {          
           await sleep(300);  
           setSmoothscroll(true);
        }  
     }  

     async function scrolltotop(){
        await sleep(300);
        pdiv.current.scrollTop = 0;
     }
    
     useEffect(() => {
        
        if(currSection!== active){
           scrolltotop();  
        }
     }, [currSection,active, scrolltotop])

  return (
      <>
        <ProjectContainer currSection={currSection} active={active} >
            <ProjectMask po={po}/>
            <ProjectSectionWrapper>
                <ProjectTitle>
                    Projects.
                </ProjectTitle>
                <ProjectView ref={pdiv}>
                {projectData.map(data => (
                    <a href={`#`+data.id} key={data.id} className="openlink">
                    <Card onClick={() => {changeOpen(); changeScroll()}}>
                        <div className='wrapper'>
                        <div className='cardtext'>
                            {data.name}
                        </div>
                        <div className='cardsubhead'>
                            {data.subhead}
                        </div>
                        <div className='cardaccent'></div>
                        <img className='cardimg' src={data.imgsrc}/>
                        </div>
                        
                    </Card>
                    </a>
                ))}
                    
                </ProjectView>
            </ProjectSectionWrapper>
            <ProjectMaxCarousel smoothscroll={smoothscroll} po={po}>
            
             
            {projectData.map(data => (
                <ProjectCarItem id={data.id} key={data.id}>
                
                <ProjectMax >         
                <CloseIcon onClick={changeOpen}>
                    <div></div>
                    <div></div>
                </CloseIcon>
             
                <ProjectMaxImg src={data.imgsrc} />
                <ProjectMaxWrapper>

                
                    <ProjectMaxTitle>
                    {data.name}
                    </ProjectMaxTitle>
                    <ProjectMaxDescription>
                    {data.desc}
                    </ProjectMaxDescription>
                    
                    <ProjectMaxTech>
                    {data.tech.map(item => (
                        <div key={item}>{item}</div>
                    ))}
                    </ProjectMaxTech>
                    <ProjectMaxLink href={data.link} target="_blank" rel="noreferrer noopener">
                    <FiExternalLink/>
                    </ProjectMaxLink>
                    <ProjectMaxNav>
                
                <a href={`#`+(projectData.indexOf(data) === 0 ? projectData[projectData.length-1].id : projectData[projectData.indexOf(data)-1].id)} className='previous' > <MdNavigateBefore /></a>
                 <a href={`#`+(projectData.indexOf(data) === projectData.length-1 ? projectData[0].id : projectData[projectData.indexOf(data)+1].id)} className='next'>  <MdNavigateNext /></a>
                  </ProjectMaxNav>
                    
                </ProjectMaxWrapper>
                
               
            </ProjectMax>
            </ProjectCarItem>
            ))}
            
            </ProjectMaxCarousel>
        </ProjectContainer>

      </>
  )
}

export default ProjectSection