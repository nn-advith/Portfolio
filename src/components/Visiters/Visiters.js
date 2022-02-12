import React from 'react'
import {VisiterContainer, VisiterInput, VisiterButton, VisiterInputSection, VisiterForm, VisiterText} from './VisiterEle'


const Visiters = ({currSection, active}) => {

    const handleSubmit = () => {

    }

  return (
    <>
        <VisiterContainer currSection={currSection} active={active}>
        <VisiterInputSection>
            <VisiterForm autoComplete='off' onSubmit={handleSubmit}>
            
            <VisiterInput type='text' name='visitor' placeholder='Enter your name'/><VisiterText>was here on {new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()} <VisiterButton >Submit</VisiterButton> </VisiterText> 
            

            </VisiterForm>
        </VisiterInputSection>
           
           
        </VisiterContainer>
    </>
  )
}

export default Visiters