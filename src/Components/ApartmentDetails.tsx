import { useLocation } from "react-router-dom";
import LocationSvg from "../assets/location.svg";
import BathroomSvg from "../assets/bathroom.svg";
import WifiSvg from "../assets/wifi.svg";
import KitchenSvg from "../assets/kitchen.svg";
import BedSvg from "../assets/bed.svg";
import PoolSvg from "../assets/pool.svg";

function AparmentDetails() {
  const { state } = useLocation();
  const { name, detail } = state;
  return (
    <div className="flex justify-center align-middle w-full px-2 pt-2 mb-3">
      <div className="container pt-24 w-full bg-blue-200 rounded-[40px]">
        <div className="px-2">
            <div className="bg-blue-500 rounded-[40px] py-4 mb-2">
              <p className="text-3xl text-gray-50 text-center font-bold">
                {name}
              </p>
              <p className="text-lg text-gray-100 text-center">{detail}</p>
            </div>
          <div className="grid grid-cols-4 gap-1">
            <div className="col-span-2">
                <img className="rounded-[20px]" alt="Apt" src="https://woop14abphufecql.public.blob.vercel-storage.com/apartments-FZ3rsKJMYR9dq9IkFJugsYMk1TilBf.jpg" />
            </div>
            <div>
                <div className="">
                    <img className="rounded-[20px]" alt="Apt" src="https://woop14abphufecql.public.blob.vercel-storage.com/apartments-FZ3rsKJMYR9dq9IkFJugsYMk1TilBf.jpg" />
                </div>
                <div className="mt-1">
                    <img className="rounded-[20px]" alt="Apt" src="https://woop14abphufecql.public.blob.vercel-storage.com/apartments-FZ3rsKJMYR9dq9IkFJugsYMk1TilBf.jpg" />
                </div>
            </div>
            <div className="bg-gray-600">
                <img className="rounded-[20px]" alt="Apt" src="https://woop14abphufecql.public.blob.vercel-storage.com/apartments-FZ3rsKJMYR9dq9IkFJugsYMk1TilBf.jpg" />
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-4 bg-gray-100 rounded-[40px] my-2">
              <div className="">
                <div className="flex justify-center p-2">
                  <img className="p-2" src={LocationSvg} alt="Location" />
                  <p className="text-lg font-bold p-2">Near by</p>
                </div>
                <ul>
                  <li className="font-thin p-2 text-center">
                    National Park Krka
                  </li>
                  <li className="font-thin p-2 text-center">
                    Marmont's Gloriet
                  </li>
                  <li className="font-thin p-2 text-center">
                    St. Mark's Fortress
                  </li>
                  <li className="font-thin p-2 text-center">Park Malarija</li>
                  <li className="font-thin p-2 text-center">Kula Kamerlengo</li>
                  <li className="font-thin p-2 text-center">Park Fortin</li>
                </ul>
                <div className="flex justify-center p-2">
                  <img className="p-2 w-12" src={BathroomSvg} alt="Bathroom " />
                  <p className="text-lg font-bold p-2">Bathroom</p>
                </div>
                <ul>
                  <li className="font-thin p-2 text-center">toaletni papir</li>
                  <li className="font-thin p-2 text-center">ručnici</li>
                  <li className="font-thin p-2 text-center">
                    kada ili tuš kabina
                  </li>
                  <li className="font-thin p-2 text-center">
                    vlastita kupaonica
                  </li>
                  <li className="font-thin p-2 text-center">WC</li>
                  <li className="font-thin p-2 text-center">
                    besplatan toaletni pribor
                  </li>
                  <li className="font-thin p-2 text-center">sušilo za kosu</li>
                  <li className="font-thin p-2 text-center">tuš kabina </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-center p-2">
                  <img className="p-2 w-12" src={WifiSvg} alt="Wifi " />
                  <p className="text-lg font-bold p-2">Wifi</p>
                </div>
                <p className="font-thin text-center">
                  Wifi is available and free on the whole estate
                </p>

                <div className="flex justify-center p-2">
                  <img className="p-2 w-12" src={PoolSvg} alt="Pool " />
                  <p className="text-lg font-bold p-2">Pool</p>
                </div>
                <ul>
                  <li className="font-thin p-2 text-center">From 09-20</li>
                  <li className="font-thin p-2 text-center">
                    No age restrictions
                  </li>
                </ul>
                <div className="flex justify-center p-2">
                  <img className="p-2 w-12" src={BedSvg} alt="Bed " />
                  <p className="text-lg font-bold p-2">Bedroom</p>
                </div>
                <ul>
                  <li className="font-thin p-2 text-center">posteljina</li>
                  <li className="font-thin p-2 text-center">
                    garderoba ili ormar{" "}
                  </li>
                </ul>
                <div className="flex justify-center p-2">
                  <img className="p-2 w-12" src={BedSvg} alt="Bed " />
                  <p className="text-lg font-bold p-2">Bedroom</p>
                </div>
                <ul>
                  <li className="font-thin p-2 text-center">posteljina</li>
                  <li className="font-thin p-2 text-center">
                    garderoba ili ormar{" "}
                  </li>
                </ul>
              </div>
              <div>
                <div className="flex justify-center p-2">
                  <img className="p-2 w-12" src={KitchenSvg} alt="Kitchen " />
                  <p className="text-lg font-bold p-2">Kitchen</p>
                </div>
                <ul>
                  <li className="font-thin p-2 text-center">kuhinjski stol</li>
                  <li className="font-thin p-2 text-center">aparat za kavu</li>
                  <li className="font-thin p-2 text-center">
                    sredstva za čišćenje
                  </li>
                  <li className="font-thin p-2 text-center">toster</li>
                  <li className="font-thin p-2 text-center">
                    ploče za kuhanje
                  </li>
                  <li className="font-thin p-2 text-center">pećnica</li>
                  <li className="font-thin p-2 text-center">
                    kuhinjski pribor
                  </li>
                  <li className="font-thin p-2 text-center">kuhalo za vodu</li>
                  <li className="font-thin p-2 text-center">kuhinja</li>
                  <li className="font-thin p-2 text-center">perilica rublja</li>
                  <li className="font-thin p-2 text-center">perilica posuđa</li>
                  <li className="font-thin p-2 text-center">
                    mikrovalna pećnica
                  </li>
                  <li className="font-thin p-2 text-center">hladnjak</li>
                  <li className="font-thin p-2 text-center">čajna kuhinja </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AparmentDetails;
