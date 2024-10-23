import React from 'react';
import './Footer.css';
import { useDataContext } from '../../DataContxt';

const Footer = () => {
  const data = useDataContext();
  console.log(data?.siteData.ContactUs);
  
  

  return (
    <>
      {/* {data?.siteData.ContactUs.map((item) => (
        
      ))} */}
      <div className="footer_container" >
          <div className="footer_content">
            {/* Links Section */}
            <div className="footer_content_links">
              <h1 style={{ fontSize: '24px' }}>Links</h1>
              <p style={{ color: 'gray' }}>Homepage 1</p>
              <p style={{ color: 'gray' }}>Homepage 2</p>
              <p style={{ color: 'gray' }}>Homepage 3</p>
              <p style={{ color: 'gray' }}>About</p>
              <p style={{ color: 'gray' }}>Teachers</p>
              <p style={{ color: 'gray' }}>Upcoming Events</p>
            </div>

            {/* Classes Section */}
            <div className="footer_content_classes">
              <h1 style={{ fontSize: '24px' }}>Classes</h1>
              <p style={{ color: 'gray' }}>Toddler Class</p>
              <p style={{ color: 'gray' }}>Early Learning</p>
              <p style={{ color: 'gray' }}>Science & Nature</p>
              <p style={{ color: 'gray' }}>Art & Class</p>
              <p style={{ color: 'gray' }}>Music</p>
              <p style={{ color: 'gray' }}>Leadership</p>
            </div>

            {/* Contacts Section */}
            <div className="footer_content_contacts">
              <h1 style={{ fontSize: '24px' }}>Contacts</h1>
              <p style={{ color: 'gray' }}>123 Kindergarder Lane, 444602</p>
              <p style={{ color: 'gray' }}>+91-8149927348</p>
              <p style={{ color: 'gray' }}>
                {/* {data.siteData?.ContactUs?.email || 'Email not available'} */}
                email@123.gamil.com
              </p>
              <p style={{ color: 'white', fontWeight: 'bold', textDecoration: 'underline' }}>Send A Message</p>
            </div>

            {/* Newsletter Section */}
            <div className="footer_content_last">
              <h1 style={{ fontSize: '32px', fontWeight: 'bold' }}>Kidztar</h1>
              <p>School Newspaper</p>
              <input type="text" placeholder="Enter email address" className="footer_content_last_input" />
              <div className="footer_content_last_allspan">
                <span className="footer_content_last_span" style={{ padding: '6px' }}>TW</span>
                <span className="footer_content_last_span" style={{ padding: '6px 10px' }}>IG</span>
                <span className="footer_content_last_span" style={{ padding: '6px 7px' }}>FG</span>
                <p className="footer_content_last_subscribe">Subscribe</p>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="footer_cpyright">
            <ul className="footer_cpyright_left">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Site Maps</li>
            </ul>
            <div className="footer_cpyright_right">
  Developed by <a href="https://www.linkedin.com/in/rahul-frontend/" target="_blank" rel="noopener noreferrer">Rahul Chimote</a>
</div>
          </div>
        </div>
    </>
  );
};

export default Footer;
