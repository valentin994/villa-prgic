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
import ImageGallery from "../Components/ImageGallery";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useEffect, useState } from "react";
import "../calendar.css";
import emailjs from "@emailjs/browser";
import ImageGalleryDesktop from "../Components/ImageGalleryDesktop";
import FormTemplate from "../Components/FormTemplate";

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
    emailjs.init({ publicKey: "WdsWSiOZO0oOhp7nl" });
    emailjs
      .send("service_daxmzoo", "template_l03vwdg", {
        name: formData.name,
        time: new Date().getDate(),
        title: name,
        startDate: `${range[0].startDate.getDate()}-${range[0].startDate.getMonth()}-${range[0].startDate.getFullYear()}`,
        endDate: `${range[0].endDate.getDate()}-${range[0].endDate.getMonth()}-${range[0].endDate.getFullYear()}`,
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

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  return (
    <div className="flex -mt-20 justify-center align-middle w-full px-1 md:px-1 mb-3">
      <div className=" w-full rounded-3xl">
        <div className="">
          <div className="pt-24 bg-blue-600 rounded-[40px] py-4 mb-2">
            <p className="text-3xl md:text-3xl text-gray-50 text-center font-extrabold">
              {name}
            </p>
            <p className="text-sm text-gray-100 font-thin text-center">
              {detail}
            </p>
          </div>
          <div>
            <div className="">
              <ImageGallery imageUrls={allImages} />
              <ImageGalleryDesktop
                firstLargeImage={firstImage}
                firstImageList={firstGridImageList}
                secondLargeImage={secondImage}
                secondImageList={secondGridImageList}
              />
            </div>
          </div>
          <div className="flex px-1 pt-2 md:pt-0 flex-col md:flex-row justify-center md:justify-between gap-2">
            {showPopUp && (
              <div className="fixed top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity duration-300">
                Please enter a valid date!
              </div>
            )}
            <div className="md:hidden">
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
            <FormTemplate range={range} />
            <div className="hidden md:block">
              <DateRangePicker
                disabledDates={disabledDates}
                ranges={range}
                onChange={(item) => setRange([item.selection])}
                staticRanges={[]}
                moveRangeOnFirstSelection={false}
                showDateDisplay={false}
                showSelectionPreview={true}
                months={2}
                direction="horizontal"
                minDate={new Date()}
              />
            </div>
          </div>
          <div className="px-1 my-8">
            <div className="grid shadow text-gray-600 grid-cols-1 md:grid-cols-3 p-4 bg-white rounded-3xl my-2">
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
