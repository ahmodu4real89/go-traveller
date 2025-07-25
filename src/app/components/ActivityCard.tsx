/* eslint-disable react/no-unescaped-entities */

import Image from "next/image";
import { AudioWaveform, ChevronDown, ChevronUp, Clock, MapPin, Star, X } from "lucide-react";
const ActivityCard = () => {
  return (

    <div className="bg-blue-600 p-4">
      <div className="flex items-center justify-between my-3">
        <div className="flex items-center gap-2">
          <AudioWaveform className="text-white" size={24} />
          <h3 className="text-lg font-semibold text-white">Activities</h3>
        </div>
        <button className="bg-white text-blue-600  text-sm font-bold p-4 rounded hover:bg-blue-50 transition">
          Add activites
        </button>
      </div>

      <div className="flex items-stretch w-full max-w-8xl mx-auto mb-4 ">

        <div className="flex-1 bg-white shadow-md rounded-md overflow-hidden border border-white flex p-4">

          <div className="w-70 bg-gray-100 flex items-center justify-center relative">
            <Image
              src="/activity.png"
              alt="Airline Logo"   
              fill
              className="object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <div className="p-4 flex flex-wrap justify-between gap-4">
              <div className="flex flex-col flex-1 min-w-[280px]">
                <h2 className="text-3xl font-semibold text-gray-900 mb-2">
                  The Museum of Modern Art
                </h2>
                <p className="text-base text-gray-600 mb-3 leading-relaxed">
                  Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant
                </p>

                <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                  <span className="flex items-center gap-1 text-blue-500"><MapPin size={20} /> Directions</span>
                  <span className="flex items-center gap-1"><Star size={20} /> 8.5 (436)</span>
                  <span className="flex items-center gap-1"><Clock size={20} /> 1Hour</span>
                </div>
              </div>


              <div className="flex flex-col justify-center items-end flex-1 min-w-[200px] text-right gap-1">
                <span className="text-xl font-bold text-gray-800 whitespace-nowrap">
                  ₦ 185,000
                </span>

                <span className="text-base font-medium text-gray-600 whitespace-nowrap">
                  10:30 AM on Mar 19
                </span>
              </div>
            </div>

            <div className="p-6 text-sm text-gray-600 flex flex-wrap justify-between items-start border border-gray-100 border-x-white">

              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-1 font-medium">What's Included:</span>
                <span className="flex items-center">Admission to the Empire State Building</span>
                <span className="flex items-center  text-blue-500 gap-1">See more</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span className="flex items-center gap-2 bg-[#0A369D] text-white p-2">
                  Day 1 - (2)
                </span>

                <div className="flex flex-col gap-1">
                  <button className="flex items-center justify-center p-1">
                    <ChevronUp size={16} />
                  </button>
                  <button className="flex items-center justify-center p-1">
                    <ChevronDown size={16} />
                  </button>
                </div>
              </div>


            </div>

            <div className="flex justify-between items-center p-6 text-lg font-semibold text-blue-600">

              <div className="flex gap-4">
                <button className="hover:underline">Activities details</button>
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

export default ActivityCard