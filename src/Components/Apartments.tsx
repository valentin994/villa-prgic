import { iApartment } from "../interfaces";
import ApartmentCard from "./ApartmentCard";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import apartmentData from "../data/aparment_data.json";

function Apartments() {
  const { t } = useTranslation();
  const [apartmentDetails, setApartments] = useState<iApartment>(
    apartmentData as iApartment,
  );
  useEffect(() => {
    console.log(apartmentDetails);
  }, []);
  return (
    <div className="pt-24 flex flex-col justify-center min-h-screen bg-cover bg-no-repeat rounded-lg bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/apartments-FZ3rsKJMYR9dq9IkFJugsYMk1TilBf.jpg)] mx-2 my-2 mb-3">
      <h1 className="pt-4 px-8 md:px-10 text-gray-200 text-2xl md:text-3xl font-extrabold">
        {t("apartments.welcome")}
      </h1>
      <p className="px-8 pt-4 md:px-10 font-semibold text-gray-100">
        {t("apartments.welcomeInfo")}
      </p>
      {apartmentDetails.map((apartment: iApartment) => (
        <ApartmentCard key={apartment.link} {...apartment} />
      ))}
    </div>
  );
}

export default Apartments;
