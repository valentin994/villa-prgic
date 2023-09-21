import { Link } from "react-router-dom";

import heroPicture from "../assets/home_hero_picture.jpg";
import account from "../assets/account.svg";

function Home() {
  return (
    <div className="text-primary">
        <p className="text-4xl font-thin text-center italic p-4 m-8 text-piction-blue hidden md:max-[4200px]:block">Lorem Ipsum ...</p>
      <div className="flex w-full justify-center items-center bg-gray-100">
        <img
          className="object-cover sm:max-w-full md:w-1/2 h-auto"
          src={heroPicture}
          alt="Pool"
        />
          <p className="w-full text-xl p-12 hidden md:max-[4200px]:block text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of type
              and scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s
              with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus
              PageMaker including versions of Lorem Ipsum</p>
      </div>
      <div className="flex items-center justify-center p-8">
        <p className="text-4xl py-4 px-8 text-center font-light text-piction-blue">
          Uzivajte u odmoru s nama
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-around p-4 w-full">
        <div className="container w-full text-center">
          <Link to="/villa-prgic/apartments">
            <button className="bg-secondary hover:bg-black text-white text-xl py-4 px-6 rounded-full">
              Book Now
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-evenly w-full p-8 mt-8">
        <p className="text-4xl w-full text-center font-light text-piction-blue">Your Hosts</p>
        <img className="w-16 py-8 my-8" alt="Account" src={account} />
        <img className="w-16 py-8 my-8" alt="Account" src={account} />
      </div>
      <div className="flex flex-wrap items-center justify-around bg-gray-100">
        <div className="container text-center p-8">
          <p className="text-4xl w-full text-center font-light p-2 text-piction-blue">About Us</p>
          <p className="text-secondary p-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
