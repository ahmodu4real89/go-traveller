import Image from "next/image";
import {
  X,
  MapPin,
  Star,
  Bed,
  WavesLadder,
  Wine,
  Calendar,
  Hotel,
} from "lucide-react";

const HotelCard = () => {
  return (
    <div className="bg-slate-700 p-4">
    
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-3">
        <div className="flex items-center gap-2">
          <Hotel className="text-white" size={24} />
          <h3 className="text-lg text-white">Hotels</h3>
        </div>
        <button className="bg-white text-blue-600 text-sm font-bold px-4 py-2 rounded hover:bg-blue-50 transition">
          Add hotels
        </button>
      </div>

      
      <div className="flex flex-col lg:flex-row w-full max-w-8xl mx-auto mb-4 bg-white shadow-md rounded-md overflow-hidden border border-white p-3">
    
        <div className="relative w-full lg:w-3xs h-64 lg:h-auto bg-gray-100 flex items-center justify-center">
          <Image
            src="/hotel.png"
            alt="Hotel"
              fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col justify-between">
          
          <div className="p-4 flex flex-col lg:flex-row lg:justify-between gap-4">
            
            <div className="flex flex-col flex-1 min-w-[280px]">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                Riviera Resort, Lekki
              </h2>

              <p className="text-base text-gray-600 mb-3 leading-relaxed">
                18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                Lekki Phase1
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <MapPin size={20} /> Show in map
                </span>
                <span className="flex items-center gap-1">
                  <Star size={20} /> 8.5 (436)
                </span>
                <span className="flex items-center gap-1">
                  <Bed size={20} /> King Size Room
                </span>
              </div>
            </div>

            
            <div className="flex flex-col justify-center items-start lg:items-end text-left lg:text-right flex-1 min-w-[200px] gap-1">
              <span className="text-xl font-bold text-gray-800 whitespace-nowrap">
                ₦ 185,000
              </span>
              <span className="text-base font-bold text-gray-800 whitespace-nowrap">
                Total Price: NGN 560,000
              </span>
              <span className="text-sm text-gray-600 whitespace-nowrap">
                1 room x 10 nights incl. taxes
              </span>
            </div>
          </div>

          
          <div className="p-4 flex flex-col sm:flex-row justify-between gap-4 border-t border-gray-200 text-sm text-gray-600">
            <div className="flex flex-wrap gap-4 text-base">
              <span className="flex items-center gap-1">Facilities</span>
              <span className="flex items-center gap-1">
                <WavesLadder size={16} /> Pool
              </span>
              <span className="flex items-center gap-1">
                <Wine size={16} /> Bar
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <span className="flex items-center gap-2">
                <Calendar size={20} /> Check In: 20-04-2024
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={20} /> Check Out: 29-04-2024
              </span>
            </div>
          </div>

        
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 text-sm font-semibold text-blue-600 gap-2">
            <div className="flex gap-4">
              <button className="hover:underline">Hotel details</button>
              <button className="hover:underline">Price details</button>
            </div>

            <button className="hover:underline">Edit details</button>
          </div>
        </div>

    
        <button
          className="lg:w-10 w-full lg:h-auto h-10 bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center lg:rounded-r-md rounded-b-md lg:rounded-b-none"
          title="Remove hotel"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default HotelCard;
