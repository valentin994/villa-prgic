// pages/Region.tsx - FIXED VERSION
import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import {
  MapPin,
  Anchor,
  Mountain,
  Waves,
  Castle,
  Sun,
  Camera,
  Coffee,
  Fish,
  Sailboat,
  TreePine,
  Landmark,
  Trees,
  ChevronRight,
  Clock,
  Car,
  Info,
} from "lucide-react";

interface Attraction {
  name: string;
  description: string;
  icon: any;
  distance?: string;
  duration?: string;
  highlights?: string[];
  image?: string;
  type?: string;
}

function Region() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<"rogoznica" | "sibenik" | "split">(
    "rogoznica",
  );
  const [selectedAttraction, setSelectedAttraction] = useState<string | null>(
    null,
  );

  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [activitiesRef, activitiesInView] = useInView({ triggerOnce: true });

  const splitAttractions: Attraction[] = [
    {
      name: t("region.dPalace"),
      description: t("region.dPalaceInfo"),
      icon: Castle,
      distance: "45 km",
      duration: "40 min",
      highlights: [
        "UNESCO Heritage",
        "Roman Architecture",
        "Game of Thrones filming location",
      ],
    },
    {
      name: t("region.riva"),
      description: t("region.rivaInfo"),
      icon: Anchor,
      distance: "45 km",
      duration: "40 min",
      highlights: [
        "Waterfront promenade",
        "Cafes & Restaurants",
        "Evening atmosphere",
      ],
    },
    {
      name: t("region.marjan"),
      description: t("region.marjanInfo"),
      icon: Mountain,
      distance: "48 km",
      duration: "45 min",
      highlights: ["Hiking trails", "Panoramic views", "Beach access"],
    },
    {
      name: t("region.bacvice"),
      description: t("region.bacviceInfo") || t("region.rivaInfo"), // Fallback if bacviceInfo doesn't exist
      icon: Waves,
      distance: "43 km",
      duration: "38 min",
      highlights: ["Sandy beach", "Picigin game", "Beach bars"],
    },
    {
      name: t("region.mestrovic"),
      description: t("region.mestrovicInfo"),
      icon: Camera,
      distance: "50 km",
      duration: "45 min",
      highlights: ["Art gallery", "Sculpture garden", "Sea views"],
    },
  ];

  const sibenikAttractions: Attraction[] = [
    {
      name: t("region.stJames"),
      description: t("region.stJamesInfo"),
      icon: Landmark,
      distance: "30 km",
      duration: "30 min",
      highlights: [
        "UNESCO Heritage",
        "15th-century architecture",
        "No wooden supports",
      ],
    },
    {
      name: t("region.stMichael"),
      description: t("region.stMichaelInfo"),
      icon: Castle,
      distance: "30 km",
      duration: "30 min",
      highlights: ["Panoramic views", "Summer concerts", "Medieval fortress"],
    },
    {
      name: t("region.stNicholas"),
      description: t("region.stNicholasInfo"),
      icon: Waves,
      distance: "30 km",
      duration: "30 min",
      highlights: [
        "UNESCO Heritage",
        "Boat access only",
        "Renaissance architecture",
      ],
    },
    {
      name: t("region.sibenikOldTown"),
      description: t("region.sibenikOldTownInfo"),
      icon: Camera,
      distance: "30 km",
      duration: "30 min",
      highlights: ["Stone stairways", "Hidden squares", "Harbor views"],
    },
  ];

  const regionalAttractions: Attraction[] = [
    {
      name: t("region.klis"),
      description: t("region.klisInfo"),
      icon: Castle,
      type: t("region.klisType"),
      distance: "55 km",
      duration: "55 min",
    },
    {
      name: t("region.krka"),
      description: t("region.krkaInfo"),
      icon: Trees,
      type: t("region.krkaType"),
      distance: "35 km",
      duration: "35 min",
    },
    {
      name: t("region.biokovo"),
      description: t("region.biokovoInfo"),
      icon: Mountain,
      type: t("region.biokovoType"),
      distance: "95 km",
      duration: "1h 30min",
    },
  ];

  const rogoznicaAttractions: Attraction[] = [
    {
      name: t("region.marina"),
      description: t("region.marinaInfo"),
      icon: Sailboat,
      distance: "8 km",
      duration: "10 min",
      highlights: ["Luxury yachts", "Waterfront dining", "Sunset views"],
    },
    {
      name: t("region.dragon"),
      description: t("region.dragonInfo"),
      icon: Waves,
      distance: "9 km",
      duration: "12 min",
      highlights: ["Unique ecosystem", "Swimming", "Legend & mythology"],
    },
    {
      name: t("region.oldTown"),
      description: t("region.oldTownInfo"),
      icon: Castle,
      distance: "8 km",
      duration: "10 min",
      highlights: [
        "Historic architecture",
        "Local restaurants",
        "Artisan shops",
      ],
    },
    {
      name: t("region.promenada"),
      description: t("region.promenadaInfo"),
      icon: Sun,
      distance: "8 km",
      duration: "10 min",
      highlights: ["Seaside walk", "Beach access", "Cafes"],
    },
    {
      name: t("region.planka"),
      description: t("region.plankaInfo"),
      icon: TreePine,
      distance: "10 km",
      duration: "15 min",
      highlights: ["Nature views", "Hiking", "Photography"],
    },
  ];

  const activities = [
    {
      icon: Waves,
      name: t("region.swimmingBeaches"),
      count: t("region.swimmingBeachesCount"),
    },
    {
      icon: Sailboat,
      name: t("region.boatTours"),
      count: t("region.boatToursCount"),
    },
    {
      icon: Fish,
      name: t("region.freshSeafood"),
      count: t("region.freshSeafoodCount"),
    },
    {
      icon: Mountain,
      name: t("region.hikingTrails"),
      count: t("region.hikingTrailsCount"),
    },
    {
      icon: Camera,
      name: t("region.photoSpots"),
      count: t("region.photoSpotsCount"),
    },
    {
      icon: Coffee,
      name: t("region.localCafes"),
      count: t("region.localCafesCount"),
    },
    {
      icon: Sailboat,
      name: t("region.shipTourism"),
      count: t("region.shipTourismCount"),
    },
    {
      icon: Mountain,
      name: t("region.activeTourism"),
      count: t("region.activeTourismCount"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[70vh] min-h-[550px] md:min-h-[600px] overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://woop14abphufecql.public.blob.vercel-storage.com/apartmani_prgic_latest/7_WEB%20Imagebilder_Strand%20%26%20Meer/WEB_Strand%20%26%20Meer_015.jpg"
            alt="Croatian Coast"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center text-center px-6 pt-20 md:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              {t("region.heading")}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              {t("region.heroSubtitle")}
            </p>

            {/* Quick Stats */}
            <div className="hidden sm:flex flex-wrap justify-center gap-6 mt-12">
              {[
                { label: t("region.distanceToRogoznica"), value: "8 km" },
                { label: t("region.distanceToSibenik"), value: "30 km" },
                { label: t("region.distanceToSplit"), value: "45 km" },
                { label: t("region.nearestBeach"), value: "30 m" },
                { label: t("region.airport"), value: "35 km" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/20 backdrop-blur-md rounded-xl px-6 py-3"
                >
                  <p className="text-white/80 text-sm">{stat.label}</p>
                  <p className="text-white font-bold text-lg">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-[88px] z-30 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 overflow-x-auto">
          <div className="flex space-x-8 border-b min-w-max">
            <button
              onClick={() => setActiveTab("rogoznica")}
              className={`py-4 px-2 border-b-2 font-medium transition-all ${
                activeTab === "rogoznica"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Anchor className="w-5 h-5" />
                <span>Rogoznica</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                  8 km
                </span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("sibenik")}
              className={`py-4 px-2 border-b-2 font-medium transition-all ${
                activeTab === "sibenik"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Landmark className="w-5 h-5" />
                <span>Šibenik</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                  30 km
                </span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab("split")}
              className={`py-4 px-2 border-b-2 font-medium transition-all ${
                activeTab === "split"
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                <Castle className="w-5 h-5" />
                <span>Split</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                  45 km
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {activeTab === "split" && (
            <motion.div
              key="split"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Split Content */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {t("region.dSplit")}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {t("region.splitInfo")}
                  </p>

                  {/* Travel Info */}
                  <div className="bg-blue-50 rounded-2xl p-6 mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Info className="w-5 h-5 mr-2 text-blue-600" />
                      {t("region.travelInfo")}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Car className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">
                            {t("region.byCar")}
                          </p>
                          <p className="font-semibold">
                            40 {t("region.minutesSuffix")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">
                            {t("region.bestTime")}
                          </p>
                          <p className="font-semibold">{t("region.morning")}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Attractions List */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {t("region.attractions")}
                  </h3>
                  <div className="space-y-4">
                    {splitAttractions.map((attraction) => (
                      <motion.div
                        key={attraction.name}
                        whileHover={{ x: 5 }}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 cursor-pointer"
                        onClick={() =>
                          setSelectedAttraction(
                            selectedAttraction === attraction.name
                              ? null
                              : attraction.name,
                          )
                        }
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <attraction.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">
                                {attraction.name}
                              </h4>
                              <ChevronRight
                                className={`w-5 h-5 text-gray-400 transition-transform ${
                                  selectedAttraction === attraction.name
                                    ? "rotate-90"
                                    : ""
                                }`}
                              />
                            </div>
                            <p className="text-gray-600 text-sm">
                              {attraction.description}
                            </p>

                            {selectedAttraction === attraction.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="mt-4 pt-4 border-t"
                              >
                                <div className="flex flex-wrap gap-2">
                                  {attraction.highlights?.map((highlight) => (
                                    <span
                                      key={highlight}
                                      className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                                    >
                                      {highlight}
                                    </span>
                                  ))}
                                </div>
                                <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                                  <span className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {attraction.distance}
                                  </span>
                                  <span className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {attraction.duration}
                                  </span>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Image Gallery */}
                <div className="space-y-6">
                  <div className="relative h-96 overflow-hidden shadow-xl">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Split_080620-133710-IMG_0968x.jpg/1920px-Split_080620-133710-IMG_0968x.jpg"
                      alt="Split"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2">
                      <p className="font-semibold text-gray-900">
                        Split Old Town
                      </p>
                      <p className="text-sm text-gray-600">
                        UNESCO World Heritage Site
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-1">
                    <div className="relative h-48 overflow-hidden shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?q=80&w=2073"
                        alt="Diocletian's Palace"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1593351415075-3bac9f45c877?q=80&w=2071"
                        alt="Riva Promenade"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "sibenik" && (
            <motion.div
              key="sibenik"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Šibenik Content */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {t("region.dSibenik")}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {t("region.sibenikInfo")}
                  </p>

                  {/* Travel Info */}
                  <div className="bg-amber-50 rounded-2xl p-6 mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Info className="w-5 h-5 mr-2 text-amber-600" />
                      {t("region.travelInfo")}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Car className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">
                            {t("region.byCar")}
                          </p>
                          <p className="font-semibold">
                            30 {t("region.minutesSuffix")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">
                            {t("region.bestTime")}
                          </p>
                          <p className="font-semibold">
                            {t("region.afternoon")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Attractions List */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {t("region.sAttractions")}
                  </h3>
                  <div className="space-y-4">
                    {sibenikAttractions.map((attraction) => (
                      <motion.div
                        key={attraction.name}
                        whileHover={{ x: 5 }}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 cursor-pointer"
                        onClick={() =>
                          setSelectedAttraction(
                            selectedAttraction === attraction.name
                              ? null
                              : attraction.name,
                          )
                        }
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <attraction.icon className="w-6 h-6 text-amber-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">
                                {attraction.name}
                              </h4>
                              <ChevronRight
                                className={`w-5 h-5 text-gray-400 transition-transform ${
                                  selectedAttraction === attraction.name
                                    ? "rotate-90"
                                    : ""
                                }`}
                              />
                            </div>
                            <p className="text-gray-600 text-sm">
                              {attraction.description}
                            </p>

                            {selectedAttraction === attraction.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="mt-4 pt-4 border-t"
                              >
                                <div className="flex flex-wrap gap-2">
                                  {attraction.highlights?.map((highlight) => (
                                    <span
                                      key={highlight}
                                      className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                                    >
                                      {highlight}
                                    </span>
                                  ))}
                                </div>
                                <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                                  <span className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {attraction.distance}
                                  </span>
                                  <span className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {attraction.duration}
                                  </span>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Image Gallery */}
                <div className="space-y-6">
                  <div className="relative h-96 overflow-hidden shadow-xl">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/HR-Sibenik-Kathedrale-01.jpg/1920px-HR-Sibenik-Kathedrale-01.jpg"
                      alt="St. James Cathedral, Šibenik"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2">
                      <p className="font-semibold text-gray-900">
                        St. James Cathedral
                      </p>
                      <p className="text-sm text-gray-600">
                        UNESCO World Heritage Site
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-1">
                    <div className="relative h-48 overflow-hidden shadow-lg">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Aerial_image_of_St._Michael's_Fortress%2C_%C5%A0ibenik_(view_from_the_west).jpg/1280px-Aerial_image_of_St._Michael's_Fortress%2C_%C5%A0ibenik_(view_from_the_west).jpg"
                        alt="St. Michael's Fortress, Šibenik"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden shadow-lg">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Sibenik_old_town_1.jpg/1280px-Sibenik_old_town_1.jpg"
                        alt="Šibenik Old Town"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "rogoznica" && (
            <motion.div
              key="rogoznica"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* Rogoznica Content */}
              <div className="grid lg:grid-cols-2 gap-12 mb-16">
                <div className="order-2 lg:order-1">
                  <div className="relative h-96 overflow-hidden shadow-xl mb-1">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Rogoznica.JPG/1280px-Rogoznica.JPG"
                      alt="Rogoznica"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2">
                      <p className="font-semibold text-gray-900">
                        Rogoznica Marina
                      </p>
                      <p className="text-sm text-gray-600">
                        Traditional fishing village
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-1">
                    <div className="relative h-48 overflow-hidden shadow-lg">
                      <img
                        src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
                        alt="Dragon's Eye Lake"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative h-48 overflow-hidden shadow-lg">
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Rogoznica_%26_Marina_Frapa_%2833523246200%29.jpg/1280px-Rogoznica_%26_Marina_Frapa_%2833523246200%29.jpg"
                        alt="Marina"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="order-1 lg:order-2">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {t("region.rogoznica")}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    {t("region.rogoznicaInfo")}
                  </p>

                  {/* Travel Info */}
                  <div className="bg-green-50 rounded-2xl p-6 mb-8">
                    <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
                      <Info className="w-5 h-5 mr-2 text-green-600" />
                      {t("region.travelInfo")}
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Car className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">
                            {t("region.byCar")}
                          </p>
                          <p className="font-semibold">
                            10 {t("region.minutesSuffix")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">
                            {t("region.bestTime")}
                          </p>
                          <p className="font-semibold">{t("region.sunset")}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Attractions List */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    {t("region.rAttractions")}
                  </h3>
                  <div className="space-y-4">
                    {rogoznicaAttractions.map((attraction) => (
                      <motion.div
                        key={attraction.name}
                        whileHover={{ x: 5 }}
                        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-6 cursor-pointer"
                        onClick={() =>
                          setSelectedAttraction(
                            selectedAttraction === attraction.name
                              ? null
                              : attraction.name,
                          )
                        }
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <attraction.icon className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">
                                {attraction.name}
                              </h4>
                              <ChevronRight
                                className={`w-5 h-5 text-gray-400 transition-transform ${
                                  selectedAttraction === attraction.name
                                    ? "rotate-90"
                                    : ""
                                }`}
                              />
                            </div>
                            <p className="text-gray-600 text-sm">
                              {attraction.description}
                            </p>

                            {selectedAttraction === attraction.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="mt-4 pt-4 border-t"
                              >
                                <div className="flex flex-wrap gap-2">
                                  {attraction.highlights?.map((highlight) => (
                                    <span
                                      key={highlight}
                                      className="px-3 py-1 bg-gray-100 rounded-full text-xs text-gray-600"
                                    >
                                      {highlight}
                                    </span>
                                  ))}
                                </div>
                                <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                                  <span className="flex items-center">
                                    <MapPin className="w-4 h-4 mr-1" />
                                    {attraction.distance}
                                  </span>
                                  <span className="flex items-center">
                                    <Clock className="w-4 h-4 mr-1" />
                                    {attraction.duration}
                                  </span>
                                </div>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Regional Attractions Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              {t("region.regionalHeading")}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t("region.regionalSubheading")}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {regionalAttractions.map((attraction) => (
              <div
                key={attraction.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                    <attraction.icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-medium">
                    {attraction.type}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg mb-2">
                  {attraction.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {attraction.description}
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {attraction.distance}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {attraction.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Activities Section */}
        <div ref={activitiesRef} className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            {t("region.thingsToDo")}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.name}
                initial={{ opacity: 0, y: 20 }}
                animate={activitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all p-6 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <activity.icon className="w-7 h-7 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm mb-1">
                  {activity.name}
                </h3>
                <p className="text-xs text-gray-500">{activity.count}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            {t("region.readyToExplore")}
          </h2>
          <p className="text-xl mb-8 text-white/90">{t("region.bookCta")}</p>
          <Link to="/apartments">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              {t("region.checkAvailability")}
            </motion.button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Region;
