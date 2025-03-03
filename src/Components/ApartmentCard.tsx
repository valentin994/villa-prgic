import { iApartment } from "../interfaces";
import { Link } from "react-router-dom";
// @ts-ignore
import { ReactComponent as BedSvg } from "../assets/bed_svg.svg";
import { useInView } from "react-intersection-observer";

function AparmentCard({
  name,
  detail,
  features,
  price,
  summary,
  number_of_beds,
}: iApartment) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transform px-4 transition-all duration-300 ease-in-out ${inView ? "opacity-100" : "delay-300 opacity-20 translate-y-10"}`}
    >
      <Link
        to={name}
        state={{ name, detail, features, price }}
        className="flex flex-col rounded-3xl my-8 py-4 px-8 items-center bg-gray-50/90 hover:bg-gray-50"
      >
        <div className="flex flex-col justify-between p-4 py-8 leading-normal w-full">
          <div className="flex flex-row justify-between">
            <h5 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-700 ">
              {name}
            </h5>
            <div className="flex flex-row">
              {[...Array(number_of_beds)].map(
                (value: undefined, index: number) => (
                  <BedSvg id={index + 1} key={index} className="w-6 m-2" />
                ),
              )}
            </div>
          </div>
          <p className="mb-4 text-secondary">{detail}</p>
          <p className="hidden text-gray-700 font-semibold md:max-[4200px]:block">
            {summary}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default AparmentCard;
