import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex bg-secondary text-background-col font-thin justify-between p-14 text-sm md:text-base">
        <div>
          <p>Villa Prgic</p>
          <p>Adresa: Kanica 21390-12</p>
          <p>e-mail: info@prgic.com</p>
          <p>Mobitel: 00385999999</p>
        </div>
        <div className="text-sm md:text-base">
           <ul>
               <li className="hover:underline">
                    <Link to="/villa-prgic">Home</Link>
               </li>
               <li className="hover:underline">
                   <Link to="/villa-prgic/apartments">Apartments</Link>
               </li>
               <li className="hover:underline">
                   <Link to="/villa-prgic/region">Region</Link>
               </li>
               <li className="hover:underline">
                   <Link to="/villa-prgic/contact">Contact</Link>
               </li>
           </ul>
        </div>
    </div>
  );
}
export default Footer;
