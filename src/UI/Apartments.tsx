import { iApartment } from "../interfaces";
import ApartmentCard from "../Components/Cards/ApartmentCard";
import { useTranslation } from "react-i18next";
import apartmentData from "../data/aparment_data.json";

function Apartments() {
  const { t } = useTranslation();
  const apartmentDetails = apartmentData as iApartment[];

  return (
    <div className="-mt-20 text-gray-50 mb-16 mx-1 flex flex-col justify-center rounded-[40px]">
      <div className="bg-blue-600 shadow border pt-20 rounded-[40px]">
        <h1 className="px-8 pt-12 md:px-10 text-4xl md:text-5xl font-extrabold">
          {t("apartments.welcome")}
        </h1>
        <p className="px-8 rounded-br-[40px] rounded-bl-[40px] pt-4 pb-16 md:px-10 font-semibold">
          {t("apartments.welcomeInfo")}
        </p>
      </div>
      <div className="-mt-8">
        <div className="pt-8 pb-1 md:pb-4 ">
          {apartmentDetails.map((apartment: iApartment, index: number) => (
            <ApartmentCard
              key={apartment.link}
              apartment={apartment}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Apartments;
