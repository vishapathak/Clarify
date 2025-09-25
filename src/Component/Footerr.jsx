import React from "react";
import { Link } from "react-router-dom";

function Footerr() {
  return (
    <div className="w-full bg-black text-white px-6 py-6">
      <footer className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
        <h1 className="text-3xl lg:text-4xl font-bold tracking-wide text-center lg:text-left py-3">
          CLARIFY
        </h1>
        <p> Digital Accounting platform </p>
        <Link to="/register" className="flex justify-center py-3">
          <button className="border border-white text-white px-5 py-2 rounded hover:bg-white hover:text-black transition duration-300">
            create account
          </button>
        </Link>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 text-lg">
          <Link to="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-gray-300 transition">
            Contact
          </Link>
          <Link to="/faq" className="hover:text-gray-300 transition">
            FAQs
          </Link>
        </div>
      </footer>

    </div>
  );
}

export default Footerr;
