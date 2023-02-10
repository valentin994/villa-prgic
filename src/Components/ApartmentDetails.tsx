import {useLocation} from "react-router-dom"

function AparmentDetails() {
    const { state }  = useLocation() 
    const { name, detail, features, price } = state

    return (
        <div className="container border-4">
           <p className="text-3xl text-center font-bold">{name}</p>
        </div>
           )
}

export default AparmentDetails
