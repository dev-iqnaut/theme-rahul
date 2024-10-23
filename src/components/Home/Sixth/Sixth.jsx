import React from 'react'
import "./Sixth.css"
import class1 from '../../../../assets/classes/class1.jpg'
import teacher2 from '../../../../assets/classes/teacher2.png'
import teacher3 from '../../../../assets/classes/teacher3.png'

const Sixth = () => {
  return (
    <div className='sixth_container'>
        <h1 className='sixth_heading' >What parent says <br />about kids classes</h1>
        <div className='sixth_cards'>
           <div className='sixth_card1'>
            <p style={{color:'GrayText'}}>Enrolling our daughter at Kidztar was the best decision we could have made, The staff's dedication and the enriching program have exeeded our expectations.</p>
            <div className='sixth_card1_content'>
                <img src={teacher2} alt="" srcset="" className='sixth_card1_image'/>
                <div>
                    <p style={{fontWeight:'bold'}}>Emily Riddiks</p>
                    <p>Mom of Regina Riddiks.</p>
                </div>
            </div>
           </div>
           <div className='sixth_card1'>
            <p style={{color:'GrayText'}}>Kidztar is a community where children thrive. The nurturing environment and excellent teachers have made a significant difference in our son's development.</p>
            <div  className='sixth_card1_content'>
            <img src={teacher3} alt="" srcset="" className='sixth_card1_image'/>
                <div>
                    <p style={{fontWeight:'bold'}}>Linda Sailman</p>
                    <p>Mom of Rachek Sailman</p>
                </div>
            </div>
           </div>
           <div className='sixth_card1'>
            <p style={{color:'GrayText'}}>Our child refers to Kidztar as their second home. they are always excited about school activities and have made great friends. We are grateful for such a supportive place.</p>
            <div className='sixth_card1_content'>
            <img src={class1} alt="" srcset="" className='sixth_card1_image'/>
                <div>
                    <p style={{fontWeight:'bold'}}>John Delmas</p>
                    <p>Dad of Nick Delmas</p>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Sixth