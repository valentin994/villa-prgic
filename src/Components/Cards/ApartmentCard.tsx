import { iApartment } from "../../interfaces";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";

function ApartmentCard({
    apartment,
    index
}: {apartment: iApartment, index:  number}) {
  const [ref, inView] = useInView();
  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className={`transform px-2 md:px-4 transition-all duration-300 ease-in-out ${inView ? "opacity-100" : "delay-300 opacity-20 translate-y-10"}`}
    >
      <Link
        to={apartment.link}
        state={{
        name: apartment.name,
        detail: apartment.detail,
        features: apartment.features,
        imageLink: apartment.imageLink,
        price: apartment.price,
        firstImage: apartment.firstImage,
        firstGridImageList: apartment.firstGridImageList,
        secondImage: apartment.secondImage,
        secondGridImageList: apartment.secondGridImageList,
        }}
        className="flex flex-col shadow border rounded-3xl my-8 py-4 px-2 items-center bg-gradient-to-r from-blue-50 to-gray-100 hover:bg-gray-50"
      >
        <div className="flex flex-col justify-between p-4 py-8 leading-normal w-full">
          <div className="flex flex-row justify-between">
            <h5 className="mb-2 text-2xl font-extrabold tracking-tight text-gray-600 ">
              {t("apartman")} {index + 1}
            </h5>
            <div className="hidden md:flex md:flex-row">
              {[...Array(3-index)].map(
                (value: undefined, index: number) => (
                  <div key={index} id={value} className="w-6 h-full">
                    <svg
                      height="24"
                      width="24"
                      viewBox="0 0 24 24"
                      fill="black"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z" />
                    </svg>
                  </div>
                ),
              )}
            </div>
          </div>
          <p className="mb-4 text-blue-600">{apartment.detail}</p>
          <p className="hidden text-gray-700 font-semibold md:max-[4200px]:block">
            {apartment.summary}
          </p>
          <div className="flex md:hidden">
            {[...Array(3-index)].map(
              (value: undefined, index: number) => (
                <svg
                  id={value}
                  key={index}
                  className=""
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  fill="black"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M20 9.557V3h-2v2H6V3H4v6.557C2.81 10.25 2 11.525 2 13v4a1 1 0 0 0 1 1h1v4h2v-4h12v4h2v-4h1a1 1 0 0 0 1-1v-4c0-1.475-.811-2.75-2-3.443zM18 7v2h-5V7h5zM6 7h5v2H6V7zm14 9H4v-3c0-1.103.897-2 2-2h12c1.103 0 2 .897 2 2v3z" />
                </svg>
              ),
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ApartmentCard;
