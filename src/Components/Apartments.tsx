import { iApartment } from "../interfaces"

function Apartments() {
    
    interface iApartmentList extends Array<iApartment>{}
    const apartmentDetails: iApartmentList = [
        { name: "Apt 1", detail: "A three bedroom apartment for six people.", features: ["Kitchen", "Pool", "Coffee Maker"], price: 200 },
        { name: "Apt 2", detail: "A two bedroom apartment for four people.", features: ["Kitchen", "Pool", "Coffee Maker"], price: 200 },
        { name: "Apt 1", detail: "A one bedroom apartment for two people.", features: ["Kitchen", "Pool", "Coffee Maker"], price: 200 },
    ]
    
    return (
    <div>
        <p className="text-center w-full p-4 my-6 text-xl">Pool and outside kitchen are included with every apartment</p>
        <a href="#" className="flex flex-col my-10 py-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Aparment 1</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
            </div>
        </a>
        <a href="#" className="flex flex-col my-10 py-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Aparment 2</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
            </div>
        </a>
        <a href="#" className="flex flex-col my-10 py-4 items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Aparment 3</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"></p>
            </div>
        </a>
    </div>
           )
}

export default Apartments
