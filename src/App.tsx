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
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <div className="flex-grow mx-2 mt-2 rounded-[50px] bg-[url(https://ucb8cbf6ef364c21e748d9847328.previews.dropboxusercontent.com/p/thumb/AChruCZnbtC_LtQWzQVCTpXgofcumcJM2OmAooOBP5fC56_6S4Jj5b1WB4IXj3o9iKO0gznc3qQZaG1ZJ6Cy6LAibWw9vlZJcA-_sDZrp7oiOP8k1c-jtUnr9gu7CCaRs6Bq67D94TOF2GxF1WsoPHBKCTX471oEly9LMtkLpvWny2-oSVRCN8Im60kynTzIDLGuj6jHlpzQ7o2rOqGpnQKpzFp1Dvypuu9bJFXqKMXeMYdYNwKuzZJrSP1PID1iNRajG5JzLv7Uol1jma_ToVvn3_bNDD5UKmMAdJpoY3FQZb52BCHGVultypRaj4VQpRCDyqcg0tj5jjNlvA3grs-b/p.jpeg)]">
          <Nav />
          <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/apartments" element={<Apartments/>}></Route>
                <Route path="/apartments/:apartmentName" element={<AparmentDetails/>}></Route>
                <Route path="/region" element={<Region/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
                <Route path="*" element={<NoPage/>}></Route>
          </Routes>
      </div>
      <div className="pt-1">
        <Footer/>
      </div>
    </div>
  )
}

export default App
