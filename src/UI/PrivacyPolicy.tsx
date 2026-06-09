import { useTranslation } from "react-i18next";

function PrivacyPolicy() {
  const { t } = useTranslation();
  const dataItems = t("privacy.dataItems", { returnObjects: true }) as string[];
  const rightsItems = t("privacy.rightsItems", { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{t("privacy.title")}</h1>
        <p className="text-sm text-gray-500 mb-10">{t("privacy.updated")}</p>

        <div className="bg-white rounded-xl shadow-sm p-8 space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("privacy.controllerHeading")}</h2>
            <p>
              Villa Prgić, Kanica 44, 22010 Primošten, Croatia.<br />
              <a href="mailto:info@villaprgic.com" className="text-blue-600 hover:underline">info@villaprgic.com</a>
              {" · "}
              <a href="tel:+385958203771" className="text-blue-600 hover:underline">+385 95 820 3771</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("privacy.dataHeading")}</h2>
            <p className="mb-2">{t("privacy.dataIntro")}</p>
            <ul className="list-disc pl-6 space-y-1">
              {dataItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("privacy.purposeHeading")}</h2>
            <p>{t("privacy.purposeText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("privacy.legalHeading")}</h2>
            <p>{t("privacy.legalText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("privacy.retentionHeading")}</h2>
            <p>{t("privacy.retentionText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("privacy.rightsHeading")}</h2>
            <p className="mb-2">{t("privacy.rightsIntro")}</p>
            <ul className="list-disc pl-6 space-y-1">
              {rightsItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="mt-3">
              {t("privacy.rightsContact").replace("info@villaprgic.com", "")}{" "}
              <a href="mailto:info@villaprgic.com" className="text-blue-600 hover:underline">info@villaprgic.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("privacy.cookiesHeading")}</h2>
            <p>{t("privacy.cookiesText")}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
