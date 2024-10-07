import React from 'react'
import './Contact2.css'
import Eighth from '../../Home/Eighth/Eighth'
import map from '../../../../assets/map.png'
import cartoon from '../../../../assets/contactCartoon.png'
import { FaLocationPin } from "react-icons/fa6";


const Contact2 = () => {
  return (
    <>
    <div className='contact2_container'>
       <img src={map} alt="" srcset="" className='contact2_map'/>
       <div className='contact2_content'>
         <div className='contact2_content_left'>
            <h1 style={{fontSize:'36px',fontWeight:'bold'}}>Visit Us</h1>
            <p style={{display:'flex', alignItems:'center'}}><FaLocationPin style={{color:'red'}}/>123 Kindergarder Lane, Edward State, 444602</p>
         </div>
         <div className='contact2_content_right'>
           <div className='contact2_content_rightContent'>
           <div >
            
            <p style={{color:'gray'}}>Phone</p>
            <h3 style={{fontWeight:'bold'}}>+91-1234567890</h3>
           </div>
           <div>
            <p style={{color:'gray'}}>Email</p>
            <h3 style={{fontWeight:'bold'}}>kidztar@gmail.com</h3>
           </div>
           </div>
           <img src={cartoon} alt="" className='contact2_content_right_cartoon'/>
         </div>
       </div>
    </div>
    {/* <Eighth/> */}
    </>
  )
}

export default Contact2