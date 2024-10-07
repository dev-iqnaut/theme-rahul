import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import SummerFunDay from './components/SummerFunDay/SummerFunDay.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Classes from './components/Classes/Classes.jsx'
import ContactMain from './components/Contact/ContactMain.jsx'
import Events from './components/Events/Events.jsx'
import Teachers from './components/Teachers/Teachers.jsx'
import Blog from './components/Blog/Blog.jsx'
import Kblog from './components/Kblog/Kblog.jsx'
import Layout from './Layout.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='classes' element={<Classes />}/>
      <Route path='contactmain' element={<ContactMain />}/>
      <Route path='events' element={<Events />}/>
      <Route path='teachers' element={<Teachers />}/>
      <Route path='blog' element={<Blog />}/>
      <Route path='summerfunday' element={<SummerFunDay />}/>
      <Route path='kblog' element={<Kblog />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} /> 
  </React.StrictMode>,
)
