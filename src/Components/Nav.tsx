import { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          data-collapse-toggle="navbar-solid-bg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-4 ml-3 text-sm text-gray-500 rounded-lg md:hidden"
          aria-controls="navbar-solid-bg"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        {isMenuOpen && (
          <div
            className={`w-full md:block md:w-auto bg-gray-100 text-primary`}
            id="navbar-solid-bg"
          >
            <ul className="flex flex-col rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
              <li>
                <Link
                  to="/villa-prgic"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/villa-prgic/apartments"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0"
                >
                  Apartments
                </Link>
              </li>
              <li>
                <Link
                  to="/villa-prgic/region"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0"
                >
                  Region
                </Link>
              </li>
              <li>
                <Link
                  to="/villa-prgic/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
