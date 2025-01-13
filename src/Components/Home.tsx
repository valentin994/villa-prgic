import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import heroPicture from "../assets/home_hero_picture.jpg";
import account from "../assets/account.svg";

function Home() {
    const [ref, inView] = useInView()
    const [ref2, inView2] = useInView()
    const [ref3, inView3] = useInView()
    const [ref4, inView4] = useInView()

  return (
      <div>
    <div className="flex mx-2 mt-2 flex-col flex-grow ">
      <div className="flex flex-col pt-36 md:pt-0 md:justify-center min-h-screen rounded-[40px] flex-grow bg-[url(https://ucb8cbf6ef364c21e748d9847328.previews.dropboxusercontent.com/p/thumb/AChruCZnbtC_LtQWzQVCTpXgofcumcJM2OmAooOBP5fC56_6S4Jj5b1WB4IXj3o9iKO0gznc3qQZaG1ZJ6Cy6LAibWw9vlZJcA-_sDZrp7oiOP8k1c-jtUnr9gu7CCaRs6Bq67D94TOF2GxF1WsoPHBKCTX471oEly9LMtkLpvWny2-oSVRCN8Im60kynTzIDLGuj6jHlpzQ7o2rOqGpnQKpzFp1Dvypuu9bJFXqKMXeMYdYNwKuzZJrSP1PID1iNRajG5JzLv7Uol1jma_ToVvn3_bNDD5UKmMAdJpoY3FQZb52BCHGVultypRaj4VQpRCDyqcg0tj5jjNlvA3grs-b/p.jpeg)]">
        <div className="px-10 text-center md:text-left md:px-20 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
           <p className="text-gray-50 md:text-9xl text-5xl">Find your </p>  
           <p className="text-gray-50 md:text-9xl text-5xl">ideal stay</p>  
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
              <input className="bg-transparent w-full md:text-3xl text-xl md:placeholder:text-3xl placeholder:text-xl placeholder:text-gray-50" placeholder="01/01/2025" datatype="date" />
            </div>
        </div>
        <div className="flex flex-col border-b-2 gap-2">
            <p className="text-sm">Departure date</p>
            <div className="">
              <input className="bg-transparent w-full md:text-3xl text-xl md:placeholder:text-3xl placeholder:text-xl placeholder:text-gray-50" placeholder="01/01/2025" datatype="date" />
            </div>
        </div>
        <div className="text-2xl text-center bg-gray-200 text-blue-500  rounded-xl my-auto ">
          <button className=" py-4 px-2 md:px-6 md:py-8 font-semibold">Send inquiry</button>
        </div>
      </div>
    </div>
      <div className="py-4 px-4 bg-gray-100 -mt-16">
      <div className="flex flex-col md:flex-row gap-4 mt-16 mb-4">
        <div className="rounded-xl bg-gray-100 py-4 px-8 w-full">
            <h1 className="text-blue-500 text-center text-3xl">Ante</h1>
            <div className="flex justify-center mt-8">
                <div className="w-52 h-52 rounded-full bg-gray-900"></div>
            </div>
            <p className="text-gray-500 pt-8 md:text-left text-center">Ante is your friendly host, passionate about sharing the beauty of his seaside apartments. A local fishing enthusiast, he’s always happy to share tips or stories about life by the sea. Ante is dedicated to making your stay comfortable and memorable!</p>
        </div>
        <div className="flex flex-col justify-center py-8 px-8 w-full gap-4">
            <h1 className="text-blue-400 text-7xl text-center">Your</h1>
            <h1 className="text-blue-400 text-7xl text-center">Hosts</h1>
        </div>
        <div className="rounded-xl bg-gray-100 py-4 px-8 w-full">
            <h1 className="text-blue-500 text-3xl text-center">Mirjana</h1>
            <div className="flex justify-center mt-8">
                <div className="w-52 h-52 rounded-full bg-gray-900"></div>
            </div>
            <p className="text-gray-500 pt-8 md:text-left text-center">Mirjana is your welcoming host, ensuring every detail of her seaside apartments reflects warmth and comfort. She loves meeting new people and takes pride in creating a relaxing getaway for her guests. With Mirjana, you’ll feel right at home by the sea!</p>
        </div>
      </div>
      </div>
      </div>
  );
}

export default Home;
