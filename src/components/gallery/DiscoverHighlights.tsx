import React from "react";

export default function DiscoverHighlights() {
  return (
    <section className="relative bg-white py-10 px-4 md:px-20 overflow-visible">
      {/* Background image scaling */}
      <div
        className="absolute left-0 top-0 w-full h-full bg-no-repeat bg-left opacity-10 pointer-events-none"
        style={{
          backgroundImage: "url(/gallery/cave.png)",
          backgroundSize: "250%", // Scale the background to 250% of the container size
          backgroundPosition: "center", // Ensures the background is centered
        }}
      ></div>

      <div className="relative z-10 grid md:grid-cols-2 items-center gap-10">
        {/* Left: Image overflowing to the top */}
        <div className="relative z-20">
          <img
            src="/gallery/cave.png"
            alt="Cave view"
            className="absolute left-[-150px] top-[-320px] w-[800px] max-w-none rounded-md z-10 hidden lg:block" // Hidden on mobile and shown on md and larger screens
          />
        </div>

        {/* Right: Titles */}
        <div className="z-20">
          <p className="text-[#EBB23E] text-[36px] md:text-[48px] font-medium leading-[1]">
            Discover
          </p>
          <h2 className="text-[48px] md:text-[70px] font-bold text-black mb-6 leading-[1]">
            Highlights
          </h2>
        </div>
      </div>
    </section>
  );
}
