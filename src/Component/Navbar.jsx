import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-24 bg-black flex items-center justify-between px-9">
      <Link to="/register">
        <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black  ">
          Sign up
        </button>
      </Link>
      <h1 className=" text-4xl text-white flex items-center justify-auto">
        {" "}
        CLARIFY
      </h1>
      <div className="text-2xl text-white  hidden lg:block">
        <Link to="/" className="px-3 items-center justify-center hover:text-gray-400">
          Home
        </Link>
        <HashLink smooth to ="#about-us" className=" px-3 items-center justify-center  hover:text-gray-400">
          About
        </HashLink>
        <HashLink to="#contact" className="px-3 items-center justify-center  hover:text-gray-400">
          Contact
        </HashLink>
        <HashLink to="#faq" className=" px-3 items-center justify-center  hover:text-gray-400">
          FAQs
        </HashLink>
         {/* <Link to="/sigIn">
        <button className="border border-white text-white px-4 py-2 rounded hover:bg-white hover:text-black  ">
          sign in
        </button>
      </Link> */}
      </div>

      <GiHamburgerMenu
        className={`${
          isOpen === true ? "text-black" : "text-white"
        } block lg:hidden relative z-50`}
        onClick={() => setIsOpen(!isOpen)}
      />
      {/* drawer */}
      {isOpen === true && (
        <div className="bg-white shadow-lg absolute z-40 right-0 top-0 flex flex-col h-screen w-[20%] pt-20 gap-6 text-lg pl-12">
          <Link to="/" className="px-3 items-center justify-center">
            Home
          </Link>
          <Link to="/about" className=" px-3 items-center justify-center">
            About
          </Link>
          <Link to="/contact" className="px-3 items-center justify-center">
            Contact
          </Link>
          <Link to="/faq" className=" px-3 items-center justify-center">
            FAQs
          </Link>
        </div>
      )}
      
    </div>
  );
}
