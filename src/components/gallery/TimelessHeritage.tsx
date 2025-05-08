export default function TimelessHeritage() {
  return (
    <div className="bg-[#F7F6F6]">
      {/* Full-width background shading */}
      <div className="max-w-[80%] mx-auto py-10 relative overflow-visible">
        {/* Line art rectangles */}
        <div
          className="absolute top-0 right-0 opacity-50 pointer-events-none"
          style={{ transform: "translate(0%, -30%)" }}
        >
          <div
            className="border border-gray-400 w-[230px] h-[250px] absolute"
            style={{
              right: "-70px",
              top: "30px",
              borderWidth: "2px", // Custom thickness
            }}
          ></div>
          <div
            className="border border-gray-400 w-[240px] h-[180px] absolute"
            style={{
              right: "-35px",
              top: "60px",
              borderWidth: "2px", // Custom thickness
            }}
          ></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Left: Text Content */}
          <div className="pr-0 md:pr-8">
            <p className="text-[#EBB23E] text-[48px] font-medium leading-[1]">
              Timeless
            </p>
            <h2 className="text-[70px] font-bold text-black mb-6 leading-[1]">
              Heritage
            </h2>

            <p className="text-gray-700 mb-4 text-justify">
              Step into a world where history and spirituality converge. This
              gallery showcases awe-inspiring historical caves, intricate
              statues, and magnificent temples that stand as timeless testaments
              to cultural and architectural brilliance. These sacred spaces,
              carved into the heart of stone and time, tell stories of ancient
              civilizations, their beliefs, and artistry.
            </p>
            <p className="text-gray-700 text-justify">
              Each statue, a masterpiece in its own right, reflects the skill
              and devotion of artisans who brought life to their creations. The
              temples, with their towering facades and detailed carvings, offer
              a glimpse into the spiritual sanctuaries of the past.
            </p>
          </div>

          {/* Right: Images with overlap - REVERSED STACKING ORDER */}
          <div className="relative h-[450px]">
            {/* Now heritage2 on top (changed z-index to 20) */}
            <img
              src="/gallery/heritage1.png"
              alt="Heritage temple with rocks"
              className="absolute ml-60 bottom-0 left-0 w-[180px] z-20 mt-8"
              style={{ top: "180px" }}
            />

            {/* Now heritage1 underneath (changed z-index to 10) */}
            <img
              src={"/gallery/heritage2.png"}
              alt="Heritage statue"
              className="absolute mt-10 top-0 right-0 w-full max-w-[250px] z-10 rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
