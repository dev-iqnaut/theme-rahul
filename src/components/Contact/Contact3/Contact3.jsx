import React from 'react'
import './Contact3.css'
import faqData from '../../../data/faq.json'
import contactHouse from '../../../../assets/cartoonHouse.png'
import kblog6 from '../../../../assets/kblog/kblog6.png'

const Contact3 = () => {
  return (
    <>
    <div className='contact3_container'>
    <div className='contact3_left'>
      {faqData.map((faq, index) => (
        <details key={index} className="details">
          <summary className="summary">
            <span>{faq.title}</span>
            <span className="icon-add">
              <i className="ri-add-circle-line">+</i>
            </span>
            <span className="icon-minus">-</span>
          </summary>
          <div className="answer">
            {faq.ans}
          </div>
        </details>
      ))}
    </div>

    <div className='contact3_right'>
      <div className='contact3_right_data'>
      <h1 style={{fontWeight:'bold',fontSize:'28px'}}>Answer For <br /> Questions</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing <br /> elit. Iure, voluptatum?</p>
      </div>
      <img src={contactHouse} alt="" className='contact3_right_imageHouse'/>
    </div>
    </div>
    <img src={kblog6} alt="" srcset="" style={{width:'100vw'}}/>
    
    </>
  )
}

export default Contact3