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
import SideHello from './components/SideHello/SideHello';
import Visiters from './components/Visiters/Visiters';
import Contact from './components/Contact/Contact';
import Tabs from './components/Tabs/Tabs';
import AboutSection from './components/AboutSection/AboutSection';

const App = () => {

  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false)
  const [deskMode, setdeskMode] = useState(window.innerWidth<768 ? false:true);
  const [currSection, setCurrSection ] = useState(0);


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
    setdeskMode(window.innerWidth<768 ? false:true);
    
  }

  window.addEventListener('resize', changeDeskMode)

  const toggleHome = () =>{
    scroll.scrollToTop()
  }

  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    }, 5000)
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
    <HeroSection currSection={currSection} active={0}/>
    <AboutSection currSection={currSection} active={1} />
    {/* <SideHello setCurrSection={setCurrSection}/>
    <Visiters currSection={currSection} active={21}/> */}
    <Contact currSection={currSection} active={4}/>
    {/* <Tabs currSection={currSection} active={1}/> */}


    {/* threejs */}
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
    </div>

    }
    
  </>
  );
};

export default App;
