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
    <div className="flex mx-2 mt-2 flex-col flex-grow min-h-screen">
      <div className="flex flex-col justify-center rounded-[40px] flex-grow bg-[url(https://ucb8cbf6ef364c21e748d9847328.previews.dropboxusercontent.com/p/thumb/AChruCZnbtC_LtQWzQVCTpXgofcumcJM2OmAooOBP5fC56_6S4Jj5b1WB4IXj3o9iKO0gznc3qQZaG1ZJ6Cy6LAibWw9vlZJcA-_sDZrp7oiOP8k1c-jtUnr9gu7CCaRs6Bq67D94TOF2GxF1WsoPHBKCTX471oEly9LMtkLpvWny2-oSVRCN8Im60kynTzIDLGuj6jHlpzQ7o2rOqGpnQKpzFp1Dvypuu9bJFXqKMXeMYdYNwKuzZJrSP1PID1iNRajG5JzLv7Uol1jma_ToVvn3_bNDD5UKmMAdJpoY3FQZb52BCHGVultypRaj4VQpRCDyqcg0tj5jjNlvA3grs-b/p.jpeg)]">
        <div className="drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
           <p className="px-20 text-gray-50 text-9xl">Find your </p>  
           <p className="px-20 text-gray-50 text-9xl">ideal stay</p>  
        </div>
      </div>
      <div className="bg-blue-600 rounded-[40px] mt-3 px-20 py-14 text-gray-50 flex justify-between">
        <div className="font-bold">
          <h1 className="text-3xl">Book now</h1>
          <h1 className="text-3xl">your ideal</h1>
          <h1 className="text-3xl underline text-right">stay!</h1>
        </div>
        <div className="flex flex-col border-b-2 gap-2">
            <p className="text-sm">Arrival date</p>
            <div className="">
              <input className="bg-transparent text-3xl placeholder:text-3xl placeholder:text-gray-50" placeholder="01/01/2025" datatype="date" />
            </div>
        </div>
        <div className="flex flex-col border-b-2 gap-2">
            <p className="text-sm">Departure date</p>
            <div className="">
              <input className="bg-transparent text-3xl placeholder:text-3xl placeholder:text-gray-50" placeholder="01/01/2025" datatype="date" />
            </div>
        </div>
        <div className="text-2xl bg-gray-200 text-blue-500  rounded-xl my-auto ">
          <button className="px-6 py-8 font-semibold">Send inquiry</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
