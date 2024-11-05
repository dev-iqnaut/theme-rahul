import React from 'react'
import './Teachers.css'
import classesData from '../../data/teachers.json'
import { getImageUrl } from "../../utils";
import Navbar from '../Home/Navbar/Navbar'
import Eighth from '../Home/Eighth/Eighth'

const Teachers = ({FacultyInfo}) => {
  const facultyPhoto = JSON.parse(FacultyInfo || '{}');
  return (
    <>
    <div>
    <Navbar />
    </div>
    <br /><br />
    <div className='teachers_headingDiv' style={{marginTop:'20px'}}>
        <span>Home/Teachers</span>
         <h1 style={{fontSize:'36px',fontWeight:'bolder', color:'orange'}}>Our Teachers</h1>
    </div>

    <div className='teachers_cards'>
      {classesData.map((classItem, index) => (
        <div key={index} className='teachers_card1'>
           <div className='third_card_photoBox'>
            <img src={facultyPhoto.facultyPicture} alt={classItem.title} className='teachers_card_photo11'/>
          </div> 
          <div className='teachers_card_contents'>
          <h2 className='teachers_card_content_heading'>{facultyPhoto.facultyName}</h2>
          <p className='teachers_card_contents_description'>{facultyPhoto.facultyDescription}</p>
          </div>
        </div>
      ))}
    </div>

     <br /><br />
      
    </>
  )
}

export default Teachers


// className='third_card_contents'