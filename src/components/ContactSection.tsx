import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <div className="bg-white py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="relative z-10">
            {/* Decorative elements */}
            <div className="absolute -left-20 top-0 w-40 h-40 text-gray-100 opacity-30 z-0">
              <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M42.7,57.2c-29.9,29.9-29.9,78.3,0,108.2s78.3,29.9,108.2,0s29.9-78.3,0-108.2S72.6,27.3,42.7,57.2z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-bold mb-1">
              ANY SUGGESTIONS OR FEEDBACKS?
            </h2>
            <p className="text-sm text-gray-600 mb-6">CONTACT</p>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name*"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-temple-gold"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject*"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-temple-gold"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-mail*"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-temple-gold"
                  required
                />
              </div>
              <div>
                <textarea
                  placeholder="Message *"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-temple-gold h-32"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-temple-gold hover:bg-temple-gold/90 text-white py-3 rounded transition-colors"
              >
                Send Your Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center lg:justify-around">
            <div className="mb-10 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border-2 border-temple-gold flex items-center justify-center mb-4">
                <MapPin size={24} className="text-temple-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">LOCATION</h3>
              <p className="text-center text-gray-700">
                Aluvihara Rock Cave Temple,
                <br />
                Thotagamuwa, Matale, Sri Lanka
              </p>
            </div>

            <div className="mb-10 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border-2 border-temple-gold flex items-center justify-center mb-4">
                <Phone size={24} className="text-temple-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">CONTACT US</h3>
              <p className="text-center text-gray-700">
                Mobile: +94-662-222-533
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border-2 border-temple-gold flex items-center justify-center mb-4">
                <Mail size={24} className="text-temple-gold" />
              </div>
              <h3 className="text-xl font-bold mb-2">E-mail</h3>
              <p className="text-center text-gray-700">
                Aluviharatemplelk@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
