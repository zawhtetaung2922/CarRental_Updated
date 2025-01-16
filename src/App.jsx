import { useState } from 'react'
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Home from './component/Home/Home'
import Cars from './component/Cars/Cars'
import Services from './component/Our service/Services'
import ContactUs from './component/Contact Us/ContactUs'
import MyAccount from './component/My Account/MyAccount'

function App() {

  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/account" element={<MyAccount />} />
      </Routes>
    </>
  )
}

export default App
