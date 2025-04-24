import React from "react";
import logoManu from "./../../Asset/MeuLogos.png";
import { MapPin, Phone, Clock } from "lucide-react";
import ProductImg from "./../../Asset/productc.png";
import InfoBanner from "./InfoBanner";
const Contact = () => {
  return (
    <div className="w-full">
      {/* Header Banner */}
      <div
        className="relative w-full h-64 bg-cover bg-center"
        style={{
          backgroundImage: `url(${ProductImg})`,
        }}
      >
        <div className="inset-0 bg-white bg-opacity-70 flex flex-col justify-center items-center text-center p-4">
          {/* Logo */}
          <div className="mb-2">
            <img src={logoManu} alt="Logo" className="h-12 md:h-16" />
          </div>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-semibold text-black">
            Contact
          </h1>

          {/* Breadcrumb */}
          <div className="mt-2 text-sm text-gray-700">
            <span className="font-semibold">Home</span>
            <span className="mx-1">›</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      <div className="min-h-screen bg-white px-4 py-12 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-2">
            Get In Touch With Us
          </h2>
          <p className="text-center text-sm text-gray-500 max-w-xl mx-auto mb-12">
            For more information about our product & services, please feel free
            to drop us an email. Our staff is always there to help you out. Do
            not hesitate!
          </p>

          <div className="flex flex-col md:flex-row gap-10">
            {/* Contact Info */}
            <div className="w-full md:w-1/2 space-y-6 text-sm text-gray-700">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-black" />
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p>236 5th SE Avenue, New York NY10000, United States</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-1 text-black" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>Mobile: +(84) 546-6789</p>
                  <p>Hotline: +(84) 456-6789</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-1 text-black" />
                <div>
                  <h4 className="font-semibold">Working Time</h4>
                  <p>Monday–Friday: 9:00 – 22:00</p>
                  <p>Saturday–Sunday: 9:00 – 21:00</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full md:w-1/2 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full border rounded p-3 text-sm"
              />
              <input
                type="email"
                placeholder="Email address"
                className="w-full border rounded p-3 text-sm"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded p-3 text-sm"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full border rounded p-3 text-sm"
              ></textarea>
              <button className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 transition-all">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <section>
        <InfoBanner />
      </section>
    </div>
  );
};

export default Contact;
