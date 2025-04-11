import { useState } from "react";

function ImageGallery({ imageUrls }: { imageUrls: string[] }) {
  const [imageIndex, setImageIndex] = useState(0);

  const goToPrevious = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? imageUrls.length - 1 : prevIndex - 1,
    );
  };

  const goToNext = () => {
    setImageIndex((prevIndex) =>
      prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1,
    );
  };
  return (
    <div className="relative md:hidden">
      <button
        onClick={goToPrevious}
        className="absolute ml-2 h-8 w-8 left-0 top-1/2 -translate-y-1/2 brightness-90 bg-black/25  rounded-2xl md:hidden z-10"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M11 18.75C10.9015 18.7505 10.8038 18.7313 10.7128 18.6935C10.6218 18.6557 10.5393 18.6001 10.47 18.53L4.47001 12.53C4.32956 12.3894 4.25067 12.1988 4.25067 12C4.25067 11.8013 4.32956 11.6107 4.47001 11.47L10.47 5.47003C10.6122 5.33755 10.8002 5.26543 10.9945 5.26885C11.1888 5.27228 11.3742 5.35099 11.5116 5.48841C11.649 5.62582 11.7278 5.81121 11.7312 6.00551C11.7346 6.19981 11.6625 6.38785 11.53 6.53003L6.06001 12L11.53 17.47C11.6705 17.6107 11.7494 17.8013 11.7494 18C11.7494 18.1988 11.6705 18.3894 11.53 18.53C11.4608 18.6001 11.3782 18.6557 11.2872 18.6935C11.1962 18.7313 11.0986 18.7505 11 18.75Z"
              fill="#FFFFFF"
            ></path>{" "}
            <path
              d="M19 12.75H5C4.80109 12.75 4.61032 12.671 4.46967 12.5303C4.32902 12.3897 4.25 12.1989 4.25 12C4.25 11.8011 4.32902 11.6103 4.46967 11.4697C4.61032 11.329 4.80109 11.25 5 11.25H19C19.1989 11.25 19.3897 11.329 19.5303 11.4697C19.671 11.6103 19.75 11.8011 19.75 12C19.75 12.1989 19.671 12.3897 19.5303 12.5303C19.3897 12.671 19.1989 12.75 19 12.75Z"
              fill="#FFFFFF"
            ></path>{" "}
          </g>
        </svg>
      </button>
      <button
        onClick={goToNext}
        className="absolute mr-2 h-8 w-8 right-0 top-1/2 -translate-y-1/2 bg-black/25 brightness-90 rounded-2xl md:hidden z-10"
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              d="M13 18.75C12.9015 18.7505 12.8038 18.7313 12.7128 18.6935C12.6218 18.6557 12.5393 18.6001 12.47 18.53C12.3296 18.3894 12.2507 18.1988 12.2507 18C12.2507 17.8013 12.3296 17.6107 12.47 17.47L17.94 12L12.47 6.53003C12.3375 6.38785 12.2654 6.19981 12.2688 6.00551C12.2723 5.81121 12.351 5.62582 12.4884 5.48841C12.6258 5.35099 12.8112 5.27228 13.0055 5.26885C13.1998 5.26543 13.3878 5.33755 13.53 5.47003L19.53 11.47C19.6705 11.6107 19.7494 11.8013 19.7494 12C19.7494 12.1988 19.6705 12.3894 19.53 12.53L13.53 18.53C13.4608 18.6001 13.3782 18.6557 13.2872 18.6935C13.1962 18.7313 13.0986 18.7505 13 18.75Z"
              fill="#FFFFFF"
            ></path>{" "}
            <path
              d="M19 12.75H5C4.80109 12.75 4.61032 12.671 4.46967 12.5303C4.32902 12.3897 4.25 12.1989 4.25 12C4.25 11.8011 4.32902 11.6103 4.46967 11.4697C4.61032 11.329 4.80109 11.25 5 11.25H19C19.1989 11.25 19.3897 11.329 19.5303 11.4697C19.671 11.6103 19.75 11.8011 19.75 12C19.75 12.1989 19.671 12.3897 19.5303 12.5303C19.3897 12.671 19.1989 12.75 19 12.75Z"
              fill="#FFFFFF"
            ></path>{" "}
          </g>
        </svg>
      </button>
      <div
        className="flex md:hidden transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${imageIndex * 100}%)` }}
      >
        {imageUrls.map((img: string, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 px-1 object-cover h-full rounded-2xl"
          />
        ))}
      </div>
    </div>
  );
}

export default ImageGallery;
