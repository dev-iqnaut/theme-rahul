import React from 'react'
import './First.css'
import { FaPlayCircle } from "react-icons/fa";
 


const First = () => {
  return (
    <>
    <div className='first_container'>
        <div className='first_content'>
        <div className='first_slogan'>
            Unleash Creativity,<br />Foster Growth, Built Friendships.
        </div>
        <div className="first_botton">
           <div className="first_btn1">Join Now</div>
           <FaPlayCircle className='first_btn1_play'/>
           <div className="first_btn2">View Our School</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default First