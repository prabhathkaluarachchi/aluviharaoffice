export default function TimelessHeritage() {
  return (
    <div className="px-4 sm:px-6 md:px-16 py-10 md:py-20 bg-transparent">
      <div className="bg-[#F7F6F6] relative overflow-visible pt-5 pb-2 md:pb-4 lg:pb-10 rounded-lg">
        <div className="max-w-[90%] md:max-w-[80%] mx-auto">
          {/* Decorative rectangles — only on large screens */}
          <div
            className="absolute top-0 right-0 opacity-50 pointer-events-none hidden lg:block"
            style={{ transform: "translate(0%, -30%)" }}
          >
            <div
              className="border border-gray-400 w-[250px] h-[250px] absolute"
              style={{ right: "80px", top: "-40px", borderWidth: "2px" }}
            ></div>
            <div
              className="border border-gray-400 w-[250px] h-[180px] absolute"
              style={{ right: "120px", top: "0px", borderWidth: "2px" }}
            ></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left: Text */}
            <div className="pr-0 md:pr-8">
              <p className="text-[#EBB23E] text-[36px] md:text-[48px] font-medium leading-[1]">
                Timeless
              </p>
              <h2 className="text-[48px] md:text-[70px] font-bold text-black mb-6 leading-[1]">
                Heritage
              </h2>
              <p className="text-gray-700 mb-4 text-justify text-sm md:text-base">
                Step into a world where history and spirituality converge. This
                gallery showcases awe-inspiring historical caves, intricate
                statues, and magnificent temples that stand as timeless
                testaments to cultural and architectural brilliance.
              </p>
              <p className="text-gray-700 text-justify text-sm md:text-base">
                Each statue, a masterpiece in its own right, reflects the skill
                and devotion of artisans who brought life to their creations.
                The temples, with their towering facades and detailed carvings,
                offer a glimpse into the spiritual sanctuaries of the past.
              </p>

              {/* Mobile + Tablet only (hidden on lg+) */}
              <div className="mt-6 flex justify-center lg:hidden">
                <img
                  src="/gallery/heritage1.png"
                  alt="Heritage 1"
                  className="w-[180px]"
                />
              </div>
            </div>

            {/* Right: Images — shown only on large screens */}
            <div className="relative h-[250px] md:h-[350px] lg:h-[450px] hidden md:block">
              {/* Heritage1 shown only on lg+ */}
              <img
                src="/gallery/heritage1.png"
                alt="Heritage 1"
                className="hidden lg:block absolute bottom-0 left-20 w-[260px] z-20"
              />
              {/* Heritage2 hidden below lg */}
              <img
                src="/gallery/heritage2.png"
                alt="Heritage 2"
                className="hidden lg:block absolute top-30 right-0 w-full max-w-[350px] z-10 rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function TimelessHeritage() {
//   return (
//     <div className="px-6 md:px-16 py-10 md:py-20 bg-white">
//       {/* Full-width shaded background */}
//       <div className="bg-[#F7F6F6] relative overflow-visible py-10 rounded-lg">
//         {/* Content with original alignment */}
//         <div className="max-w-[80%] mx-auto">
//           {/* Decorative rectangles (hidden on mobile view) */}
//           <div className="absolute top-0 right-0 opacity-50 pointer-events-none hidden md:block" style={{ transform: "translate(0%, -30%)" }}>
//             <div
//               className="border border-gray-400 w-[250px] h-[250px] absolute"
//               style={{ right: "80px", top: "-40px", borderWidth: "2px" }}
//             ></div>
//             <div
//               className="border border-gray-400 w-[250px] h-[180px] absolute"
//               style={{ right: "120px", top: "0px", borderWidth: "2px" }}
//             ></div>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8 items-start">
//             {/* Left: Text */}
//             <div className="pr-0 md:pr-8">
//               <p className="text-[#EBB23E] text-[48px] font-medium leading-[1]">
//                 Timeless
//               </p>
//               <h2 className="text-[70px] font-bold text-black mb-6 leading-[1]">
//                 Heritage
//               </h2>
//               <p className="text-gray-700 mb-4 text-justify">
//                 Step into a world where history and spirituality converge. This
//                 gallery showcases awe-inspiring historical caves, intricate
//                 statues, and magnificent temples that stand as timeless testaments
//                 to cultural and architectural brilliance. These sacred spaces,
//                 carved into the heart of stone and time, tell stories of ancient
//                 civilizations, their beliefs, and artistry.
//               </p>
//               <p className="text-gray-700 text-justify">
//                 Each statue, a masterpiece in its own right, reflects the skill
//                 and devotion of artisans who brought life to their creations. The
//                 temples, with their towering facades and detailed carvings, offer
//                 a glimpse into the spiritual sanctuaries of the past.
//               </p>
//             </div>

//             {/* Right: Images */}
//             <div className="relative h-[450px]">
//               <img
//                 src="/gallery/heritage1.png"
//                 alt="Heritage 1"
//                 className="absolute ml-60 bottom-0 left-0 w-[180px] z-20 mt-8"
//                 style={{ top: "180px" }}
//               />
//               <img
//                 src="/gallery/heritage2.png"
//                 alt="Heritage 2"
//                 className="absolute mt-10 top-0 right-0 w-full max-w-[250px] z-10 rounded-sm"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
