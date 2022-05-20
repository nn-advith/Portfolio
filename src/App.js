import React,{useState, Suspense, useEffect} from 'react';
import './styles.css';
import { animateScroll as scroll } from 'react-scroll';
import PuffLoader from "react-spinners/PuffLoader"; 

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Canvas } from '@react-three/fiber';
import { CanvasContainer } from './components/Canvas/CanvasEle';
import HamIcon2 from './components/Hamburger/HamIcon';
import { NavLogo } from './components/Navbar/NavbarEle';
import AnimatedSphere from './components/Threejs/Sphere/AnimatedSphere';
import Sidesocial from './components/SideSocials/Sidesocial';
import HeroSection from './components/HeroSection/HeroSection';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import AboutSection from './components/AboutSection/AboutSection';
import ProjectSection from './components/ProjectSection/ProjectSection';
import SkillSection from './components/SkillSection/SkillSection';

const App = () => {

  function sleep(mss) {  
    return new Promise(resolve => setTimeout(resolve, mss));  
 } 

  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false)
  const [deskMode, setdeskMode] = useState(window.innerWidth<768 ? false:true);
  const [currSection, setCurr ] = useState(0);
  const [visited, setVisited] = useState([0,0,0,0,0])  
  
  const setCurrSection = async(i) => {
    setCurr(i);
    var a = visited;
    a[i] = 1;
    await sleep(1000);
    setVisited(a)
  
  }

  const toggle = () => {
    setIsOpen(!isOpen)
      // if(isOpen === true){

  //   document.body.classList.remove('noscroll')
  //   document.body.classList.add('scrollallow')
  // }else{

  //   document.body.classList.remove('scrollallow')
  //   document.body.classList.add('noscroll')
  // }
  }



 
  const changeDeskMode = () => {
   
    setIsOpen(false)
    setdeskMode(window.innerWidth<770 ? false:true);
    
  }

  window.addEventListener('resize', changeDeskMode)

  const toggleHome = () =>{
    scroll.scrollToTop()
  }

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 4000)
  }, []);


  

  return (
  <>
    {
      loading ?
      <div className='loader'>
      <PuffLoader color={"#6702e4"} loading={loading} size={100} />
      </div>
      :
      <div>
      <NavLogo  to='/' onClick={()=>{toggleHome();setIsOpen(false); setCurrSection(0)}}>NNA</NavLogo>
      <Navbar isOpen={isOpen} toggle={toggle} setSection={setCurrSection} />
      <HamIcon2 toggle={toggle} isOpen={isOpen}/>
      <Sidebar isOpen={isOpen} deskMode={deskMode} toggle={toggle} setSection={setCurrSection} />
      <Sidesocial />
      <HeroSection currSection={currSection} active={0} visited={visited}/>
      <AboutSection currSection={currSection} active={1} />
      <SkillSection currSection={currSection} active={2} />
      <ProjectSection currSection={currSection} active={3} visited={visited}/>
      <Resume setCurrSection={setCurrSection}/>
      <Contact currSection={currSection} active={4}/>
 


    {/* threejs */}
      <CanvasContainer  isOpen={isOpen}>
        <Canvas  camera={{fov:10, position: [0,0, 50]}}>
        {/* <color attach="background" args={["black"]} /> */}
          <ambientLight intensity={1} />
          <directionalLight position={[0,2,2]} intensity={0.2} />
          {/* <pointLight position={[2,2,2]} color="white" intensity={1 } /> */}
          <Suspense fallback={null} >
            <AnimatedSphere currSection = {currSection} />
          </Suspense>
      
        </Canvas>
      </CanvasContainer>
    </div>

    }
    
  </>
  );
};

export default App;
