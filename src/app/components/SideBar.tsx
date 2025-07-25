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
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div
      className="bg-white w-[300px] h-[800px] px-6 py-6 flex flex-col justify-between m-8"
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
  );
};


const NavItem = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-3 cursor-pointer hover:text-blue-600 transition">
    {icon}
    <span className="text-2xl">{label}</span>
  </div>
);

export default Sidebar;
