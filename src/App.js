import React,{useState, Suspense} from 'react';
import './styles.css';

import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Canvas } from '@react-three/fiber';
import { CanvasContainer } from './components/Canvas/CanvasEle';
import HamIcon2 from './components/Hamburger/HamIcon';
import { NavLogo } from './components/Navbar/NavbarEle';
import AnimatedSphere from './components/Threejs/Sphere/AnimatedSphere';

import { animateScroll as scroll } from 'react-scroll';
import Sidesocial from './components/SideSocials/Sidesocial';
import HeroSection from './components/HeroSection/HeroSection';

const App = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [deskMode, setdeskMode] = useState(window.innerWidth<768 ? false:true);
  const [currSection, setCurrSection ] = useState(0);


  const toggle = () => {
    setIsOpen(!isOpen)
    console.log(!isOpen)
    if(isOpen === true){

      document.body.classList.remove('noscroll')
      document.body.classList.add('scrollallow')
    }else{

      document.body.classList.remove('scrollallow')
      document.body.classList.add('noscroll')
    }
  }

 
  const changeDeskMode = () => {
   
    setIsOpen(false)
    setdeskMode(window.innerWidth<768 ? false:true);
    
  }

  window.addEventListener('resize', changeDeskMode)

  const toggleHome = () =>{
    scroll.scrollToTop()
}


  return (
  <>
    <NavLogo  to='/' onClick={()=>{toggleHome();setIsOpen(false); setCurrSection(0)}}>NNA</NavLogo>
    <Navbar isOpen={isOpen} toggle={toggle} setSection={setCurrSection} />
    <HamIcon2 toggle={toggle} isOpen={isOpen}/>
    <Sidebar isOpen={isOpen} deskMode={deskMode} toggle={toggle} setSection={setCurrSection} />
    <Sidesocial />
    <HeroSection currSection={currSection} active={0}/>
   
    <CanvasContainer  isOpen={isOpen}>
      <Canvas  camera={{fov:10, position: [0,0, 50]}}>
      {/* <color attach="background" args={["black"]} /> */}
        <ambientLight intensity={1} />
        <directionalLight position={[0,2,2]} intensity={0.2} />
        {/* <pointLight position={[2,2,2]} color="white" intensity={1 } /> */}
        <Suspense fallback={null} >
          <AnimatedSphere currSection = {currSection}/>
        </Suspense>
     
      </Canvas>
    </CanvasContainer>

  </>
  );
};

export default App;
