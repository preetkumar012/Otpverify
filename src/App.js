import React from 'react'
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import Otp from './components/Otp'
import Login from './components/Login'
import Error from './components/Error'
// import Error from './components/Error'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route exact path="*" element={<Error/>}/>
  
   <Route exact path="/otp" element={<Otp/>}/>
   <Route exact path="/login" element={<Login/>}/>
   <Route exact path="/register" element={<Register/>}/>
   <Route exact path="/dashboard" element={<Dashboard/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App