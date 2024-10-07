import React from 'react'
import './About.css'
import abt1 from '../../../assets/about/abt1.png'
import abt2 from '../../../assets/about/abt2.png'
import abt3 from '../../../assets/about/abt3.png'
import teacher3 from '../../../assets/classes/teacher3.png'
import { FaHandshake } from "react-icons/fa";

const About = () => {
  return (
    <>
    <div className='about_container'>
    <div className='about_headingDiv' style={{marginTop:'20px'}}>
        <span>Home/About</span>
         <h1 style={{fontSize:'36px',fontWeight:'bold'}}>About Kindergarden</h1>
     </div>
     <div className='about_content'>
        <div className='about_content_1'>
            <img src={abt1} alt="" className='about_content_1_image'/>
            <div className='about_content_1_data'>
                <h1 style={{fontSize:'48px',fontWeight:'bold'}}>We provide vibrant and nurturing class environment</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus explicabo ducimus
                    numquam eveniet consectetur, commodi dolor? Possimus, vel, consequatur suscipit
                    itaque tempore assumenda expedita laudantium architecto sint dolorem fugiat autem.</p>
            </div>
        </div>

        <div className='about_content_believe'>
            <div className='about_content_believe_heading'>
                <h1 style={{fontSize:'48px',fontWeight:'bold'}}>What we Believe <br /> in Kidztar</h1>
                <p>Lorem, ipsum dolor sit amet consectetur <br /> elit. Quam odit illo error?</p>
            </div>
            <div className='about_content_believe_row1'>
                <div className='about_content_believe_row1_box'>
                    <FaHandshake style={{fontSize:'38px', marginRight:'10px'}}/> <div >
                                     <h1 style={{fontSize:'20px',fontWeight:'bold'}}>Community</h1>
                                     <p style={{color:'GrayText'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor.</p>
                                  </div>
                </div>
                <div className='about_content_believe_row1_box'>
                    <FaHandshake style={{fontSize:'38px', marginRight:'10px'}}/> <div>
                                     <h1 style={{fontSize:'20px',fontWeight:'bold'}}>Community</h1>
                                     <p style={{color:'GrayText'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam.</p>
                                  </div>
                </div>
            </div>
            <div className='about_content_believe_row1'>
                <div className='about_content_believe_row1_box'>
                    <FaHandshake style={{fontSize:'38px', marginRight:'10px'}}/> <div >
                                     <h1 style={{fontSize:'20px',fontWeight:'bold'}}>Community</h1>
                                     <p style={{color:'GrayText'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor.</p>
                                  </div>
                </div>
                <div className='about_content_believe_row1_box'>
                    <FaHandshake style={{fontSize:'38px', marginRight:'10px'}}/> <div>
                                     <h1 style={{fontSize:'20px',fontWeight:'bold'}}>Community</h1>
                                     <p style={{color:'GrayText'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam.</p>
                                  </div>
                </div>
            </div>
        </div>

        

        <div className='about_content_classes'>
            <h1 style={{textAlign:'center',fontSize:'48px',fontWeight:'bold'}}>Discover Our <br />Professional Classes</h1>

            <div className='about_content_classes_allbox'>
            <div className='about_content_classes_row1'>
                <div className='about_content_classes_row1_box'>
                    <FaHandshake style={{fontSize:'38px', marginRight:'10px'}}/> <div >
                                     <h1 style={{fontSize:'20px',fontWeight:'bold'}}>Community</h1>
                                     <p style={{color:'GrayText'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor.</p>
                                  </div>
                </div>
                <div className='about_content_classes_row1_box'>
                    <FaHandshake style={{fontSize:'38px', marginRight:'10px'}}/> <div>
                                     <h1 style={{fontSize:'20px',fontWeight:'bold'}}>Community</h1>
                                     <p style={{color:'GrayText'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam.</p>
                                  </div>
                </div>
                <div className='about_content_classes_row1_box'>
                    <FaHandshake style={{fontSize:'38px', marginRight:'10px'}}/> <div>
                                     <h1 style={{fontSize:'20px',fontWeight:'bold'}}>Community</h1>
                                     <p style={{color:'GrayText'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam.</p>
                                  </div>
                </div>
            </div>
            <div className='about_content_classes_row1'>
                <div className='about_content_classes_row1_box'>
                    <FaHandshake style={{fontSize:'38px', marginRight:'10px'}}/> <div >
                                     <h1 style={{fontSize:'20px',fontWeight:'bold'}}>Community</h1>
                                     <p style={{color:'GrayText'}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor.</p>
                                  </div>
                </div>
                <div className='about_content_classes_row1_box'>
                    <FaHandshake style={{fontSize:'38px', marginRight:'10px'}}/> <div>
                                     <h1 style={{fontSize:'20px',fontWeight:'bold'}}>Community</h1>
                                     <p style={{color:'GrayText'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam.</p>
                                  </div>
                </div>
                <div className='about_content_classes_row1_box'>
                    <FaHandshake style={{fontSize:'38px', marginRight:'10px'}}/> <div>
                                     <h1 style={{fontSize:'20px',fontWeight:'bold'}}>Community</h1>
                                     <p style={{color:'GrayText'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam.</p>
                                  </div>
                </div>
            </div>
            </div>
        <div className='about_content_classes_enrollBtn'>Enroll a class</div>
        </div>

        <div className='about_content_explore'>
           <div className='about_content_explore_data'>
           <div className='about_content_explore_left'>
               <h1 style={{fontSize:'48px',fontWeight:'bold'}}>Explore and Grow & <br />with Kidztar</h1>
               <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea liberobr <br />
                 quaerat blanditiis beatae cumque quasi sunt autem eaque quo laborum?</p>
           </div>
           <img src={abt2}  />
           </div>
        </div>

        <div className='about_content_teachers'>
            <div className='about_content_teachers_heading'>
            <h2 className='about_teacher_title'>Related Articles</h2>
            <p className='about_seeAll'>See all teachers</p>
            </div>

            <div className='about_teachers_cards'>
      
        <div className='about_teachers_card1'>
           <div className='about_third_card_photoBox'>
            <img src={teacher3}  className='about_teachers_card_photo11'/>
          </div> 
          <div className='about_teachers_card_contents'>
          <h2 className='about_teachers_card_content_heading'>Ashley Raymond</h2>
          <p className='about_teachers_card_contents_description'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='about_teachers_card1'>
           <div className='about_third_card_photoBox'>
            <img src={teacher3}  className='about_teachers_card_photo11'/>
          </div> 
          <div className='about_teachers_card_contents'>
          <h2 className='about_teachers_card_content_heading'>Ashley Raymond</h2>
          <p className='about_teachers_card_contents_description'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className='about_teachers_card1'>
           <div className='about_third_card_photoBox'>
            <img src={teacher3}  className='about_teachers_card_photo11'/>
          </div> 
          <div className='about_teachers_card_contents'>
          <h2 className='about_teachers_card_content_heading'>Ashley Raymond</h2>
          <p className='about_teachers_card_contents_description'>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        
      
    </div>
        </div>

        <div className='about_content_rating'>
           <img src={abt3} alt="" srcset="" />
           <div className='about_content_rating_all'>
        <div>
            <p className='about_content_rating_value'>100+</p>
            <div className='about_content_rating_btn'>Kids & Students</div>
        </div>
        <div>
            <p className='about_content_rating_value'>100+</p>
            <div className='about_content_rating_btn'>Kids & Students</div>
        </div>
        <div>
            <p className='about_content_rating_value'>100+</p>
            <div className='about_content_rating_btn'>Kids & Students</div>
        </div>
        <div>
            <p className='about_content_rating_value'>100+</p>
            <div className='about_content_rating_btn'>Kids & Students</div>
        </div>
        <div>
            <p className='about_content_rating_value'>100+</p>
            <div className='about_content_rating_btn'>Kids & Students</div>
        </div>
        
        </div>
        </div>

     </div>
    </div>
    </>
  )
}

export default About