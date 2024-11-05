import React from 'react'
import './Contact1.css'
import { useDataContext } from '../../../DataContxt';

const Contact1 = () => {
//   const data = useDataContext();
//     const contactData = data.length > 0 ? data[0].siteData?.ContactUs : {};
// console.log(contactData.email);
  
  return (
    <>
    <div className='contact1_container'>
        <div className='contact1_content'>
           <div className='contact1_content_left'>
              <div className='contact_content_left_upper'>
              <h1 style={{fontSize:'48px', fontWeight:'bold'}}>Get in Touch <br /> with our School</h1>
              <p style={{color:'GrayText'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Obcaecati tempora, vitae eos iste non ab?</p><br /><br />
              </div>
              <div className='contact_content_left_down'>
              <h1 style={{fontWeight:'bold',fontSize:'22px',marginLeft:'10px'}}>Class Hours</h1>
              <div className='contact_content_left_down_innerdiv'>
                <div className='contact_content_left_down_innerdiv_timing'>
                    <h3>Mon-Fri</h3>
                    <h3>07:00 A.M.-04:400 P.M</h3>
                </div>
                <div className='contact_content_left_down_innerdiv_timing'>
                    <h3>Mon-Fri</h3>
                    <h3>07:00 A.M.-04:400 P.M</h3>
                </div>
                <div className='contact_content_left_down_innerdiv_timing'>
                    <h3>Mon-Fri</h3>
                    <h3>07:00 A.M.-04:400 P.M</h3>
                </div>
              </div>
              </div>
           </div>
            <div className='contact1_content_right'>
               <div className='contact1_content_right_form'>
                  <input type="text" placeholder='Name' className='contact1_content_right_form_input'/><br />
                  <input type="text" placeholder='Email' className='contact1_content_right_form_input'/><br />
                  <input type="text" placeholder='Message' className='contact1_content_right_form_input' style={{padding:'60px 20px'}}/><br />
                  <div className='contact1_content_right_form_btn' >Send Message</div>
               </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact1



{/* <details className="group w-96 pb-2 mb-5 border rounded-xl  border-gray-600">
<summary className="uppercase  rounded-xl group-open:text-white py-2 mb-2 px-5  group-open:bg-[#ff9b24] flex justify-between items-center cursor-pointer font-bold">
  <span>Title</span>
  <span className=" group-open:hidden">
    <i className="ri-add-circle-line"></i>
  </span>
  <span className=" hidden group-open:inline">-</span>
</summary>
<span className="px-1 w-inherit ">
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugiat quo maxime, rem magni necessitatibus vel ullam expedita? Facilis, nulla.
</span>
</details> */}