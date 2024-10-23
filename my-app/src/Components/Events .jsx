import React from "react";
import { motion } from "framer-motion";
import Contact from "../components/Contact";



const Review = () => {
  return (
    <>
    <motion.div 
    initial={{y: -80, opacity: 0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration: 0.8}}
    viewport={{once : true}}
    className='h-[50vh] flex justify-center items-center flex-col text-center py-8'>
          <h1 className='font-semibold lg:text-8xl text-4xl'>B<span className='text-[#97BE5A]'>oo</span>king  a Event</h1>
          <p>Booking a personal chef for your event is a delicious way to impress your guests</p>
        </motion.div>
        <Contact />
        </>
  );
};

export default Review;