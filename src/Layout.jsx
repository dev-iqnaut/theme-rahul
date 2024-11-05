import { Outlet } from 'react-router-dom';
import Navbar from './components/Home/Navbar/Navbar.jsx'; // Your Navbar component
import Footer from './components/Footer/Footer.jsx'; // Your Footer component
import React from 'react'

const Layout = ({contactInfo}) => {
  return (
    <div>
      <Navbar />
      {/* This is where the child route content will be rendered */}
      <Outlet />
      <Footer pasedInfo={contactInfo} />
    </div>
  );
};

export default Layout;