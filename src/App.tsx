import { Routes, Route } from 'react-router-dom' 

import Nav from "./Components/Nav"
import Home from "./Components/Home"
import Apartments from './Components/Apartments'
import AparmentDetails from './Components/ApartmentDetails'
import Region from './Components/Region'
import Contact from './Components/Contact'
import NoPage from './Components/NoPage'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
            <Route path="/villa-prgic/" element={<Home/>}></Route>
            <Route path="/villa-prgic/apartments" element={<Apartments/>}></Route>
            <Route path="/villa-prgic/apartments/:apartmentName" element={<AparmentDetails/>}></Route>
            <Route path="/villa-prgic/region" element={<Region/>}></Route>
            <Route path="/villa-prgic/contact" element={<Contact/>}></Route>
            <Route path="*" element={<NoPage/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
