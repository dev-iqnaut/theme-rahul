import React from 'react'
import "./Second.css"
import home2 from '../../../../assets/home/home2.png'
// import bk2 from '../../../assets/bk2.png'

const Second = ({data}) => {
  return (
    <>
    <div className='second_container'>
       <div className='secong_content'>
       <div className='second_left'>
       <h2 className='second_h2'>Explore and Grow <br /> with KidzStar</h2>
       We provide a vibrant and nurturing environment for <br />
       young learners to explore and grow through <br />
       personalised attention and innovation.
       <div className='second_button'>Learn More</div>
       </div>
       <img src={home2}  className='second_right'/>
       </div>
    </div>

{/* <div className="second_container">
      {data.map((item) => (
        <div className="second_content" key={item.id}>
          <div className="second_left">
            <h2 className="second_h2">{item.siteData.AboutUs.focus}</h2>
            {item.siteData.AboutUs.description}
            <div className="second_button">Learn More</div>
          </div>
          <img src={home2} alt="Content Visual" className="second_right" />
        </div>
      ))}
    </div> */}
    </>
  )
}

export default Second



