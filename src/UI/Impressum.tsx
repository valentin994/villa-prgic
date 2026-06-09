import { useTranslation } from "react-i18next";

function Impressum() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{t("impressum.title")}</h1>
        <p className="text-sm text-gray-500 mb-10">{t("impressum.subtitle")}</p>

        <div className="bg-white rounded-xl shadow-sm p-8 space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("impressum.operatorHeading")}</h2>
            <p>
              Villa Prgić<br />
              Kanica 44<br />
              22010 Primošten<br />
              Croatia
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("impressum.contactHeading")}</h2>
            <p>
              <a href="tel:+385958203771" className="text-blue-600 hover:underline">+385 95 820 3771</a>
              <br />
              <a href="mailto:info@villaprgic.com" className="text-blue-600 hover:underline">info@villaprgic.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("impressum.responsibleHeading")}</h2>
            <p>{t("impressum.responsibleText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("impressum.disputeHeading")}</h2>
            <p>
              {t("impressum.disputeText")}{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("impressum.liabilityHeading")}</h2>
            <p>{t("impressum.liabilityText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("impressum.copyrightHeading")}</h2>
            <p>{t("impressum.copyrightText")}</p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Impressum;
