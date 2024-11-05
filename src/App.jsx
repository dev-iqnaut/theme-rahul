import React, { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import { collection, getDocs,doc, getDoc,deleteDoc } from 'firebase/firestore';
import { db } from './config/firebase.js';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Classes from './components/Classes/Classes.jsx';
import ContactMain from './components/Contact/ContactMain.jsx';
import Events from './components/Events/Events.jsx';
import Teachers from './components/Teachers/Teachers.jsx';
import Blog from './components/Blog/Blog.jsx';
import Kblog from './components/Kblog/Kblog.jsx';
import SummerFunDay from './components/SummerFunDay/SummerFunDay.jsx';

const App = () => {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const listRef = collection(db, "sites");
  //       const listSnapShot = await getDocs(listRef);
  //       const allList = listSnapShot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setData(allList[0]);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchData();
  // }, []);

  // const email = data.siteData.ContactUs.email ;
  // console.log(email);



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
  // console.log(data);


  // const contactInfo = data?.siteData?.ContactUs.email || {};
  // console.log(contactInfo);

  const contactInfo = JSON.stringify(data?.siteData?.contactUs || {});
  const homeInfo = JSON.stringify(data?.siteData?.home || {});
  const AboutInfo = JSON.stringify(data?.siteData?.aboutUs || {});
  const FacultyInfo = JSON.stringify(data?.siteData?.facultyStaff || {});

  console.log(FacultyInfo);
  
  
  


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout contactInfo={contactInfo}/>}>
        <Route path='' element={<Home homeInfo={homeInfo}/>}/>
        <Route path='about' element={<About AboutInfo={AboutInfo}/>}/>
        <Route path='classes' element={<Classes data={data}/>}/>
        <Route path='contactmain' element={<ContactMain contactInfo={contactInfo}/>}/>
        <Route path='events' element={<Events data={data}/>}/>
        <Route path='teachers' element={<Teachers FacultyInfo={FacultyInfo}/>}/>
        <Route path='blog' element={<Blog data={data}/>}/>
        <Route path='summerfunday' element={<SummerFunDay data={data}/>}/>
        <Route path='kblog' element={<Kblog data={data}/>}/>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
