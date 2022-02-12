import React from 'react'
import { SideHelloContainer, SideHelloLine, SideHelloText } from './SideHelloEle';

const SideHello = ({setCurrSection}) => {

  const handleClick = () => {
    setCurrSection(21);
  }

  return (
    <>
        <SideHelloContainer>
            <SideHelloLine />
            <SideHelloText onClick={handleClick}>
            Tell me you were here.
            </SideHelloText>
        </SideHelloContainer>
    </>
  );
}

export default SideHello;