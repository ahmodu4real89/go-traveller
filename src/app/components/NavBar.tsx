'use client'
import { getFlight } from '../actions/travel'
import {
  BaggageClaim,
  Bell,
  CalendarPlus2,
  ChevronDown,
  Crosshair,
  HandCoins,
  Home,
  Plane,
  Search,
  Wallet
} from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Navbar = () => {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);


  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      getFlight(query)
    }
  };

  return (
    <div className="flex justify-between items-center w-full px-6 py-4 bg-white">

      
      <div className="flex items-center gap-4 flex-1">
        <Image src="/logo.png" alt="logo" width={50} height={40} className="bg-blue-500 p-2 rounded-md" />

        <div className="relative w-full max-w-md hidden md:block">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            type="search"
            placeholder="Search for flight..."
            className="w-full pl-10 pr-4 py-4 rounded-lg border-2 border-gray-300 bg-[#f0f2f5] focus:outline-none focus:border-blue-500"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      </div>

      
      <div className="flex items-center gap-12 text-sm text-gray-600">

        {/* Menu links */}
        <div className="hidden lg:flex items-center gap-6">
          {[
            { icon: <Home width={24} height={25} />, label: 'Home' },
            { icon: <Crosshair width={24} height={25} />, label: 'Dashboard' },
            { icon: <Wallet width={24} height={25} />, label: 'Wallet' },
            { icon: <Plane width={24} height={25} />, label: 'Plan Trip' },
            { icon: <HandCoins width={24} height={25} />, label: 'Commission' },
          ].map((item, idx) => (
            <div key={idx} className="flex flex-col items-center hover:text-blue-600 cursor-pointer">
              {item.icon}
              <span className="text-base mt-1">{item.label}</span>
            </div>
          ))}
        </div>
        <hr className='w-0 h-7 border border-solid border-l border-gray-600 mx-2' />
        
        <button className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 text-xl rounded-md transition hidden lg:block">
          Subscribe
        </button>

        
        {[
          { icon: <Bell width={24} height={25} />, label: 'Notification' },
          { icon: <BaggageClaim width={24} height={25} />, label: 'Cart' },
          { icon: <CalendarPlus2 width={24} height={25} />, label: 'Events' },
        ].map((item, idx) => (
          <div key={idx} className="hidden md:flex flex-col items-center hover:text-blue-600 cursor-pointer">
            {item.icon}
            <span className="text-base mt-1">{item.label}</span>
          </div>
        ))}

        
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src="/Ellipse 775.svg"
            alt="profile"
            width={45}
            height={36}
            className="rounded-full object-cover"
          />
          <ChevronDown className="w-4 h-4 text-gray-600" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
