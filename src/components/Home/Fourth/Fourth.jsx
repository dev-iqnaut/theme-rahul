import React from 'react'
import './Fourth.css'
import home3 from '../../../../assets/home/home3.png'

const Fourth = ({data}) => {
  return (
    <>
    <div className='fourth_container'>
        <h1 className='fourth_heading'>Capturing moments of <br />joy and learning</h1>
        <img src={home3} className='fourth_image'/>
        <div className='fourth_content'>
        <div>
            <p className='fourth_value'>100+</p>
            <div className='fourth_btn'>Kids & Students</div>
        </div>
        <div>
            <p className='fourth_value'>20</p>
            <div className='fourth_btn'>Expert Teachers</div>
        </div>
        <div>
            <p className='fourth_value'>10+</p>
            <div className='fourth_btn'>Years of Experience</div>
        </div>
        <div>
            <p className='fourth_value'>95%</p>
            <div className='fourth_btn'>Parents Satisfaction</div>
        </div>
        
        </div>

    </div>
    </>
  )
}

export default Fourth