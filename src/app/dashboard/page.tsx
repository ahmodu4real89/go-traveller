// import FlightCard from '@/app/components/FlightCard'
// import HotelCard from '@/app/components/HotelCard'
// import ActivityCard from '@/app/components/ActivityCard'
// import HeroCard from '@/app/components/HeroCard'
// import Tabs from '@/app/components/Tabs'



// const DashBoard = () => {
//   return (
//     <div className='bg-white m-8 max-w-7xl'>
//       <div className="p-6 space-y-6">
//         <HeroCard />
//         {/* Tabs */}
//         <Tabs />
//         {/* Flight Card */}
//         <FlightCard />
//         {/* Hotel Section */}
//         <HotelCard />
//         {/* Activities */}
//         <ActivityCard />

//       </div>
//     </div>

//   )
// }

// export default DashBoard



import FlightCard from '@/app/components/FlightCard';
import HotelCard from '@/app/components/HotelCard';
import ActivityCard from '@/app/components/ActivityCard';
import HeroCard from '@/app/components/HeroCard';
import Tabs from '@/app/components/Tabs';

const DashBoard = () => {
  return (
    <div className="bg-white w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 my-8">
      <div className="py-6 space-y-6">
        <HeroCard />
        <Tabs />
        <FlightCard />
        <HotelCard />
        <ActivityCard />
      </div>
    </div>
  );
};

export default DashBoard;
