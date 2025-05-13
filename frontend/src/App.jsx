import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen max-w-screen-2xl mx-auto py-6 font-primary px-4'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App