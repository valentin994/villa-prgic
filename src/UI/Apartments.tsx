// pages/Apartments.tsx
import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Search, 
  Users,
  BedDouble,
  ChevronDown,
  Grid,
  List,
  Coffee,
  Waves,
  ChefHat,
  Wifi,
  Car,
  ArrowRight
} from "lucide-react";
import apartmentData from "../data/aparment_data.json";
import { Link } from "react-router-dom";

// Helper function to extract capacity and bedrooms from detail string
const parseApartmentDetails = (detail: string) => {
  const capacityMatch = detail.match(/for (\w+) people/);
  const bedroomMatch = detail.match(/(\w+) bedroom/);
  
  const capacityWords: { [key: string]: number } = {
    'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8
  };
  
  const bedroomWords: { [key: string]: number } = {
    'one': 1, 'two': 2, 'three': 3, 'four': 4
  };
  
  return {
    capacity: capacityMatch ? capacityWords[capacityMatch[1]] || 2 : 2,
    bedrooms: bedroomMatch ? bedroomWords[bedroomMatch[1]] || 1 : 1
  };
};

// Enhanced Apartment Card Component
const ApartmentCard = ({ 
  apartment, 
  index,
  viewMode = "grid" 
}: { 
  apartment: any; 
  index: number;
  viewMode?: "grid" | "list";
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { capacity, bedrooms } = parseApartmentDetails(apartment.detail);
  const { t } = useTranslation();
  
  // Map features to icons
  const featureIcons: { [key: string]: any } = {
    'Kitchen': ChefHat,
    'Pool': Waves,
    'Coffee Maker': Coffee,
    'Wifi': Wifi,
    'Parking': Car
  };

  if (viewMode === "list") {
    return (
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.05 }}
        viewport={{ once: true }}
        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
      >
        <Link to={`/apartments/${apartment.link}`} state={apartment}>
          <div className="flex flex-col md:flex-row">
            {/* Image */}
            <div className="relative md:w-96 h-64 md:h-auto overflow-hidden bg-gray-100">
              <img
                src={apartment.imageLink}
                alt={apartment.name}
                onLoad={() => setImageLoaded(true)}
                className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              )}
            </div>
            
            {/* Content */}
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {apartment.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{apartment.detail}</p>
                </div>
                <div className="text-right">
                  <span className="text-sm text-gray-500">From</span>
                  <p className="text-2xl font-bold text-gray-900">€{apartment.price}</p>
                  <span className="text-sm text-gray-500">/night</span>
                </div>
              </div>
              
              {/* Features */}
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="w-5 h-5" />
                  <span>{capacity} guests</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <BedDouble className="w-5 h-5" />
                  <span>{bedrooms} {bedrooms === 1 ? 'bedroom' : 'bedrooms'}</span>
                </div>
                {apartment.features?.map((feature: string) => {
                  const Icon = featureIcons[feature];
                  return Icon ? (
                    <div key={feature} className="flex items-center space-x-2 text-gray-600">
                      <Icon className="w-5 h-5" />
                      <span>{feature}</span>
                    </div>
                  ) : null;
                })}
              </div>
              
              <motion.div
                className="inline-flex items-center space-x-2 text-blue-600 font-medium"
                whileHover={{ x: 5 }}
              >
                <span>View Details</span>
                <ArrowRight className="w-4 h-4" />
              </motion.div>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/apartments/${apartment.link}`} state={apartment}>
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={apartment.imageLink}
            alt={apartment.name}
            onLoad={() => setImageLoaded(true)}
            className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
          
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}

          {/* Price Badge */}
          <div className="absolute top-4 right-4 px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-lg">
            <span className="text-sm font-medium text-gray-600">From</span>
            <span className="block text-lg font-bold text-gray-900">
              €{apartment.price}/night
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {apartment.name}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {apartment.detail}
          </p>

          {/* Features */}
          <div className="flex items-center space-x-4 mb-4 text-gray-500">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span className="text-sm">{capacity}</span>
            </div>
            <div className="flex items-center space-x-1">
              <BedDouble className="w-4 h-4" />
              <span className="text-sm">{bedrooms}</span>
            </div>
            {apartment.features?.includes('Pool') && (
              <Waves className="w-4 h-4" />
            )}
            {apartment.features?.includes('Kitchen') && (
              <ChefHat className="w-4 h-4" />
            )}
          </div>

          {/* CTA */}
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Available now
            </span>
            <motion.span
              className="flex items-center space-x-2 text-blue-600 font-medium"
              whileHover={{ x: 5 }}
            >
              <span>View Details</span>
              <ArrowRight className="w-4 h-4" />
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

// Main Component (simplified filters to match available data)
function Apartments() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: "",
    maxPrice: "",
    capacity: null as number | null,
    bedrooms: null as number | null,
    features: [] as string[]
  });

  // Process apartment data with extracted details
  const processedApartments = apartmentData.map(apt => ({
    ...apt,
    ...parseApartmentDetails(apt.detail)
  }));

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Filter and sort apartments
  const filteredApartments = useMemo(() => {
    let filtered = [...processedApartments];
    
    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(apt => 
        apt.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        apt.detail?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Apply price filter
    if (filters.minPrice) {
      filtered = filtered.filter(apt => apt.price >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      filtered = filtered.filter(apt => apt.price <= Number(filters.maxPrice));
    }
    
    // Apply capacity filter
    if (filters.capacity) {
      filtered = filtered.filter(apt => apt.capacity === filters.capacity);
    }
    
    // Apply bedrooms filter
    if (filters.bedrooms) {
      filtered = filtered.filter(apt => apt.bedrooms === filters.bedrooms);
    }
    
    // Apply features filter
    if (filters.features.length > 0) {
      filtered = filtered.filter(apt => 
        filters.features.every(feature => 
          apt.features?.includes(feature)
        )
      );
    }
    
    // Sort
    switch (sortBy) {
      case "priceLow":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceHigh":
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }
    
    return filtered;
  }, [processedApartments, searchQuery, filters, sortBy]);

  // Loading skeleton component
  const ApartmentSkeleton = () => (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md animate-pulse">
      <div className="aspect-[4/3] bg-gray-200" />
      <div className="p-6">
        <div className="h-6 bg-gray-200 rounded-lg mb-3 w-3/4" />
        <div className="h-4 bg-gray-200 rounded-lg mb-2" />
        <div className="h-4 bg-gray-200 rounded-lg mb-4 w-5/6" />
        <div className="flex space-x-4">
          <div className="h-8 bg-gray-200 rounded-lg w-16" />
          <div className="h-8 bg-gray-200 rounded-lg w-16" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Same as before but simplified */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 pt-36 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t("apartments.welcome")}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t("apartments.welcomeInfo")}
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search apartments..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl text-gray-900 placeholder-gray-500 bg-white shadow-xl focus:outline-none focus:ring-4 focus:ring-white/30"
                />
              </div>
            </div>
          </motion.div>
        </div>
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
          <svg 
            className="absolute bottom-0 w-full h-full" 
            viewBox="0 0 1440 48" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,48L60,42.7C120,37,240,27,360,26.7C480,27,600,37,720,40C840,43,960,37,1080,32C1200,27,1320,21,1380,18.7L1440,16L1440,48L1380,48C1320,48,1200,48,1080,48C960,48,840,48,720,48C600,48,480,48,360,48C240,48,120,48,60,48L0,48Z" 
              fill="#f9fafb"
            />
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 mt-8 pb-16">
        {/* Toolbar */}
        <div className="bg-white rounded-2xl shadow-sm p-4 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">
                  {filteredApartments.length}
                </span> apartments available
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Sort Dropdown */}
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-gray-100 hover:bg-gray-200 px-4 py-2 pr-10 rounded-lg font-medium text-gray-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="priceLow">Price: Low to High</option>
                  <option value="priceHigh">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600 pointer-events-none" />
              </div>
              
              {/* View Mode Toggle */}
              <div className="hidden md:flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === "grid" 
                      ? "bg-white text-blue-600 shadow-sm" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-md transition-all ${
                    viewMode === "list" 
                      ? "bg-white text-blue-600 shadow-sm" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Apartments Grid */}
        {isLoading ? (
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {[1, 2, 3].map(i => <ApartmentSkeleton key={i} />)}
          </div>
        ) : (
          <div className={`grid gap-6 ${
            viewMode === "grid" 
              ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
              : "grid-cols-1"
          }`}>
            {filteredApartments.map((apartment, index) => (
              <ApartmentCard
                key={apartment.link}
                apartment={apartment}
                index={index}
                viewMode={viewMode}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Apartments;
