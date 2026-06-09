// Components/Footer.tsx
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  MessageCircle,
  Calendar,
  Shield,
  Star,
  ChevronRight,
  Heart
} from "lucide-react";

function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: "/", label: t("navigation.home") },
    { path: "/apartments", label: t("navigation.apartments") },
    { path: "/region", label: t("footer.exploreRegion") },
    { path: "/contact", label: t("navigation.contact") }
  ];

  const legalLinks = [
    { path: "/impressum", label: "Impressum" },
    { path: "/privacy", label: "Privacy Policy" },
    { path: "/terms", label: "Terms & Conditions" }
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://www.facebook.com/villaprgic",
      label: "Facebook",
      color: "hover:bg-blue-600"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/villaprgic",
      label: "Instagram",
      color: "hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-600"
    },
    { 
      icon: MessageCircle, 
      href: "https://wa.me/00385958203771",
      label: "WhatsApp",
      color: "hover:bg-green-600"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">{t("footer.stayUpdated")}</h3>
              <p className="text-gray-400">{t("footer.offerSubtitle")}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <input
                type="email"
                placeholder={t("footer.emailPlaceholder")}
                className="px-6 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 lg:w-80"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
              >
                {t("footer.subscribe")}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <h2 className="font-lux text-4xl text-white">Villa Prgić</h2>
              <p className="text-xs text-gray-400 mt-1">{t("footer.tagline")}</p>
            </Link>
            <p className="text-gray-400 mb-6">
              {t("footer.description")}
            </p>
            
            {/* Trust Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-sm font-semibold">4.9</span>
              </div>
              <div className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-400">{t("footer.verified")}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4 text-blue-500" />
                <span className="text-sm text-gray-400">{t("footer.since")}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("footer.quickLinks")}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `flex items-center space-x-2 text-gray-400 hover:text-white transition-colors ${
                        isActive ? 'text-blue-400' : ''
                      }`
                    }
                  >
                    <ChevronRight className="w-4 h-4" />
                    <span>{link.label}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("footer.contactUs")}</h3>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://maps.google.com/?q=Kanica+44,+10294,+Primosten"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>
                    Kanica 44<br />
                    10294 Primošten<br />
                    Croatia
                  </span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+385958203771"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>+385 95 820 3771</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@villaprgic.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>info@villaprgic.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Social & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t("footer.followUs")}</h3>
            
            {/* Social Icons */}
            <div className="flex space-x-3 mb-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>

            {/* Legal Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-500 mb-3">{t("footer.legal")}</h4>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.path}>
                    <NavLink
                      to={link.path}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} Villa Prgić. All rights reserved.
            </p>
            
            {/* Language Selector */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-gray-500">{t("footer.language")}</span>
                <select className="bg-transparent text-gray-400 focus:outline-none cursor-pointer hover:text-white transition-colors">
                  <option value="en">English</option>
                  <option value="hr">Hrvatski</option>
                  <option value="de">Deutsch</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <span>{t("footer.madeWith")}</span>
                <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
                <span>{t("footer.inCroatia")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
