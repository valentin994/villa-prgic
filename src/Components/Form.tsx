import { useTranslation } from "react-i18next";

function Form() {
  const { t } = useTranslation();
  return (
    <div className="bg-blue-600 rounded-[40px] mt-3 md:px-20 px-12 py-14 text-gray-50 flex flex-col md:flex-row gap-4 justify-between">
      <div className="font-bold">
        <h1 className="text-3xl md:text-right">{t("cta.part1")}</h1>
        <h1 className="text-3xl md:text-right">{t("cta.part2")}</h1>
        <h1 className="text-3xl underline md:text-right">{t("cta.part3")}.</h1>
      </div>
      <div className="flex flex-col border-b-2 gap-2">
        <p className="text-sm">{t("cta.dateA")}</p>
        <div className="">
          <input
            className="bg-transparent border-0 w-full md:text-3xl text-xl md:placeholder:text-3xl placeholder:text-xl placeholder:text-gray-50"
            placeholder="01/01/2025"
            datatype="date"
          />
        </div>
      </div>
      <div className="flex flex-col border-b-2 gap-2">
        <p className="text-sm">{t("cta.dateD")}</p>
        <div className="">
          <input
            className="bg-transparent w-full border-0 md:text-3xl text-xl md:placeholder:text-3xl placeholder:text-xl placeholder:text-gray-50"
            placeholder="01/01/2025"
            datatype="date"
          />
        </div>
      </div>
      <div className="text-2xl text-center bg-gray-200 text-blue-500  rounded-xl my-auto ">
        <button className=" py-4 px-2 md:px-6 md:py-8 font-semibold">
          {t("cta.sendI")}
        </button>
      </div>
    </div>
  );
}
