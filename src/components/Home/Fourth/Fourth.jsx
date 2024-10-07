import React from 'react'
import './Fourth.css'
import home3 from '../../../../assets/home/home3.png'

const Fourth = () => {
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
            <p className='fourth_value'>100+</p>
            <div className='fourth_btn'>Kids & Students</div>
        </div>
        <div>
            <p className='fourth_value'>100+</p>
            <div className='fourth_btn'>Kids & Students</div>
        </div>
        <div>
            <p className='fourth_value'>100+</p>
            <div className='fourth_btn'>Kids & Students</div>
        </div>
        <div>
            <p className='fourth_value'>100+</p>
            <div className='fourth_btn'>Kids & Students</div>
        </div>
        </div>

    </div>
    </>
  )
}

export default Fourth