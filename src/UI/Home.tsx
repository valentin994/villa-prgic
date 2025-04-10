import { iApartment } from "../interfaces";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HomeCard from "../Components/Cards/HomeCard";
import apartmentData from "../data/aparment_data.json";

function Home() {
  const { t } = useTranslation();
  const iapartmentData = apartmentData as iApartment[];

  return (
    <div>
      <div className="flex -mt-20 mx-1 md:-mt-18 flex-col flex-grow ">
        <div className="flex shadow border flex-col md:px-10 lg:flex-row gap-8 pb-40 justify-center md:justify-between rounded-[40px] flex-grow bg-cover bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/hero-CfC2com90lIhkxLsRTg4oN28Z1VXpE.jpg)] bg-gray-300 bg-blend-multiply">
          <div className="flex flex-col justify-center w-full lg:max-w-[520px] pt-40 pb-20">
            <h1 className="text-center text-6xl px-2 md:text-5xl lg:text-8xl font-extrabold font-roboto text-gray-50">
              {t("hero.part1")}
            </h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row flex-col md:pt-20 lg:pt-40 pb-2 gap-8">
            {iapartmentData.map((apartment: iApartment, index: number) => (
              <HomeCard key={index} apartment={apartment} index={index} />
            ))}
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
      </div>
      <div className="py-4 px-1 mb-8 -mt-28">
        <div className="flex flex-col md:flex-row gap-4 pt-28 pb-8 md:px-24">
          <div className="rounded-xl py-4 px-8 w-full">
            <h1 className="text-blue-500 text-center font-bold text-4xl">
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
            <h1 className="text-blue-400 text-5xl md:text-7xl text-center">
              {t("hosts.your")}
            </h1>
            <h1 className="text-blue-400 text-5xl md:text-7xl text-center">
              {t("hosts.hosts")}
            </h1>
          </div>
          <div className="rounded-xl py-4 px-8 w-full">
            <h1 className="text-blue-500 text-4xl font-bold text-center">
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
