// Components/Cards/ApartmentCard.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";
import { 
  BedDouble, 
  Users, 
  Wifi, 
  Car, 
  Star,
  ArrowRight 
} from "lucide-react";

interface ApartmentCardProps {
  apartment: {
    id: string;
    name: string;
    description: string;
    images: string[];
    capacity: number;
    bedrooms: number;
    price: number;
    rating: number;
    amenities: string[];
  };
  index: number;
}

function ApartmentCard({ apartment, index }: ApartmentCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
    >
      <Link to={`/apartments/${apartment.id}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <img
            src={apartment.images[0]}
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

          {/* Rating */}
          <div className="absolute top-4 left-4 flex items-center space-x-1 px-2 py-1 bg-white/95 backdrop-blur-sm rounded-lg">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-semibold text-gray-900">
              {apartment.rating}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {apartment.name}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-2">
            {apartment.description}
          </p>

          {/* Features */}
          <div className="flex items-center space-x-4 mb-4 text-gray-500">
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span className="text-sm">{apartment.capacity}</span>
            </div>
            <div className="flex items-center space-x-1">
              <BedDouble className="w-4 h-4" />
              <span className="text-sm">{apartment.bedrooms}</span>
            </div>
            {apartment.amenities.includes('wifi') && (
              <Wifi className="w-4 h-4" />
            )}
            {apartment.amenities.includes('parking') && (
              <Car className="w-4 h-4" />
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
export default ApartmentCard;
