
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Components/Main/Home/Home'
import About from './Components/Main/About/About'
import Services from './Components/Main/Services/Services'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Main/Contact/Contact'
import Team from './Components/Main/Team/Team'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    
    <Header/>
    <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/about'element={<About/>}/>
        <Route path='/services'element={<Services/>}/>
        <Route path='/team'element={<Team/>}/>
        <Route path ='/contact'element={<Contact/>}/> 


        
    </Routes>

    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default Routing