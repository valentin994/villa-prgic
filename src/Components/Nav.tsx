import { useState } from "react"

function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navLinks = ["Home", "Apartments", "Region", "Contact"]

    return(    
        <nav class="p-3 border-gray-200 rounded bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div class="container flex flex-wrap items-center justify-between mx-auto">
            <a href="#" class="flex items-center">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Villa Prgic</span>
            </a>
            <button data-collapse-toggle="navbar-solid-bg" onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            </button>
            <div class={`w-full md:block md:w-auto transition-all ease-in-out duration-300 ${isMenuOpen ? "opacity-100": "opacity-0"} ${isMenuOpen ? "max-h-full": "max-h-0"}`} id="navbar-solid-bg">
              <ul class="flex flex-col mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
              {
              navLinks.map(navLink => {
                      return (
                                <li>
                                    <a className=""class="block py-2 pl-3 pr-4 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent">{navLink}</a>
                                </li>
                             )
                      })
              }
              </ul>
            </div>
          </div>
        </nav>
    )
}

export default Nav 
