import React from 'react'
import './Eighth.css';

const Eighth = () => {
  return (
    <>
    <div className='eight_container'>
      <div className='eight_content'>
      <div className='eight_left'>
        <div style={{fontSize:"24px",fontWeight:'bold'}}>Logo</div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus <br /> odit ducimus amet sunt unde nobis 
            fugit corporis eum reprehenderit?<br /> Expedita quam repellendus dicta maiores aspernatur delectus <br /> itaque ut,
             molestias deleniti?</p>
       </div>
       <div className='eight_right'>
          <ul className='eight_link'>
            <li style={{fontSize:"24px",fontWeight:'bold'}}>Link</li>
            <li>Homepage v1</li>
            <li>Homepage v2</li>
            <li>Homepage v3</li>
            <li>About</li>
            <li>Teacher</li>
            <li>Upcoming</li>
          </ul>
          <ul className='eight_link'>
            <li style={{fontSize:"24px",fontWeight:'bold'}}>Classes</li>
            <li>Toddler Class</li>
            <li>Early Learning</li>
            <li>Art & Craft</li>
            <li>Science & Nature</li>
            <li>Music</li>
            <li>Leadership</li>
          </ul>
          <ul className='eight_link'>
            <li style={{fontSize:"24px",fontWeight:'bold'}}>Contact</li>
            <li>123 Kindergarder Lane <br />hyderabad</li>
            <li>888-888-8888</li>
            <li>info@kidzee.com</li>
             <br /><br />
            <li style={{textDecoration:'underline'}}>Send Message</li>
          </ul>
       </div>
      </div>
      <div className='eight_last'> 
         <ul className='eight_last_left'>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Site Maps</li>
         </ul>
         <div className='eight_last_right'>
           copyright@kidzstar.Allright Reserved.
         </div>
      </div>
    </div>
    </>
  )
}

export default Eighth