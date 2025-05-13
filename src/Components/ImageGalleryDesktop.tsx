import { useState } from "react";

function ImageGalleryDesktop({
  firstLargeImage,
  firstImageList,
  secondLargeImage,
  secondImageList,
}: {
  firstLargeImage: string;
  firstImageList: string[];
  secondLargeImage: string;
  secondImageList: string[];
}) {
  const [showImage, setShowImages] = useState(true);
  return (
    <div className="relative">
      <div className="hidden md:grid grid-cols-2  gap-2">
        <div>
          <img
            className="h-auto shadow-xl w-full border md:h-full transform transition-all ease-in duration-200 md:max-w-full rounded-3xl brightness-90 hover:brightness-100 cursor-pointer"
            src={firstLargeImage}
            alt=""
          />
        </div>
        <div className="grid grid-cols-2 gap-2">
          {firstImageList.map((image, index) => (
            <div key={index}>
              <img
                className="w-full shadow-xl border flex-shrink-0 object-cover h-full rounded-2xl transform transition-all ease-in duration-200 brightness-90 hover:brightness-100 cursor-pointer"
                src={image}
                alt="Slide ${index}"
              />
            </div>
          ))}
        </div>
      </div>

      <div
        className={`pt-2 md:grid md:grid-cols-2 gap-2 overflow-hidden transition-all ease-in duration-500 ${showImage ? "max-h-0" : "max-h-svh pb-2"}`}
      >
        <div className="hidden md:grid gap-2 grid-cols-2">
          {secondImageList.map((image, index) => (
            <div key={index}>
              <img
                className="w-full shadow-xl border flex-shrink-0 object-cover h-full rounded-2xl transform transition-all ease-in duration-200 brightness-90 hover:brightness-100 cursor-pointer"
                src={image}
                alt="Slide ${index}"
              />
            </div>
          ))}
        </div>
        <div>
          <img
            className="h-full max-w-full shadow-xl border rounded-xl transform transition-all ease-in duration-200 brightness-90 hover:brightness-100 cursor-pointer"
            src={secondLargeImage}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center w-full">
        <button
          onClick={() => setShowImages(!showImage)}
          className={`${showImage ? "md:block absolute" : "hidden"} px-4  shadow brightness-90 hover:brightness-100 text-gray-600 font-bold  bottom-5 bg-white rounded-xl transition-all duration-300 ease-in`}
        >
          Show More Images
        </button>
      </div>
    </div>
  );
}

export default ImageGalleryDesktop;
