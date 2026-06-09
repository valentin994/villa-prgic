import { useTranslation } from "react-i18next";

function TermsOfService() {
  const { t } = useTranslation();
  const cancellationItems = t("terms.cancellationItems", { returnObjects: true }) as string[];
  const obligationsItems = t("terms.obligationsItems", { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">{t("terms.title")}</h1>
        <p className="text-sm text-gray-500 mb-10">{t("terms.updated")}</p>

        <div className="bg-white rounded-xl shadow-sm p-8 space-y-8 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("terms.scopeHeading")}</h2>
            <p>{t("terms.scopeText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("terms.reservationsHeading")}</h2>
            <p>{t("terms.reservationsText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("terms.paymentHeading")}</h2>
            <p>{t("terms.paymentText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("terms.cancellationHeading")}</h2>
            <ul className="list-disc pl-6 space-y-1">
              {cancellationItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
            <p className="mt-3">{t("terms.cancellationNote")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("terms.checkinHeading")}</h2>
            <p>{t("terms.checkinText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("terms.obligationsHeading")}</h2>
            <ul className="list-disc pl-6 space-y-1">
              {obligationsItems.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("terms.liabilityHeading")}</h2>
            <p>{t("terms.liabilityText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("terms.governingHeading")}</h2>
            <p>{t("terms.governingText")}</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{t("terms.contactHeading")}</h2>
            <p>
              {t("terms.contactText").split("info@villaprgic.com")[0]}
              <a href="mailto:info@villaprgic.com" className="text-blue-600 hover:underline">info@villaprgic.com</a>
              {t("terms.contactText").split("info@villaprgic.com")[1]}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
