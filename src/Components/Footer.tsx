import { NavLink } from "react-router-dom";

import { useTranslation } from "react-i18next";
function Footer() {
  type Language = {
    nativeName: String;
  };
  const { t, i18n } = useTranslation();
  const lngs: Record<string, Language> = {
    en: { nativeName: "EN" },
    de: { nativeName: "DE" },
    hr: { nativeName: "HR" },
  };
  return (
    <div className="-mt-6 text-sm py-2 px-1 md:px-2">
      <div className="flex flex-col md:flex-row rounded-3xl justify-center md:justify-between py-8 px-8 md:px-20 bg-blue-500 gap-4 md:gap-8 text-gray-50 text-base font-thin">
        <div className="flex flex-col justify-center">
          <h1 className="text-xl md:text-3xl font-bold">Villa Prgic</h1>
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex md:justify-center gap-2 ">
            <div className="w-5">
              <svg
                fill="#ffffff"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>{" "}
                </g>
              </svg>
            </div>
            <p className="text-sm md:text-md">Kanica 44, 10294, Primosten</p>
          </div>
          <div className="flex md:justify-center gap-4 pt-2">
            <div className="flex gap-2">
              <div className="w-5">
                <svg
                  fill="#ffffff"
                  version="1.1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  enable-background="new 0 0 512 512"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472 c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"></path>{" "}
                    <path d="M327.125,383.969c5.703,0.016,56.875-37.828,56.875-42.656s-57.266-40.906-62.219-40.906s-21.578,19.938-26.062,22.156 c-4.5,2.219-32.5,1.422-63.703-29.781c-31.219-31.188-41.875-67.109-41.875-72.75s26.031-23.062,26.75-27.156 S182.578,128,176.891,128S128,180.5,128,184.875s3.953,60.656,75.219,131.906S321.422,383.938,327.125,383.969z"></path>{" "}
                  </g>
                </svg>
              </div>
              <p>098123456</p>
            </div>
            <div className="w-6">
              <svg
                fill="#ffffff"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"></path>
                </g>
              </svg>
            </div>
            <div className="w-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    fill="#ffffff"
                  ></path>{" "}
                  <path
                    d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    fill="#ffffff"
                  ></path>{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                    fill="#ffffff"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <ul className="flex pt-2 md:pt-4 text-sm md:justify-center md:text-md gap-2 md:gap-8">
            <li className="hover:underline">
              <NavLink to="/impressum">IMPRESSUM</NavLink>
            </li>
            <li className="hover:underline">
              <NavLink to="/">F.A.Q.</NavLink>
            </li>
          </ul>
        </div>

        <ul className="hidden md:block justify-center gap-2 text-sm md:text-md">
          <li className="hover:text-gray-200">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="hover:text-gray-200">
            <NavLink to="/">APARTMENTS</NavLink>
          </li>
          <li className="hover:text-gray-200">
            <NavLink to="/">REGION</NavLink>
          </li>
          <li className="hover:text-gray-200">
            <NavLink to="/">CONTACT</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
