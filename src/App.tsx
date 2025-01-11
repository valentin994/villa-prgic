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
    <div className="App bg-blue-200/75 flex flex-col">
        <div className="absolute w-full mt-2 px-2">
            <Nav />
        </div>
          <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/apartments" element={<Apartments/>}></Route>
                <Route path="/apartments/:apartmentName" element={<AparmentDetails/>}></Route>
                <Route path="/region" element={<Region/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="*" element={<NoPage/>}></Route>
          </Routes>
      <div className="mt-2">
        <Footer/>
      </div>
    </div>
  )
}

export default App
