import React from 'react'
import "./Sixth.css"
import class1 from '../../../../assets/classes/class1.jpg'

const Sixth = () => {
  return (
    <div className='sixth_container'>
        <h1 className='sixth_heading' >What parent says <br />about kids classes</h1>
        <div className='sixth_cards'>
           <div className='sixth_card1'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tempora omnis a! Odit culpa aut non harum eos cumque dolorum.</p>
            <div className='sixth_card1_content'>
                <img src={class1} alt="" srcset="" className='sixth_card1_image'/>
                <div>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
            </div>
           </div>
           <div className='sixth_card1'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tempora omnis a! Odit culpa aut non harum eos cumque dolorum.</p>
            <div  className='sixth_card1_content'>
            <img src={class1} alt="" srcset="" className='sixth_card1_image'/>
                <div>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
            </div>
           </div>
           <div className='sixth_card1'>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis tempora omnis a! Odit culpa aut non harum eos cumque dolorum.</p>
            <div className='sixth_card1_content'>
            <img src={class1} alt="" srcset="" className='sixth_card1_image'/>
                <div>
                    <p>Lorem, ipsum dolor.</p>
                    <p>Lorem, ipsum dolor.</p>
                </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Sixth