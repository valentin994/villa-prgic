import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { X } from "lucide-react";

interface HouseRulesSection {
  heading: string;
  text: string;
}

interface HouseRulesModalProps {
  onClose: () => void;
}

function HouseRulesModal({ onClose }: HouseRulesModalProps) {
  const { t } = useTranslation();
  const sections = t("houseRules.sections", {
    returnObjects: true,
  }) as HouseRulesSection[];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 10 }}
        transition={{ duration: 0.2 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl lg:rounded-2xl shadow-xl w-full max-w-2xl max-h-[85vh] flex flex-col"
      >
        <div className="flex items-center justify-between p-4 lg:p-6 border-b">
          <h2 className="text-lg lg:text-xl font-bold text-gray-900">
            {t("houseRules.title")}
          </h2>
          <button
            onClick={onClose}
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        <div className="p-4 lg:p-6 overflow-y-auto space-y-5">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-1">
                {section.heading}
              </h3>
              <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                {section.text}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 lg:p-6 border-t">
          <button
            onClick={onClose}
            className="w-full py-2.5 lg:py-3 rounded-lg lg:rounded-xl text-sm lg:text-base font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all"
          >
            {t("houseRules.close")}
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default HouseRulesModal;
