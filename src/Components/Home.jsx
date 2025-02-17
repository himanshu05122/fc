import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Calendar, RefreshCw, ChevronDown } from "lucide-react";

const Home = () => {
  const [tripType, setTripType] = useState("one-way");
  const [direct, setDirect] = useState(false);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);
  const [passengerDropdown, setPassengerDropdown] = useState(false);
  const [passengers, setPassengers] = useState(1);

  return (
    <div className="relative">
      {/* Background Gradient Positioned Below the Child */}
      <div className="absolute top-0 left-0 w-full h-13 bg-gradient-to-r from-[#FF476B] via-[#9747FF] to-[#3B82F6] z-0"></div>

      {/* Main Content Above Background */}
      <div className="relative z-10 max-w-4xl mx-auto mt-5 p-8">
        <div className="bg-white rounded-lg shadow-lg p-3">
          {/* Trip Type Selection */}
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value="one-way"
                  checked={tripType === "one-way"}
                  onChange={(e) => {
                    setTripType(e.target.value);
                    setReturnDate(null);
                  }}
                  className="w-4 h-4 accent-[#3B82F6]"
                />
                <span className="text-gray-500 text-sm">One Way</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value="round-trip"
                  checked={tripType === "round-trip"}
                  onChange={(e) => setTripType(e.target.value)}
                  className="w-4 h-4 accent-[#3B82F6]"
                />
                <span className="text-gray-500 text-sm">Round Trip</span>
              </label>
            </div>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={direct}
                onChange={(e) => setDirect(e.target.checked)}
                className="w-4 h-4 accent-[#3B82F6]"
              />
              <span className="text-gray-500 text-sm">Direct</span>
            </label>
          </div>

          {/* Inputs, Date Picker, Passengers, Search */}
          <div className="flex flex-wrap items-center gap-4 mt-3 bg-[#F8F9FA] rounded-lg sm:rounded-md px-4 py-3">
            <div className="flex items-center flex-1">
              <div className="px-4 flex-1">
                <label className="block text-gray-500 text-xs mb-0.5">From</label>
                <input
                  type="text"
                  placeholder="NEW DELHI"
                  className="w-full bg-transparent border-none p-0 text-sm focus:outline-none"
                />
              </div>
              <button className="p-1.5 rounded-full hover:bg-gray-100">
                <RefreshCw className="w-4 h-4 text-gray-400" />
              </button>
              <div className="px-4 flex-1">
                <label className="block text-gray-500 text-xs mb-0.5">To</label>
                <input
                  type="text"
                  placeholder="MUMBAI"
                  className="w-full bg-transparent border-none p-0 text-sm focus:outline-none"
                />
              </div>
            </div>

            <div className="px-4">
              <label className="block text-gray-500 text-xs mb-0.5">Departure</label>
              <DatePicker
                selected={departureDate}
                onChange={(date) => setDepartureDate(date)}
                dateFormat="dd MMM yyyy"
                className="w-24 text-sm bg-transparent focus:outline-none cursor-pointer"
              />
            </div>

            {/* Return Date Picker (Disabled for One Way) */}
            <div className="px-4 border-l border-gray-200">
              <label className="block text-gray-500 text-xs mb-0.5">Return</label>
              <DatePicker
                selected={returnDate}
                onChange={(date) => setReturnDate(date)}
                dateFormat="dd MMM yyyy"
                placeholderText="Select Date"
                className="w-24 text-sm bg-transparent focus:outline-none cursor-pointer"
                disabled={tripType === "one-way"}
              />
            </div>
            {/* Passengers Dropdown */}
            <div className="relative px-4 border-l border-gray-200">
              <p className="text-gray-500">Passengers</p>
              <button
                className="flex items-center justify-between w-32 text-sm bg-transparent focus:outline-none"
                onClick={() => setPassengerDropdown(!passengerDropdown)}
              >
                Passengers ({passengers})
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {passengerDropdown && (
                <div className="absolute left-0 mt-2 w-40 bg-white shadow-md rounded-md p-2 z-10">
                  <div className="flex justify-between items-center py-1">
                    <span className="text-gray-600 text-sm">Passengers</span>
                    <select
                      className="text-sm bg-gray-100 rounded p-1 focus:outline-none"
                      value={passengers}
                      onChange={(e) => {
                        setPassengers(Number(e.target.value));
                        setPassengerDropdown(false);
                      }}
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>

            <button className="bg-[#3B82F6] text-white rounded-full py-2.5 px-6 text-sm font-medium hover:bg-blue-600 ml-2">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
