
import Image from "next/image";
import {
  Briefcase,
  Monitor,
  PlaneLanding,
  PlaneTakeoff,
  Usb,
  Utensils,
  X,
} from "lucide-react";

export default function FlightCard() {
  return (
    <div className="bg-gray-100 p-4">
      
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-3">
        <div className="flex items-center gap-2">
          <PlaneTakeoff size={24} />
          <h3 className="text-lg font-bold text-gray-800">Flights</h3>
        </div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
          Add flights
        </button>
      </div>

      
      <div className="flex flex-col md:flex-row bg-white rounded-md shadow-md overflow-hidden border border-white">
        <div className="flex-1 p-4 space-y-4">
        
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
            <div className="flex items-center gap-3">
              <Image
                src="/america.svg"
                alt="Airline Logo"
                width={35}
                height={25}
                className="rounded-full object-contain"
              />
              <div>
                <h3 className="font-bold text-xl text-gray-800">American Airlines</h3>
                <p className="text-base text-gray-600">
                  DL202 ·{" "}
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 text-xs rounded">
                    Economy
                  </span>
                </p>
              </div>
            </div>

            
            <div className="text-center">
              <p className="text-2xl font-semibold">08:45 AM</p>
              <p className="text-sm text-gray-500">Mon, 5 Aug</p>
            </div>

            
            <div className="hidden md:flex flex-col items-center w-64 text-center gap-2">
              <div className="flex justify-between items-center w-full text-xs text-gray-500">
                <PlaneTakeoff size={20} />
                <span className="text-base">Duration: 6h 30m</span>
                <PlaneLanding size={20} />
              </div>
              <div className="relative w-full h-1 bg-gray-200 rounded-full">
                <div className="absolute top-0 left-0 h-1 bg-blue-500 rounded-full w-1/2" />
              </div>
              <div className="flex justify-between w-full text-base text-gray-700">
                <span className="font-bold">LOS</span>
                <span>Direct</span>
                <span className="font-bold">MEX</span>
              </div>
            </div>

            
            <div className="text-center">
              <p className="text-2xl font-semibold">03:15 PM</p>
              <p className="text-sm text-gray-500">Mon, 5 Aug</p>
            </div>

            
            <div className="text-center min-w-[140px] md:text-right">
              <span className="text-3xl font-bold text-gray-800 whitespace-nowrap">
                ₦ 123,000
              </span>
            </div>
          </div>

          
          <div className="md:hidden flex flex-col items-center text-center gap-2 pt-4 border-t">
            <div className="flex justify-between items-center w-full text-xs text-gray-500">
              <PlaneTakeoff size={20} />
              <span className="text-base">Duration: 6h 30m</span>
              <PlaneLanding size={20} />
            </div>
            <div className="relative w-full h-1 bg-gray-200 rounded-full">
              <div className="absolute top-0 left-0 h-1 bg-blue-500 rounded-full w-1/2" />
            </div>
            <div className="flex justify-between w-full text-base text-gray-700">
              <span className="font-bold">LOS</span>
              <span>Direct</span>
              <span className="font-bold">MEX</span>
            </div>
          </div>

          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 pt-4 border-t">
            <span className="flex items-center gap-1 font-medium">Facilities:</span>
            <span className="flex items-center gap-1">
              <Briefcase size={16} /> Baggage: 20kg
            </span>
            <span className="flex items-center gap-1">Cabin: 8kg</span>
            <span className="flex items-center gap-1">
              <Monitor size={16} /> Entertainment
            </span>
            <span className="flex items-center gap-1">
              <Utensils size={16} /> Meal
            </span>
            <span className="flex items-center gap-1">
              <Usb size={16} /> USB Port
            </span>
          </div>

          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 text-blue-600 font-semibold text-lg gap-2">
            <div className="flex gap-4">
              <button className="hover:underline">Flight details</button>
              <button className="hover:underline">Price details</button>
            </div>
            <button className="hover:underline">Edit details</button>
          </div>
        </div>


        <button
          className="w-full md:w-10 bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center md:rounded-r-md md:rounded-none rounded-b-md p-2"
          title="Remove flight"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
}
