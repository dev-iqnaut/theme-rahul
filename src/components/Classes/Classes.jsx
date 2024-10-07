import React from 'react'
import classesData from '../../data/classes.json'
import { getImageUrl } from "../../utils";
import './Classes.css';
import Navbar from '../Home/Navbar/Navbar'
import kblog6 from '../../../assets/kblog/kblog6.png'

const Classes = () => {
  return (
   <>
         <div style={{backgroundColor: "#fdf2f2" }}>
     <Navbar />
     </div>
    <br /><br />
     <div className='classes_headingDiv' style={{marginTop:'20px'}}>
        <span>Home/Classes</span>
         <h1 style={{fontSize:'36px',fontWeight:'bold'}}>Our Classes</h1>
     </div>

    {/* // <ul className='classes_sections'>
    //    <li className='classes_sections_btn' style={{color:"white",backgroundColor:'black'}}>All Classes</li>
    //    <li className='classes_sections_btn'>Toddler Class</li>
    //    <li className='classes_sections_btn'>early Learning</li>
    //    <li className='classes_sections_btn'>Art & Craft</li>
    //    <li className='classes_sections_btn'>Science & Nature</li>
    //    <li className='classes_sections_btn'>Music</li>
    //    <li className='classes_sections_btn'>Leadership</li>
    // </ul>  */}

<ul className='classes_sections'>
        <li className='classes_sections_btn' style={{color:"white",backgroundColor:'black'}}>All Classes</li>
        <li className='classes_sections_btn'>Toddler Class</li>
        <li className='classes_sections_btn'>early Learning</li>
        <li className='classes_sections_btn'>Art & Craft</li>
        <li className='classes_sections_btn'>Science & Nature</li>
        <li className='classes_sections_btn'>Music</li>
        <li className='classes_sections_btn'>Leadership</li>
     </ul>
   <div className='classes_cards'>
      {classesData.map((classItem, index) => (
        <div key={index} className='classes_card1'>
          {/* <div className='third_card_photo1'>
          </div> */}
            <img src={getImageUrl(classItem.imageSrc)} alt={classItem.title} className='classes_card_photo11'/>
          <h2 className='classes_card_content_heading'>{classItem.title}</h2>
          <div className='classes_card_contents'>
            <div className='classes_card_content1'>
              <h5>Time</h5>
              <p style={{fontWeight:'bold'}}>{classItem.time}</p>
            </div>
            <div className='classes_card_content1'>
              <h5>Quota</h5>
              <p style={{fontWeight:'bold'}}>{classItem.quota}</p>
            </div>
            <div className='classes_card_content1'>
              <h5>Age</h5>
              <p style={{fontWeight:'bold'}}>{classItem.Age}</p>
            </div>
          </div>
          <div className='classes_card_content_btn'>Book Class</div>
        </div>
      ))}
    </div>
    <img src={kblog6} alt="" srcset="" style={{width:'100vw'}}/>
   </>
  )
}

export default Classes