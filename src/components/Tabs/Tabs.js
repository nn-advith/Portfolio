import React, {useState, useEffect} from 'react'
import './tab.css';
import { Column1, Column2, TabLink, TabList, TabRow, TabsContainer, TabWrapper, TabInfo } from './TabsEle';
import { dataOne, dataTwo, dataThree } from './TabData';


const Tabs = ({currSection, active}) => {
    const [text, setText] = useState(dataOne);

    
  return (
    <>
        <TabsContainer currSection={currSection} active={active}>
            <TabWrapper>
                <TabRow>
                    <Column1>
                        <TabList>
                            <TabLink to="" onClick={()=>{setText(dataTwo)}}>Text 1</TabLink>
                            <TabLink to="" onClick={()=>{setText(dataOne)}}>Text 2</TabLink>
                            <TabLink to="" onClick={()=>{setText(dataThree)}}>Text 3</TabLink>
                           
                        </TabList>
                    </Column1>
                    <Column2>
                        

                        <TabInfo >
                        {text.text}
                        </TabInfo>

                            
                   
                    </Column2>
                </TabRow>
            </TabWrapper>
        </TabsContainer>
    </>
  );
}

export default Tabs;