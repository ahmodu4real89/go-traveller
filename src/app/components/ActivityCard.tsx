/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import {
  AudioWaveform,
  ChevronDown,
  ChevronUp,
  Clock,
  MapPin,
  Star,
  X,
} from "lucide-react";

const ActivityCard = () => {
  return (
    <div className="bg-blue-600 p-4">
    
      <div className="flex flex-wrap items-center justify-between gap-4 my-3">
        <div className="flex items-center gap-2">
          <AudioWaveform className="text-white" size={24} />
          <h3 className="text-lg font-semibold text-white">Activities</h3>
        </div>
        <button className="bg-white text-blue-600 text-sm font-bold px-4 py-2 rounded hover:bg-blue-50 transition whitespace-nowrap">
          Add activities
        </button>
      </div>

      <div className="flex flex-col md:flex-row w-full mx-auto mb-4 bg-white shadow-md rounded-md overflow-hidden border border-white">
    
        <div className="w-full md:w-[250px] h-[200px] md:h-auto relative bg-gray-100">
          <Image
            src="/activity.png"
            alt="Activity"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1 flex flex-col">
        
          <div className="p-4 flex flex-col lg:flex-row lg:justify-between gap-4">
            
            <div className="flex flex-col flex-1 min-w-[250px]">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                The Museum of Modern Art
              </h2>
              <p className="text-base text-gray-600 mb-3 leading-relaxed">
                Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1 text-blue-500">
                  <MapPin size={20} /> Directions
                </span>
                <span className="flex items-center gap-1">
                  <Star size={20} /> 8.5 (436)
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={20} /> 1 Hour
                </span>
              </div>
            </div>

          
            <div className="flex flex-col justify-center items-start lg:items-end min-w-[200px] text-right gap-1">
              <span className="text-xl font-bold text-gray-800 whitespace-nowrap">
                ₦ 185,000
              </span>
              <span className="text-base font-medium text-gray-600 whitespace-nowrap">
                10:30 AM on Mar 19
              </span>
            </div>
          </div>

        
          <div className="p-4 flex flex-col md:flex-row justify-between gap-4 border-t border-gray-200 text-sm text-gray-600">
            <div className="flex flex-wrap gap-4">
              <span className="font-medium">What's Included:</span>
              <span>Admission to the Empire State Building</span>
              <span className="text-blue-500">See more</span>
            </div>

        
            <div className="flex items-center gap-2">
              <span className="bg-[#0A369D] text-white px-3 py-1 rounded">
                Day 1 - (2)
              </span>
              <div className="flex flex-col">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronUp size={16} />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <ChevronDown size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 flex flex-col md:flex-row justify-between gap-4 text-blue-600 text-base font-semibold border-t border-gray-200">
            <div className="flex gap-4">
              <button className="hover:underline">Activities details</button>
              <button className="hover:underline">Price details</button>
            </div>
            <button className="hover:underline text-left md:text-right">
              Edit details
            </button>
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

export default ActivityCard;
