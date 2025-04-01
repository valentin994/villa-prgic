import { iApartment } from "../interfaces";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  interface iApartmentList extends Array<iApartment> {}
  const apartmentDetails: iApartmentList = [
    {
      name: "Apartman 1",
      link: "apartment_1",
      detail: "A three bedroom apartment for six people.",
      features: ["Kitchen", "Pool", "Coffee Maker"],
      price: 200,
      summary:
        "This spacious 3-bedroom apartment offers comfortable living with a well-equipped kitchen, a private balcony for outdoor relaxation, and access to a refreshing pool for leisure. Additionally, it includes a modern bathroom for convenience, making it an ideal choice for those seeking a comfortable and enjoyable living space.",
      number_of_beds: 3,
    },
    {
      name: "Apartman 2",
      link: "apartment_2",
      detail: "A two bedroom apartment for four people.",
      features: ["Kitchen", "Pool", "Coffee Maker"],
      price: 200,
      summary:
        "This inviting two-bedroom apartment provides a cozy living space with a functional kitchen, a private balcony for outdoor enjoyment, and access to a communal pool for recreation. With two comfortable bedrooms, it's perfect for a small family or roommates seeking a convenient and comfortable place to call home.",
      number_of_beds: 2,
    },
    {
      name: "Apartman 3",
      link: "apartment_3",
      detail: "A one bedroom apartment for two people.",
      features: ["Kitchen", "Pool", "Coffee Maker"],
      price: 200,
      summary:
        "This charming one-bedroom apartment offers a cozy living environment with a well-appointed kitchen, a private balcony for personal relaxation, and access to communal amenities like a pool. Ideal for singles or couples, it provides a convenient and comfortable living space for those looking for a smaller, more intimate home.",
      number_of_beds: 1,
    },
  ];

  return (
    <div>
      <div className="flex mx-2 mt-2 flex-col flex-grow ">
        <div className="flex flex-col md:px-10 lg:flex-row gap-8 pb-40 justify-center md:justify-between rounded-[40px] flex-grow bg-cover bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/hero-CfC2com90lIhkxLsRTg4oN28Z1VXpE.jpg)] bg-gray-300 bg-blend-multiply">
          <div className="flex flex-col justify-center w-full lg:max-w-[520px] font-extrabold text-gray-50 pt-40 text-4xl px-2 md:text-5xl lg:text-8xl">
            <h1 className="text-center">{t("hero.part1")}</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row flex-col md:pt-20 lg:pt-40 pb-2 gap-8">
            <Link
              to="/apartments/apartment_1"
              state={{
                name: apartmentDetails[0].name,
                detail: apartmentDetails[0].detail,
                features: apartmentDetails[0].features,
                price: apartmentDetails[0].price,
              }}
            >
              <div className="bg-gray-100 rounded-[40px] w-64 py-2 px-2 mx-auto">
                <div className="h-40 rounded-[30px] w-full bg-blue-500 bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/apartman_1-WCXsNwvMXYQIV9fQv7DrebUUm27i7Z.jpg)] bg-cover"></div>
                <h1 className="text-xl py-2 font-bold px-4 text-gray-600 text-center">
                  {t("apartman")} 1
                </h1>
              </div>
            </Link>
            <Link to="/region">
              <div className="bg-gray-100 rounded-[40px] w-64 py-2 px-2 mx-auto">
                <div className="h-40 rounded-[30px] w-full bg-blue-500 bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/rooms-np3C9gmuZJsbyyTP35YwyR7KO9luvy.jpg)] bg-cover"></div>
                <h1 className="text-xl py-2 font-bold px-4 text-gray-600 text-center">
                  {t("apartman")} 2
                </h1>
              </div>
            </Link>
            <Link to="/apartments">
              <div className="bg-gray-100 rounded-[40px] w-64 py-2 px-2 mx-auto">
                <div className="h-40 rounded-[30px] w-full bg-blue-500 bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/apartman_3-T2Zpas2OxGzLth8cMrgCpGFwTKxoCS.jpg)] bg-cover"></div>
                <h1 className="text-xl py-2 font-bold px-4 text-gray-600 text-center">
                  {t("apartman")} 3
                </h1>
              </div>
            </Link>
            <Link to="/region">
              <div className="bg-gray-100 rounded-[40px] w-64 py-2 px-2 mx-auto">
                <div className="h-40 rounded-[30px] w-full bg-blue-500 bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/kanica-RTfANLcRw8Nqg18PiQZk905sZ1pVl4.jpg)] bg-cover"></div>
                <h1 className="text-xl py-2 font-bold px-4 text-gray-600 text-center">
                  {t("istrazi")} Kanicu
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-blue-600 rounded-[40px] mt-3 md:px-20 px-12 py-14 text-gray-50 flex flex-col md:flex-row gap-4 justify-between">
          <div className="font-bold">
            <h1 className="text-3xl md:text-right">{t("cta.part1")}</h1>
            <h1 className="text-3xl md:text-right">{t("cta.part2")}</h1>
            <h1 className="text-3xl underline md:text-right">
              {t("cta.part3")}.
            </h1>
          </div>
          <div className="flex flex-col border-b-2 gap-2">
            <p className="text-sm">{t("cta.dateA")}</p>
            <div className="">
              <input
                className="bg-transparent border-0 w-full md:text-3xl text-xl md:placeholder:text-3xl placeholder:text-xl placeholder:text-gray-50"
                placeholder="01/01/2025"
                datatype="date"
              />
            </div>
          </div>
          <div className="flex flex-col border-b-2 gap-2">
            <p className="text-sm">{t("cta.dateD")}</p>
            <div className="">
              <input
                className="bg-transparent w-full border-0 md:text-3xl text-xl md:placeholder:text-3xl placeholder:text-xl placeholder:text-gray-50"
                placeholder="01/01/2025"
                datatype="date"
              />
            </div>
          </div>
          <div className="text-2xl text-center bg-gray-200 text-blue-500  rounded-xl my-auto ">
            <button className=" py-4 px-2 md:px-6 md:py-8 font-semibold">
              {t("cta.sendI")}
            </button>
          </div>
        </div>
      </div>
      <div className="py-4 px-2 -mt-28">
        <div className="flex flex-col rounded-b-[40px] bg-gray-50 md:flex-row gap-4 pt-28 pb-8 md:px-24">
          <div className="rounded-xl py-4 px-8 w-full">
            <h1 className="text-blue-500 text-center font-bold text-3xl">
              Ante
            </h1>
            <div className="flex justify-center mt-8">
              <div className="w-56 h-56 rounded-full bg-cover bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/ante-dV1ObCdtD1EvUIo4SHhJLABknNK3jr.jpg)]"></div>
            </div>
            <p className="text-gray-500 pt-8 md:text-left text-center">
              {t("hosts.anteInfo")}
            </p>
          </div>
          <div className="flex flex-col justify-center py-8 px-8 w-full gap-4">
            <h1 className="text-blue-400 text-7xl text-center">
              {t("hosts.your")}
            </h1>
            <h1 className="text-blue-400 text-7xl text-center">
              {t("hosts.hosts")}
            </h1>
          </div>
          <div className="rounded-xl py-4 px-8 w-full">
            <h1 className="text-blue-500 text-3xl font-bold text-center">
              Mirjana
            </h1>
            <div className="flex justify-center mt-8">
              <div className="w-56 h-56 rounded-full bg-cover bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/mirjana-DX3jbJhqvFC7cn0CZ1Kt24dWa37bSb.jpg)]"></div>
            </div>
            <p className="text-gray-500 pt-8 md:text-left text-center">
              {t("hosts.mirjanaInfo")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
