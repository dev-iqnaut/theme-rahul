import React from 'react'
import './Third.css'
import class1 from '../../../../assets/classes/class1.jpg'

const Third = () => {
  return (
    <>
    <div className='third_container'>
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
                <h5>Time</h5>
                <p>07:00 A.M.</p>
            </div>
            <div className='third_card_content1'>
                <h5>Time</h5>
                <p>07:00 A.M.</p>
            </div>
           </div>
           <div className='third_card_content_btn'>Book Class</div>
         </div>
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
                  <h5>Time</h5>
                  <p>07:00 A.M.</p>
              </div>
              <div className='third_card_content1'>
                  <h5>Time</h5>
                  <p>07:00 A.M.</p>
              </div>
             </div>
             <div className='third_card_content_btn'>Book Class</div>
         </div>
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
                  <h5>Time</h5>
                  <p>07:00 A.M.</p>
              </div>
              <div className='third_card_content1'>
                  <h5>Time</h5>
                  <p>07:00 A.M.</p>
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