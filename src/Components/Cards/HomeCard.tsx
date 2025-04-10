import { Link } from "react-router-dom";
import { iApartment } from "../../interfaces";
import { useTranslation } from "react-i18next";

function HomeCard({
  apartment,
  index,
}: {
  apartment: iApartment;
  index: number;
}) {
  const { t } = useTranslation();
  return (
    <Link
      to={`/apartments/${apartment.link}`}
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
    >
      <div className="bg-gray-100 rounded-[40px] w-64 py-2 px-2 mx-auto">
        <div
          style={{ backgroundImage: `url(${apartment.imageLink})` }}
          className={`h-40 rounded-[30px] w-full bg-cover`}
        ></div>
        <h1 className="text-xl py-2 font-bold px-4 text-gray-600 text-center">
          {t("apartman")} {index + 1}
        </h1>
      </div>
    </Link>
  );
}
export default HomeCard;
