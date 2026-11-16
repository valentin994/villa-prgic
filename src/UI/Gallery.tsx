// pages/Gallery.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import galleryData from "../data/gallery_data.json";
import apartmentData from "../data/aparment_data.json";
import Lightbox from "../Components/Lightbox";

interface GalleryCategory {
  id: string;
  images: string[];
}

const rawCategories = galleryData as GalleryCategory[];

function Gallery() {
  const { t } = useTranslation();
  const [lightbox, setLightbox] = useState<{
    images: string[];
    index: number;
  } | null>(null);

  const categories = [
    ...apartmentData.map((apartment) => ({
      id: apartment.link,
      label: apartment.name,
      images: apartment.images,
    })),
    ...rawCategories.map((category) => ({
      id: category.id,
      label: t(`gallery.categories.${category.id}`),
      images: category.images,
    })),
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 pt-36 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {t("gallery.heading")}
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t("gallery.subheading")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 mt-8 pb-16 space-y-16">
        {categories.map((category) => (
          <div key={category.id}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900">
                {category.label}
              </h2>
              <span className="text-sm text-gray-500">
                {category.images.length} photos
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-3">
              {category.images.map((image, index) => (
                <button
                  key={image}
                  onClick={() =>
                    setLightbox({ images: category.images, index })
                  }
                  className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer bg-gray-200"
                >
                  <img
                    src={image}
                    alt={`${category.label} ${index + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            initialIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
