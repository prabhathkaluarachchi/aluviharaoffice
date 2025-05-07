import React from "react";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-temple-dark text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-15 h-15 rounded-full overflow-hidden">
                <img
                  src="/Quill Pen.png" // Replace with actual path
                  alt="Aluvihara Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold ml-2">
                Aluvihara Rock Cave Temple
              </h3>
            </div>

            <p className="text-gray-400 mb-8">
              Visitors are all welcome! Discover the serenity and history of
              Aluvihara – a spiritual journey through ancient Buddhist heritage.
              Experience culture, tranquility, and timeless wisdom. Visit today
            </p>

            <div className="mt-6 flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3">
              {/* Address */}
              <div>
                <h4 className="text-sm text-gray-400 mb-2">Address</h4>
                <p className="mb-1">Kandy-Trincomalee Road,</p>
                <p className="mb-1">Aluvihara,</p>
                <p className="mb-3">Matale.</p>
                <p className="mb-1">Email: Aluviharatemplelk@gmail.com</p>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-gray-400 text-sm mb-2">Contact</h4>
                <p className="mt-1">+94 66 56 56 233</p>
                <p className="mt-1">+94 66 56 56 234</p>
                <p className="mt-1">+94 66 56 56 235</p>
              </div>
            </div>

            <div className="mb-6 mt-6">
              <h4 className="text-sm text-gray-400 mb-2">Follow up</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="border border-white text-white p-2 rounded-full hover:bg-temple-gold hover:text-white transition"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href="#"
                  className="border border-white text-white p-2 rounded-full hover:bg-temple-gold hover:text-white transition"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm text-gray-400 mb-2">Quick Links</h4>
              <div className="flex flex-wrap gap-x-6">
                <Link
                  to="/"
                  className="text-white hover:text-temple-gold transition-colors mb-2"
                >
                  About
                </Link>
                <Link
                  to="/"
                  className="text-white hover:text-temple-gold transition-colors mb-2"
                >
                  History
                </Link>
                <Link
                  to="/"
                  className="text-white hover:text-temple-gold transition-colors mb-2"
                >
                  Palm Leaves
                </Link>
                <Link
                  to="/"
                  className="text-white hover:text-temple-gold transition-colors mb-2"
                >
                  Blog
                </Link>
                <Link
                  to="/"
                  className="text-white hover:text-temple-gold transition-colors mb-2"
                >
                  Gallery
                </Link>
                <Link
                  to="/"
                  className="text-white hover:text-temple-gold transition-colors mb-2"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Find Location</h3>
            <div className="w-full h-[420px] rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25112.399664573204!2d80.61022490146969!3d7.498921505547436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3454fb02f010f%3A0xa775a6683ea0b16d!2sAluvihare!5e0!3m2!1sen!2slk!4v1746168578971!5m2!1sen!2slk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
          <p>All rights reserved | Designed by All in One Holdings</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
