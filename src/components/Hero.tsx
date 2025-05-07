import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-[500px] md:min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url(/heroSection.png)",
          backgroundPosition: "center 25%",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Hero Content */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url(/heroSection.png)",
          backgroundPosition: "center 25%",
        }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="w-full px-4 relative z-10">
        <div className="max-w-lg">
          <div className="bg-black bg-opacity-60 p-6 rounded-md">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
              <span className="text-temple-gold">Reach</span>
              <br />
              <span className="text-white">Out To Us</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
