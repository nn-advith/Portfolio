import React from 'react';
import { HamIcon } from './HamIconEle';

const HamIcon2 = ({toggle, isOpen}) => {
  return (<div onClick={toggle}>
      <HamIcon  isOpen={isOpen}>
            <div />
            <div />
            <div />
        </HamIcon>
  </div>);
};

export default HamIcon2;
