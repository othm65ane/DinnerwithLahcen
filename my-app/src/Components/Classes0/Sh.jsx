// import project1 from "../assets/hero0.jpeg"
import { motion } from "framer-motion";
const sh = () => {
     const PROJECTS = [
        {
          title: "Photo Editor",
        //   image: project1,
          description:
            "A fully functional Editor website , to adjust and contrast the pictures , with filter , Make your pic.",
          technologies: ["16 September"],
        },
        {
          title: "Food Website",
        //   image: project1,
          description:
            "An application for Order the Food, with features such as task creation, assignment, and progress tracking.",
          technologies: ["16 September"],
        },
        {
          title: "Portfolio Website",
        //   image: project1,
          description:
            "A personal portfolio website showcasing projects, skills, and contact information.",
          technologies: ["16 September"],
        },
        {
          title: "Company website",
        //   image: project1,
          description:
            "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
          technologies: ["16 September"],
        },
        {
          title: "E-Commerce Website",
        //   image: project1,
          description:
            "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
          technologies: ["16 September"],
        },
      ];
      
  return (
           <div className=" pb-4 ">
            <div className='h-[40vh] flex justify-center items-center flex-col text-center py-8'>
          <h1 className='font-semibold lg:text-4xl text-2xl mb-12'>Classes not Available Now <br />
            <h1>Soon ... </h1>
          </h1>
        </div>
            {/* <div>{PROJECTS.map((projects , index) => (
    <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
        <motion.div 
        initial={{opacity : 0 , x : -100}}
        whileInView={{opacity : 1 , x : 0}}
        transition={{duration : 0.7}}
        viewport={{once : true}}
    
        className='w-full lg:w-1/4'>
        <img 
        alt={projects.title}
        height={200}
        width={250}
        className='mb-6 rounded'
        />
        </motion.div>
        <motion.div
        initial={{opacity : 0 , x : 100}}
        whileInView={{opacity : 1 , x : 0}}
        transition={{duration : 0.7}}
        viewport={{once : true}}
        className='w-full max-w-xl lg:3/4'>
            <h6 className='mb-2 text-2xl'>{projects.title}</h6>
            <h6 className='mb-4 text-neutral-400 '>{projects.description}</h6>
            {projects.technologies.map((tech,index)=> (
                <span key={index} className='mr-2 rounded bg-[#97BE5A] px-2 py-1 text-sm font-medium '>
                    {tech}
                </span>
            ))}
        </motion.div>
    </div>
    
    
            ))}
            </div> */}
           </div>
  );
};

export default sh;