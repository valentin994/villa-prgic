import { useState } from "react";
import { useLocation } from "react-router-dom"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Carousel } from "react-responsive-carousel"
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import PoolImage from "../assets/IMG_3368.jpg"

function AparmentDetails() {
    const { state }  = useLocation() 
    const { name, detail, features, price } = state
    const today = new Date()
    const tomorrow = today.getDate() + 1
    const [date, setDate] = useState([today, tomorrow])
    return (
        <div className="container">
           <p className="text-3xl text-center font-light py-4">{name}</p>
            <p className="text-l text-center">{detail}</p>
            <img src={PoolImage} />
            <ul className="p-4">
                {features.map((feature: string[]) => <li key={features}>{feature}</li>)}
            </ul>
            <Calendar onChange={setDate} selectRange={true} />
        </div>
           )
}

export default AparmentDetails
