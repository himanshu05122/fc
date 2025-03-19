import React, { useState, useEffect } from "react";
import { Wallet, User, ChevronDown, LogOut, PlusCircle } from "lucide-react";

const WalletProfile = () => {
  const [balance, setBalance] = useState(0); // Wallet balance
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown toggle
  const [profiles, setProfiles] = useState(["Nanu"]); // List of profiles
  const [selectedProfile, setSelectedProfile] = useState("Nanu"); // Active profile
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const switchProfile = (profile) => {
    setSelectedProfile(profile);
    setIsDropdownOpen(false);
  };

  const addNewProfile = () => {
    const newProfile = prompt("Enter new profile name:");
    if (newProfile) {
      setProfiles([...profiles, newProfile]);
      setSelectedProfile(newProfile);
      setIsDropdownOpen(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center  gap-4">
      {/* Wallet Section - Always Visible */}
      <div className="flex items-center bg-gray-100 px-2 py-1 border rounded-lg">
        <Wallet className="w-6 h-6 text-gray-500 mr-3" />
        <div className="flex flex-col">
          <span className="text-xs text-gray-500 font-semibold">FC Wallet</span>
          <span className="text-sm font-semibold text-black">₹ {balance}</span>
        </div>
      </div>

      {/* Profile Section */}
      <div className="relative lg:mr-10">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={toggleDropdown}
        >
          <div className="w-8 h-8 bg-pink-600 text-white flex items-center justify-center rounded-full font-bold ">
            {selectedProfile.charAt(0)}
          </div>
          {!isSmallScreen && (
            <span className="text-sm font-medium">Hi, {selectedProfile}</span>
          )}
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute right-0 w-48 bg-white shadow-md rounded-lg overflow-hidden z-50">
            <ul className="text-sm text-gray-700">
              <li className="px-4 py-2 font-medium">Hi, {selectedProfile}</li>
              <li className="border-t border-gray-200"></li>
              {profiles.map((profile, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                  onClick={() => switchProfile(profile)}
                >
                  <User className="w-4 h-4 mr-2" />
                  {profile}
                </li>
              ))}
              <li
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={addNewProfile}
              >
                <PlusCircle className="w-4 h-4 mr-2" />
                Add New Profile
              </li>
              <li className="border-t border-gray-200"></li>
              <li
                className="px-4 py-2 text-red-500 hover:bg-gray-100 cursor-pointer flex items-center"
                onClick={() => alert("Logging out...")}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default WalletProfile;
