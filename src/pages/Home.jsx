
import React, { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa';

const Home = () => {

    const [X, setX] = useState("");

    const handleChange = (e) => {
        setX(e.target.value)
    }

    const logos = [
        "image 1.png",
        "image 2.png",
        "image 3.png",
        "image 4.png",
        "Image 5.png",
    ]
    

  return (
    <>
        <section>
            <div className='w-[80%] m-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div>
                        <h1 className='font-bold text-[96px] text-[#292830] leading-[100%]'>Track your Expenses to Save Money</h1>
                        <p>Helps you to organize your income and expenses</p>

                        {/* <button>Try free demo</button> */}

                        <select value={X} onChange={handleChange}>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>

                            <FaChevronDown />
                        </select>

                        <a href="">— Web, iOs and Android</a>

                    </div>

                    <div>
                        <img src="Illustration.png" alt="" />
                    </div>
                </div>
            </div>
        </section>


        <section className=' '>

            <div className='relative bg-[#FF7235] pt-20'>
                <img src="dashboard.png" alt="" className='w-[80%] m-auto relative z-20'/>

                <img src="top-Vector.png" alt="" className='absolute top-0 right-0'/>

                <img src="bottom-Vector.png" alt="" className='absolute bottom-0 left-0'/>

                
            </div>

            {/* <div className='flex justify-between w-[80%] m-auto py-10'>
                <img src="image 1.png" alt="" />
                <img src="image 2.png" alt="" />
                <img src="image 3.png" alt="" />
                <img src="image 4.png" alt="" />
                <img src="Image 5.png" alt="" />
            </div> */}

                <div className='flex justify-between w-[80%] m-auto py-10'>
                {
                    logos.map((logo, index) => {
                        return (
                            <img src={logo} alt="" />
                        )
                            
                    })
                }

                </div>
        </section>
    </>
  )
}

export default Home


// import React from 'react'
// import style from "./Home.module.css"

// const Home = () => {
//   return (
//     <div className={style.para}>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores perspiciatis dicta cum. Pariatur quidem fugiat consequatur quas, voluptates qui nulla magnam molestiae dolore amet rerum exercitationem eaque aliquid odit! Ratione?
//     </div>
//   )
// }

// export default Home;
