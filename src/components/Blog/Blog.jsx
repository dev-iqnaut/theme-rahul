import React from 'react';
import { GoDash } from 'react-icons/go';
import blog1 from '../../../assets/blog/blog1.png';
import blog2 from '../../../assets/blog/blog2.png';
import blog3 from '../../../assets/blog/blog3.png';
import blog4 from '../../../assets/blog/blog4.png';
import blog5 from '../../../assets/blog/blog5.png';
import blog6 from '../../../assets/blog/blog6.png';

import './Blog.css'; // Ensure you import the CSS

const Blog = () => {
  return (
    <div className='blog_container'>
      {/* Heading Section */}
      <div className='blog_headingDiv'>
        <span>Home/Blog</span>
        <h1 className='blog_mainTitle'>
          Guide To Understanding <br />Children Development Stages
        </h1>
      </div>

      {/* Main Image */}
      <img src={blog1} alt="Children Development" className='blog_imageFullWidth' />

      {/* Content Section */}
      <div className='blog_content'>
        {/* Left Content */}
        <div className='blog_content_left'>
          <p className='blog_paragraph'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi sed quaerat numquam deserunt quidem 
            corrupti consectetur natus cupiditate odit nulla blanditiis provident
            ullam non facilis molestiae reiciendis excepturi eligendi quisquam, ea unde magnam? Nobis
            eligendi totam, ut iste architecto animi quaerat eius quasi ipsum fugiat iure sapiente est illum veritatis.
          </p>

          {/* Infancy Section */}
          <div className='blog_content_infantry'>
            <h2 className='blog_sectionTitle blog_sectionMargin'>
              <span className='blog_sectionNumber blog_red'>01</span> Infancy (0 - 2 years)
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatibus adipisci reprehenderit voluptatum suscipit blanditiis ratione delectus libero, veritatis vel?
            </p>
            <div className='blog_content_infantry_features blog_features'>
              <h3 className='blog_featureItem'>
                <span>Physical</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h3>
              <h3 className='blog_featureItem'>
                <span>Cognitive</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h3>
              <h3 className='blog_featureItem'>
                <span>Emotional</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h3>
            </div>
          </div>  

          {/* Toddlerhood Section */}
          <div className='blog_content_toddlerHood'>
            <h2 className='blog_sectionTitle blog_sectionMarginTop'>
              <span className='blog_sectionNumber blog_yellow'>02</span> ToddlerHood (2 - 3 years)
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatibus adipisci reprehenderit voluptatum suscipit blanditiis ratione delectus libero, veritatis vel?
            </p>
            <div className='blog_content_toddlerHood_features blog_features'>
              <h3 className='blog_featureItem'>
                <span>Physical</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h3>
              <h3 className='blog_featureItem'>
                <span>Cognitive</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h3>
              <h3 className='blog_featureItem'>
                <span>Emotional</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h3>
            </div>
          </div>

          {/* Main Image */}
          <img src={blog2} alt="Development Stages" className='blog_image' />

          {/* Preschool Section */}
          <div className='blog_content_preschool'>
            <h2 className='blog_sectionTitle blog_sectionMarginTop'>
              <span className='blog_sectionNumber blog_lightgreen'>03</span> Preschool (3 - 5 years)
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatibus adipisci reprehenderit voluptatum suscipit blanditiis ratione delectus libero, veritatis vel?
            </p>
            <div className='blog_content_preschool_features blog_features'>
              <h3 className='blog_featureItem'>
                <span>Physical</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h3>
              <h3 className='blog_featureItem'>
                <span>Cognitive</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h3>
              <h3 className='blog_featureItem'>
                <span>Emotional</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h3>
            </div>
          </div>      

          {/* Early School Age Section */}
          <div className='blog_content_earlySchool'>
            <h2 className='blog_sectionTitle blog_sectionMarginTop'>
              <span className='blog_sectionNumber blog_darkblue'>04</span> Early School Age (5 - 6 years)
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad voluptatibus adipisci reprehenderit voluptatum suscipit blanditiis ratione delectus libero, veritatis vel?
            </p>
            <div className='blog_content_earlySchool_features blog_features'>
              <h3 className='blog_featureItem'>
                <span>Physical</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h3>
              <h3 className='blog_featureItem'>
                <span>Cognitive</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h3>
              <h3 className='blog_featureItem'>
                <span>Emotional</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </h3>
            </div>
          </div>  

          <p className='blog_paragraph blog_paragraphSpacing'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi sed quaerat numquam deserunt quidem 
            corrupti consectetur natus cupiditate odit nulla blanditiis provident
            ullam non facilis molestiae reiciendis excepturi eligendi quisquam, ea unde magnam
          </p>

          {/* Quote Section */}
          <div className='blog_content_quote'>
            <span className='blog_quoteSeparator'>|</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias quasi quas nihil hic fuga nisi obcaecati, modi rem harum animi! <span className='blog_quoteSeparator'>|</span>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum laborum, veritatis iste et obcaecati error omnis aperiam. Recusandae itaque in doloribus at temporibus? Laborum, mollitia quaerat. Officiis voluptatem placeat dolor!
          </p> 

        </div>

        {/* Right Sidebar */}
        <div className='blog_content_right'>
          <div className='blog_content_rightContent'>
            <input type="text" placeholder='Enter Your Keyword' className='blog_searchInput' />
            <h2 className='blog_latestTitle'>Latest Articles</h2>
            <div className='blog_latestArticle'>
              <p className='blog_articleTitle'>Innovative ways to teach shapes and colors to your children</p>
              <p className='blog_articleDate'>15 May 2024</p>
            </div>
            <div className='blog_latestArticle'>
              <p className='blog_articleTitle'>Top 5 Educational Books for Preschoolers in 2024: From Music to Math</p>
              <p className='blog_articleDate'>21 June 2024</p>
            </div>

            {/* Categories */}
            <div className='blog_categories'>
              <h3 className='blog_categoryHeader'>
                <GoDash className='blog_dashIcon' /> Early Learning (120 articles)
              </h3>
              <p className='blog_categoryItem'>Parenting Tips (100 articles)</p>
              <p className='blog_categoryItem'>Parenting Tips (100 articles)</p>
              <p className='blog_categoryItem'>Parenting Tips (100 articles)</p>
              <p className='blog_categoryItem'>Parenting Tips (100 articles)</p>
              <p className='blog_categoryItem'>Parenting Tips (100 articles)</p>
            </div>

            {/* Tags */}
            <div className='blog_tags'>
              <h2 className='blog_tagsTitle'>Article Tags</h2>
              <div className='blog_tagRow'>
                <div className='blog_tagItem'>#Early Education</div>
                <div className='blog_tagItem'>#Creative Kids</div>
              </div>
              <div className='blog_tagRow'>
                <div className='blog_tagItem'>#Parenting</div>
                <div className='blog_tagItem'>#Healthy Eating</div>
              </div>
              <div className='blog_tagRow'>
                <div className='blog_tagItem'>#KinderGardenEvents</div>
              </div>
            </div>

            {/* Sidebar Image */}
            <img src={blog6} alt="Sidebar Banner" className='blog_sidebarImage' />
          </div>
        </div>
      </div>

      {/* Related Articles Heading */}
      <div className='blog_relatedArticles_heading'>
        <h2 className='blog_relatedArticlesTitle'>Related Articles</h2>
        <p className='blog_seeAll'>See all articles</p>
      </div>

      {/* Related Articles */}
      <div className='blog_relatedArticles'>
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
  );
};

export default Blog;
