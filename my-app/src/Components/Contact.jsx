import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Popup from "../Components/Popuup/Popup"

function ContactUs() {
const [buttonPopup, setButtonPopup] = useState(false)

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qo8wrbn', 'template_5cfpgeq', form.current, {
        publicKey: 'qiV30UuQyq6fzaS3Q',
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
    
        <section className="bg-white dark:bg-gray-900 flex justify-center py-8 lg:py-16 px-4">
        <div className="max-w-screen-md w-full mx-auto ">
          <motion.h2 
            initial={{y: -80, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.8}}
            viewport={{once : 1}}
            className="mb-4 text-3xl sm:text-4xl  text-center text-gray-900 dark:text-white mt-8">
            Contact Us
          </motion.h2>
          <motion.p 
            initial={{y: -80, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.9}}
            viewport={{once: true}}
            className="mb-8 text-center text-gray-500 dark:text-gray-400 text-base sm:text-xl">
            For food-related inquiries, please reach out to us with your questions or feedback. Whether it's about menu options, dietary preferences, or catering services, we're here to help!
          </motion.p>
          <form ref={form} onSubmit={sendEmail} className="space-y-8">
            <motion.div
              initial={{y: -90, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 1}}>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input 
                type="email" 
                id="email" 
                name='user_email' 
                className="shadow-sm outline-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                placeholder="name@flowbite.com" 
                required 
              />
            </motion.div>
            <Popup tigger={buttonPopup}>
            <div
  role="alert"
  class="mx-auto max-w-lg rounded-lg border border-stone bg-stone-100 p-4 shadow-lg sm:p-6 lg:p-8"
>
  <div class="flex items-center gap-4">

    <p class="font-medium sm:text-4xl text-[#97BE5A]">Sent successfully</p>
  </div>

  <p class="mt-4 text-gray-600 text-2xl ">
  Your request will be reviewed and answered as soon as possible !
  </p>
  <div class="mt-6 sm:flex sm:gap-4">
   
  </div>
  <a
      onClick={() => window.location.assign("/")}
      class="inline-block cursor-pointer  bg-[#97BE5A] w-full font-semibold rounded-lg  px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
    >
     Go Home
    </a>
    <a
      onClick={() => setButtonPopup(false)}
      
      class="inline-block lg:ml-2 mt-4 w-full bg-[#97BE5A]  cursor-pointer font-semibold rounded-lg  px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
    >
     Close
    </a>
</div>


            </Popup> 
            <motion.div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name='user_name' 
                className="block outline-none p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" 
                placeholder="Let us know how we can help you" 
                required 
              />
            </motion.div>    
            <motion.div
       
        >
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
        <textarea 
          id="message" 
          name="message" 
          className="block outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" 
          placeholder="Leave a comment..." 
        />
      </motion.div>
      <motion.button
      onClick={() => setButtonPopup(true)}
        type="submit"
        value="Send"
        class="w-[100px] bg-black h-[40px] my-3 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#97BE5A] before:to-[#97BE5A] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] hover:text-black "
      >
        Send
      </motion.button>
      
            </form>
            </div>
        </section>
    )
  }
  
  export default ContactUs