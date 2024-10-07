import React from 'react'
import './Kblog.css'
import kblog1 from '../../../assets/kblog/kblog1.png'
import blog1 from '../../../assets/blog/blog1.png';
import kblog6 from '../../../assets/kblog/kblog6.png';
import kblog3 from '../../../assets/kblog/kblog3.png';
import kblog4 from '../../../assets/kblog/kblog4.png';
import blog3 from '../../../assets/blog/blog3.png';
import blog4 from '../../../assets/blog/blog4.png';
import blog5 from '../../../assets/blog/blog5.png';
import blog6 from '../../../assets/blog/blog6.png';

const Kblog = () => {
  return (
    <>
    <div className='kblog_container'>
    <div className='kblog_headingDiv' style={{marginTop:'20px'}}>
        <span>Home/Blog</span>
         <h1 style={{fontSize:'36px',fontWeight:'bold'}}>Kindergarden Blogs</h1>
     </div>
     <div className='kblog_content_1'>
         <img src={kblog1}  className='kblog_content_1_image'/>
         <h1 style={{fontSize:'28px',fontWeight:'bold'}}>Exploring Education Trends for New Parents 2024</h1>
         <p style={{fontWeight:'lighter'}}>Rowan adkins / Parents 2024</p>
     </div>

      <div className='kblog_featured'>
      <div className='blog_relatedArticles_heading'>
        <h2 className='blog_relatedArticlesTitle'>Featured Articles</h2>
        <p className='blog_seeAll'>See all articles</p>
      </div>
         <div className='kblog_featured_allData'>
            <div className='kblog_featured_Data1'>
              <img src={kblog4} alt="" className='kblog_featured_Data1_image'/>
              <div className='kblog_featured_Data1_content'>
                 <div className='kblog_featured_Data1_date'>
                   20 <br /> APR
                 </div>
                 <div className='kblog_featured_Data1_text'>
                    <h1 style={{fontWeight:'bold',fontSize:'24px'}}>Exploring current kids education trends for <br /> parents 2024</h1>
                    <p style={{color:'gray'}}>Olivia Wilson</p>
                 </div>
              </div>
            </div>
            <div className='kblog_featured_Data1'>
              <img src={kblog3}  className='kblog_featured_Data1_image'/>
              <div className='kblog_featured_Data1_content'>
                 <div className='kblog_featured_Data1_date'>
                   20 <br />APR
                 </div>
                 <div className='kblog_featured_Data1_text'>
                    <h1 style={{fontWeight:'bold',fontSize:'24px'}}>Exploring current kids education trends for <br /> parents 2024</h1>
                    <p style={{color:'gray'}}>Olivia Wilson</p>
                 </div>
              </div>
            </div>
         </div>
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
      <img src={kblog6} style={{width:'100vw'}} />
    </div>
    </>
  )
}

export default Kblog