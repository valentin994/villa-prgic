import { iApartment } from "../interfaces";
import AparmentCard from "./ApartmentCard";

function Apartments() {
  interface iApartmentList extends Array<iApartment> {}
  const apartmentDetails: iApartmentList = [
    {
      name: "Poolside Retreat",
      detail: "A three bedroom apartment for six people.",
      features: ["Kitchen", "Pool", "Coffee Maker"],
      price: 200,
      summary:
        "This spacious 3-bedroom apartment offers comfortable living with a well-equipped kitchen, a private balcony for outdoor relaxation, and access to a refreshing pool for leisure. Additionally, it includes a modern bathroom for convenience, making it an ideal choice for those seeking a comfortable and enjoyable living space.",
      number_of_beds: 3,
    },
    {
      name: "Poolside Paradise",
      detail: "A two bedroom apartment for four people.",
      features: ["Kitchen", "Pool", "Coffee Maker"],
      price: 200,
      summary:
        "This inviting two-bedroom apartment provides a cozy living space with a functional kitchen, a private balcony for outdoor enjoyment, and access to a communal pool for recreation. With two comfortable bedrooms, it's perfect for a small family or roommates seeking a convenient and comfortable place to call home.",
      number_of_beds: 2,
    },
    {
      name: "Aqua Bliss",
      detail: "A one bedroom apartment for two people.",
      features: ["Kitchen", "Pool", "Coffee Maker"],
      price: 200,
      summary:
        "This charming one-bedroom apartment offers a cozy living environment with a well-appointed kitchen, a private balcony for personal relaxation, and access to communal amenities like a pool. Ideal for singles or couples, it provides a convenient and comfortable living space for those looking for a smaller, more intimate home.",
      number_of_beds: 1,
    },
  ];

  return (
    <div className="pt-24 rounded-[40px] bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/apartments-FZ3rsKJMYR9dq9IkFJugsYMk1TilBf.jpg)] mx-2 my-2">
      <h1 className="pt-4 px-4 md:px-10 text-xl text-gray-200 md:text-3xl font-bold">
        Welcome
      </h1>
      <p className="px-4 md:px-10 font-semibold text-gray-100">
        Our charming house offers three comfortable apartments, each
        thoughtfully designed to feel like home. Whether you’re looking for a
        one-bedroom retreat or more space to share, you’ll find an apartment
        that fits your needs.
      </p>
      {apartmentDetails.map((apartment: iApartment) => (
        <AparmentCard key={apartment.name} {...apartment} />
      ))}
    </div>
  );
}

export default Apartments;
