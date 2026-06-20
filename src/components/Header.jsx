
import React from 'react'
import { Link } from 'react-router'

const Header = () => {
  return (
    <>
        <header>
            <div className='w-[80%] m-auto py-3'>
                <div className='flex justify-between items-center'>
                    <div>
                        <Link to="/">
                        <img src="xpense.png" alt="" />
                        </Link>
                    </div>
                    <div>
                        <ul className='flex gap-5 text-[#292830] text-[18px] font-normal'>
                            <li><Link to="/features">Features</Link></li>
                            <li><Link to={"/about-us"}>About us</Link></li>
                            <li><Link to={"/pricing"}>Pricing</Link></li>
                            <li><Link to={"/feedback"}>Feedback</Link></li>
                        </ul>
                    </div>


                    <div>
                        <button className='border border-[#FF7235] p-3 rounded-2xl text-[#FF7235]'>Request a demo</button>
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header
