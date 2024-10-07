import React from 'react'
import "./Navbar.css"
import {useState} from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import {Link} from 'react-router-dom'

const Navbar = () => {

    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };


  return (
    <>
    <div className="navbar_container">
        <div className='navbar_content'>
            <div className='navbar_left'>
                {/* <div className='navbar_logo'>
                    logo
                </div> */}
                <AiOutlineMenu className='navbar_menu'  onClick={toggleVisibility} >{isVisible ? 'Hide' : 'Show'}</AiOutlineMenu>
                <ul className='navbar_left_content'>
                    <li className='navbar_logo'><Link to="/">Kidztar</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/classes">Classes</Link></li>
                    <li><Link to="/teachers">Teacher</Link></li>
                    <li className="dropdown">
  <Link to="/events" className="dropdown-link">Event</Link>
  <ul className="dropdown-content">
    <p><Link to="/summerfunday">Summer Fun Day</Link></p>
    
  </ul>
</li>
                    <li className="dropdown">
  <Link to="/blog" className="dropdown-link">Blog</Link>
  <ul className="dropdown-content">
    <p><Link to="/kblog">Kindergarden Blog</Link></p>
  </ul>
</li>
                    {/* <li><Link to="/blog" >Blog</Link></li> */}

                </ul>
                
            </div>
            <div className="navbar_right">
                <Link to="/contactmain">Contact</Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar