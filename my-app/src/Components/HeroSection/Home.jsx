import "./Home.css"
import Shape from "../HeroSection/wave.svg"
import hero from "../HeroSection/hero.jpg"
import { motion } from "framer-motion";
import img1 from "../HeroSection/R1.jpg";
import R2 from "../HeroSection/R2.jpeg";
import ocharfao from "../HeroSection/ocharfao.jpg";

export const Concept = () => {
  return (
  <div >
    <div className="mt-12">
    <p className="text-6xl  lg:text-7xl font-semibold text-center ">Cook With
    <span className=" font-bold lg:text-black text-[#97Be5a]"> Lahcen : </span>
    <p className="text-4xl lg:text-6xl font-bold text-[#6D6A6A] mb-8">Private Moroccan Food Chef <br /> in North carolina</p>

    </p>
    <div className="flex flex-col justify-center items-center mt-12">
    <button
      onClick={() => window.location.assign("/classes")}
        type="submit"
        value="Send" 
        class="w-[180px] lg:mt-14   bg-black font-semibold h-[40px] my-3 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#97BE5A] before:to-[#97BE5A] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] hover:text-black "
      >
        Booking Classes
      </button>
      <button
      onClick={() => window.location.assign("event")}
        type="submit"
        value="Send"
        class="w-[180px] mb-8 lg:mb-0 font-semibold bg-black h-[40px] my-3 rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#97BE5A] before:to-[#97BE5A] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff] hover:text-black "
      >
       Booking Event
      </button>
    </div>
    </div>
    <div className="h-[43vh]">
      <img src={Shape} className="lg:h-[400px] h-[0px]" />
    </div>
    <div className=' flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 h-[50vh]'>
        <img src={hero}
        width={350}
        height={100}
        className=
        'rounded-[20px]  '
        />
        
        <p className='my-5 max-w-xl py-10 lg:ml-[60px]'><span className='font-semibold text-3xl'>Why chose Me</span><br/>
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
      <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5 mt-[100px]">
      <h1 className=" text-4xl  text-center lg:pt-16 pt-24 pb-10">
        Customer's Review
      </h1>
      <div className="lg:flex lg:justify-around lg:items-center">
      <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div >
        <p className=" text-lightText">
        Eating Moroccan food is an immersive experience that engages all your senses. The rich aromas of spices like cumin and saffron tantalize your nose before the first bite. The complex flavors of dishes such as tagine or zaaloug unfold on your palate, combining savory, sweet, and tangy notes. Each bite reveals the care and tradition embedded in the cooking methods, like slow braising and spice blending. The communal style of dining, often with shared platters, creates a warm and inviting atmosphere that enhances the enjoyment of the meal.
        </p>
      </div>

      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        <img className="rounded-full" src={ocharfao} alt="img" 
        width={50}
        />
        <h3 className=" font-semibold ">Othmane charfaoui</h3>
      </div>
    </div>
    <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:ml-2 mt-4">
      <div>
        <p className=" text-lightText">
        Fire for some Authentic Moroccan Food . Deleciouse
        </p>
      </div>

      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        <img className=" rounded-full" src={img1} alt="img"
        width={50}
        />
        <h3 className=" font-semibold ">patrick casale</h3>
      </div>
    </div>
     <div className=" w-full md:w-1/3 bg-white border-2 border-lightText md:border-none p-5 rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] lg:ml-2 mt-4">
      <div>
        <p className=" text-lightText">
        Eating Moroccan food is a sensory journey with rich aromas and vibrant flavors. The complex blend of spices and textures creates a memorable taste experience. Sharing these dishes in a communal setting enhances the enjoyment and connection.
        </p>
      </div>

      <div className=" flex flex-row justify-center items-center mt-4 gap-4">
        <img className=" rounded-full" src={R2} alt="img"
        width={50}
        />
        <h3 className=" font-semibold ">Ait ighess lhoucine</h3>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Concept;