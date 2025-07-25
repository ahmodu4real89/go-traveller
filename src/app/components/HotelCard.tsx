
import Image from "next/image";
import {  X, MapPin, Star, Bed, WavesLadder, Wine, Calendar, Hotel } from "lucide-react";

const HotelCard = () => {
  return (

    <div className="bg-slate-700 p-4">
      <div className="flex items-center justify-between my-3">
        <div className="flex items-center gap-2">
          <Hotel className="text-white" size={24} />
          <h3 className="text-lg text-white">Hotels</h3>
        </div>
        <button className="bg-white text-blue-600  text-sm font-bold p-4 rounded hover:bg-blue-50 transition">
          Add hotels
        </button>
      </div>

    

      <div className="flex items-stretch w-full max-w-8xl mx-auto mb-4">
        
        <div className="flex-1 bg-white shadow-md rounded-md overflow-hidden border border-white flex p-4">
          
          <div className="w-70 bg-gray-100 flex items-center justify-center relative">
            <Image
            src="/hotel.png"
              alt="Airline Logo"
              fill
              className="object-cover"
            />
          </div>

          
          <div className="flex-1 flex flex-col">
            
            <div className="p-4 flex flex-wrap justify-between gap-4">
          
              <div className="flex flex-col flex-1 min-w-[280px]">
                <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                  Riviera Resort, Lekki
                </h2>

                <p className="text-base text-gray-600 mb-3 leading-relaxed">
                  18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way,
                  Lekki Phase1
                </p>

                <div className="flex flex-wrap gap-6 text-base text-gray-600">
                  <span className="flex items-center gap-1"><MapPin size={20} /> Show in map</span>
                  <span className="flex items-center gap-1"><Star size={20} /> 8.5 (436)</span>
                  <span className="flex items-center gap-1"><Bed size={20} /> King Size Room</span>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex flex-col justify-center items-end flex-1 min-w-[200px] text-right gap-1">
                <span className="text-xl font-bold text-gray-800 whitespace-nowrap">
                  ₦ 185,000
                </span>
                <span className="text-base font-bold text-gray-800 whitespace-nowrap">
                  Total Price: NGN 560,000
                </span>
                <span className="text-2xl font-medium text-gray-600 whitespace-nowrap">
                  1 room x 10 nights incl. taxes
                </span>
              </div>
            </div>

            <div className="p-6 text-sm text-gray-600 flex flex-wrap justify-between items-start border border-gray-100 border-x-white">
            
              <div className="flex flex-wrap gap-4 text-lg">
                <span className="flex items-center gap-1">Facilities</span>
                <span className="flex items-center gap-1"><WavesLadder size={16} /> Pool</span>
                <span className="flex items-center gap-1"><Wine size={16} /> Bar</span>
              </div>

            
              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-2"><Calendar size={20} /> Check In: 20-04-2024</span>
                <span className="flex items-center gap-2"><Calendar size={20} /> Check Out: 29-04-2024</span>
              </div>
            </div>

            <div className="flex justify-between items-center p-6 text-lg font-semibold text-blue-600">
            
              <div className="flex gap-4">
                <button className="hover:underline">Hotel details</button>
                <button className="hover:underline">Price details</button>
              </div>

              
              <button className="hover:underline">Edit details</button>
            </div>
          </div>
        </div>

        
        <button
          className="w-10 bg-red-100 hover:bg-red-200 text-red-600 flex items-center justify-center rounded-r-md shadow-md"
          title="Remove flight"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  )
}

export default HotelCard