import Image from 'next/image'
import Card from '@/app/components/Card'
import { Calendar, Ellipsis, MoveRight, UserPlus } from 'lucide-react'

const HeroCard = () => {
    return (
        <>
            <Image src='/banner.svg' alt='banner' width={1460} height={200} />
            <div className="flex justify-between items-start gap-4">

                <div className=" p-6">
                    <div className="flex flex-wrap gap-4 text-base text-[#7A4504] bg-[#FEF4E6] p-4  font-semibold">
                        <span className="flex items-center gap-2"><Calendar size={20} /> 21 March 2024</span>
                        <span className="flex items-center gap-2"><MoveRight size={20} /> 21 April 2024</span>
                    </div>
                    <h2 className="text-2xl font-bold mt-2">Bahamas Family Trip 🌴</h2>
                    <p className="text-sm text-gray-600">New York,  United States of America  😎 <span>Solo Trip</span></p>
                </div>

                
                <div className=" flex flex-col justify-between h-[100px] p-2">
            
                    <div className="flex gap-4 text-sm mb-6">
                        <span className="flex items-center gap-2 px-16 py-2 mt-2 bg-blue-200 rounded">
                            <UserPlus size={30} className='text-blue-600' />
                        </span>
                        <span className="flex items-center gap-2">
                            <Ellipsis size={30} />
                        </span>
                    </div>
 
                    <div className="flex gap-4 text-sm p-4">
                        <span className="flex items-center">
                            <Image
                                src="/box.svg"
                                alt="profile"
                                width={45}
                                height={45}
                                className="rounded-full object-cover"
                            />
                        </span>
                        <span className="flex items-center">
                            <Image
                                src="/xx.svg"
                                alt="profile"
                                width={65}
                                height={65}
                                className="rounded-full object-cover"
                            />
                        </span>
                    </div>
                </div>
            </div>

            <div className="flex gap-6  max-w-3xl">
                <Card
                    textColor='text-white'
                    backgroundColor="bg-[#000031]"
                    title="Activities"
                    description="Build, personalize, and optimize your itineraries with our trip planner."
                    buttonText="Add Activities"
                    color="bg-[#0D6EFD]"
                    buttonTextColor="text-white"
                />
                <Card
                    textColor='text-gray-700'
                    backgroundColor="bg-[#E7F0FF]"
                    title="Hotels"
                    description="Hotels Build, personalize, and optimize your itineraries with our 
                    trip planner. Add Hotels"
                    buttonText="Add Hotels"
                    color="bg-[#0D6EFD]"
                    buttonTextColor='text-white'
                />
                <Card
                    textColor='text-white'
                    backgroundColor="bg-[#0D6EFD]"
                    title="Flights"
                    description="Flights Build, personalize, and optimize your itineraries with our 
                    trip planner. Add Flights"
                    buttonText="Add Flights"
                    color="bg-white"
                    buttonTextColor='text-[#0D6EFD]'
                />
            </div>
        </>
    )
}

export default HeroCard