import { Link } from "react-router-dom"

import heroPicture from "../assets/home_hero_picture.jpg"
import account from "../assets/account.svg"

function Home() {
    return (
        <div className="text-primary">
            <div className="">
                <img className="object-cover max-w-full h-auto" src={heroPicture} alt="Pool picture"/>
            </div>
            <div className="container flex items-center justify-center py-4">
                <p className="text-4xl py-4 px-8 text-center font-light">Uzivajte u odmoru s nama</p> 
            </div>
            <div className="container flex flex-wrap items-center justify-around p-2">
                <Link to="/apartments">
                    <button className="bg-secondary hover:bg-black text-white text-xl py-4 px-6 rounded-full">Book Now</button>
                </Link>      
            <div className="container flex flex-wrap items-center justify-around py-4 px-10">
                <p className="text-4xl w-full text-center py-8 font-light">Your Hosts</p>
                <img className="w-16" src={account} />
                <img className="w-16" src={account} />
            </div>
            </div>
            <div className="container flex flex-wrap items-center justify-around p-2 mt-10 bg-gray-100">
                <p className="text-4xl w-full text-center font-light py-6">About Us</p>
                <p className="text-secondary px-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
        </div>
           )
}

export default Home
