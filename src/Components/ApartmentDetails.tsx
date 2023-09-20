import { useLocation } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import LocationSvg from "../assets/location.svg";
import BathroomSvg from "../assets/bathroom.svg";
import WifiSvg from "../assets/wifi.svg";
import KitchenSvg from "../assets/kitchen.svg";
import BedSvg from "../assets/bed.svg"
import PoolSvg from "../assets/pool.svg"

function AparmentDetails() {
  const { state } = useLocation();
  const { name, detail, features, price } = state;
  return (
    <div className="flex justify-center align-middle w-full">
      <div className="container w-full">
        <div className="p-4">
          <p className="text-3xl text-center font-light py-4">{name}</p>
          <p className="text-l text-center">{detail}</p>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-3 p-4">
              <div className="">
                <div className="flex justify-center p-2">
                  <img className="p-2" src={LocationSvg} alt="Location image" />
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
                      <img
                          className="p-2 w-12"
                          src={BathroomSvg}
                          alt="Bathroom image"
                      />
                      <p className="text-lg font-bold p-2">Bathroom</p>
                  </div>
                  <ul>
                      <li className="font-thin p-2 text-center">toaletni papir</li>
                      <li className="font-thin p-2 text-center">ručnici</li>
                      <li className="font-thin p-2 text-center">kada ili tuš kabina</li>
                      <li className="font-thin p-2 text-center">vlastita kupaonica</li>
                      <li className="font-thin p-2 text-center">WC</li>
                      <li className="font-thin p-2 text-center">besplatan toaletni pribor</li>
                      <li className="font-thin p-2 text-center">sušilo za kosu</li>
                      <li className="font-thin p-2 text-center">tuš kabina </li>
                  </ul>


              </div>
              <div>
                <div className="flex justify-center p-2">
                  <img className="p-2 w-12" src={WifiSvg} alt="Wifi image" />
                  <p className="text-lg font-bold p-2">Wifi</p>
                </div>
                <p className="font-thin text-center">
                  Wifi is available and free on the whole estate
                </p>

                  <div className="flex justify-center p-2">
                      <img
                          className="p-2 w-12"
                          src={PoolSvg}
                          alt="Pool image"
                      />
                      <p className="text-lg font-bold p-2">Pool</p>
                  </div>
                  <ul>
                      <li className="font-thin p-2 text-center">From 09-20</li>
                      <li className="font-thin p-2 text-center">No age restrictions</li>
                  </ul>

                  <div className="flex justify-center p-2">
                      <img
                          className="p-2 w-12"
                          src={BedSvg}
                          alt="Bed image"
                      />
                      <p className="text-lg font-bold p-2">Bedroom</p>
                  </div>
                  <ul>
                      <li className="font-thin p-2 text-center">posteljina</li>
                      <li className="font-thin p-2 text-center">garderoba ili ormar </li>
                  </ul>

                  <div className="flex justify-center p-2">
                      <img
                          className="p-2 w-12"
                          src={BedSvg}
                          alt="Bed image"
                      />
                      <p className="text-lg font-bold p-2">Bedroom</p>
                  </div>
                  <ul>
                      <li className="font-thin p-2 text-center">posteljina</li>
                      <li className="font-thin p-2 text-center">garderoba ili ormar </li>
                  </ul>
              </div>

              <div>
                <div className="flex justify-center p-2">
                  <img
                    className="p-2 w-12"
                    src={KitchenSvg}
                    alt="Kitchen image"
                  />
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
                <div>
                </div>


                <div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AparmentDetails;
