import React from 'react'
import './Seventh.css'
import event1 from '../../../../assets/events/event1.png'
import kblog1 from '../../../../assets/kblog/kblog1.png'
import blog1 from '../../../../assets/blog/blog1.png';
import kblog6 from '../../../../assets/kblog/kblog6.png';
import blog3 from '../../../../assets/blog/blog3.png';
import blog4 from '../../../../assets/blog/blog4.png';
import blog5 from '../../../../assets/blog/blog5.png';
import blog6 from '../../../../assets/blog/blog6.png';

const Seventh = () => {
  return (
    <>
    <div className='seventh_container'>
        <div className='seventh_summerDay'>
            <div className='seventh_summerDay_left'>
               <div className='seventh_summerDay_left_content'>
               <div className='seventh_summerDay_left_content_btn'>Events</div>
               <h1 className='seventh_summerDay_left_content_h1'>Summer Fun Day</h1>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, in? <br />
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, laborum! <br />
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, enim!
               </p>
               <div className='seventh_summerDay_left_content_available'>
                  <div className='seventh_summerDay_left_content_available_date'>
                    <h4 style={{fontWeight:'bold'}}>Date</h4>
                    <p>24 June 2024</p>
                  </div>
                  <div  className='seventh_summerDay_left_content_available_time'>
                    <h4 style={{fontWeight:'bold'}}>Time</h4>
                    <p>10.00 A.M. to 12.00 P.M.</p>
                  </div>
               </div>
               </div>
            </div>
            
               <img src={event1} alt="" srcset="" className='seventh_summerDay_right' />
        </div>

        <div className='blog_relatedArticles_heading'>
        <h2 className='blog_relatedArticlesTitle'>Related Articles</h2>
        <p className='blog_seeAll'>See all articles</p>
      </div>
     <div className='blog_relatedArticles'>
        <div style={{display: 'flex',flexWrap:'wrap',gap:'5vw'}}>
        <div className='blog_relatedArticle'>
          <img src={blog3} alt="Preparing for Kindergarten" className='blog_relatedImage' />
          <h3 className='blog_relatedArticleTitle'>The Ultimate Guide to Preparing Your Child for Kindergarten</h3>
          <p className='blog_relatedArticleDate'>30 May 2024</p>
        </div>
        <div className='blog_relatedArticle'>
          <img src={blog4} alt="Music and Consistency" className='blog_relatedImage' />
          <h3 className='blog_relatedArticleTitle'>The Importance of Music and Consistency in Toddler</h3>
          <p className='blog_relatedArticleDate'>22 October 2024</p>
        </div>
        <div className='blog_relatedArticle'>
          <img src={blog5} alt="Toddler's Social Skills" className='blog_relatedImage' />
          <h3 className='blog_relatedArticleTitle'>10 Creative Ways to Encourage your Toddler's Social Skills</h3>
          <p className='blog_relatedArticleDate'>10 January 2024</p>
        </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Seventh