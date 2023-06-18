import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi"
import { GrClose } from "react-icons/gr"
import { easeInOut, motion } from "framer-motion"

const Navbar = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <>
            <div className="navbar  top-0 flex items-center left-10 space-x-10 md:space-x-40 w-fit fixed z-10 justify-evenly my-8 bg-black ">
                <div className="left">
                    <div className="logo bg-black w-36 text-2xl font-extrabold md:text-5xl text-purple-950">
                        RISHI.
                    </div>
                </div>
                <div>
                    <ul className="sm:flex bg-black space-x-5 cursor-pointer font-bold hidden md:space-x-10 md:flex md:flex-row ">
                        <a href="#home"><li  >HOME</li></a>
                        <a href="#skills"> <li  >SKILLS</li></a>
                        <a href="#project"> <li  >PROJECTS</li></a>
                        <a href="#certification"> <li  >CERTIFICATION'S</li></a>
                        <a href="#about"> <li  >ABOUT</li></a>
                        <a href="#contact"><li >CONTACT</li></a>
                    </ul>
                </div>
                <div className="right-mobile  sm:block md:hidden xl:hidden 2xl:hidden ">
                    <div className="nav-items my-4">
                        {
                            toggle ? (
                                ""
                            ) :
                                <motion.div initial={{ y: -200 }} transition={{ ease: "backOut" }} animate={{ y: 0 }} className=" absolute bg-blue-100 w-full top-14 left-0 ">
                                    <div className="nav-items my-4">
                                        <ul className="flex flex-col space-y-5 items-center font-bold">
                                            <a href="#home"><li  >HOME</li></a>
                                            <a href="#skills"> <li  >SKILLS</li></a>
                                            <a href="#project"> <li  >PROJECTS</li></a>
                                            <a href="#certification"> <li  >CERTIFICATION'S</li></a>
                                            <a href="#about"> <li  >ABOUT</li></a>
                                            <a href="#contact"><li >CONTACT</li></a>
                                        </ul>
                                    </div>
                                </motion.div>
                        }
                    </div>
                </div>

                <div className="md:hidden">
                    {
                        toggle ? <GiHamburgerMenu onClick={() => setToggle(false)} /> : <GrClose onClick={() => setToggle(true)} />
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar