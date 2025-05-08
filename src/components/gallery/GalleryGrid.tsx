import React, { useState } from 'react';

const initialImages = [
  "/gallery/img1.png", "/gallery/img2.png", "/gallery/img3.png",
  "/gallery/img4.png", "/gallery/img5.png","/gallery/img6.png",
  "/gallery/img7.png", "/gallery/img8.png"
];
const extraImages = [
  "/images/g9.jpg", "/images/g10.jpg", "/images/g11.jpg",
  "/images/g12.jpg", "/images/g13.jpg", "/images/g14.jpg"
];

export default function GalleryGrid() {
  const [showMore, setShowMore] = useState(false);

  const images = showMore ? [...initialImages, ...extraImages] : initialImages;

  return (
    <section className="bg-white py-10 px-4 md:px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-auto rounded-md"
          />
        ))}
      </div>
      {!showMore && (
        <div className="text-center mt-6">
          <button
            onClick={() => setShowMore(true)}
            className="text-yellow-500 font-semibold hover:underline"
          >
            Show More Photos
          </button>
        </div>
      )}
    </section>
  );
}
