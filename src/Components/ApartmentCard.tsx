import { iApartment } from "../interfaces"
import { Link, Outlet } from "react-router-dom"

function AparmentCard({name, detail, features, price }: iApartment) {
    return (
    <div>
        <Link to={name} className="flex flex-col my-10 py-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{detail}</p>
            </div>
        </Link>
        <Outlet />
    </div>
           )
}

export default AparmentCard
