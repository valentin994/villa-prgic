import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
  altPrefix?: string;
}

function Lightbox({
  images,
  initialIndex,
  onClose,
  altPrefix = "Image",
}: LightboxProps) {
  const [selectedImage, setSelectedImage] = useState(initialIndex);
  const activeThumbRef = useRef<HTMLButtonElement>(null);

  const handlePrevious = useCallback(() => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrevious();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, handlePrevious, handleNext]);

  useEffect(() => {
    activeThumbRef.current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [selectedImage]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black"
    >
      <div className="relative h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 lg:p-10 bg-gradient-to-b from-black/50 to-transparent absolute top-0 left-0 right-0 z-10">
          <span className="text-white font-medium">
            {selectedImage + 1} / {images.length}
          </span>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Main Image */}
        <div className="relative flex-1 min-h-0 flex items-center justify-center p-4 lg:p-8">
          <AnimatePresence mode="wait">
            <motion.img
              key={selectedImage}
              src={images[selectedImage]}
              alt={`${altPrefix} ${selectedImage + 1}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-full max-h-full object-contain"
            />
          </AnimatePresence>

          {/* Navigation */}
          <button
            onClick={handlePrevious}
            className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Thumbnail Strip */}
        <div className="flex-shrink-0 bg-black/80 backdrop-blur-sm p-4 lg:p-8">
          <div className="flex gap-2 justify-start overflow-x-auto">
            {images.map((image, index) => (
              <button
                key={index}
                ref={selectedImage === index ? activeThumbRef : null}
                onClick={() => setSelectedImage(index)}
                className={`relative flex-shrink-0 w-24 h-24 overflow-hidden transition-all ${
                  selectedImage === index
                    ? "ring-2 ring-white"
                    : "opacity-60 hover:opacity-100"
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
  );
}

export default Lightbox;
