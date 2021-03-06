import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import { Column1, Column2,ContactRow, ContactContainer, ContactWrapper, ContactText1, ColumnWrapper, ColumnText2,
        ContactForm, ContactInput, ContactButton, ContactError } from './ContactEle'

const {REACT_APP_SERVICE_ID,REACT_APP_TEMPLATE_ID,REACT_APP_USER_ID} = process.env;

const Contact = ({currSection, active, visited}) => {

    const form = useRef();
    const [error, setError] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        
        if(form.current.name.value.length === 0 || form.current.email.value.length === 0 || form.current.message.value.length === 0  ){
            setError(true);
        }else{
            
        emailjs.sendForm(`${REACT_APP_SERVICE_ID}`, `${REACT_APP_TEMPLATE_ID}`, form.current, `${REACT_APP_USER_ID}`)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setError(false);
        form.current.reset();
        }


        
    }

    useEffect(()=>{
        if(currSection != active){
            setError(false);
            form.current.reset();
        }
    }, [currSection])

  return (
    <>
        <ContactContainer currSection={currSection} active={active}>
            <ContactWrapper>
                <ContactRow>
                    <Column1>
                        <ColumnWrapper visited={visited} active={active}>
                            <ContactText1>
                                Contact Me
                            </ContactText1>
                            <ColumnText2>
                                If you want to talk about development, have some job opportunities or just to say Hi
                            </ColumnText2>

                            <ContactError error={error}>
                                Please fill all the details. Thanks!
                            </ContactError>
                        </ColumnWrapper>
                    </Column1>
                    <Column2>
                        <ContactForm ref={form} autoComplete='off' onSubmit={sendEmail}  visited={visited} active={active}>
                            <ContactInput placeholder='Name' type='text' name='name'/ >
                            <ContactInput placeholder='Email' type='email' name='email'/>
                            <ContactInput placeholder='Message' type='text' name='message'/>
                            
                            <ContactButton>
                                <div className='border t'></div>
                                <div className='but'>
                                    <div className='text'>Submit</div>
                                    <div className='slide'></div>
                                    {/* <div className='dot'></div> */}
                                </div>
                                <div className='border b'></div>
                            </ContactButton>
                        </ContactForm>
                    </Column2>
                </ContactRow>
            </ContactWrapper>
        </ContactContainer>
    </>
  )
}

export default Contact