import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
  }

  return (
    <nav className="border-gray-200 text-white bg-secondary">
      <div className="flex flex-wrap items-center justify-between mx-auto w-full ">
        <Link to="/villa-prgic" className="flex items-center p-4">
          <span className="self-center text-xl font-light whitespace-nowrap">
            Villa Prgic
          </span>
        </Link>
        <div className="p-4 hidden md:max-[4200px]:block">
          <ul className="flex">
            <li className="px-2 hover:text-gray-100">
              <Link to="/villa-prgic">Home</Link>
            </li>
            <li className="px-2 hover:text-gray-100">
              <Link to="/villa-prgic/apartments">Apartments</Link>
            </li>
            <li className="px-2 hover:text-gray-100">
              <Link to="/villa-prgic/region">Region</Link>
            </li>
            <li className="px-2 hover:text-gray-100">
              <Link to="/villa-prgic/contact">Contact</Link>
            </li>
          </ul>
        </div>
          <button
              className="md:hidden m-4 flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
              onClick={toggleMenu}
          >
              <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
    <span
        className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
            isMenuOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
        }`}
    ></span>
                  <span
                      className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                          isMenuOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                      }`}
                  ></span>
                  <span
                      className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                          isMenuOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                      }`}
                  ></span>
              </div>
          </button>
      </div>
      <nav
          className={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
              isMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
          }`}
      >
        <ul className="flex flex-col items-center w-full justify-center align-middle text-center">
          <li className="text-2xl p-4">
            <Link
                to="/villa-prgic"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
            >
              Home
            </Link>
          </li>
          <li className="text-2xl p-4">
            <Link
                to="/villa-prgic/apartments"
                className="nav-link"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
            >
              Apartments
            </Link>
          </li>
          <li className="text-2xl p-4">
            <Link
                to="/villa-prgic/region"
                className="nav-link"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
            >
              Region
            </Link>
          </li>
          <li className="text-2xl p-4">
            <Link
                to="/villa-prgic/contact"
                className="nav-link"
                onClick={() => {
                  setIsMenuOpen(false);
                }}
            >
              Contact
            </Link>
          </li>

        </ul>
      </nav>
    </nav>
  );
}

export default Nav;
