// pages/ApartmentDetails.tsx - FIXED VERSION
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { DateRangePicker } from "react-date-range";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import {
  MapPin,
  Wifi,
  Utensils,
  Bath,
  Bed,
  Waves,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
  X,
  Check,
  Car,
  Coffee,
  Send,
  User,
  Mail,
  MessageSquare,
  Phone,
  Share2,
  Heart,
  Grid,
} from "lucide-react";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

// Add custom calendar styles
const calendarStyles = `
  .calendar-container {
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
  
  .calendar-container .rdrCalendarWrapper {
    background: transparent;
    color: #000;
    font-size: 14px;
    width: 100%;
  }
  
  .calendar-container .rdrDateRangePickerWrapper {
    display: flex;
    justify-content: center;
  }
  
  .calendar-container .rdrMonth {
    width: 100%;
    max-width: 320px;
    padding: 0;
  }
  
  .calendar-container .rdrMonthAndYearWrapper {
    padding: 0 0 10px 0;
  }
  
  .calendar-container .rdrDay {
    height: 2.5em;
  }
  
  .calendar-container .rdrDayNumber span {
    font-size: 14px;
  }
  
  @media (max-width: 640px) {
    .calendar-container .rdrMonth {
      max-width: 100%;
    }
    
    .calendar-container .rdrDay {
      height: 2.2em;
    }
  }
`;

// Interface for apartment data
interface ApartmentState {
  name: string;
  detail: string;
  price: number;
  features?: string[];
  firstImage: string;
  firstGridImageList: string[];
  secondImage: string;
  secondGridImageList: string[];
}

// Modern Image Gallery Component (same as before, keeping it)
const ModernImageGallery = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="relative">
        {/* Mobile Gallery */}
        <div className="lg:hidden">
          <div className="relative aspect-[16/10] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedImage}
                src={images[selectedImage]}
                alt={`Apartment view ${selectedImage + 1}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>
            
            {/* Navigation Buttons */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative flex-shrink-0 w-20 h-20 overflow-hidden transition-all ${
                  selectedImage === index ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {selectedImage === index && (
                  <div className="absolute inset-0 bg-blue-500/20" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Gallery Grid */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-1">
            {/* Main Large Image */}
            <div className="col-span-2 row-span-2">
              <button
                onClick={() => setIsFullscreen(true)}
                className="relative aspect-square overflow-hidden group cursor-pointer"
              >
                <img
                  src={images[0]}
                  alt="Main apartment view"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 flex items-center space-x-2 text-white">
                    <Grid className="w-5 h-5" />
                    <span className="font-medium">Show all photos</span>
                  </div>
                </div>
              </button>
            </div>

            {/* Grid Images */}
            {images.slice(1, 5).map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedImage(index + 1);
                  setIsFullscreen(true);
                }}
                className="relative aspect-square overflow-hidden group cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Apartment view ${index + 2}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {index === 3 && images.length > 5 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      +{images.length - 5} more
                    </span>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Fullscreen Gallery Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black"
          >
            <div className="relative h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent absolute top-0 left-0 right-0 z-10">
                <span className="text-white font-medium">
                  {selectedImage + 1} / {images.length}
                </span>
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
                >
                  <X className="w-5 h-5 text-white" />
                </button>
              </div>

              {/* Main Image */}
              <div className="flex-1 flex items-center justify-center p-4">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    src={images[selectedImage]}
                    alt={`Apartment view ${selectedImage + 1}`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-full max-h-full object-contain"
                  />
                </AnimatePresence>
              </div>

              {/* Navigation */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Thumbnail Strip */}
              <div className="bg-black/80 backdrop-blur-sm p-4">
                <div className="flex gap-2 justify-center overflow-x-auto">
                  {images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative flex-shrink-0 w-24 h-24 overflow-hidden transition-all ${
                        selectedImage === index ? 'ring-2 ring-white' : 'opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Enhanced Booking Form Component - FIXED FOR MOBILE
const EnhancedBookingForm = ({
  range,
  onSubmit
}: {
  range: any[];
  onSubmit: (formData: any) => void;
}) => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    onSubmit(formData);
    setIsSubmitting(false);
  };

  const nights = Math.ceil(
    (range[0].endDate.getTime() - range[0].startDate.getTime()) / (1000 * 60 * 60 * 24)
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full">
      <div>
        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-2">
          {t("booking.title")}
        </h3>
        <p className="text-sm lg:text-base text-gray-600">
          {t("booking.subtitle")}
        </p>
      </div>

      {/* Date Summary */}
      <div className="bg-blue-50 rounded-xl p-3 lg:p-4">
        <div className="flex items-center justify-between mb-2 lg:mb-3">
          <div>
            <p className="text-xs lg:text-sm text-gray-600">{t("booking.checkIn")}</p>
            <p className="text-sm lg:text-base font-semibold text-gray-900">
              {range[0].startDate.toLocaleDateString()}
            </p>
          </div>
          <div className="text-gray-400 px-2">→</div>
          <div>
            <p className="text-xs lg:text-sm text-gray-600">{t("booking.checkOut")}</p>
            <p className="text-sm lg:text-base font-semibold text-gray-900">
              {range[0].endDate.toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="pt-2 lg:pt-3 border-t">
          <p className="text-xs lg:text-sm text-gray-600">{t("booking.totalNights")}</p>
          <p className="text-lg lg:text-xl font-bold text-gray-900">{nights} {nights === 1 ? t("booking.night") : t("booking.nights")}</p>
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-3 lg:space-y-4">
        <div>
          <label className="flex items-center space-x-2 text-xs lg:text-sm font-medium text-gray-700 mb-1 lg:mb-2">
            <User className="w-3 h-3 lg:w-4 lg:h-4" />
            <span>{t("booking.fullName")}</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-200 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            placeholder="John Doe"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4">
          <div>
            <label className="flex items-center space-x-2 text-xs lg:text-sm font-medium text-gray-700 mb-1 lg:mb-2">
              <Mail className="w-3 h-3 lg:w-4 lg:h-4" />
              <span>{t("booking.email")}</span>
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-200 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <label className="flex items-center space-x-2 text-xs lg:text-sm font-medium text-gray-700 mb-1 lg:mb-2">
              <Phone className="w-3 h-3 lg:w-4 lg:h-4" />
              <span>{t("booking.phone")}</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-200 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              placeholder="+385 91 234 5678"
            />
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-xs lg:text-sm font-medium text-gray-700 mb-1 lg:mb-2">
            <Users className="w-3 h-3 lg:w-4 lg:h-4" />
            <span>{t("booking.guestsLabel")}</span>
          </label>
          <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-200 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <option key={num} value={num}>{num} {num === 1 ? t("booking.guest") : t("booking.guestsPlural")}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center space-x-2 text-xs lg:text-sm font-medium text-gray-700 mb-1 lg:mb-2">
            <MessageSquare className="w-3 h-3 lg:w-4 lg:h-4" />
            <span>{t("booking.specialRequests")}</span>
          </label>
          <textarea
            name="message"
            rows={3}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 lg:px-4 lg:py-3 text-sm lg:text-base border border-gray-200 rounded-lg lg:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            placeholder={t("booking.specialRequestsPlaceholder")}
          />
        </div>
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`w-full py-3 lg:py-4 rounded-lg lg:rounded-xl text-sm lg:text-base font-semibold text-white transition-all flex items-center justify-center space-x-2 ${
          isSubmitting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-xl'
        }`}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-4 w-4 lg:h-5 lg:w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span>{t("booking.sending")}</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4 lg:w-5 lg:h-5" />
            <span>{t("booking.sendRequest")}</span>
          </>
        )}
      </motion.button>
    </form>
  );
};

// Main Component - FIXED
function ApartmentDetails() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { state } = useLocation() as { state: ApartmentState };
  const [dateRange, setDateRange] = useState<any[]>([]);
  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });
  const [savedToWishlist, setSavedToWishlist] = useState(false);

  const {
    name,
    detail,
    price = 200,
    firstImage,
    firstGridImageList,
    secondImage,
    secondGridImageList,
  } = state || {};

  const allImages = [
    firstImage,
    ...firstGridImageList,
    secondImage,
    ...secondGridImageList,
  ].filter(Boolean);

  // Parse apartment details
  const getApartmentInfo = (detail: string) => {
    const capacityMatch = detail?.match(/for (\w+) people/);
    const bedroomMatch = detail?.match(/(\w+) bedroom/);
    
    const capacityWords: { [key: string]: number } = {
      'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6
    };
    
    const bedroomWords: { [key: string]: number } = {
      'one': 1, 'two': 2, 'three': 3
    };
    
    return {
      capacity: capacityMatch ? capacityWords[capacityMatch[1]] || 2 : 2,
      bedrooms: bedroomMatch ? bedroomWords[bedroomMatch[1]] || 1 : 1
    };
  };

  const { capacity, bedrooms } = getApartmentInfo(detail);

  // Fetch disabled dates
  useEffect(() => {
    if (name) {
      fetch(`/api/get_dates?id=${name.split(" ")[1]}`)
        .then((response) => response.json())
        .then((data) => setDateRange(data))
        .catch((error) => console.error("Error fetching dates:", error));
    }
  }, [name]);

  function getDatesInRange(start: string, end: string): Date[] {
    const dates = [];
    const current = new Date(start);
    const endDate = new Date(end);

    while (current <= endDate) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 1);
    }

    return dates;
  }

  const disabledDates = dateRange.flatMap((range) =>
    getDatesInRange(range.start_date, range.end_date)
  );

  // Handle form submission
  const handleBookingSubmit = async (formData: any) => {
    // Validate dates
    if (
      range[0].startDate.getTime() === range[0].endDate.getTime()
    ) {
      setNotification({
        type: 'error',
        message: t("booking.validDatesError")
      });
      setTimeout(() => setNotification({ type: null, message: '' }), 3000);
      return;
    }

    try {
      emailjs.init({ publicKey: "WdsWSiOZO0oOhp7nl" });
      await emailjs.send("service_daxmzoo", "template_l03vwdg", {
        name: formData.name,
        time: new Date().toISOString(),
        title: name,
        startDate: range[0].startDate.toLocaleDateString(),
        endDate: range[0].endDate.toLocaleDateString(),
        email: formData.email,
        phone: formData.phone,
        guests: formData.guests,
        message: formData.message,
      });

      setNotification({
        type: 'success',
        message: t("booking.successMsg")
      });
    } catch (error) {
      console.error("Error sending email:", error);
      setNotification({
        type: 'error',
        message: t("booking.errorMsg")
      });
    }

    setTimeout(() => setNotification({ type: null, message: '' }), 5000);
  };

  // Amenities configuration
  const amenities = [
    {
      category: t("booking.locationCategory"),
      icon: MapPin,
      items: t("booking.near", { returnObjects: true }) as string[]
    },
    {
      category: t("apartments.details.bedroom"),
      icon: Bed,
      items: t("apartments.details.bedroomInfo", { returnObjects: true }) as string[]
    },
    {
      category: t("apartments.details.bath"),
      icon: Bath,
      items: t("apartments.details.bathroom", { returnObjects: true }) as string[]
    },
    {
      category: t("apartments.details.kitchen"),
      icon: Utensils,
      items: t("apartments.details.kitchenInfo", { returnObjects: true }) as string[]
    }
  ];

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-gray-600 mb-4">{t("booking.noDataMsg")}</p>
          <button
            onClick={() => navigate('/apartments')}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {t("booking.backToApts")}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Add custom styles */}
      <style>{calendarStyles}</style>

      {/* Notification Toast */}
      <AnimatePresence>
        {notification.type && (
          <motion.div
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className={`fixed top-24 left-1/2 z-50 px-4 py-3 rounded-xl shadow-lg flex items-center space-x-3 max-w-sm ${
              notification.type === 'success' 
                ? 'bg-green-500 text-white' 
                : 'bg-red-500 text-white'
            }`}
          >
            {notification.type === 'success' ? (
              <Check className="w-5 h-5 flex-shrink-0" />
            ) : (
              <X className="w-5 h-5 flex-shrink-0" />
            )}
            <span className="text-sm font-medium">{notification.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <div className="bg-white border-b sticky top-20 mb-20 z-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-3 lg:py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              <span>{t("booking.back")}</span>
            </button>
            
            <div className="flex items-center space-x-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setSavedToWishlist(!savedToWishlist)}
                className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Heart className={`w-4 h-4 lg:w-5 lg:h-5 ${savedToWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <Share2 className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 lg:py-8">
          <div className="mb-4 lg:mb-6">
            <h1 className="text-2xl lg:text-4xl font-bold text-gray-900 mb-2">{name}</h1>
            <div className="flex flex-wrap items-center gap-2 lg:gap-4 text-sm lg:text-base text-gray-600">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 lg:w-5 lg:h-5 text-yellow-500 fill-current" />
                <span className="font-semibold">4.9</span>
                <span className="hidden sm:inline">({t("booking.reviews")})</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>Kanica</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Users className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>{capacity} {t("booking.guests")}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-1">
                <Bed className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>{bedrooms} {bedrooms === 1 ? t("booking.bedroom") : t("booking.bedrooms")}</span>
              </div>
            </div>
          </div>

          {/* Image Gallery */}
          <ModernImageGallery images={allImages} />
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 lg:px-6 py-6 lg:py-12">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8 lg:space-y-12">
            {/* Description */}
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">{t("booking.aboutPlace")}</h2>
              <p className="text-sm lg:text-base text-gray-600 leading-relaxed">
                {t(`apartments.a${name?.match(/\d+/)?.[0]}Info`)} {t("apartments.aboutDesc")}
              </p>
            </div>

            {/* Amenities */}
            <div>
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-4 lg:mb-6">{t("booking.whatOffers")}</h2>
              <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
                {amenities.map((category) => (
                  <div key={category.category}>
                    <div className="flex items-center space-x-3 mb-3 lg:mb-4">
                      <div className="w-9 h-9 lg:w-10 lg:h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <category.icon className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />
                      </div>
                      <h3 className="text-sm lg:text-base font-semibold text-gray-900">{category.category}</h3>
                    </div>
                    <ul className="space-y-2 ml-12 lg:ml-13">
                      {category.items.map((item, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-600">
                          <Check className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-xs lg:text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Special Features */}
              <div className="mt-6 lg:mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
                {[
                  { icon: Wifi, label: t("booking.freeWifi") },
                  { icon: Waves, label: t("booking.pool") },
                  { icon: Car, label: t("booking.parking") },
                  { icon: Coffee, label: t("booking.coffee") }
                ].map((feature) => (
                  <div key={feature.label} className="bg-gray-50 rounded-lg lg:rounded-xl p-3 lg:p-4 text-center">
                    <feature.icon className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600 mx-auto mb-1 lg:mb-2" />
                    <span className="text-xs lg:text-sm font-medium text-gray-900">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking - FIXED */}
          <div className="lg:col-span-1">
            <div className="sticky top-32">
              {/* Price Card */}
              <div className="bg-white rounded-xl lg:rounded-2xl shadow-lg lg:shadow-xl p-4 lg:p-6 mb-4 lg:mb-6">
                <div className="flex items-end justify-between mb-4 lg:mb-6">
                  <div>
                    <span className="text-2xl lg:text-3xl font-bold text-gray-900">€{price}</span>
                    <span className="text-sm lg:text-base text-gray-600"> {t("booking.perNight")}</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 text-xs lg:text-sm">
                      <Star className="w-3 h-3 lg:w-4 lg:h-4 text-yellow-500 fill-current" />
                      <span className="font-semibold">4.9</span>
                    </div>
                    <span className="text-xs text-gray-500">{t("booking.reviews")}</span>
                  </div>
                </div>

                {/* Calendar - FIXED */}
                <div className="mb-4 lg:mb-6">
                  <h3 className="text-sm lg:text-base font-semibold text-gray-900 mb-3 lg:mb-4">{t("booking.selectDates")}</h3>
                  <div className="calendar-container border rounded-lg lg:rounded-xl overflow-hidden">
                    <DateRangePicker
                      ranges={range}
                      onChange={(item: any) => setRange([item.selection])}
                      disabledDates={disabledDates}
                      minDate={new Date()}
                      rangeColors={['#3b82f6']}
                      showDateDisplay={false}
                      months={1}
                      direction="horizontal"
                      staticRanges={[]}
                      inputRanges={[]}
                    />
                  </div>
                </div>

                {/* Booking Form */}
                <EnhancedBookingForm
                  range={range}
                  onSubmit={handleBookingSubmit}
                />
              </div>

              {/* Quick Contact - Hidden on mobile for space */}
              <div className="hidden lg:block bg-gray-50 rounded-2xl p-6">
                <h3 className="font-semibold text-gray-900 mb-4">{t("booking.needHelp")}</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+385958203771"
                    className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+385 95 820 3771</span>
                  </a>
                  <a
                    href="https://wa.me/00385958203771"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-600 hover:text-green-600 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ApartmentDetails;
