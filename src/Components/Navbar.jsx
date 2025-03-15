import React, { useState, useRef, useEffect } from "react";
import { Plane, Bed, Car, Bus, Menu, Sun } from "lucide-react";
import WalletProfile from "./WalletProfile";
import Farelogo from '../assets/Farelogo.png';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Header Section */}
      <div className="p-3 flex items-center justify-between px-6 relative">
        {/* Left: Hamburger Menu (Visible only on small screens) */}
        <div className="sm:hidden cursor-pointer" ref={menuRef} onClick={toggleDropdown}>
          <Menu className="w-6 h-6 text-black" />
        </div>

        {/* Center: Logo (Hidden on small screens, visible on larger screens) */}
        <div className="hidden sm:block">
          <img src={Farelogo} alt="Fareclubs Logo" className="h-11 ml-5" />
        </div>

        {/* Right: Wallet & Profile */}
        <div className="absolute right-6 top-3">
          <WalletProfile />
        </div>
      </div>

      {/* Gradient Divider (Visible only on larger screens) */}
      <div className="hidden sm:block h-[5px] bg-gradient-to-r from-[#eb0066] to-[#FF476B]"></div>

      {/* Navigation Section (Visible on larger screens) */}
      <div className="hidden sm:block mt-2 px-4 sm:px-10">
        <ul className="flex justify-center sm:justify-start space-x-3 sm:space-x-6">
          {[
            { icon: Plane, text: "Flights" },
            { icon: Bed, text: "Hotels" },
            { icon: Car, text: "Holidays" },
            { icon: Bus, text: "Buses" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="group flex items-center space-x-2 text-black border border-gray-300 rounded-full px-4 py-2 hover:bg-red-500 hover:text-white transition text-xs sm:text-base"
              >
                <item.icon className="w-5 h-5 text-red-500 group-hover:text-white" />
                <span>{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Dropdown Menu (Only for small screens) */}
      {isDropdownOpen && (
        <div
          ref={dropdownRef}
          className="sm:hidden absolute top-14 left-4 bg-white shadow-md rounded-lg p-4 w-48 z-50"
        >
          <ul className="space-y-2">
            {[
              { icon: Plane, text: "Flights", color: "text-blue-500" },
              { icon: Bed, text: "Hotels", color: "text-yellow-500" },
              { icon: Sun, text: "Holidays", color: "text-orange-500" },
              { icon: Bus, text: "Buses", color: "text-green-500" },
            ].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="group flex items-center space-x-2 text-black border border-gray-300 rounded-full px-4 py-2 hover:bg-red-500 hover:text-white transition"
                >
                  <item.icon className={`w-5 h-5 ${item.color} group-hover:text-white`} />
                  <span>{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
