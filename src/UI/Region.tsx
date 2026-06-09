// pages/Region.tsx - FIXED VERSION
import regionHeroImg from "../assets/home_hero_picture.jpg";
import { useState } from "react";
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
  ChevronRight,
  Clock,
  Car,
  Info
} from "lucide-react";

interface Attraction {
  name: string;
  description: string;
  icon: any;
  distance?: string;
  duration?: string;
  highlights?: string[];
  image?: string;
}

function Region() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'split' | 'rogoznica'>('split');
  const [selectedAttraction, setSelectedAttraction] = useState<string | null>(null);
  
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [activitiesRef, activitiesInView] = useInView({ triggerOnce: true });

  const splitAttractions: Attraction[] = [
    {
      name: t("region.dPalace"),
      description: t("region.dPalaceInfo"),
      icon: Castle,
      distance: "45 km",
      duration: "40 min",
      highlights: ["UNESCO Heritage", "Roman Architecture", "Game of Thrones filming location"]
    },
    {
      name: t("region.riva"),
      description: t("region.rivaInfo"),
      icon: Anchor,
      distance: "45 km",
      duration: "40 min",
      highlights: ["Waterfront promenade", "Cafes & Restaurants", "Evening atmosphere"]
    },
    {
      name: t("region.marjan"),
      description: t("region.marjanInfo"),
      icon: Mountain,
      distance: "48 km",
      duration: "45 min",
      highlights: ["Hiking trails", "Panoramic views", "Beach access"]
    },
    {
      name: t("region.bacvice"),
      description: t("region.bacviceInfo") || t("region.rivaInfo"), // Fallback if bacviceInfo doesn't exist
      icon: Waves,
      distance: "43 km",
      duration: "38 min",
      highlights: ["Sandy beach", "Picigin game", "Beach bars"]
    },
    {
      name: t("region.mestrovic"),
      description: t("region.mestrovicInfo"),
      icon: Camera,
      distance: "50 km",
      duration: "45 min",
      highlights: ["Art gallery", "Sculpture garden", "Sea views"]
    }
  ];

  const rogoznicaAttractions: Attraction[] = [
    {
      name: t("region.marina"),
      description: t("region.marinaInfo"),
      icon: Sailboat,
      distance: "8 km",
      duration: "10 min",
      highlights: ["Luxury yachts", "Waterfront dining", "Sunset views"]
    },
    {
      name: t("region.dragon"),
      description: t("region.dragonInfo"),
      icon: Waves,
      distance: "9 km",
      duration: "12 min",
      highlights: ["Unique ecosystem", "Swimming", "Legend & mythology"]
    },
    {
      name: t("region.oldTown"),
      description: t("region.oldTownInfo"),
      icon: Castle,
      distance: "8 km",
      duration: "10 min",
      highlights: ["Historic architecture", "Local restaurants", "Artisan shops"]
    },
    {
      name: t("region.promenada"),
      description: t("region.promenadaInfo"),
      icon: Sun,
      distance: "8 km",
      duration: "10 min",
      highlights: ["Seaside walk", "Beach access", "Cafes"]
    },
    {
      name: t("region.planka"),
      description: t("region.plankaInfo"),
      icon: TreePine,
      distance: "10 km",
      duration: "15 min",
      highlights: ["Nature views", "Hiking", "Photography"]
    }
  ];

  const activities = [
    { icon: Waves, name: "Swimming & Beaches", count: "15+ beaches" },
    { icon: Sailboat, name: "Boat Tours", count: "Daily trips" },
    { icon: Fish, name: "Fresh Seafood", count: "20+ restaurants" },
    { icon: Mountain, name: "Hiking Trails", count: "10+ routes" },
    { icon: Camera, name: "Photo Spots", count: "30+ locations" },
    { icon: Coffee, name: "Local Cafes", count: "50+ options" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-[70vh] min-h-[600px] overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src={regionHeroImg}
            alt="Croatian Coast"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center text-center px-6">
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
              From historic Split to charming Rogoznica, discover the treasures of the Dalmatian coast
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mt-12">
              {[
                { label: "Distance to Split", value: "45 km" },
                { label: "Distance to Rogoznica", value: "8 km" },
                { label: "Nearest Beach", value: "500 m" },
                { label: "Airport", value: "35 km" }
              ].map((stat) => (
                <div key={stat.label} className="bg-white/20 backdrop-blur-md rounded-xl px-6 py-3">
                  <p className="text-white/80 text-sm">{stat.label}</p>
                  <p className="text-white font-bold text-lg">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </section>

      {/* Tab Navigation */}
      <section className="sticky top-20 z-30 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex space-x-8 border-b">
            <button
              onClick={() => setActiveTab('split')}
              className={`py-4 px-2 border-b-2 font-medium transition-all ${
                activeTab === 'split'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Castle className="w-5 h-5" />
                <span>Split</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">45 km</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('rogoznica')}
              className={`py-4 px-2 border-b-2 font-medium transition-all ${
                activeTab === 'rogoznica'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="flex items-center space-x-2">
                <Anchor className="w-5 h-5" />
                <span>Rogoznica</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">8 km</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <AnimatePresence mode="wait">
          {activeTab === 'split' ? (
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
                      Travel Information
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Car className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">By Car</p>
                          <p className="font-semibold">40 minutes</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">Best Time</p>
                          <p className="font-semibold">Morning</p>
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
                        onClick={() => setSelectedAttraction(
                          selectedAttraction === attraction.name ? null : attraction.name
                        )}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <attraction.icon className="w-6 h-6 text-blue-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{attraction.name}</h4>
                              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                                selectedAttraction === attraction.name ? 'rotate-90' : ''
                              }`} />
                            </div>
                            <p className="text-gray-600 text-sm">{attraction.description}</p>
                            
                            {selectedAttraction === attraction.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
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
                      <p className="font-semibold text-gray-900">Split Old Town</p>
                      <p className="text-sm text-gray-600">UNESCO World Heritage Site</p>
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
          ) : (
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
                      src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=2096"
                      alt="Rogoznica"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2">
                      <p className="font-semibold text-gray-900">Rogoznica Marina</p>
                      <p className="text-sm text-gray-600">Traditional fishing village</p>
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
                        src="https://images.unsplash.com/photo-1514649923863-ceaf75b7ec40?q=80&w=1974"
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
                      Travel Information
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3">
                        <Car className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">By Car</p>
                          <p className="font-semibold">10 minutes</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-gray-500" />
                        <div>
                          <p className="text-sm text-gray-500">Best Time</p>
                          <p className="font-semibold">Sunset</p>
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
                        onClick={() => setSelectedAttraction(
                          selectedAttraction === attraction.name ? null : attraction.name
                        )}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <attraction.icon className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{attraction.name}</h4>
                              <ChevronRight className={`w-5 h-5 text-gray-400 transition-transform ${
                                selectedAttraction === attraction.name ? 'rotate-90' : ''
                              }`} />
                            </div>
                            <p className="text-gray-600 text-sm">{attraction.description}</p>
                            
                            {selectedAttraction === attraction.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
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

        {/* Activities Section */}
        <div ref={activitiesRef} className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Things to Do in the Area
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
                <h3 className="font-semibold text-gray-900 text-sm mb-1">{activity.name}</h3>
                <p className="text-xs text-gray-500">{activity.count}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Explore?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Book your stay with us and discover all these amazing places
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
          >
            Check Availability
          </motion.button>
        </div>
      </section>
    </div>
  );
}

export default Region;
