// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Menu } from "lucide-react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 10) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         scrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
//       }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between h-[80px]">
//           {/* Logo - Left side - Moved closer to center */}
//           <div className="flex items-center mr-auto md:mr-0 md:ml-8">
//             <img
//               src="/sample-logo.png"
//               alt="Logo"
//               className="w-12 h-12 object-contain"
//             />
//             <span className="text-white font-large">Logo</span>
//           </div>

//           {/* Centered Navigation Links - Hidden on mobile */}
//           <div className="hidden md:flex items-center space-x-8 h-full mx-auto">
//             <Link
//               to="/"
//               className="text-white hover:text-temple-gold transition-colors h-full flex items-center"
//             >
//               About
//             </Link>
//             <Link
//               to="/"
//               className="text-white hover:text-temple-gold transition-colors h-full flex items-center"
//             >
//               History
//             </Link>
//             <Link
//               to="/"
//               className="text-white hover:text-temple-gold transition-colors h-full flex items-center"
//             >
//               Palm Leaves
//             </Link>
//             <Link
//               to="/"
//               className="text-white hover:text-temple-gold transition-colors h-full flex items-center"
//             >
//               Blog
//             </Link>
//             <Link
//               to="/"
//               className="text-white hover:text-temple-gold transition-colors h-full flex items-center"
//             >
//               Gallery
//             </Link>
//             <Link
//               to="/"
//               className="text-white px-4 py-2 h-full flex items-center justify-center relative group"
//             >
//               <span className="relative z-10">Contact</span>
//               <span className="absolute inset-x-0 top-0 h-[80%] bg-temple-gold group-hover:bg-temple-gold/90 -z-0"></span>
//             </Link>
//           </div>

//           {/* Right side elements - Moved closer to center */}
//           <div className="flex items-center space-x-4 h-full ml-auto md:ml-0 md:mr-8">
//             {/* Map Button - Changed to black */}
//             <Link
//               to="/"
//               className="hidden md:flex items-center gap-2 px-4 h-[40px] bg-black text-temple-gold rounded-md hover:bg-gray-900 transition-colors self-center"
//             >
//               <span>Go to map</span>
//               <div className="w-6 h-6">
//                 <img
//                   src="/Map Marker.png"
//                   alt="Map Icon"
//                   className="w-full h-full object-contain"
//                 />
//               </div>
//             </Link>

//             {/* Mobile Menu Button */}
//             <button
//               className="md:hidden text-white"
//               onClick={() => setMenuOpen(!menuOpen)}
//             >
//               <Menu size={24} />
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu - No changes */}
//         <div
//           className={`md:hidden fixed top-[80px] left-0 w-full h-screen bg-black/95 transition-transform duration-300 ${
//             menuOpen ? "translate-x-0" : "translate-x-full"
//           }`}
//         >
//           <div className="flex flex-col items-center space-y-6 pt-8">
//             <Link
//               to="/"
//               className="text-white hover:text-temple-gold transition-colors text-lg w-full text-center py-3"
//               onClick={() => setMenuOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               to="/"
//               className="text-white hover:text-temple-gold transition-colors text-lg w-full text-center py-3"
//               onClick={() => setMenuOpen(false)}
//             >
//               History
//             </Link>
//             <Link
//               to="/"
//               className="text-white hover:text-temple-gold transition-colors text-lg w-full text-center py-3"
//               onClick={() => setMenuOpen(false)}
//             >
//               Palm Leaves
//             </Link>
//             <Link
//               to="/"
//               className="text-white hover:text-temple-gold transition-colors text-lg w-full text-center py-3"
//               onClick={() => setMenuOpen(false)}
//             >
//               Blog
//             </Link>
//             <Link
//               to="/blog"
//               className="text-white hover:text-temple-gold transition-colors text-lg w-full text-center py-3"
//               onClick={() => setMenuOpen(false)}
//             >
//               Gallery
//             </Link>
//             <Link
//               to="/"
//               className="text-white px-6 py-4 text-lg w-full text-center relative group"
//               onClick={() => setMenuOpen(false)}
//             >
//               <span className="relative z-10">Contact</span>
//               <span className="absolute inset-x-0 top-0 h-[80%] bg-temple-gold group-hover:bg-temple-gold/90 -z-0"></span>
//             </Link>
//             <Link
//               to="/"
//               className="text-temple-gold hover:text-temple-gold transition-colors text-lg flex items-center justify-center py-3"
//               onClick={() => setMenuOpen(false)}
//             >
//               <span>Go to map</span>
//               <div className="flex items-center ml-2">
//                 <div className="w-6 h-6">
//                   <img
//                     src="/Map Marker.png"
//                     alt="Map Icon"
//                     className="w-full h-full object-contain"
//                   />
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;












import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/sample-logo.png"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
          <Link to="/" className="text-white font-large">
            Logo
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/about"
            className="text-white hover:text-temple-gold transition-colors"
          >
            About
          </Link>
          <Link
            to="/history"
            className="text-white hover:text-temple-gold transition-colors"
          >
            History
          </Link>
          <Link
            to="/palm-leaves"
            className="text-white hover:text-temple-gold transition-colors"
          >
            Palm Leaves
          </Link>
          <Link
            to="/blog"
            className="text-white hover:text-temple-gold transition-colors"
          >
            Blog
          </Link>
          <Link
            to="/gallery"
            className="text-white hover:text-temple-gold transition-colors"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-white bg-temple-gold hover:bg-temple-gold/90 px-6 py-2"
          >
            Contact
          </Link>
          <Link
            to="/map"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-temple-gold rounded-md hover:bg-gray-700 transition-colors"
          >
            <span>Go to map</span>
            <div className="w-6 h-6">
              <img
                src="/Map Marker.png"
                alt="Map Icon"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Menu size={24} />
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed top-[60px] left-0 w-full h-screen bg-black/95 transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col items-center space-y-6 pt-8">
            <Link
              to="/about"
              className="text-white hover:text-temple-gold transition-colors text-lg"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/history"
              className="text-white hover:text-temple-gold transition-colors text-lg"
              onClick={() => setMenuOpen(false)}
            >
              History
            </Link>
            <Link
              to="/palm-leaves"
              className="text-white hover:text-temple-gold transition-colors text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Palm Leaves
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-temple-gold transition-colors text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/gallery"
              className="text-white hover:text-temple-gold transition-colors text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-temple-gold transition-colors text-lg"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/map"
              className="text-temple-gold hover:text-temple-gold transition-colors text-lg flex items-center"
              onClick={() => setMenuOpen(false)}
            >
              <span>Go to map</span>
              <div className="flex items-center mb-0">
                <div className="w-8 h-8">
                  <img
                    src="/Map Marker.png"
                    alt="Map Icon"
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
