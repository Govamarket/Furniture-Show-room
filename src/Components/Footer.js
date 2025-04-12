import React from "react";

const Footer = () => {
  return (
    <div className="bg-white text-xs p-5 absolute bottom-0 w-full h-5">
      <footer>
        <div className="flex justify-between md:flex gap-4">
          <section className="leading-5">
            <span className="font-bold">
              {" "}
              <p>Funiro</p>
            </span>
            <span>
              <p>400 University Drive Suite 200 Coral Gables,</p>
            </span>
            <span>
              <p>FL 33134 USA</p>
            </span>
          </section>

          <div>
            <span className="font-bold">
              <p>Links</p>
            </span>
            <section className="leading-6">
              <span>Home</span>
              <span>
                <p>Shop</p>
              </span>
              <span>
                <p>About</p>
              </span>
              <span>
                <p>Contact</p>
              </span>
            </section>
          </div>

          <section>
            <span className="font-bold">
              <p>Help</p>
            </span>
            <div className="leading-6">
              <span>
                <p>Payment Options</p>
              </span>
              <span>
                <p>Returns</p>
              </span>
              <span>
                <p>Privacy Policies</p>
              </span>
            </div>
          </section>

          <section className="leading-6">
            <span className="font-bold">Newsletter</span>
            <div>
              <span>
                <input
                  type="text"
                  placeholder="Enter Your Email Address"
                  className="border-0 outline-none"
                ></input>
                <span className="font-bold">
                  <button>SUBSCRIBE</button>
                </span>
              </span>
            </div>
          </section>
        </div>
        <section className="border-t border-gray-500 p-2 pt-1">
          <p> Copyright 2025</p>
        </section>
      </footer>
    </div>
  );
};

export default Footer;
