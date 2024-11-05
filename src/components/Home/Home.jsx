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
import { collection, getDocs,doc, getDoc,deleteDoc  } from "firebase/firestore";
import { useState,useEffect } from 'react';
import {db} from '../../config/firebase'
import { DataContext } from '../../DataContxt';

const Home = ({homeInfo}) => {
  



   const gomeInfo= JSON.parse(homeInfo || '{}');
  //  console.log(gomeInfo);
   

  // console.log(data);
//   const contactData = data.length > 0 ? data[0].siteData?.ContactUs : {};
// console.log(contactData.email);
  

  return (
    
    <div
      style={{
        fontFamily: "'Fredoka', sans-serif",
        fontOpticalSizing: 'auto',
        fontStyle: 'normal',
        fontVariationSettings: "'wdth' 100",
      }}
    >
      <First gomeInfo={gomeInfo}/>
      <Second  />
      <Third  />
      <Fourth  />
      <Fifth  />
      <Sixth  />
      <Hfaq />
      <Seventh  />
    </div>
  
  )
}

export default Home



{/* <DataContext.Provider >
<div
  style={{
    fontFamily: "'Fredoka', sans-serif",
    fontOpticalSizing: 'auto',
    fontStyle: 'normal',
    fontVariationSettings: "'wdth' 100",
  }}
>
  <First/>
  <Second  />
  <Third  />
  <Fourth  />
  <Fifth  />
  <Sixth  />
  <Hfaq />
  <Seventh  />
</div>
</DataContext.Provider> */}