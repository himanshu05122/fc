import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ArrowLeftRight, Calendar } from "lucide-react";
import { format } from "date-fns";

const Home = () => {
  const [tripType, setTripType] = useState("one-way");
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);
  const [passengers, setPassengers] = useState(1);
  const [passengerType, setPassengerType] = useState("senior-citizen");
  const [nonStop, setNonStop] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth > 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tripOptions = [
    { label: "One Way", value: "one-way" },
    { label: "Round Trip", value: "round-trip" }
  ];

  const passengerTypes = [
    { label: "Senior Citizen", value: "senior-citizen" },
    { label: "Student", value: "student" },
    { label: "Armed Forces", value: "armed-forces" }
  ];

  return (
    <div className="relative p-6 mt-2">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-r from-[#eb0066]  to-[#007aff] via-[#eb0066]  z-0"></div>
      <div className="relative z-10 max-w-5xl mx-auto mt-5 p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            {tripOptions.map((option) => (
              <label key={option.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="tripType"
                  value={option.value}
                  checked={tripType === option.value}
                  onChange={() => setTripType(option.value)}
                  className="w-4 h-4 accent-[#3B82F6]"
                />
                <span className="text-gray-500 text-sm">{option.label}</span>
              </label>
            ))}
            {isLargeScreen && (
              <label className="flex items-center gap-2 cursor-pointer ml-4">
                <input type="checkbox" checked={nonStop} onChange={() => setNonStop(!nonStop)} className="w-4 h-4 accent-[#3B82F6]" />
                <span className="text-gray-500 text-sm">Non-Stop Flights</span>
              </label>
            )}
          </div>
          {isLargeScreen ? (
            <div className="flex gap-3">
              {passengerTypes.map((type) => (
                <label key={type.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="passengerType"
                    value={type.value}
                    checked={passengerType === type.value}
                    onChange={() => setPassengerType(type.value)}
                    className="w-4 h-4 accent-[#3B82F6]"
                  />
                  <span className="text-gray-500 text-sm">{type.label}</span>
                </label>
              ))}
            </div>
          ) : (
            <select
              className="w-36 p-2 rounded border text-sm"
              value={passengerType}
              onChange={(e) => setPassengerType(e.target.value)}
            >
              {passengerTypes.map((type) => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>
          )}
        </div>

        <div className="w-245 flex flex-wrap lg:flex-nowrap items-center gap-4 bg-[#F8F9FA] rounded-lg px-4 py-3">
          <div className="flex-1 bg-gray-100 rounded-lg">
            <label className="block text-black text-xs mt-1 ml-2 mb-1">From</label>
            <input name="from" type="text" placeholder=" New Delhi" className="w-full bg-gray-100 p-1 rounded-lg text-md focus:outline-none" />
          </div>
          <button className="cursor-pointer rounded-full hover:bg-gray-300">
            <ArrowLeftRight className="w-5 h-5 text-gray-400" />
          </button>
          <div className="flex-1 bg-gray-100 rounded-lg">
            <label className="block text-black text-xs ml-2 mt-1 mb-1">To</label>
            <input name="to" type="text" placeholder="Mumbai" className="w-full bg-gray-100 p-1 rounded-lg text-md focus:outline-none" />
          </div>
          <div className="bg-gray-100 rounded-lg h-15  text-center">
            <label className="block text-black text-xs  ">Departure</label>
            <DatePicker selected={departureDate} onChange={setDepartureDate} dateFormat="dd MMM" className="w-36 text-sm text-center font-bold bg-transparent focus:outline-none cursor-pointer" />
            <div className=" text-sm  text-black">{format(departureDate, "EEEE")}</div>
          </div>
          <div className="bg-gray-100 rounded-lg h-13 relative flex flex-col items-center">
  <label className="block text-black text-xs text-center mt-1 mb-1">Add Return</label>
  <div className="relative w-26">
    <DatePicker
      name="return"
      selected={returnDate}
      onChange={setReturnDate}
      dateFormat="dd MMM yyyy"
      className="w-full text-center text-sm bg-transparent focus:outline-none cursor-pointer"
      disabled={tripType === "one-way"}
    />
    <Calendar
      className="absolute mr-9 top-1/2 right-2 transform -translate-y-1/2 w-5 h-5 text-black cursor-pointer hover:text-gray-500"
      onClick={() => document.querySelector("[name='return']").focus()} 
    />
  </div>
</div>

          <div className="bg-gray-100 rounded-lg h-13 text-center">
            <label className="block text-black text-xs mt-1 mb-1">Passengers</label>
            <select name="passengers" value={passengers} onChange={(e) => setPassengers(Number(e.target.value))} className="w-34 bg-gray-100 rounded-lg text-center font-bold text-sm focus:outline-none cursor-pointer border-none appearance-none">
              {[...Array(9).keys()].map((num) => (
                <option key={num + 1} value={num + 1} >{num + 1} Passenger</option>
              ))}
            </select>
          </div>
          <button className="bg-[#3B82F6] text-white cursor-pointer rounded-full py-4 px-10 text-sm font-medium hover:bg-blue-600">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;