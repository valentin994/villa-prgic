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
      <section className="relative  bg-cover bg-[url('https://woop14abphufecql.public.blob.vercel-storage.com/apartmani_prgic_latest/1_WEB%20Imagebilder_Vila%20Prgic%20Aussenanlage/WEB_Vila%20Prgic_Anlage_043.jpg')] pt-36 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
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
