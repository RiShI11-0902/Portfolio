import React from 'react'
import { motion } from "framer-motion"
const Skills = () => {
    return (
        <>
            <div id='skills' className='mt-32 md:mt-60 '>
                <p className='text-2xl text-center font-extrabold'>Skills</p>
                <div className='md:grid md:grid-cols-3 md:p-10'>
                    <div className='p-5 '>
                        <h1 className='font-extrabold'>HTML</h1>
                        <div className='progressbar-container flex flex-row space-x-5 items-center'>

                            <div className="progressbar w-60 h-5 flex flex-row justify-start items-stretch rounded-full bg-white shadow shadow-blue-500 overflow-hidden">
                                <motion.div initial={{ width: "0%" }} whileInView={{
                                    width: "95%"
                                }}
                                    transition={{
                                        duration: 2
                                    }} className='bar w-0 bg-gradient-to-r from-cyan-500 to-blue-500' />
                            </div>
                            <div className="percentage flex flex-row space-x-1 items-center text-lg font-semibold">
                                <p>95</p>
                                <p>%</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-5'>
                        <h1 className='font-extrabold'>CSS</h1>
                        <div className='progressbar-container flex flex-row space-x-5 items-center'>

                            <div className="progressbar w-60 h-5 flex flex-row justify-start items-stretch rounded-full bg-white shadow shadow-blue-500 overflow-hidden">
                                <motion.div initial={{ width: "0%" }} whileInView={{
                                    width: "95%"
                                }}
                                    transition={{
                                        duration: 2
                                    }} className='bar w-0 bg-gradient-to-r from-cyan-500 to-blue-500' />
                            </div>
                            <div className="percentage flex flex-row space-x-1 items-center text-lg font-semibold">
                                <p>95</p>
                                <p>%</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-5'>
                        <h1 className='font-extrabold'>TAILWIND CSS</h1>
                        <div className='progressbar-container flex flex-row space-x-5 items-center'>

                            <div className="progressbar w-60 h-5 flex flex-row justify-start items-stretch rounded-full bg-white shadow shadow-blue-500 overflow-hidden">
                                <motion.div initial={{ width: "0%" }} whileInView={{
                                    width: "95%"
                                }}
                                    transition={{
                                        duration: 2
                                    }} className='bar w-0 bg-gradient-to-r from-cyan-500 to-blue-500' />
                            </div>
                            <div className="percentage flex flex-row space-x-1 items-center text-lg font-semibold">
                                <p>95</p>
                                <p>%</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-5 col-start-1 col-end-2'>
                        <h1 className='font-extrabold'>JAVASCRIPT</h1>
                        <div className='progressbar-container flex flex-row space-x-5 items-center'>

                            <div className="progressbar w-60 h-5 flex flex-row justify-start items-stretch rounded-full bg-white shadow shadow-blue-500 overflow-hidden">
                                <motion.div initial={{ width: "0%" }} whileInView={{
                                    width: "85%"
                                }}
                                    transition={{
                                        duration: 2
                                    }} className='bar w-0 bg-gradient-to-r from-cyan-500 to-blue-500' />
                            </div>
                            <div className="percentage flex flex-row space-x-1 items-center text-lg font-semibold">
                                <p>85</p>
                                <p>%</p>
                            </div>
                        </div>
                    </div>
                    <div className='p-5   col-start-3'>
                        <h1 className='font-extrabold'>REACT JS</h1>
                        <div className='progressbar-container flex flex-row space-x-5 items-center'>
                            <div className="progressbar w-60 h-5 flex flex-row justify-start items-stretch rounded-full bg-white shadow shadow-blue-500 overflow-hidden">
                                <motion.div initial={{ width: 0 }} whileInView={{
                                    width: "80%"
                                }}
                                    transition={{
                                        duration: 2
                                    }} className='bar w-0 bg-gradient-to-r from-cyan-500 to-blue-500' />
                            </div>
                            <div className="percentage flex flex-row space-x-1 items-center text-lg font-semibold">
                                <p>80</p>
                                <p>%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills