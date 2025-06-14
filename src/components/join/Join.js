import React, { useRef } from 'react'
import "./join.css"
import emailjs from '@emailjs/browser';
export default function  () {
    const form=useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm('ankitkkumar449@gmailcom', 'template_uzosueq', form.current, {
            publicKey: 'sDTKLJwSJnaRNctCi',
            })
            .then(
            () => {
                console.log('SUCCESS!');
            },
            (error) => {
                console.log('FAILED...', error.text);
            },
            );
            };
  return (
    <div className="join" id='join'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO </span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY </span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} className='email' onSubmit={sendEmail}>
                <input type="email" name='user_email'placeholder='Enter your Email address' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}
