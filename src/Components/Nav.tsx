import { useState } from "react"
import { Link } from "react-router-dom"

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return(    
        <nav className="p-3 border-gray-200 rounded bg-gray-50">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" className="flex items-center">
                <span className="self-center text-xl font-semibold whitespace-nowrap">Villa Prgic</span>
            </a>
            <button data-collapse-toggle="navbar-solid-bg" onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-solid-bg" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
            </button>
            {
                isMenuOpen &&
            <div className={`w-full md:block md:w-auto`} id="navbar-solid-bg">
              <ul className="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
                <li>
                    <Link to="/" onClick={() => setIsMenuOpen(false)} className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0">Home</Link>
                </li>
                <li>
                    <Link to="/apartments" onClick={() => setIsMenuOpen(false)} className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0">Apartments</Link>
                </li>
                <li>
                    <Link to="/region" onClick={() => setIsMenuOpen(false)} className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0">Region</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0">Contact</Link>
                </li>
              </ul>
            </div>
            }
          </div>
        </nav>
    )
}

export default Nav 
