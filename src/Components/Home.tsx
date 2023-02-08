import { Link } from "react-router-dom"

import heroPicture from "../assets/home_hero_picture.jpg"
import account from "../assets/account.svg"

function Home() {
    return (
        <div>
            <div className="bg-indigo">
                <img className="object-cover max-w-full h-auto" src={heroPicture} alt="Pool picture"/>
            </div>
            <div className="container flex items-center justify-center py-4">
                <p className="text-4xl py-4 px-8 text-center font-bold">Uzivajte u odmoru sa nama</p> 
            </div>
            <div className="container flex flex-wrap items-center justify-around p-2">
                <Link to="/apartments">
                    <button className="bg-black hover:bg-black text-white text-xl font-bold py-4 px-6 rounded-full">Book Now</button>
                </Link>                <p className="text-4xl w-full text-center py-8">Your Hosts</p>
                <img className="w-16" src={account} />
                <img className="w-16" src={account} />
            </div>
        </div>
           )
}

export default Home
