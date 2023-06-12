import React from 'react'
import { i1, i2, i3, i4 } from '../assets'
import { AiFillGithub } from "react-icons/ai"
import { RiInstagramFill } from "react-icons/ri"
import { BsLinkedin } from "react-icons/bs"
import emailjs from "@emailjs/browser"
import { FiArrowUpRight } from "react-icons/fi"

const Contact = () => {
    const sendEmail = (e)=>{
        e.preventDefault()
        emailjs.sendForm("service_arcseer","template_4912g56",e.target,"-WtPtCOVb8wCiOdu9")
    }
    return (
        <>
            <p id='contact' className='text-2xl text-center mt-10 font-extrabold'>CONTACT ME</p>
            <div className="container p-5 md:flex-row md:flex md:items-center mx-auto w-fit md:space-x-40">
                <div className="left ">
                    <p className='text-xl font-medium'>CONNECT WITH ME ON</p>
                    <div className="list mt-5 flex space-x-5 flex-row">
                    <a href="https://www.instagram.com/_codecollege/"><RiInstagramFill className='text-2xl'/></a>
                    <a href="https://www.linkedin.com/in/rushikesh-bagade11"><BsLinkedin className='text-2xl'/></a>
                        <a href="https://github.com/RiShI11-0902"><AiFillGithub className='text-2xl' /> </a>

                    </div>
                    <p className='text-xl font-medium mt-5'>OR SEND ME A MESSAGE</p>
                    {/* <FiArrowUpRight className="mt-5 text-5xl mr-0  rotate-90 animate-ping"/> */}
                </div>
                {/* sm:w-1/4 md:w-3/4 lg:w-[10%] flex flex-col p-8 rounded-lg  md:ml-3 text-lg*/}
                <div className="right mt-5">
                    <div class="right ">
                        <form onSubmit={sendEmail} className='flex flex-col shadow-blue-400' action="send.php" method='post'>
                            <input type="text" name='name' class="px-4 h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500"
                                placeholder="NAME" />
                            <input type="email" class="px-4 h-12 my-2 border rounded-lg border-1 border-gray-300 outline-blue-500"
                                name="email_from" id="" placeholder="E-MAIL" />
                            <textarea  className=' bg-blue-50 text-black border-2 border-blue-500 p-3 my-2 rounded-md font-bold text-xl' name="message" id="" cols="20" rows="10"></textarea>
                            <input type='submit'  value="SEND E-MAIL"
                                class="bg-blue-600 hover:bg-blue-400 text-white p-3 my-2 rounded-md font-bold text-xl w-fit px-4 mx-auto cursor-pointer"  />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact