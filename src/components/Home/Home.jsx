import React from 'react';
import First from './First/First';
import Second from './Second/Second';
import Third from './Third/Third';
import Fourth from './Fourth/Fourth';
import Fifth from './Fifth/Fifth';
import Sixth from './Sixth/Sixth';
import Seventh from './Seventh/Seventh';
import Navbar from './Navbar/Navbar';
import Hfaq from './Hfaq/Hfaq';

const Home = () => {
  return (
    <>
    <div style={{fontFamily: "'Fredoka', sans-serif",
  fontOpticalSizing: 'auto',
  fontStyle: 'normal',
  fontVariationSettings: "'wdth' 100"}}>
    
    <First/>
    <Second/> 
    <Third/>
    <Fourth/>
    <Fifth/>
    <Sixth/>
    <Hfaq/>
    <Seventh/> 
    </div>
    </>
  )
}

export default Home