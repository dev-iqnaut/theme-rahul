import React from 'react'
import Contact1 from './Contact1/Contact1'
import Contact2 from './Contact2/Contact2'
import Navbar from '../Home/Navbar/Navbar'
import Contact3 from './Contact3/Contact3'

const ContactMain = ({contactInfo}) => {
  const cotact= JSON.parse(contactInfo || '{}');
  return (
    <>
    <Navbar/><br /><br /><br />
    <Contact1/>
    <Contact2 cotact={cotact}/>
    <Contact3/>
    </>
  )
}

export default ContactMain