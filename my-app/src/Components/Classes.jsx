import { Link } from 'react-router-dom'
import Contact from "../components/Contact";
import { motion } from 'framer-motion';




const classes = () => {
    return (
       <div>
        <motion.div 
        initial={{y: -80, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8}}
        viewport={{once : true}}
        className='h-[50vh] flex justify-center items-center flex-col text-center py-8'>
          <h1 className='font-semibold lg:text-8xl text-4xl'>C<span className='text-[#97BE5A]'>oo</span>king  Classes</h1>
          <p>Booking  online classes for Moroccan food  offers a flavorful journey from your kitchen</p>
        </motion.div>
        <div className='flex flex-col lg:flex-row lg:justify-center lg:items-start gap-8'>
        <div
  class="bg-white mr-2 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
>
  <div class="p-[60px] lg:px-20 px-2 text-center">
    <h2 class="text-3xl font-bold text-gray-800 mb-4">Classes Schedule</h2>
    <p class="text-gray-600 mb-6">Moroccan food Basics</p>
    <ul class="text-sm text-gray-600 mb-6">
      <li class="mb-2 flex items-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          class="w-4 h-4 mr-2 text-green-500"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
        Online
      </li>
      <li class="mb-2 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          class="w-4 h-4 mr-2 text-green-500"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
        Simple Price
      </li>
      <li class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          class="w-4 h-4 mr-2 text-green-500"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
        5 hours in week
      </li>
    </ul>
  </div>
  <div class="p-4 text-center">
   <Link
                onClick={() => window.location.assign("/")}
   
      class="bg-[#97BE5A] text-white rounded-full px-8 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800"
    >
      Select Plan
    </Link>
  </div>
</div>
<div
  class="bg-white rounded-lg lg:ml-8 overflow-hidden shadow-lg transition-transform transform hover:scale-105"
>
  <div class="p-[60px] lg:px-20 px-2 text-center">
    <h2 class="text-3xl font-bold text-gray-800 mb-4">Host a private chef</h2>
    <p class="text-gray-600 mb-6">Host a Private Classes</p>
    <ul class="text-sm text-gray-600 mb-6">
      <li class="mb-2 flex items-center text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          class="w-4 h-4 mr-2 text-green-500"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
        in Your Home
      </li>
      <li class="mb-2 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          class="w-4 h-4 mr-2 text-green-500"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
        one Dishe
      </li>
      <li class="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          class="w-4 h-4 mr-2 text-green-500"
        >
          <path
            d="M5 13l4 4L19 7"
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
          ></path>
        </svg>
        Support 
      </li>
    </ul>
  </div>
  <div class="p-4 text-center">
  <Link
                onClick={() => window.location.assign("private")}
      class=" bg-[#97BE5A] text-white rounded-full px-8 py-2 hover:bg-green-700 focus:outline-none focus:shadow-outline-green active:bg-green-800"
    >
      Select Plan
    </Link>
  </div>
</div>
          </div>
        <Contact />
        </div>
    )
}

export default classes