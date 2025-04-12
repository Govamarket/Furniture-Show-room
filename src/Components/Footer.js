import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-xs px-4 py-6 md:px-10 lg:px-20 text-gray-700">
      {/* Top section */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6 w-full">
        {/* Address */}
        <section className="leading-5 max-w-xs">
          <p className="font-bold text-base">Funiro</p>
          <p>400 University Drive Suite 200 Coral Gables,</p>
          <p>FL 33134 USA</p>
        </section>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-6">
          <section className="leading-6">
            <p className="font-bold text-base mb-2">Links</p>
            <ul className="space-y-1">
              <li>Home</li>
              <li>Shop</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </section>

          <section className="leading-6">
            <p className="font-bold text-base mb-2">Help</p>
            <ul className="space-y-1">
              <li>Payment Options</li>
              <li>Returns</li>
              <li>Privacy Policies</li>
            </ul>
          </section>

          {/* Newsletter */}
          <section className="leading-6 max-w-xs">
            <p className="font-bold text-base mb-2">Newsletter</p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="border border-gray-400 px-3 py-1 rounded-md w-full sm:w-auto"
              />
              <button className="bg-yellow-500 text-white px-4 py-1 rounded-md font-bold">
                SUBSCRIBE
              </button>
            </div>
          </section>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Funiro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
