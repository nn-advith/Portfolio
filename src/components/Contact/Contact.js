import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Column1, Column2,ContactRow, ContactContainer, ContactWrapper, ContactText1, ColumnWrapper, ColumnText2,
        ContactForm, ContactInput, ContactText, ContactButton } from './ContactEle'

const Contact = ({currSection, active}) => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_eanb30l', 'template_7j9b4dx', form.current, 'user_gIfNSPV6hAfO1cf1hq4N6')
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