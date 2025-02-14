import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  type Language = {
    nativeName: String;
  };
  const lngs: Record<string, Language> = {
    en: { nativeName: "EN" },
    de: { nativeName: "DE" },
    hr: { nativeName: "HR" },
  };

  useEffect(() => {
    document.body.style.overflow = "unset";
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }
  }, [isMenuOpen]);

  return (
    <nav className="text-blue-500 bg-gray-100 px-4 py-2 rounded-full mt-3 mx-3">
      <div className="flex font-thin flex-wrap items-center justify-between mx-auto w-full ">
        <NavLink to="/" className="flex items-center p-4">
          <span className="self-center text-xl whitespace-nowrap">
            Villa Prgic
          </span>
        </NavLink>
        <div className="p-4 hidden md:max-[4200px]:block">
          <ul className="flex">
            <li className="px-2 hover:text-blue-600">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-blue-600 font-bold" : ""
                }
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li className="px-2 hover:text-blue-600">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-blue-600 font-bold" : ""
                }
                to="/apartments"
              >
                APARTMANI
              </NavLink>
            </li>
            <li className="px-2 hover:text-blue-600">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-blue-600 font-bold" : ""
                }
                to="/region"
              >
                REGIJA
              </NavLink>
            </li>
            <li className="px-2 hover:text-blue-600">
              <NavLink
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "text-blue-600 font-bold" : ""
                }
                to="/contact"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="pr-4">
          <ul className="flex gap-2">
            {Object.keys(lngs).map((lng) => (
              <li
                key={lng}
                onClick={() => i18n.changeLanguage(lng)}
                className={i18n.resolvedLanguage === lng ? "text-blue-600 cursor-pointer font-bold" : "cursor-pointer"}
              >
                {lngs[lng].nativeName}
              </li>
            ))}
          </ul>
        </div>
        <button
          className="md:hidden m-4 flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <span
              className={`absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${
                isMenuOpen
                  ? "rotate-45 bg-gray-100 delay-200"
                  : "bg-blue-500 -translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 bg-blue-500 transform transition-all duration-200 ease-in-out ${
                isMenuOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-5 transform transition duration-300 ease-in-out ${
                isMenuOpen
                  ? "-rotate-45 bg-gray-100 delay-200"
                  : "bg-blue-500 translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>
      <nav
        className={`fixed flex top-0 left-0 w-full p-10 z-10 h-screen pt-24 bg-blue-500 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-full"
        }`}
      >
        <ul className="flex flex-col items-center w-full justify-center align-middle text-center">
          <li className="text-2xl p-4">
            <NavLink
              to="/"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Home
            </NavLink>
          </li>
          <li className="text-2xl p-4">
            <NavLink
              to="/apartments"
              className="nav-link"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Apartments
            </NavLink>
          </li>
          <li className="text-2xl p-4">
            <NavLink
              to="/region"
              className="nav-link"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Region
            </NavLink>
          </li>
          <li className="text-2xl p-4">
            <NavLink
              to="/contact"
              className="nav-link"
              onClick={() => {
                setIsMenuOpen(false);
              }}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </nav>
  );
}

export default Nav;
