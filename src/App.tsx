import { Routes, Route } from "react-router-dom";

import Nav from "./UI/Nav";
import Home from "./UI/Home";
import Apartments from "./UI/Apartments";
import AparmentDetails from "./UI/ApartmentDetails";
import Region from "./UI/Region";
import Contact from "./UI/Contact";
import NoPage from "./UI/NoPage";
import Footer from "./UI/Footer";
import Faq from "./UI/Faq";
import Impressum from "./UI/Impressum";

function App() {
  return (
    <div className="App flex flex-col font-roboto bg-gray-50">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/apartments" element={<Apartments />}></Route>
        <Route
          path="/apartments/:apartmentLink"
          element={<AparmentDetails />}
        ></Route>
        <Route path="/region" element={<Region />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/impressum" element={<Impressum />}></Route>
        <Route path="/faq" element={<Faq />}></Route>
        <Route path="*" element={<NoPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
