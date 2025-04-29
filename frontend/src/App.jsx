import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='min-h-screen max-w-screen-xl mx-auto py-6 font-primary'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App