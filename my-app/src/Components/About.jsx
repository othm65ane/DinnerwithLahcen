import React from "react";
import { motion } from "framer-motion";
import Lahcen0 from "../assets/Lahcen0.jpg"
import about from "../assets/picFood/about.jpg"
import about1 from "../assets/picFood/about1.jpeg"
import about2 from "../assets/picFood/about2.jpeg"



const About = () => {
  return (
    <>
    <div className='mt-[100px]'>
      <h1 className="font-blod text-4xl mb-[100px] text-center">About Me</h1>
      <div className=' flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 '>
        <img src={Lahcen0}
        width={350}
        height={100}
        className=
        'rounded-[20px]  '
        />
        
        <p className='my-5 max-w-xl py-10 lg:ml-[30px]'><span className='font-semibold text-3xl'>Lahcen Ait ighess</span><br/>
        As a <motion.span 
        className='border-solid border-b-2 border-black'
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
        >Personal chef </motion.span> specializing in the finest Moroccan cuisine, I bring a unique blend of culinary expertise and cultural richness to my clients'
        <br />
        As a Moroccan chef based in the North Carolina and the Regions area, <motion.span 
        className='bg-[#97BE5A]'
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
        >I draw inspiration from my upbringing in Morocco </motion.span> , where I learned the art of cooking from my mother. With a deep-rooted passion for Moroccan cuisine, I bring authentic flavors and traditions to every dish I create. From vibrant tagines to fragrant couscous, my culinary journey is a celebration of heritage and taste, enriching the dining experiences of clients seeking the finest Moroccan fare in the heart of The southern.</p>
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 lg:mt-[00px]'>
        <p className='my-5 max-w-xl py-10'><span className='font-semibold text-3xl'>Experience</span><br/>
        Crafted exquisite Moroccan cuisine with authentic spices and techniques, delivering unforgettable dining experiences tailored to clients' preferences. Expert in blending traditional flavors with modern presentation for a truly unique culinary journey.</p>
        <img src={about}
        width={450}
        className='rounded-[20px] lg:ml-[30px]'
        />
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 my-[250px]'>
      <img src={about2}
        width={500}
        className='rounded-[20px]'
        />
        <p className='my-5 max-w-xl py-10 lg:ml-[30px]'><span className='font-semibold text-3xl'>Cooking Classes</span><br/>
        Booking <motion.span 
        className= 'bg-[#97BE5A]'
        initial = {{opacity : 0}}
        whileInView={{opacity : 1}}
        transition={{duration : 0.9}}
        > online classes for Moroccan food </motion.span> offers a flavorful journey from your kitchen. Select a class that fits your schedule and covers the dishes you're interested in. Check for reviews and instructor credentials to ensure a quality experience. Confirm the class details and gather any required ingredients for a successful cooking session.
      </p>

        
      </div>
      <div className='flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 lg:mt-[300px] '>
        <p className='my-5 max-w-xl py-10'><span className='font-semibold text-3xl'>Booking Event</span><br/>
        Booking a personal chef for your event is a delicious way to impress your guests. Choose a chef who aligns with your menu preferences and dietary needs. Schedule a consultation to discuss details and customize the experience. Confirm the date, time, and any special requests to ensure a seamless culinary experience.</p>
        <img src={about1}
        width={500}
        className='rounded-[20px]'
        />
      </div>
      <div className="h-12"></div>
    </div>
    </>
  );
};

export default About;