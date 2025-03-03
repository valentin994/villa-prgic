import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  const [ref4, inView4] = useInView();

  return (
    <div>
      <div className="flex mx-2 mt-2 flex-col flex-grow ">
        <div className="flex flex-col md:px-10 md:flex-row gap-8 justify-center md:justify-between pt-40 min-h-screen rounded-[40px] flex-grow bg-cover bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/hero-CfC2com90lIhkxLsRTg4oN28Z1VXpE.jpg)]">
          <div className="px-10 text-center md:text-left md:px-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            <p className="text-gray-50 md:text-9xl text-6xl font-semibold">
              {t("find")}
            </p>
            <p className="text-gray-50 md:text-9xl text-6xl pt-8 md:pt-0 font-semibold">
              ideal stay
            </p>
          </div>
          <div className="p-4 flex flex-col gap-4 justify-between">
            <Link to="/apartments">
              <div className="bg-gray-100 rounded-[40px] w-64 py-2 px-2 mx-auto">
                <div className="h-40 rounded-[30px] w-full bg-blue-500 bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/rooms-np3C9gmuZJsbyyTP35YwyR7KO9luvy.jpg)] bg-cover"></div>
                <h1 className="text-xl py-2 font-bold px-4 text-gray-600 text-center">
                  Our apartments
                </h1>
              </div>
            </Link>
            <Link to="/region">
              <div className="bg-gray-100 rounded-[40px] w-64 py-2 px-2 mx-auto">
                <div className="h-40 rounded-[30px] w-full bg-blue-500 bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/kanica-RTfANLcRw8Nqg18PiQZk905sZ1pVl4.jpg)] bg-cover"></div>
                <h1 className="text-xl py-2 font-bold px-4 text-gray-600 text-center">
                  Explore Kanica
                </h1>
              </div>
            </Link>
          </div>
        </div>
        <div className="bg-blue-600 rounded-[40px] mt-3 md:px-20 px-12 py-14 text-gray-50 flex flex-col md:flex-row gap-4 justify-between">
          <div className="font-bold">
            <h1 className="text-3xl">Book now</h1>
            <h1 className="text-3xl">your ideal</h1>
            <h1 className="text-3xl underline md:text-right">stay!</h1>
          </div>
          <div className="flex flex-col border-b-2 gap-2">
            <p className="text-sm">Arrival date</p>
            <div className="">
              <input
                className="bg-transparent w-full md:text-3xl text-xl md:placeholder:text-3xl placeholder:text-xl placeholder:text-gray-50"
                placeholder="01/01/2025"
                datatype="date"
              />
            </div>
          </div>
          <div className="flex flex-col border-b-2 gap-2">
            <p className="text-sm">Departure date</p>
            <div className="">
              <input
                className="bg-transparent w-full md:text-3xl text-xl md:placeholder:text-3xl placeholder:text-xl placeholder:text-gray-50"
                placeholder="01/01/2025"
                datatype="date"
              />
            </div>
          </div>
          <div className="text-2xl text-center bg-gray-200 text-blue-500  rounded-xl my-auto ">
            <button className=" py-4 px-2 md:px-6 md:py-8 font-semibold">
              Send inquiry
            </button>
          </div>
        </div>
      </div>
      <div className="py-4 px-2 -mt-28">
        <div className="flex flex-col rounded-b-[40px] bg-gray-50 md:flex-row gap-4 pt-28 pb-8 md:px-24">
          <div className="rounded-xl py-4 px-8 w-full">
            <h1 className="text-blue-500 text-center text-3xl">Ante</h1>
            <div className="flex justify-center mt-8">
              <div className="w-56 h-56 rounded-full bg-cover bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/ante-dV1ObCdtD1EvUIo4SHhJLABknNK3jr.jpg)]"></div>
            </div>
            <p className="text-gray-500 pt-8 md:text-left text-center">
              Ante is your friendly host, passionate about sharing the beauty of
              his seaside apartments. A local fishing enthusiast, he’s always
              happy to share tips or stories about life by the sea. Ante is
              dedicated to making your stay comfortable and memorable!
            </p>
          </div>
          <div className="flex flex-col justify-center py-8 px-8 w-full gap-4">
            <h1 className="text-blue-400 text-7xl text-center">Your</h1>
            <h1 className="text-blue-400 text-7xl text-center">Hosts</h1>
          </div>
          <div className="rounded-xl py-4 px-8 w-full">
            <h1 className="text-blue-500 text-3xl text-center">Mirjana</h1>
            <div className="flex justify-center mt-8">
              <div className="w-56 h-56 rounded-full bg-cover bg-[url(https://woop14abphufecql.public.blob.vercel-storage.com/mirjana-DX3jbJhqvFC7cn0CZ1Kt24dWa37bSb.jpg)]"></div>
            </div>
            <p className="text-gray-500 pt-8 md:text-left text-center">
              Mirjana is your welcoming host, ensuring every detail of her
              seaside apartments reflects warmth and comfort. She loves meeting
              new people and takes pride in creating a relaxing getaway for her
              guests. With Mirjana, you’ll feel right at home by the sea!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
