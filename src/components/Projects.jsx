import React, { useState } from 'react'
import { p2, p3, p4, p5, p6, r1, r2, r3, r4, r5, r6 } from '../assets'
import {easeInOut, motion} from "framer-motion"

const Projects = () => {
    const [project, setProject] = useState(false)
    return (
        <>
            <p id='project' className='text-2xl text-center mt-10 font-extrabold'>PROJECTS</p>
            <div className='w-fit mx-auto mt-5 space-x-5'>
                <button onClick={()=>setProject(false)} type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-indigo-100 border border-transparent font-semibold text-indigo-500 hover:text-white hover:bg-indigo-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-indigo-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    REACT JS
                </button>
                <button  onClick={()=>setProject(true)} type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md bg-purple-100 border border-transparent font-semibold text-purple-500 hover:text-white hover:bg-purple-100 focus:outline-none focus:ring-2 ring-offset-white focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
                    HTML | CSS | JS
                </button>
            </div>
            {
                project ? <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2.5, ease:"easeOut"}} class="p-10 flex md:grid md:p-20 md:gap-y-10 md:grid-cols-3 md:space-x-0 md:w-fit md:gap-5  w-full justify-between overflow-x-auto space-x-9 snap-mandatory">
                    <div className="project1 snap-start">
                        <img src={p2} alt="" />
                        <p className='text-center font-bold text-xl'> HIT THE GREEN</p>
                        <p class="md:text-3xl lg:text-lg text-center w-64 md:w-fit">Click on the green boxes to score points under 1 minutes.
                            A very fun and interactive game for all devices.<br /> LANGUAGES USED: <span
                                class="font-semibold">HTML,CSS, JAVASCRIPT.</span>
                        </p>
                        <div class="link flex items-center w-fit mx-auto space-x-2">
                            <a class="mx-auto text-blue-700 md:text-lg underline"
                                href="http://hit-the-green.netlify.app">LINK</a>
                        </div>
                    </div>
                    <div className="project1 snap-start row-span-2">
                        <img src={p3} alt="" />
                        <p className='text-center font-bold text-xl'>ADVICE GENERATOR</p>
                        <p class="md:text-3xl lg:text-lg text-center w-64 md:w-fit">This website generates Random Advice on clicking the Dice. This Website
                            Uses a API for
                            generating
                            the advices and also responsive.<br /> LANGUAGES USED: <span
                                class="font-semibold">HTML,Tailwind CSS, JAVASCRIPT.</span>
                        </p>
                        <div class="link flex items-center w-fit mx-auto space-x-2">
                            <a class="mx-auto text-blue-700 md:text-lg underline"
                                href="http://adviceapp-code-college.netlify.app">LINK</a>
                        </div>
                    </div>
                    <div className="project1 snap-start">
                        <img src={p6} alt="" />
                        <p className='text-center font-bold text-xl'> Sneaker E-commerce</p>
                        <p class="md:text-3xl lg:text-lg text-center w-64 md:w-fit">This is a Landing page for E-commerce website of shoes. You can add or subtract no. shoes to you cart and it will give you the total amount of purchase.You can also delete the items in the cart.
                            <br /> LANGUAGES USED: <span
                                class="font-semibold">HTML,Tailwind CSS, JAVASCRIPT.</span>
                        </p>
                        <div class="link flex items-center w-fit mx-auto space-x-2">
                            <a class="mx-auto text-blue-700 md:text-lg underline"
                                href="https://sneaker-commerce.netlify.app/">LINK</a>
                        </div>
                    </div><div className="project1 snap-start">
                        <img src={p4} alt="" />
                        <p className='text-center font-bold text-xl'> LAMBHORHINI CAR DESIGN</p>
                        <p class="md:text-3xl lg:text-lg text-center w-64 md:w-fit">A fully responsive lambhorghini car design.<br /> LANGUAGES USED: <span
                            class="font-semibold">HTML,Tailwind CSS, Jquery.</span>
                        </p>
                        <div class="link flex items-center w-fit mx-auto space-x-2">
                            <a class="mx-auto text-blue-700 md:text-lg underline"
                                href="https://lambo-cars.netlify.app">LINK</a>
                        </div>
                    </div><div className="project1 snap-start col-start-3">
                        <img src={p5} alt="" />
                        <p className='text-center font-bold text-xl'>Guess me</p>
                        <p class="md:text-3xl lg:text-lg text-center w-64 md:w-fit">In this game you have to guess a number between 0 to 100 in 10 attempts.
                            <br /> LANGUAGES USED: <span
                                class="font-semibold">HTML, TAILWIND CSS and JAVASCRIPT.</span>
                        </p>
                        <div class="link flex items-center w-fit mx-auto space-x-2">
                            <a class="mx-auto text-blue-700 md:text-lg underline"
                                href="https://guess-me-codecollege.netlify.app/">LINK</a>
                        </div>
                    </div>


                </motion.div> : <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:2.5}}  class="p-10 flex md:grid md:p-20 md:gap-y-10 md:grid-cols-3 md:space-x-0 md:w-fit md:gap-5  w-full justify-between overflow-x-auto space-x-9 snap-mandatory">
                    <div className="project1 snap-start">
                        <img src={r1} alt="" />
                        <p className='text-center font-bold text-xl'> CRYTO APP</p>
                        <p class="md:text-3xl lg:text-lg text-center w-64 md:w-fit">This Web app gives the market data of top 250 crypto coins.<br /> LANGUAGES USED: <span
                                class="font-semibold">REACT JS, REDUX TOOLKIT, TAILWIND CSS.</span>
                        </p>
                        <div class="link flex items-center w-fit mx-auto space-x-2">
                            <a class="mx-auto text-blue-700 md:text-lg underline"
                                href="https://mycoin-codecollege.netlify.app/">LINK</a>
                        </div>
                    </div>
                    <div className="project1 snap-start">
                        <img src={r2} alt="" />
                        <p className='text-center font-bold text-xl'>GET FIIT</p>
                        <p class="md:text-3xl lg:text-lg text-center w-64 md:w-fit">This web app gives all the Excersises related to each body part.<br /> LANGUAGES USED: <span
                                class="font-semibold">REACT JS, TAILWIND CSS, Excersises api.</span>
                        </p>
                        <div class="link flex items-center w-fit mx-auto space-x-2">
                            <a class="mx-auto text-blue-700 md:text-lg underline"
                                href="https://get-fit-codecollege.netlify.app">LINK</a>
                        </div>
                    </div>
                    <div className="project1 snap-start">
                        <img src={r3} alt="" />
                        <p className='text-center font-bold text-xl'>E-commerce</p>
                        <p class="md:text-3xl lg:text-lg text-center w-64 md:w-fit">This is a E-commerce page for different products for men,women and more. You can add them to cart or delete them. 
                            <br /> LANGUAGES USED: <span
                                class="font-semibold">REACT JS, REDUX TOOLKIT, TAILWIND CSS, Api from rapidapi.</span>
                        </p>
                        <div class="link flex items-center w-fit mx-auto space-x-2">
                            <a class="mx-auto text-blue-700 md:text-lg underline"
                                href="https://hexashop-code-college.netlify.app">LINK</a>
                        </div>
                    </div><div className="project1 snap-start">
                        <img src={r4} alt="" />
                        <p className='text-center font-bold text-xl'> PAYEMENT LANDING PAGE</p>
                        <p class="md:text-3xl lg:text-lg text-center w-64 md:w-fit">A fully responsive Landing page for payment website.<br /> LANGUAGES USED: <span
                            class="font-semibold">REACT JS, TAILWIND CSS.</span>
                        </p>
                        <div class="link flex items-center w-fit mx-auto space-x-2">
                            <a class="mx-auto text-blue-700 md:text-lg underline"
                                href="https://hoobank-codecollege.netlify.app">LINK</a>
                        </div>
                    </div><div className="project1 snap-start ">
                        <img src={r5} alt="" />
                        <p className='text-center font-bold text-xl'>DASHBOARD</p>
                        <p class="md:text-3xl lg:text-lg text-center w-64 md:w-fit">This is a Social media dashboard with dark light theme toggle.
                            <br /> LANGUAGES USED: <span
                                class="font-semibold">REACT JS, TAILWIND CSS.</span>
                        </p>
                        <div class="link flex items-center w-fit mx-auto space-x-2">
                            <a class="mx-auto text-blue-700 md:text-lg underline"
                                href="https://dashboard-codecollege.netlify.app">LINK</a>
                        </div>
                    </div>
                    <div className="project1 snap-start">
                        <img src={r6} alt="" />
                        <p className='text-center font-bold text-xl'>TO DO APP</p>
                        <p class="md:text-3xl lg:text-lg text-center w-64 md:w-fit">A To do app with search functionality
                            <br /> LANGUAGES USED: <span
                                class="font-semibold">REACT JS, TAILWIND CSS.</span>
                        </p>
                        <div class="link flex items-center w-fit mx-auto space-x-2">
                            <a class="mx-auto text-blue-700 md:text-lg underline"
                                href="https://notes-app-by-codecollege.netlify.app">LINK</a>
                        </div>
                    </div>


                </motion.div> 
            }


        </>
    )
}

export default Projects