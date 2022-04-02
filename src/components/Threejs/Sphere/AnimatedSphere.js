import React, {useState, useRef, useEffect} from "react";
import { useFrame} from '@react-three/fiber';
import {Sphere, MeshDistortMaterial} from "@react-three/drei";
import * as THREE from 'three';



const  AnimatedSphere = (currSection) => {
    //colors
    // const white = new THREE.Color( 0xffffff );  
    // const red = new THREE.Color( 0xFF0000 );
    // const green = new THREE.Color( 0x5DFF00);
    // const yellow = new THREE.Color( 0xF4D600);
    const black = new THREE.Color( 0x000000 );
    const blue = new THREE.Color( 0x1B00FF );
    const grey = new THREE.Color( 0x323232);

    const [position, setPosition] = useState({x:0, y:-2.5, z:40})
    // const [active, setActive] = useState(true);
    // const [hover, setHover] = useState(false);
    // const [action, setAction] = useState(0);


    const sphereRef = useRef();
    const matRef = useRef();
    const vec = new THREE.Vector3(position.x, position.y, position.z);

     const  [state, setState] = useState( {
      cubeColor: grey,
      previousTweenColor: black,
      nextTweenColor: black,
      alphaUnit: 0,
      isTweenRunning: false
    });

    // const tweenColors = (color) => {
    //   setState(
    //    {
    //     ...state,
    //     previousTweenColor: state.cubeColor,
    //     nextTweenColor: color,
    //     alphaUnit: 0,
    //     isTweenRunning: true
    //   }
    //   );
    // }

    // function changeColor(currSection){
    //   switch(currSection.currSection){
    //     case 0: tweenColors(white); break;
    //     case 1: tweenColors(red); break;
    //     case 2: tweenColors(green); break;
    //     case 3: tweenColors(blue); break;
    //   };

    // }


    const changePosition=(currSection)=>{
      switch(currSection.currSection){
        case 0: setPosition({x:0,y:-2.5,z:40}); break;
        case 1: setPosition({x:2.6,y:0,z:42}); break;
        case 2: setPosition({x:-3.45,y:0,z:40}); break;
        case 3: setPosition({x:0,y:0,z:45}); break;
        case 4: setPosition({x:1.8 ,y:-2,z:40}); break;
      }
    }


    useFrame(() => {
      sphereRef.current.position.lerp(vec, 0.03); 
  
      // sphereRef.current.rotation.y += 0.01;
      // if (!state.previousTweenColor.equals(state.nextTweenColor) ) {
      //   state.alphaUnit = +(state.alphaUnit+0.006).toFixed(2)
      //   state.cubeColor = state.cubeColor.lerpColors(state.previousTweenColor, state.nextTweenColor, state.alphaUnit);
      //   matRef.current.color.set(state.cubeColor)
      // }
      
    });

    useEffect(()=> {
      // changeColor(currSection);
      changePosition(currSection);
    }, [currSection]);



    return (
   
        <mesh ref={sphereRef}   
              // onPointerUp={()=>{  }}
              // onPointerOver={() =>{setHover(true);}}
              // onPointerOut={()=>{setHover(false);}}
              >           
            <Sphere visible args={[1,100,200]} rotation={[0,0,90]}  scale={2} >
            <MeshDistortMaterial ref={matRef} color={state.cubeColor} speed={1} roughness={1} metalness={1} emissive={blue}  distort={0.25}/>
        </Sphere>
        </mesh>
    );
}

export default React.memo(AnimatedSphere);