import React, { useEffect } from 'react'
// import {} from "./assets"
import { Img } from '../assets'
import {easeInOut, motion} from "framer-motion"
const Header = () => {
   
    return (
        <>
            <div id='home' className="relative left-0 md:left-10 w-fit top-20 flex flex-col md:block md:flex-row">
                <div id="profile-img"
                    className="my-image  relative before:bg-gradient-to-r from-cyan-500 to-blue-500 before:p-36 before:absolute before:top-5 before:left-10 before:rounded-full md:before:left-[29rem] md:before:top-9 md:before:p-40">
                    <motion.div initial={{ opacity: 0 }} animate={{opacity:1}} transition={{ ease: "easeOut", duration: 3 }} className="w-fit">
                        <img className=" w-[70%] ml-36 mt-3 rounded-full md:w-[50%] relative right-24 md:right-0 md:ml-[25rem] md:mt-9"
                            src={Img} alt="" />
                    </motion.div>
                </div>

                <div className=" ml-10 mt-10 md:-mt-96">
                    <motion.div initial={{scale:0}} transition={{type:"spring", ease:"easeInOut"}} animate={{type:"spring", scale:1}} className="">
                        <span className="text-lg font-bold md:text-3xl"> HI, <br /> </span> <span
                            className="text-3xl font-extrabold text-blue-400 md:text-7xl">
                            I'm <div className="anim mt-2"> RISHI </div></span>
                    </motion.div>
                    <motion.p initial={{opacity:0}} transition={{ease:"easeIn", duration: 2}} animate={{opacity:1}} id="colourchng" className="text-2xl mt-6 font-semibold md:text-2xl lg:text-3xl">FRONT END DEVELOPER </motion.p>
                    
                </div>
                <div className="right ml-10 w-72 md:-ml-0 md:absolute md:-right-80  md:top-8  md:w-80  p-1">
                    <motion.div initial={{y:-100}} transition={{ease:"easeIn", duration: 2}} animate={{y:30}} className='bio text-xl font-semibold italic md:text-2xl first-letter:font-bold'>
                        " I am a passionate React JS developer with a keen eye for crafting exceptional user experiences ".
                    </motion.div>
                    <a href="resume.pdf" download> <button class="relative mt-20 mx-auto inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-blue-200 to-purple-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-blue-200 font-semibold dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            DOWNLOAD RESUME
                        </span>
                    </button> </a>
                    
                </div>
            </div>
        </>
    )
}

export default Header