import { iApartment } from "../interfaces"
import AparmentCard from "./ApartmentCard"

function Apartments() {
    
    interface iApartmentList extends Array<iApartment>{}
    const apartmentDetails: iApartmentList = [
        { name: "Apt 1", detail: "A three bedroom apartment for six people.", features: ["Kitchen", "Pool", "Coffee Maker"], price: 200 },
        { name: "Apt 2", detail: "A two bedroom apartment for four people.", features: ["Kitchen", "Pool", "Coffee Maker"], price: 200 },
        { name: "Apt 3", detail: "A one bedroom apartment for two people.", features: ["Kitchen", "Pool", "Coffee Maker"], price: 200 },
    ]

 
    return (
        <div>
            <p className="text-center text-xl pt-8">Every apartment has access to the pool, a fully functional kitchen.</p>
            {apartmentDetails.map((apartment: iApartment) =>        
            <AparmentCard key={apartment.name} {...apartment} />)}
        </div>
           )
}

export default Apartments
