import Sidebar from '@/app/components/SideBar'
import Navbar from './components/NavBar'


const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-gray-50'>
      <Navbar  />

      <div className="flex">
        <Sidebar />
        <main className="flex-1">
          {children}
        </main>
      </div>


    </div>

  )
}

export default DashboardWrapper



