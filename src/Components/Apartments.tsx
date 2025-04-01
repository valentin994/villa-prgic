import { iApartment } from "../interfaces";
import AparmentCard from "./ApartmentCard";
import { useTranslation } from "react-i18next";

function Apartments() {
  const { t } = useTranslation();
  interface iApartmentList extends Array<iApartment> {}
  const apartmentDetails: iApartmentList = [
    {
      name: t("apartman") + " 1",
      link: "apartment_1",
      detail: t("apartments.a1Info"),
      features: ["Kitchen", "Pool", "Coffee Maker"],
      price: 200,
      summary:
        "This spacious 3-bedroom apartment offers comfortable living with a well-equipped kitchen, a private balcony for outdoor relaxation, and access to a refreshing pool for leisure. Additionally, it includes a modern bathroom for convenience, making it an ideal choice for those seeking a comfortable and enjoyable living space.",
      number_of_beds: 3,
    },
    {
      name: t("apartman") + " 2",
      link: "apartment_2",
      detail: t("apartments.a2Info"),
      features: ["Kitchen", "Pool", "Coffee Maker"],
      price: 200,
      summary:
        "This inviting two-bedroom apartment provides a cozy living space with a functional kitchen, a private balcony for outdoor enjoyment, and access to a communal pool for recreation. With two comfortable bedrooms, it's perfect for a small family or roommates seeking a convenient and comfortable place to call home.",
      number_of_beds: 2,
    },
    {
      name: t("apartman") + " 3",
      link: "apartment_3",
      detail: t("apartments.a3Info"),
      features: ["Kitchen", "Pool", "Coffee Maker"],
      price: 200,
      summary:
        "This charming one-bedroom apartment offers a cozy living environment with a well-appointed kitchen, a private balcony for personal relaxation, and access to communal amenities like a pool. Ideal for singles or couples, it provides a convenient and comfortable living space for those looking for a smaller, more intimate home.",
      number_of_beds: 1,
    },
  ];

  return (
    <div className="pt-24 rounded-[40px] bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/apartments-FZ3rsKJMYR9dq9IkFJugsYMk1TilBf.jpg)] mx-2 my-2 mb-3">
      <h1 className="pt-4 px-8 md:px-10 text-gray-200 text-2xl md:text-3xl font-extrabold">
        {t("apartments.welcome")}
      </h1>
      <p className="px-8 pt-4 md:px-10 font-semibold text-gray-100">
        {t("apartments.welcomeInfo")}
      </p>
      {apartmentDetails.map((apartment: iApartment) => (
        <AparmentCard key={apartment.link} {...apartment} />
      ))}
    </div>
  );
}

export default Apartments;
