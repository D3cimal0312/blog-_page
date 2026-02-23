import { useState } from 'react'
import { BlogePage } from './Pages/Blogform'
import Blogcard from './components/Blogcard'
import { Routes,Route, Link } from 'react-router-dom'
import './App.css'

import Navbar from './components/Navbar'
import Land from './Pages/Land'
import BlogDetail from './Pages/BlogDetail'
import Footer from './components/Footer'
import Table from './Pages/Table'
function App() {
 


  return (
    <div className=''>
      <Navbar/>

      <Routes>
<Route path='/' element={<Land/>}/>


<Route path='newblog/' element={<BlogePage/>}/>


<Route path='/blog/:id' element={<BlogDetail />} />

    

    

    <Route path='*' element={"hodata"}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App
