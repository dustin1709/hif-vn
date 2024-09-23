import React from "react";
import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import picture from './images/port.jpg';

function Contact() {
    const form = useRef();
    const uname = useRef();
    const uemail = useRef();
    const umsg = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm(
            "service_5ojwmpp",
            "template_ymmgqcd",
            form.current,
            "NevPtted5-duU2EcX"
        )
        .then(
            (result) => {
                console.log(result.text);
                console.log("message sent");
                alert("email sent");
                uname.current.value = "";
                uemail.current.value = "";
                umsg.current.value = "";
            },
            (error) => {
                console.log(error.text);
            }
        );
    };

    return (
        <div id='contact' className="pt-5">
            <div className="p-5">
                <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>
                Contact Us
                </h2>
                <div className='md:flex justify-between items-center'>
                <div className='w-full md:w-2/5 h-[300px] sm:h-[450px] cdesk'>
                    <figure>
                    <img className='h-[300px] sm:h-[450px]' src={picture} />
                    </figure>
                </div>

                <div className='w-full mt-8 md:mt-0 md:w-3/5 sm:h-[450px] lg:flex items-center bg-gray-200 px-4
                lg:px-8 py-8'>
                    <form ref={form} onSubmit={sendEmail} className='w-full'>
                    <div className="mb-5">
                        <input type='text' ref={uname} name="user_name" placeholder='Title' className='w-full p-3 focus:outline-none rounded-[1px] text-[26px]' />
                    </div>
                    <div className="mb-5">
                        <input type='text' ref={uemail} name="user_email" placeholder='Email address' className='w-full p-3 focus:outline-none rounded-[1px] text-[26px]' />
                    </div>
                    <div className="mb-5">
                        <textarea 
                        ref={umsg} 
                        name="message"
                        type='text' 
                        rows={3} 
                        placeholder='write something here...' 
                        className='w-full p-3 focus:outline-none rounded-[1px] text-[26px]' />
                    </div>

                    <button 
                    type='submit' 
                    value="Send" 
                    className='w-full p-5 focus:outline-none rounded-[1px] bg-blue-900 text-white 
                    hover:bg-blue-500 text-center ease-linear duration-150 text-[26px]'>
                        Submit
                    </button>
                    </form>
                </div>
                </div>
            </div>
            <div className="pl-5 pt-2 pb-8">
                <h1 className="text-xl font-bold">Contact emails</h1>
                <p className="pl-8 pr-8 pt-5">
                    For requesting purchase of goods and services: <a className="text-blue-900 hover:underline" href="mailto:business@qem-global.com">business@qem-global.com</a>
                    <br />
                    <i className="text-sm">PSA: For commodities purchase, we do NOT reccommend you contacting us. We have agencies across Vietnam, as our commitment with B2B, we will not answer email if the quantity request is less than 1 FCL.</i>
                </p>
                <p className="pl-8 pr-8 pt-5 pb-8">
                    Careers and jobs: <a className="text-blue-900 hover:underline" href="mailto:jobs@qem-global.com">jobs@qem-global.com</a>
                </p>
            </div>
        </div>
    )
}

export default Contact
