import React, { useState, useEffect, useRef } from "react";
import { Plane, Hotel, Sun, Bus, Menu } from "lucide-react"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const menuRef = useRef(null);  
  const hamburgerRef = useRef(null);  

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        hamburgerRef.current && !hamburgerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    
    document.addEventListener("click", handleClickOutside);

   
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div>
        {/* Header Section */}
        <div id="myDiv" className="bg-gradient-to-r from-[#FF476B] to-[#FF476B] p-3 flex items-center justify-between">
          <h1 className="text-2xl text-white font-semibold ml-10">Fareclubs</h1>

          {/* Hamburger Menu (visible on small screens) */}
          <div className="sm:hidden" ref={hamburgerRef} onClick={toggleMenu}>
            <Menu className="w-6 h-6 text-white cursor-pointer" />
          </div>
        </div>

        {/* Navigation Section */}
        {/* Desktop view */}
        <div className="hidden sm:block mt-5 px-4 sm:px-10">
          <ul className="flex sm:flex-nowrap justify-center sm:justify-start space-x-6">
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-black border border-gray-300 rounded-full px-4 py-2 hover:bg-red-500 hover:text-white transition"
              >
                <Plane className="w-5 h-5 text-blue-500" />
                <span>Flights</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-black border border-gray-300 rounded-full px-4 py-2 hover:bg-red-500 hover:text-white transition"
              >
                <Hotel className="w-5 h-5 text-yellow-500" />
                <span>Hotels</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-black border border-gray-300 rounded-full px-4 py-2 hover:bg-red-500 hover:text-white transition"
              >
                <Sun className="w-5 h-5 text-orange-500" />
                <span>Holidays</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-black border border-gray-300 rounded-full px-4 py-2 hover:bg-red-500 hover:text-white transition"
              >
                <Bus className="w-5 h-5 text-green-500" />
                <span>Buses</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile view (Hamburger Menu Slider) */}
        <div
          ref={menuRef}
          className={`sm:hidden absolute top-16 right-4 bg-white w-48 p-4 rounded-lg shadow-lg transition-all ${isOpen ? 'block' : 'hidden'} z-50`}
        >
          <ul className="space-y-4">
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-black border border-gray-300 rounded-full px-4 py-2 hover:bg-red-500 hover:text-white transition"
              >
                <Plane className="w-5 h-5 text-blue-500" />
                <span>Flights</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-black border border-gray-300 rounded-full px-4 py-2 hover:bg-red-500 hover:text-white transition"
              >
                <Hotel className="w-5 h-5 text-yellow-500" />
                <span>Hotels</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-black border border-gray-300 rounded-full px-4 py-2 hover:bg-red-500 hover:text-white transition"
              >
                <Sun className="w-5 h-5 text-orange-500" />
                <span>Holidays</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 text-black border border-gray-300 rounded-full px-4 py-2 hover:bg-red-500 hover:text-white transition"
              >
                <Bus className="w-5 h-5 text-green-500" />
                <span>Buses</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
