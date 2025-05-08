import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const initialImages = [
  "/gallery/img1.png",
  "/gallery/img2.png",
  "/gallery/img3.png",
  "/gallery/img4.png",
  "/gallery/img5.png",
  "/gallery/img6.png",
  "/gallery/img7.png",
  "/gallery/img8.png",
  "/gallery/img9.png",
];

const extraImages = [
  "/gallery/img9.png",
  "/gallery/img9.png",
  "/gallery/img9.png",
  "/gallery/img9.png",
  "/gallery/img9.png",
  "/gallery/img9.png",
];

export default function GalleryGrid() {
  const [showMore, setShowMore] = useState(false);
  const images = showMore ? [...initialImages, ...extraImages] : initialImages;

  return (
    <section className="bg-white py-10 px-4 md:px-20">
{/* === FIRST ROW === */}
<div className="grid md:grid-cols-2 gap-4 mb-5">
  {/* Left Side */}
  <div className="grid grid-rows-2 gap-4">
    <div className="w-full h-full">
      <img
        src={images[0]}
        alt="Gallery image 1"
        className="w-full h-full object-cover rounded-md"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="w-full h-full">
        <img
          src={images[1]}
          alt="Gallery image 2"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
      <div className="w-full h-full">
        <img
          src={images[2]}
          alt="Gallery image 3"
          className="w-full h-full object-cover rounded-md"
        />
      </div>
    </div>
  </div>

  {/* Right Side — Match left side height exactly */}
  <div className="h-full">
    <img
      src={images[3]}
      alt="Gallery image 4"
      className="w-full h-full object-cover rounded-md"
    />
  </div>
</div>


      {/* === SECOND ROW (Panoramic) === */}
      <div className="mb-4">
        <img
          src={images[4]}
          alt="Gallery image 5"
          className="w-full h-auto rounded-md"
        />
      </div>

      {/* === THIRD ROW with Show More Overlay === */}
      <div className="relative">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {images.slice(5, 9).map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Gallery image ${index + 6}`}
                className="w-full h-auto rounded-md"
              />
            </div>
          ))}
        </div>

        {/* Overlay on third row (half height) */}
        {!showMore && (
          <div
            onClick={() => setShowMore(true)}
            className="absolute inset-0 top-1/2 bg-gradient-to-t from-white/95 via-white/70 to-transparent rounded-md flex items-end justify-center cursor-pointer shadow-inner"
          >
            <div className="flex flex-col items-center pb-6">
              {/* Circular icon */}
              <div className="bg-black p-3 rounded-full shadow-lg mb-2">
  <ChevronDown className="text-white w-6 h-6" />
</div>

              {/* Text */}
              <p className="text-yellow-500 font-medium text-sm">Show More Photos</p>

            </div>
          </div>
        )}
      </div>

      {/* === EXTRA IMAGES === */}
      {showMore && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {extraImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Extra image ${index + 1}`}
              className="w-full h-auto rounded-md"
            />
          ))}
        </div>
      )}
    </section>
  );
}
