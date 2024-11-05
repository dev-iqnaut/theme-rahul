import React from 'react'
import './First.css'
import { FaPlayCircle } from "react-icons/fa";
 


const First = ({gomeInfo}) => {
  // const chomeInfo=JSON.parse(gomeInfo || {});
  // console.log(chomeInfo);
  // console.log(gomeInfo);
  
  
  return (
    <>
    <div className='first_container' style={{backgroundImage: `url(${gomeInfo?.hero?.heroImage || '../../../assets/bk6.png'})`}}>
        <div className='first_content'>
        <div className='first_slogan'>
            Unleash Creativity,<br />Foster Growth, Built Friendships.
        </div>
        <div className="first_botton">
           <div className="first_btn1">Join Now</div>
           
           <div className="first_btn2"><FaPlayCircle className='first_btn1_play'/>View Our School</div>
        </div>
        </div>
    </div>
    </>
  )
}

export default First