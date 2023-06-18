import React from 'react'
import { AiFillMail } from "react-icons/ai"
import { AiFillPhone } from "react-icons/ai"


const Footer = () => {
    return (

        <>
            <div className="logo w-36 text-2xl mt-5 ml-5 font-extrabold md:text-5xl text-purple-950">
                RISHI.
            </div>
            <div className="list md:flex-row md:flex">
                <div className='flex flex-row  items-center space-x-3 p-5'>
                    <AiFillMail />
                    <p>rushikeshbagade911@gmail.com</p>
                </div>
                <div className='flex flex-row items-center space-x-3 p-5'>
                    <AiFillPhone />
                    <p>+91 7498140646</p>
                </div>
                <div className=''>
                    <p class="text-white">NAGPUR, MAHARASHTRA INDIA</p>
                </div>
            </div>
        </>
    )
}

export default Footer