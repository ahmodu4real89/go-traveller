
import Image from "next/image";
import { Briefcase, Monitor, PlaneLanding, PlaneTakeoff, Usb, Utensils, X } from "lucide-react";

export default function FlightCard() {
    return (


        <div className="bg-gray-100 p-4">
            <div className="flex items-center justify-between my-3">
                <div className="flex items-center gap-2">
                    <PlaneTakeoff size={24} />
                    <h3 className="text-lg font-bold text-gray-800">Flights</h3>
                </div>
                <button className="bg-white text-blue-600  text-base p-4 rounded hover:bg-blue-50 transition">
                    Add flights
                </button>
            </div>
            <div className="flex items-stretch w-full max-w-8xl mx-auto mb-4">
                
                <div className="flex-1 bg-white shadow-md rounded-md overflow-hidden border border-white">
                
                    <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div className="flex-1 flex items-center gap-3">
                            
                            <Image
                              src="/america.svg"
                                alt="Delta Logo"
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

                        <div className="flex flex-col items-center text-center">
                            <p className="text-2xl font-semibold">08:45 AM</p>
                            <p className="text-sm text-gray-500">Mon, 5 Aug</p>
                        </div>




                        <div className="hidden md:flex flex-col items-center flex-1 w-2xl text-center gap-2">
                
                            <div className="flex justify-between items-center w-full text-xs text-gray-500">
                                <PlaneTakeoff size={20} />
                                <span className="text-base">Duration: 6h 30m</span>
                                <PlaneLanding size={20} />
                            </div>

                    
                            <div className="relative w-full h-1 bg-gray-200 rounded-full">
                                <div className="absolute top-0 left-0 h-1 bg-blue-500 rounded-full w-1/2" />
                            </div>

                        
                            <div className="flex justify-between w-full text-base  text-gray-700">
                                <span className="font-bold"> LOS</span>
                                <span className=" text-base">Direct</span>
                                <span className="font-bold">MEX</span>
                            </div>
                        </div>



                        <div className="flex flex-col items-center text-center">
                            <p className="text-2xl font-semibold">03:15 PM</p>
                            <p className="text-sm text-gray-500">Mon, 5 Aug</p>
                        </div>

                        <div className="flex items-center justify-between md:flex-col md:justify-center flex-1 gap-2 md:gap-3 text-right">
                            <span className="text-3xl font-bold text-gray-800 whitespace-nowrap">
                                ₦ 123,000
                            </span>
                        </div>
                    </div>

                    
                    <div className="p-6 text-sm text-gray-600 flex flex-wrap gap-4 border border-gray-100 border-x-white">
                        <span className="flex items-center gap-1">
                            Facilities
                        </span>
                        <span className="flex items-center gap-1">
                            <Briefcase size={16} /> Baggage: 20kg
                        </span>
                        <span className="flex items-center gap-1">Cabin Baggage: 8kg</span>
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

                    <div className="flex justify-between items-center p-6 text-lg font-semibold text-blue-600">
            
                        <div className="flex gap-4">
                            <button className="hover:underline">Flight details</button>
                            <button className="hover:underline">Price details</button>
                        </div>

                        
                        <button className="hover:underline">Edit details</button>
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
    );
}
