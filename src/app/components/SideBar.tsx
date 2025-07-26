'use client';
import {
  Activity,
  Building2,
  Plane,
  GraduationCap,
  Contact,
  Landmark,
  PlusSquare,
  Package,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
    
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded-md shadow"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
      
        className={`fixed top-0 left-0 h-full bg-white z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          w-[260px] px-6 py-6 flex flex-col justify-between shadow-lg
          lg:translate-x-0 lg:static lg:w-[300px] lg:m-8 lg:shadow-none`}
      >
        <div className="flex flex-col gap-6 text-gray-600">
          <NavItem icon={<Activity width={30} height={26} />} label="Activities" />
          <NavItem icon={<Building2 width={30} height={26} />} label="Hotels" />
          <NavItem icon={<Plane width={30} height={26} />} label="Flights" />
          <NavItem icon={<GraduationCap width={30} height={26} />} label="Study" />
          <NavItem icon={<Contact width={30} height={26} />} label="Visa" />
          <NavItem icon={<Landmark width={30} height={26} />} label="Immigration" />
          <NavItem icon={<PlusSquare width={30} height={26} />} label="Medical" />
          <NavItem icon={<Package width={30} height={26} />} label="Vacation Packages" />
        </div>

        <div className="bg-gray-200 rounded-lg p-3 flex items-center justify-between shadow-sm mt-8">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm">
            Go
          </button>
          <div className="flex items-center gap-2 text-sm text-gray-700">
            <span>Personal Account</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>
    </>
  );
};

const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition">
    {icon}
    <span className="text-2xl">{label}</span>
  </div>
);

export default Sidebar;
