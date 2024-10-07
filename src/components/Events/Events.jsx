import React from 'react'
import './Events.css'
import Navbar from '../Home/Navbar/Navbar'

import event1 from '../../../assets/events/event1.png'
import event2 from '../../../assets/events/event2.png'
import event3 from '../../../assets/events/event3.png'
import event4 from '../../../assets/events/event4.png'


const Events = () => {
  return (
    <>
    <div>
    <Navbar />
    </div>
    <br /><br />
    <div className='events_headingDiv' style={{marginTop:'20px'}}>
        <span>Home/Events</span>
         <h1 style={{fontSize:'36px',fontWeight:'bolder'}}>Upcoming Events</h1>
    </div>

    <div className='events_container'>
        <div className='events_content'>
           <div className='events_content1'>
               <div className='events_content1_left'>
                   <div className='events_content1_left_date'>
                    15 <br />June
                   </div>
                   <div style={{marginLeft:'20px'}}>
                   <h1 style={{fontSize:'36px',fontWeight:'bold'}}>Summer Fun Day</h1>
                   <p>Lorem ipsum dolor sit amet.</p>
                   <h4 style={{textDecoration:"underline",fontWeight:'bold'}}>See More Details</h4>
                   </div>
               </div>
                    <img src={event1} alt="" className='events_content1_image1'/>
               {/* <div className='events_content1_right'>
               </div> */}
           </div>
           <br />
           <div className='events_content1'>
           <img src={event2} alt="" className='events_content1_image1'/>
               {/* <div className='events_content1_right'>
                     <h1 style={{display:'flex',justifyContent:'center',marginTop:'80px',fontSize:'24px'}}>Image</h1>
               </div> */}
               <div className='events_content1_left'>
                   <div className='events_content1_right_date'>
                    15 <br />June
                   </div>
                   <div style={{marginRight:'20px'}}>
                   <h1 style={{fontSize:'36px',fontWeight:'bold'}}>Summer Fun Day</h1>
                   <p>Lorem ipsum dolor sit amet.</p>
                   <h4 style={{textDecoration:"underline",fontWeight:'bold'}}>See More Details</h4>
                   </div>
               </div>
           </div>
        </div>
        <div className='events_content'>
           <div className='events_content1'>
               <div className='events_content1_left'>
                   <div className='events_content1_left_date'>
                    15 <br />June
                   </div>
                   <div style={{marginLeft:'20px'}}>
                   <h1 style={{fontSize:'36px',fontWeight:'bold'}}>Summer Fun Day</h1>
                   <p>Lorem ipsum dolor sit amet.</p>
                   <h4 style={{textDecoration:"underline",fontWeight:'bold'}}>See More Details</h4>
                   </div>
               </div>
               <img src={event3} alt="" className='events_content1_image1'/>
               
           </div>
           <br />
           <div className='events_content1'>
           <img src={event4} alt="" className='events_content1_image1'/>
               <div className='events_content1_left'>
                   <div className='events_content1_right_date'>
                    15 <br />June
                   </div>
                   <div style={{marginRight:'20px'}}>
                   <h1 style={{fontSize:'36px',fontWeight:'bold'}}>Summer Fun Day</h1>
                   <p>Lorem ipsum dolor sit amet.</p>
                   <h4 style={{textDecoration:"underline",fontWeight:'bold'}}>See More Details</h4>
                   </div>
               </div>
           </div>
        </div>
    </div>


     <br /><br />
      
    </>
  )
}

export default Events