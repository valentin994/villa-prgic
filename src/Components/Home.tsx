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
    <div className="p-16 h-full flex flex-col flex-grow ">
        <div className="pt-16 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
           <p className="px-20 text-gray-50 text-9xl">Find your </p>  
           <p className="px-20 text-gray-50 text-9xl">ideal stay</p>  
        </div>
    </div>
  );
}

export default Home;
