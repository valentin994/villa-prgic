import { useTranslation } from "react-i18next";

function Region() {
  const { t } = useTranslation();
  return (
    <div className="-mt-20 mb-16 mx-1 rounded-[40px]">
      <div className="bg-blue-600 pt-20 rounded-[40px]">
        <h1 className="text-3xl text-white pt-12 pb-8 text-center">
          {t("region.heading")}
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:px-48 pb-2 gap-14 pt-8">
        <div className="px-4 md:w-1/2">
          <h1 className="text-3xl text-blue-500 font-bold">
            {t("region.dSplit")}
          </h1>
          <p className="pt-4 text-gray-600">{t("region.splitInfo")}</p>
          <h2 className="pt-4 text-2xl text-blue-600 font-bold">
            {t("region.attractions")}
          </h2>
          <p className="text-lg font-semibold text-blue-500 pt-2">
            {t("region.dPalace")}
          </p>
          <p className="text-gray-600">{t("region.dPalaceInfo")}</p>
          <p className="text-lg font-semibold text-blue-500 pt-1">
            {t("region.riva")}
          </p>
          <p className="text-gray-600">{t("region.rivaInfo")}</p>
          <p className="text-lg font-semibold text-blue-500 pt-1">
            {t("region.marjan")}
          </p>
          <p className="text-gray-600">{t("region.marjanInfo")}</p>
          <p className="text-lg font-semibold text-blue-500 pt-1">
            {t("region.bacvice")}
          </p>
          <p className="text-gray-600">{t("region.rivaInfo")}</p>
          <p className="text-lg font-semibold text-blue-500 pt-1">
            {t("region.mestrovic")}
          </p>
          <p className="text-gray-600">{t("region.mestrovicInfo")}</p>
        </div>
        <div className="flex flex-col justify-center px-2 md:w-1/2">
          <img
            className="rounded-[40px]"
            alt="Split"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Split_080620-133710-IMG_0968x.jpg/1920px-Split_080620-133710-IMG_0968x.jpg"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:px-48 pb-8 gap-14 pt-8">
        <div className="hidden md:flex flex-col justify-center w-1/2">
          <img
            alt="Rogoznica"
            className="rounded-[40px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Split_080620-133710-IMG_0968x.jpg/1920px-Split_080620-133710-IMG_0968x.jpg"
          />
        </div>
        <div className="px-4 md:w-1/2">
          <h1 className="text-3xl text-blue-500 font-bold">
            {t("region.rogoznica")}
          </h1>
          <p className="pt-4 text-gray-600">{t("region.rogoznicaInfo")}</p>
          <h2 className="pt-4 text-2xl text-blue-600 font-bold">
            {t("region.rAttractions")}
          </h2>
          <p className="text-lg font-semibold text-blue-500 pt-2">
            {t("region.marina")}
          </p>
          <p className="text-gray-600">{t("region.marinaInfo")}</p>
          <p className="text-lg font-semibold text-blue-500 pt-1">
            {t("region.dragon")}
          </p>
          <p className="text-gray-600">{t("region.dragonInfo")}</p>
          <p className="text-lg font-semibold text-blue-500 pt-1">
            {t("region.oldTown")}
          </p>
          <p className="text-gray-600">{t("region.oldTownInfo")}</p>
          <p className="text-lg font-semibold text-blue-500 pt-1">
            {t("region.promenada")}
          </p>
          <p className="text-gray-600">{t("region.promenadaInfo")}</p>
          <p className="text-lg font-semibold text-blue-500 pt-1">
            {t("region.planka")}
          </p>
          <p className="text-gray-600">{t("region.plankaInfo")}</p>
        </div>

        <div className="md:hidden flex flex-col justify-center px-2">
          <img
            alt="Rogoznica"
            className="rounded-[40px]"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Split_080620-133710-IMG_0968x.jpg/1920px-Split_080620-133710-IMG_0968x.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Region;
