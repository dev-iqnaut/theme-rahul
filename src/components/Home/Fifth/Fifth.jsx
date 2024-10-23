import React from 'react'
import './Fifth.css'
import { FaHandSparkles } from "react-icons/fa6";

const Fifth = () => {
  return (
    <>
    <div className='fifth_container'>
       <div className='fifth_content'>
        <div className='fifth_box'>
            <div className='fifth_leftbox'>
                <div className='fifth_leftbox1'>
                <FaHandSparkles style={{fontSize:'48px',color:'red'}}/>
                    <h1 style={{fontSize:'24px',fontWeight:'bold'}}>Community</h1>
                    <p>Building a supportive and <br />inclusive community.</p>
                    
                </div>
                <div className='fifth_leftbox1'>
                <FaHandSparkles style={{fontSize:'48px',color:'purple'}}/>
                    <h1 style={{fontSize:'24px',fontWeight:'bold'}}>Creativity</h1>
                    <p>Encouraging creative <br />expression and innovation</p>
                </div>
            </div>
            <div className='fifth_rightbox'>
                <div className='fifth_rightbox1'>
                <FaHandSparkles style={{fontSize:'48px',color:'blue'}}/>
                    <h1 style={{fontSize:'24px',fontWeight:'bold'}}>Respect</h1>
                    <p>Teaching respect for oneself <br />and other children</p>
                </div>
                <div className='fifth_rightbox1'>
                <FaHandSparkles style={{fontSize:'48px',color:'green'}}/>
                    <h1 style={{fontSize:'24px',fontWeight:'bold'}}>Growth</h1>
                    <p>Promoting personal growth <br />and knowledge learning.</p>
                </div>
            </div>
        </div>
        <div className='fifth_right_data'>
            <h1 className='fifth_right_data_heading'>What we believe <br />in KidsStar</h1>
            <p className='fifth_right_data_para'>Discover how our kindergarden fasters a love for learning
                through innovative education that builds a strong foundation for future success by nurturing 
                each child's unique potential and creativity
            </p>
        </div>
       </div>
    </div>
    </>
  )
}

export default Fifth