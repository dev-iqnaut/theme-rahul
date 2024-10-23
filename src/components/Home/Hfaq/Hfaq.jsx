import React from 'react'
import './Hfaq.css'
import faqData from '../../../data/faq.json'

const Hfaq = () => {
  return (
    <>
    <div className='hfaq_container'>
       <div className='hfaq_content'>
           <div className='hfaq_left'>
              <h1 className='hfaq_left_h1'>Answer for <br /> questions</h1>
              <div className='hfaq_left_ask' style={{color:'white'}}>Ask a question</div>
           </div>
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
       </div>
    </div>
    </>
  )
}

export default Hfaq