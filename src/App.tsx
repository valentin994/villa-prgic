import { useState } from 'react'
import { Routes, Route } from 'react-router-dom' 

import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Apartments from './Components/Apartments'
import Region from './Components/Region'
import Contact from './Components/Contact'
import NoPage from './Components/NoPage'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/apartments" element={<Apartments/>}></Route>
            <Route path="/region" element={<Region/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="*" element={<NoPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
