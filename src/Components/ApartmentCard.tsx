import { iApartment } from "../interfaces";
import { Link } from "react-router-dom";
// @ts-ignore
import { ReactComponent as BedSvg } from "../assets/bed_svg.svg";
import { useInView } from "react-intersection-observer";

function ApartmentCard({
  name,
  link,
  detail,
  features,
  price,
  summary,
  number_of_beds,
  firstImage,
  firstGridImageList,
  secondImage,
  secondGridImageList,
}: iApartment) {
  const [ref, inView] = useInView();
  return (
    <div
      ref={ref}
      className={`transform px-2 md:px-4 transition-all duration-300 ease-in-out ${inView ? "opacity-100" : "delay-300 opacity-20 translate-y-10"}`}
    >
      <Link
        to={link}
        state={{
          name,
          detail,
          features,
          price,
          firstImage,
          firstGridImageList,
          secondImage,
          secondGridImageList,
        }}
        className="flex flex-col rounded-3xl my-8 py-4 px-2 items-center bg-gradient-to-r from-blue-50 to-gray-100 hover:bg-gray-50"
      >
        <div className="flex flex-col justify-between p-4 py-8 leading-normal w-full">
          <div className="flex flex-row justify-between">
            <h5 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-600 ">
              {name}
            </h5>
            <div className="hidden md:flex md:flex-row">
              {[...Array(number_of_beds)].map(
                (value: undefined, index: number) => (
                  <BedSvg id={index + 1} key={index} className="w-6 m-2" />
                ),
              )}
            </div>
          </div>
          <p className="mb-4 text-blue-600">{detail}</p>
          <p className="hidden text-gray-700 font-semibold md:max-[4200px]:block">
            {summary}
          </p>
          <div className="flex md:hidden">
            {[...Array(number_of_beds)].map(
              (value: undefined, index: number) => (
                <BedSvg id={index + 1} key={index} className="w-6 mr-2" />
              ),
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ApartmentCard;
