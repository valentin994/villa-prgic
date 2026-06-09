// pages/Contact.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  Calendar,
  MessageSquare,
  User,
  Facebook,
  Instagram,
  Globe,
  Navigation,
} from "lucide-react";

const WhatsAppIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.149-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

function Contact() {
  const { t } = useTranslation();
  const [formRef, formInView] = useInView({ triggerOnce: true });
  const [mapRef, mapInView] = useInView({ triggerOnce: true });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    apartments: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const contactMethods = [
    { icon: Phone,       title: t("contact.phone"),     value: "+385 95 820 3771",      link: "tel:+385958203771",                    color: "blue" },
    { icon: Mail,        title: t("contact.email"),     value: "info@villaprgic.com",   link: "mailto:info@villaprgic.com",           color: "purple" },
    { icon: WhatsAppIcon,title: t("contact.whatsapp"),  value: t("contact.quickResponse"), link: "https://wa.me/00385958203771",      color: "green" },
    { icon: MapPin,      title: t("contact.location"),  value: "Kanica 44, Primošten",  link: "https://maps.google.com/?q=Kanica+44,+10294,+Primosten", color: "red" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setNotification({ type: 'success', message: t("contact.successMsg") });
      setFormData({ name: "", email: "", phone: "", checkIn: "", checkOut: "", apartments: "", message: "" });
    } catch {
      setNotification({ type: 'error', message: t("contact.errorMsg") });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setNotification({ type: null, message: '' }), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Notification Toast */}
      <AnimatePresence>
        {notification.type && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className={`fixed top-24 left-1/2 z-50 px-6 py-4 rounded-xl shadow-lg flex items-center space-x-3 ${
              notification.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {notification.type === 'success' ? <CheckCircle className="w-6 h-6" /> : <AlertCircle className="w-6 h-6" />}
            <span className="font-medium">{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t("contact.title")}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              {t("contact.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="max-w-7xl mx-auto px-6 mt-10 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.title}
              href={method.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="block"
            >
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
                <div className={`w-12 h-12 bg-${method.color}-100 rounded-xl flex items-center justify-center mb-4`}>
                  <method.icon className={`w-6 h-6 text-${method.color}-500`} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                <p className="text-sm text-gray-600">{method.value}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -20 }}
            animate={formInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{t("contact.sendMessage")}</h2>
              <p className="text-gray-600 mb-8">{t("contact.formSubtitle")}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                      <User className="w-4 h-4" />
                      <span>{t("contact.yourName")} *</span>
                    </label>
                    <input type="text" name="name" required value={formData.name} onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                      <Mail className="w-4 h-4" />
                      <span>{t("contact.emailAddress")} *</span>
                    </label>
                    <input type="email" name="email" required value={formData.email} onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="john@example.com" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{t("contact.checkIn")}</span>
                    </label>
                    <input type="date" name="checkIn" value={formData.checkIn} onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                  </div>
                  <div>
                    <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{t("contact.checkOut")}</span>
                    </label>
                    <input type="date" name="checkOut" value={formData.checkOut} onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" />
                  </div>
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                    <Globe className="w-4 h-4" />
                    <span>{t("contact.preferredApt")}</span>
                  </label>
                  <select name="apartments" value={formData.apartments} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                    <option value="">{t("contact.selectApt")}</option>
                    <option value="apartment1">{t("contact.apt1")}</option>
                    <option value="apartment2">{t("contact.apt2")}</option>
                    <option value="apartment3">{t("contact.apt3")}</option>
                  </select>
                </div>

                <div>
                  <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>{t("contact.yourMessage")}</span>
                  </label>
                  <textarea name="message" rows={4} value={formData.message} onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder={t("contact.messagePlaceholder")} />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      <span>{t("contact.sending")}</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>{t("contact.sendBtn")}</span>
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            ref={mapRef}
            initial={{ opacity: 0, x: 20 }}
            animate={mapInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Office Hours */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{t("contact.officeHours")}</h3>
                  <p className="text-sm text-gray-600">{t("contact.whenAvailable")}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">{t("contact.monFri")}</span>
                  <span className="font-semibold text-gray-900">9:00 – 20:00</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-gray-600">{t("contact.saturday")}</span>
                  <span className="font-semibold text-gray-900">10:00 – 18:00</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-600">{t("contact.sunday")}</span>
                  <span className="font-semibold text-gray-900">12:00 – 17:00</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-sm text-blue-700">{t("contact.whatsappNote")}</p>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="p-6 border-b">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                    <Navigation className="w-6 h-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{t("contact.findUs")}</h3>
                    <p className="text-sm text-gray-600">Kanica 44, 22010 Primošten, Croatia</p>
                  </div>
                </div>
              </div>
              <div className="relative h-96">
                <iframe
                  title="Villa Prgic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.33288389299!2d16.00102337624065!3d43.49539076262299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133517bf5dacedd5%3A0x56b213f83599aa72!2sApartmani%20Prgi%C4%87!5e0!3m2!1shr!2shr!4v1744375535033!5m2!1shr!2shr"
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-4 bg-gray-50">
                <a
                  href="https://maps.google.com/?q=Kanica+44,+10294,+Primosten"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                >
                  <MapPin className="w-5 h-5" />
                  <span>{t("contact.getDirections")}</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">{t("contact.connectWith")}</h3>
              <div className="flex space-x-4">
                <motion.a href="https://www.facebook.com/villaprgic" target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all">
                  <Facebook className="w-6 h-6" />
                </motion.a>
                <motion.a href="https://instagram.com/villaprgic" target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600 hover:text-white transition-all">
                  <Instagram className="w-6 h-6" />
                </motion.a>
                <motion.a href="https://wa.me/00385958203771" target="_blank" rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all">
                  <WhatsAppIcon />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
