import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
function Footer() {
  return (
    <div className="bg-secondary text-background-col rounded-[50px] py-8 px-4 mx-2 mb-2 font-thin text-sm md:text-base">
        <div className="flex justify-between">
            <div>
              <p className="p-1">Villa Prgic</p>
              <p className="p-1">Adresa: Kanica 21390-12</p>
              <p className="p-1">e-mail: info@prgic.com</p>
              <p className="p-1">Mobitel: 00385999999</p>
            </div>
            <div className="">
               <ul className="">
                   <li className="hover:underline p-1">
                        <Link to="/villa-prgic">Home</Link>
                   </li>
                   <li className="hover:underline p-1">
                       <Link to="/villa-prgic/apartments">Apartments</Link>
                   </li>
                   <li className="hover:underline p-1">
                       <Link to="/villa-prgic/region">Region</Link>
                   </li>
                   <li className="hover:underline p-1">
                       <Link to="/villa-prgic/contact">Contact</Link>
                   </li>
               </ul>
            </div>
        </div>
    </div>
  );
}
export default Footer;
