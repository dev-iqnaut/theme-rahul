import React from 'react'
import './Third.css'
import class1 from '../../../../assets/classes/class1.jpg'
import class2 from '../../../../assets/classes/class2.jpg'
import class3 from '../../../../assets/classes/class3.jpg'
import { useDataContext } from '../../../DataContxt'

const Third = () => {
  const data = useDataContext();
  return (
    <>
    
    {/* {data.siteData.AboutUs.map((item) =>(
     
    ))} */}
     <div className='third_container'>
      {/* <h1 className='third_heading'></h1> */}
      <h1 className='third_heading'>Discover our <br /> professional classes</h1>
      <div className='third_cards'>
         <div className='third_card1'>
               <img src={class1}  className='third_card_photo1'/>
            {/* <div className='third_card_photo1'>
            </div> */}
            <h2 className='third_card_content_heading'>Sunshine Tots</h2>
           <div className='third_card_contents'>
           <div className='third_card_content1'>
                <h5>Time</h5>
                <p>07:00 A.M.</p>
            </div>
            <div className='third_card_content1'>
                <h5>Quota</h5>
                <p>10</p>
            </div>
            <div className='third_card_content1'>
                <h5>Age</h5>
                <p>1-2 yo.</p>
            </div>
           </div>
           <div className='third_card_content_btn'>Book Class</div>
         </div>
         <div className='third_card1'>
         <img src={class2}  className='third_card_photo1'/>
            {/* <div className='third_card_photo1'>
            </div> */}
              <h2 className='third_card_content_heading'>Little Explorers</h2>
             <div className='third_card_contents'>
             <div className='third_card_content1'>
                  <h5>Time</h5>
                  <p>10.00 AM</p>
              </div>
              <div className='third_card_content1'>
                  <h5>Quota</h5>
                  <p>12</p>
              </div>
              <div className='third_card_content1'>
                  <h5>Age</h5>
                  <p>6-7 y.o.</p>
              </div>
             </div>
             <div className='third_card_content_btn'>Book Class</div>
         </div>
         <div className='third_card1'>
         <img src={class3}  className='third_card_photo1'/>
            {/* <div className='third_card_photo1'>
            </div> */}
              <h2 className='third_card_content_heading'>Creative Minds</h2>
             <div className='third_card_contents'>
             <div className='third_card_content1'>
                  <h5>Time</h5>
                  <p>09:00 AM</p>
              </div>
              <div className='third_card_content1'>
                  <h5>Quota</h5>
                  <p>15</p>
              </div>
              <div className='third_card_content1'>
                  <h5>Age</h5>
                  <p>3-4 y.o.</p>
              </div>
             </div>
             <div className='third_card_content_btn'>Book Class</div>
         </div>
      </div>
    </div>
    </>
  )
}

export default Third