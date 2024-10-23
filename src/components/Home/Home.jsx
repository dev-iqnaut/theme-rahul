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

const Home = () => {
  

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id="www.kidztar.in"
        const listRef=doc(db,"sites",id);
        const snapshot=await getDoc(listRef);
        const listData=snapshot.data()
        // console.log(listData);
        setData(listData);        
    } catch (error) {
        console.log("error at firebase",error);
        
    }
  }

    fetchData();
  }, []);
  

  return (
    <DataContext.Provider value={data}>
    <div
      style={{
        fontFamily: "'Fredoka', sans-serif",
        fontOpticalSizing: 'auto',
        fontStyle: 'normal',
        fontVariationSettings: "'wdth' 100",
      }}
    >
      <First/>
      <Second data={data} />
      <Third data={data} />
      <Fourth data={data} />
      <Fifth data={data} />
      <Sixth data={data} />
      <Hfaq />
      <Seventh data={data} />
    </div>
  </DataContext.Provider>
  )
}

export default Home