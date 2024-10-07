import React from 'react'
import './SummerFunDay.css'
import { FaLocationDot } from "react-icons/fa6";
import summermain from '../../../assets/summerfunday/summermain.png'
import summer1 from '../../../assets/summerfunday/summer1.png'
import summer2 from '../../../assets/summerfunday/summer2.png'
import summer3 from '../../../assets/summerfunday/summer3.jpg'
import summer4 from '../../../assets/summerfunday/summer4.png'
import summer5 from '../../../assets/summerfunday/summer5.png'
import ImageGrid from '../Grid/Grid';



const SummerFunDay = () => {
  return (
    <>
    <div className='SummerFunDay_container'>
       <div className='SummerFunDay_1'>
          <div className='SummerFunDay_1_data'>
                   <div className='SummerFunDay_1_data_date'>
                    15 <br />June
                   </div>
                <h1 style={{fontSize:'48px',fontWeight:'bold'}}>Summer Fun Day</h1> 
                <p style={{display:'flex',alignItems:'center'}}><FaLocationDot style={{fontSize:'24px',color:'red'}}/> Kindergarden Playground</p>  
                <p style={{color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi ipsam quis aliquid est! 
                    Cupiditate veniam tempore totam repellat quibusdam ratione itaque facere pariatur quos iste?</p>
          </div>
            <img src={summermain} className='SummerFunDay_1_image'/>
          
       </div>

       <div className='SummerFunDay_evnets'>
           <div className='SummerFunDay_evnets_contents'>
              <h1 style={{fontSize:'36px',fontWeight:"bold"}}>Event Activities</h1>
              <div className='SummerFunDay_evnets_contents_images'>
                <img src={summer1} alt="" srcset="" className='SummerFunDay_evnets_contents_images_1'/>
                <img src={summer2} alt="" srcset="" className='SummerFunDay_evnets_contents_images_1'/>
                <img src={summer3} alt="" srcset="" className='SummerFunDay_evnets_contents_images_1'/>
              </div>
           </div>
       </div>
         <ImageGrid/>
       <div className='SummerFunDay_related'>
           <div className='SummerFunDay_related_content'>
              <div className='SummerFunDay_related_content_heading'>
                  <h1 style={{fontSize:'36px',fontWeight:"bold"}}>Related Events</h1>
                  <p style={{textDecoration:'underline'}}>See all articles</p>
              </div>
              <div className='SummerFunDay_related_content_images'>
                  <div>
                  <img src={summer4} alt="" srcset="" style={{borderRadius:'10px'}}/>
                  <h1 style={{fontSize:'32px',fontWeight:'bold'}}>Kids Science Fair</h1>
                  <p style={{display:'flex',alignItems:'center'}}><FaLocationDot style={{fontSize:'24px',color:'red'}}/> Kindergarden Hall</p> 
                  </div>
                  <div>
                  <img src={summer5} alt="" srcset="" style={{borderRadius:'10px'}}/>
                  <h1 style={{fontSize:'32px',fontWeight:'bold'}}>Junior Art Show</h1>
                  <p style={{display:'flex',alignItems:'center'}}><FaLocationDot style={{fontSize:'24px',color:'red'}}/> Kindergarden Gallery</p> 
                  </div>
              </div>
           </div>
       </div>
    </div>

    </>
  )
}

export default SummerFunDay



// const images = [
//     '../../../assets/summerfunday/summermain.png',
//     '../../../assets/summerfunday/summer1.png',
//     '../../../assets/summerfunday/summer2.png',
//     '../../../assets/summerfunday/summer3.png',
//     '../../../assets/summerfunday/summer4.png',
//     '../../../assets/summerfunday/summer5.png',
//   ];


{/* <div className="container mx-auto p-4">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {images.map((src, index) => (
    <div key={index} className={`${index === 1 ? 'sm:col-span-2 sm:row-span-2' : ''}`}>
      <img
        src={src}
        alt={`Image ${index + 1}`}
        className="w-28 h-56  rounded-lg"
      />
    </div>
  ))}
</div>
</div> */}