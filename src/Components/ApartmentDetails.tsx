// @ts-nocheck
import { useLocation } from "react-router-dom";
import LocationSvg from "../assets/location.svg";
import BathroomSvg from "../assets/bathroom.svg";
import WifiSvg from "../assets/wifi.svg";
import KitchenSvg from "../assets/kitchen.svg";
import BedSvg from "../assets/bed.svg";
import PoolSvg from "../assets/pool.svg";
import { DateRangePicker } from "react-date-range";
import { useTranslation } from "react-i18next";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useEffect, useRef, useState } from "react";
import "../calendar.css";
import emailjs from "@emailjs/browser";

function AparmentDetails() {
  const { t } = useTranslation();
  const { state } = useLocation();
  const [dateRange, setDateRange] = useState([]);

  const {
    name,
    detail,
    firstImage,
    firstGridImageList,
    secondImage,
    secondGridImageList,
  } = state;

  type GridImageListProps = {
    gridList: string[];
  };

  function getDatesInRange(start: string, end: string): Date[] {
    const dates = [];
    const current = new Date(start);
    const endDate = new Date(end);

    while (current <= endDate) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return dates;
  }
  const disabledDates = dateRange.flatMap((range) =>
    getDatesInRange(range.start_date, range.end_date),
  );

  useEffect(() => {
    fetch(`/api/get_dates?id=${name.split(" ")[1]}`)
      .then((response) => response.json())
      .then((data) => setDateRange([...data]));
  }, [name]);

  const [showPopUp, setShowPopUp] = useState(false);

  const allImages = [
    firstImage,
    ...firstGridImageList,
    secondImage,
    ...secondGridImageList,
  ];
  const [imageIndex, setImageIndex] = useState(0);

  const goToPrevious = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setImageIndex((prevIndex) =>
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function sendEmail(e) {
    if (
      range[0].startDate.getDate() === range[0].endDate.getDate() &&
      range[0].startDate.getMonth() === range[0].endDate.getMonth()
    ) {
      setShowPopUp(true);
      setTimeout(() => setShowPopUp(false), 2000);
      e.preventDefault();
      return;
    }
    console.log({
      name: formData.name,
      time: new Date().getDate(),
      title: name,
      startDate: `${range[0].startDate.getDate()}-${range[0].startDate.getMonth()}-${range[0].startDate.getFullYear()}`,
      endDate: `${range[0].endDate.getDate()}-${range[0].endDate.getMonth()}-${range[0].endDate.getFullYear()}`,
      email: formData.email,
      message: formData.message,
    });
    emailjs.init({ publicKey: "WdsWSiOZO0oOhp7nl" });
    emailjs
      .send("service_daxmzoo", "template_l03vwdg", {
        name: formData.name,
        time: new Date().getDate(),
        title: name,
        startDate: `${range[0].startDate.getDate()}-${range[0].startDate.getMonth()}`,
        endDate: `${range[0].endDate.getDate()}-${range[0].endDate.getMonth()}`,
        email: formData.email,
        message: formData.message,
      })
      .then(
        () => {
          console.log("Success");
        },
        (error) => {
          console.log(error);
        },
      );
    e.preventDefault();
  }
  const GridImageList: React.FC<GridImageListProps> = ({ gridList }) => {
    return (
      <>
        {gridList.map((item, index) => (
          <div key={index}>
            <img
              className="h-full max-w-full rounded-3xl"
              src={item}
              alt="Apartment"
            />
          </div>
        ))}
      </>
    );
  };

  const [showImage, setShowImages] = useState(true);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="flex justify-center align-middle w-full px-1 md:px-2 md:pt-2 mb-3">
      <div className="pt-28 md:pt-24 w-full bg-blue-200 rounded-3xl">
        <div className="px-2">
          <div className="bg-blue-500 rounded-[40px] py-4 mb-2">
            <p className="text-xl md:text-3xl text-gray-50 text-center font-bold">
              {name}
            </p>
            <p className="text-sm text-gray-100 text-center">{detail}</p>
          </div>
          <div>
            <div className="relative">
              <button
                onClick={goToPrevious}
                className="absolute ml-2 h-8 w-8 left-0 top-1/2 -translate-y-1/2 bg-white/65 rounded-2xl md:hidden z-10"
              >
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
                      d="M11 18.75C10.9015 18.7505 10.8038 18.7313 10.7128 18.6935C10.6218 18.6557 10.5393 18.6001 10.47 18.53L4.47001 12.53C4.32956 12.3894 4.25067 12.1988 4.25067 12C4.25067 11.8013 4.32956 11.6107 4.47001 11.47L10.47 5.47003C10.6122 5.33755 10.8002 5.26543 10.9945 5.26885C11.1888 5.27228 11.3742 5.35099 11.5116 5.48841C11.649 5.62582 11.7278 5.81121 11.7312 6.00551C11.7346 6.19981 11.6625 6.38785 11.53 6.53003L6.06001 12L11.53 17.47C11.6705 17.6107 11.7494 17.8013 11.7494 18C11.7494 18.1988 11.6705 18.3894 11.53 18.53C11.4608 18.6001 11.3782 18.6557 11.2872 18.6935C11.1962 18.7313 11.0986 18.7505 11 18.75Z"
                      fill="#2563EB"
                    ></path>{" "}
                    <path
                      d="M19 12.75H5C4.80109 12.75 4.61032 12.671 4.46967 12.5303C4.32902 12.3897 4.25 12.1989 4.25 12C4.25 11.8011 4.32902 11.6103 4.46967 11.4697C4.61032 11.329 4.80109 11.25 5 11.25H19C19.1989 11.25 19.3897 11.329 19.5303 11.4697C19.671 11.6103 19.75 11.8011 19.75 12C19.75 12.1989 19.671 12.3897 19.5303 12.5303C19.3897 12.671 19.1989 12.75 19 12.75Z"
                      fill="#2563EB"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute mr-2 border h-8 w-8 right-0 top-1/2 -translate-y-1/2 bg-white/65 rounded-2xl md:hidden z-10"
              >
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
                      d="M13 18.75C12.9015 18.7505 12.8038 18.7313 12.7128 18.6935C12.6218 18.6557 12.5393 18.6001 12.47 18.53C12.3296 18.3894 12.2507 18.1988 12.2507 18C12.2507 17.8013 12.3296 17.6107 12.47 17.47L17.94 12L12.47 6.53003C12.3375 6.38785 12.2654 6.19981 12.2688 6.00551C12.2723 5.81121 12.351 5.62582 12.4884 5.48841C12.6258 5.35099 12.8112 5.27228 13.0055 5.26885C13.1998 5.26543 13.3878 5.33755 13.53 5.47003L19.53 11.47C19.6705 11.6107 19.7494 11.8013 19.7494 12C19.7494 12.1988 19.6705 12.3894 19.53 12.53L13.53 18.53C13.4608 18.6001 13.3782 18.6557 13.2872 18.6935C13.1962 18.7313 13.0986 18.7505 13 18.75Z"
                      fill="#2563EB"
                    ></path>{" "}
                    <path
                      d="M19 12.75H5C4.80109 12.75 4.61032 12.671 4.46967 12.5303C4.32902 12.3897 4.25 12.1989 4.25 12C4.25 11.8011 4.32902 11.6103 4.46967 11.4697C4.61032 11.329 4.80109 11.25 5 11.25H19C19.1989 11.25 19.3897 11.329 19.5303 11.4697C19.671 11.6103 19.75 11.8011 19.75 12C19.75 12.1989 19.671 12.3897 19.5303 12.5303C19.3897 12.671 19.1989 12.75 19 12.75Z"
                      fill="#2563EB"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
              <div className="grid md:grid-cols-2 gap-2 overflow-hidden rounded-2xl">
                <div
                  className="flex md:hidden transition-transform duration-500 ease-in-out h-full"
                  style={{ transform: `translateX(-${imageIndex * 100}%)` }}
                >
                  {allImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Slide ${i}`}
                      className="w-full flex-shrink-0 object-cover h-full rounded-2xl"
                    />
                  ))}
                </div>

                <div className="hidden md:block">
                  <img
                    className="h-auto w-full md:h-full md:max-w-full rounded-3xl"
                    src={firstImage}
                    alt=""
                  />
                </div>
                <div className="hidden md:grid gap-2 grid-cols-2">
                  <GridImageList gridList={firstGridImageList} />
                </div>
              </div>
              <div className="flex justify-center overflow-hidden">
                <button
                  onClick={() => setShowImages(!showImage)}
                  className={`bg-blue-500 hidden md:block shadow-xl animate-bounce text-gray-50 w-8 p-2  rounded-full absolute font-bold -bottom-4 text-xs transition-all duration-300 ease-in`}
                >
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
                        d="M12 19.75C11.9015 19.7504 11.8038 19.7312 11.7128 19.6934C11.6218 19.6557 11.5392 19.6001 11.47 19.53L5.47 13.53C5.33752 13.3878 5.2654 13.1997 5.26882 13.0054C5.27225 12.8111 5.35096 12.6258 5.48838 12.4883C5.62579 12.3509 5.81118 12.2722 6.00548 12.2688C6.19978 12.2654 6.38782 12.3375 6.53 12.47L12 17.94L17.47 12.47C17.6122 12.3375 17.8002 12.2654 17.9945 12.2688C18.1888 12.2722 18.3742 12.3509 18.5116 12.4883C18.649 12.6258 18.7277 12.8111 18.7312 13.0054C18.7346 13.1997 18.6625 13.3878 18.53 13.53L12.53 19.53C12.4608 19.6001 12.3782 19.6557 12.2872 19.6934C12.1962 19.7312 12.0985 19.7504 12 19.75Z"
                        fill="#ffffff"
                      ></path>{" "}
                      <path
                        d="M12 19.75C11.8019 19.7474 11.6126 19.6676 11.4725 19.5275C11.3324 19.3874 11.2526 19.1981 11.25 19V5C11.25 4.80109 11.329 4.61032 11.4697 4.46967C11.6103 4.32902 11.8011 4.25 12 4.25C12.1989 4.25 12.3897 4.32902 12.5303 4.46967C12.671 4.61032 12.75 4.80109 12.75 5V19C12.7474 19.1981 12.6676 19.3874 12.5275 19.5275C12.3874 19.6676 12.1981 19.7474 12 19.75Z"
                        fill="#ffffff"
                      ></path>{" "}
                    </g>
                  </svg>
                </button>
              </div>
              <div
                className={`pt-2 hidden md:grid md:grid-cols-2 gap-2 overflow-hidden transition-all ease-in duration-500 ${showImage ? "max-h-0" : "max-h-svh pb-2"}`}
              >
                <div className="hidden md:grid gap-2 grid-cols-2">
                  <GridImageList gridList={secondGridImageList} />
                </div>
                <div className="">
                  <img
                    className="h-full max-w-full rounded-xl"
                    src="https://woop14abphufecql.public.blob.vercel-storage.com/apartmani/a1/WEB_Prgic_Appartement_1_013-QRkIFIk4lODf5QULMtILkmo04DNtlD.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex pt-2 md:pt-0 flex-col md:flex-row justify-center md:justify-between gap-2">
            <form
              onSubmit={sendEmail}
              className="flex flex-col bg-white px-8 rounded-xl py-14 md:py-0 w-full justify-center"
            >
              <label for="name" className="text-gray-700 font-bold">
                Ime
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="border-0 border-b-2 rounded-md px-0 text-gray-600 focus:ring-0"
              />

              <label
                for="email"
                className="pt-2 md:pt-8 text-gray-700 font-bold"
              >
                email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="border-0 border-b-2 rounded-md px-0 text-gray-600 focus:ring-0"
              />
              <label
                for="message"
                className="pt-2 md:pt-8 text-gray-700 font-bold"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="border rounded-md"
                rows={3}
              />
              <div className="pt-4">
                <button
                  type="submit"
                  className="py-3 px-5 text-sm font-medium text-center text-gray-50 rounded-lg bg-blue-500 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                >
                  Send message
                </button>
              </div>
            </form>
            {showPopUp && (
              <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300">
                Please enter a valid date!
              </div>
            )}

            <DateRangePicker
              disabledDates={disabledDates}
              ranges={range}
              onChange={(item) => setRange([item.selection])}
              staticRanges={[]}
              moveRangeOnFirstSelection={false}
              showDateDisplay={false}
              showSelectionPreview={true}
              months={1}
              direction="horizontal"
              minDate={new Date()}
            />
          </div>
          <div>
            <div className="grid text-gray-600 grid-cols-1 md:grid-cols-3 p-4 bg-white rounded-3xl my-2">
              <div className="">
                <div className="flex justify-center p-2">
                  <img className="p-2" src={LocationSvg} alt="Location" />
                  <p className="text-lg font-bold p-2">
                    {t("apartments.details.nearby")}
                  </p>
                </div>
                <ul>
                  {t("apartments.details.near", { returnObjects: true }).map(
                    (item: string, index: number) => (
                      <li className="p-2 font-medium text-center" key={index}>
                        {item}
                      </li>
                    ),
                  )}
                </ul>
                <div className="flex justify-center p-2">
                  <img className="p-2 w-12" src={BathroomSvg} alt="Bathroom " />
                  <p className="text-lg font-bold p-2">
                    {t("apartments.details.bath")}
                  </p>
                </div>
                <ul>
                  {t("apartments.details.bathroom", {
                    returnObjects: true,
                  }).map((item: string, index: number) => (
                    <li className="p-2 font-medium text-center" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex justify-center p-2">
                  <img className="p-2 w-12" src={WifiSvg} alt="Wifi " />
                  <p className="text-lg font-bold p-2">Wifi</p>
                </div>
                <p className="text-center">{t("apartments.details.wifi")}</p>

                <div className="flex justify-center p-2">
                  <img className="p-2 w-12" src={PoolSvg} alt="Pool " />
                  <p className="text-lg font-bold p-2">Pool</p>
                </div>
                <ul>
                  <li className="p-2 font-medium text-center">09-20</li>
                </ul>
                <div className="flex justify-center p-2">
                  <img className="p-2 w-12" src={BedSvg} alt="Bed " />
                  <p className="text-lg font-bold p-2">
                    {t("apartments.details.bedroom")}
                  </p>
                </div>
                <ul>
                  {t("apartments.details.bedroomInfo", {
                    returnObjects: true,
                  }).map((item: string, index: number) => (
                    <li className="p-2 font-medium text-center" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex justify-center p-2">
                  <img className="p-2 w-12" src={KitchenSvg} alt="Kitchen " />
                  <p className="text-lg font-bold p-2">
                    {t("apartments.details.kitchen")}
                  </p>
                </div>
                <ul>
                  {t("apartments.details.kitchenInfo", {
                    returnObjects: true,
                  }).map((item: string, index: number) => (
                    <li className="p-2 font-medium text-center" key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AparmentDetails;
