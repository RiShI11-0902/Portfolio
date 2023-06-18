import React from 'react'

const About = () => {
    const text = ``
  return (
    <>
    <div id='about'>
    <p className='text-2xl text-center mt-10 font-extrabold'>ABOUT ME</p>
    <div class=" mt-9 p-4 text-left font-semibold text-lg md:text-2xl lg:w-[90%] lg:mx-auto md:p-7 md:text-center">
            I'm  <span className=' text-blue-800 animate-bounce first-letter:text-3xl'>RUSHIKESH BAGADE</span> ,I am a passionate React JS developerWith a solid background in web development and a strong focus on front-end technologies, I specialize in building dynamic and interactive web applications using the React JavaScript library. Throughout my career, I have honed my skills in creating reusable React components that bring life to user interfaces. I have a deep understanding of React's component-based architecture and utilize it to develop scalable and maintainable code. By leveraging the power of React, I strive to deliver seamless and intuitive user experiences that engage and delight users.I've also developed some exciting projects (some of which are still in the
        works!). Click on the link to read my blogs. <a class="underline text-blue-500"
                href="https://my-code-college.blogspot.com/"> BLOG LINK </a>
        </div>
    </div>
    </>
  )
}

export default About