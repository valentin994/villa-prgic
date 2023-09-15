import { iApartment } from "../interfaces";
import { Link } from "react-router-dom";
import { ReactComponent as BedSvg } from "../assets/bed_svg.svg";

function AparmentCard({ name, detail, features, price }: iApartment) {
  return (
    <div>
      <Link
        to={name}
        state={{ name, detail, features, price }}
        className="flex flex-col my-8 py-4 items-center bg-white border border-gray-200 bg-gray-100 hover:bg-gray-100"
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <div className="flex flex-row justify-between">
            <h5 className="mb-2 text-2xl font-light text-secondary tracking-tight text-primary">
              {name}
            </h5>
            <div className="flex flex-row">
              <BedSvg className="w-6 m-2" />
              <BedSvg className="w-6 m-2" />
              <BedSvg className="w-6 m-2" />
            </div>
          </div>
          <p className="mb-3 font-normal text-piction-blue">{detail}</p>
        </div>
      </Link>
    </div>
  );
}

export default AparmentCard;
