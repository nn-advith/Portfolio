import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Column1, Column2,ContactRow, ContactContainer, ContactWrapper, ContactText1, ColumnWrapper, ColumnText2,
        ContactForm, ContactInput, ContactButton } from './ContactEle'

const {REACT_APP_SERVICE_ID,REACT_APP_TEMPLATE_ID,REACT_APP_USER_ID} = process.env;

const Contact = ({currSection, active}) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        

        emailjs.sendForm(`${REACT_APP_SERVICE_ID}`, `${REACT_APP_TEMPLATE_ID}`, form.current, `${REACT_APP_USER_ID}`)
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          form.current.reset();
    }

  return (
    <>
        <ContactContainer currSection={currSection} active={active}>
            <ContactWrapper>
                <ContactRow>
                    <Column1>
                        <ColumnWrapper>
                            <ContactText1>
                                Contact Me
                            </ContactText1>
                            <ColumnText2>
                                If you want to talk about development, have some job opportunities or just to say hi
                            </ColumnText2>
                        </ColumnWrapper>
                    </Column1>
                    <Column2>
                        <ContactForm ref={form} autoComplete='off' onSubmit={sendEmail}>
                            <ContactInput placeholder='Name' type='text' name='name'/>
                            <ContactInput placeholder='Email' type='email' name='email'/>
                            <ContactInput placeholder='Message' type='text' name='message'/>
                            
                            <ContactButton>Submit</ContactButton>
                        </ContactForm>
                    </Column2>
                </ContactRow>
            </ContactWrapper>
        </ContactContainer>
    </>
  )
}

export default Contact