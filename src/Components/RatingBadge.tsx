// Components/RatingBadge.tsx
import { Star } from "lucide-react";
import { PlatformRating } from "../data/ratings";

const GoogleIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    />
    <path
      fill="#FF3D00"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    />
    <path
      fill="#1976D2"
      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    />
  </svg>
);

const BookingIcon = () => (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 48 48">
    <rect width="48" height="48" rx="6" fill="#003580" />
    <text
      x="24"
      y="32"
      textAnchor="middle"
      fontFamily="Georgia, serif"
      fontWeight="bold"
      fontSize="24"
      fill="#fff"
    >
      B
    </text>
  </svg>
);

interface RatingBadgeProps {
  platform: "google" | "booking";
  rating: PlatformRating;
  showLabel?: boolean;
  className?: string;
}

function RatingBadge({
  platform,
  rating,
  showLabel = true,
  className = "",
}: RatingBadgeProps) {
  const Icon = platform === "google" ? GoogleIcon : BookingIcon;
  const label = platform === "google" ? "Google" : "Booking.com";

  return (
    <a
      href={rating.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center space-x-1.5 hover:opacity-80 transition-opacity ${className}`}
    >
      <Icon />
      <span className="flex items-center space-x-1 font-semibold">
        <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
        <span>
          {rating.score.toFixed(1)}
          {rating.maxScore !== 5 ? `/${rating.maxScore}` : ""}
        </span>
      </span>
      {showLabel && (
        <span className="text-xs opacity-75">
          ({rating.reviewCount}) {label}
        </span>
      )}
    </a>
  );
}

export default RatingBadge;
