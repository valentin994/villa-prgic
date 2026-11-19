// Components/ReviewsCarousel.tsx
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Review {
  name: string;
  text: string;
}

interface ReviewsCarouselProps {
  reviews: Review[];
  intervalMs?: number;
}

function ReviewsCarousel({ reviews, intervalMs = 6000 }: ReviewsCarouselProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || reviews.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % reviews.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [paused, reviews.length, intervalMs]);

  const review = reviews[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <Quote className="w-10 h-10 text-blue-200 mx-auto mb-4" />

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center min-h-[140px] px-4"
        >
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-4 whitespace-pre-line">
            “{review.text}”
          </p>
          <div className="flex items-center gap-1 mb-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-500 fill-current"
              />
            ))}
          </div>
          <p className="font-semibold text-gray-900">{review.name}</p>
        </motion.div>
      </AnimatePresence>

      {reviews.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-6">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Review ${i + 1}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-blue-600" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ReviewsCarousel;
