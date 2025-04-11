import { useTranslation } from "react-i18next";

function FormTemplate({ range }: { range: any[] }) {
  const { t } = useTranslation();
  let startDate = `${range[0].startDate.getDate()}/${range[0].startDate.getMonth()}/${range[0].startDate.getFullYear()}`;
  let endDate = `${range[0].endDate.getDate()}/${range[0].endDate.getMonth()}/${range[0].endDate.getFullYear()}`;

  return (
    <div className="bg-blue-600 shadow rounded-[40px] mt-3  px-12 py-14 text-gray-50 flex flex-col gap-4 w-full">
      <div className="font-bold md:hidden">
        <h1 className="text-3xl">{t("cta.part1")}</h1>
        <h1 className="text-3xl">{t("cta.part2")}</h1>
        <h1 className="text-3xl underline">{t("cta.part3")}.</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            {t("cta.dateA")} <span className="text-red-500">*</span>
          </p>
          <div className="">
            <input
              className="bg-transparent border-b-2 focus:border-white focus:outline-none w-full text-xl placeholder:text-xl placeholder:text-gray-400"
              placeholder="Ivan Ivanovic"
              datatype="text"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm">
            email <span className="text-red-500">*</span>
          </p>
          <div className="">
            <input
              className="bg-transparent w-full border-b-2 focus:border-b-white text-xl placeholder:text-xl placeholder:text-gray-400 focus:outline-none"
              placeholder="email@gmail.com"
              datatype="email"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Selected Dates</p>
        <div className="flex justify-between">
          <p className="text-lg font-bold">{startDate}</p>
          <p className="font-bold text-lg">{endDate}</p>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-sm">Message</p>
        <div className="">
          <textarea
            rows={3}
            className="bg-transparent w-full border-b-2 focus:border-b-white text-xl placeholder:text-xl placeholder:text-gray-400 focus:outline-none"
            placeholder="Hello, we are interested..."
            datatype="email"
          />
        </div>
      </div>
      <div className="text-2xl text-center md:hidden bg-gray-200 text-blue-500  rounded-xl my-auto ">
        <button className=" py-4 px-2 md:px-6 md:py-8 font-semibold">
          {t("cta.sendI")}
        </button>
      </div>
    </div>
  );
}

export default FormTemplate;
