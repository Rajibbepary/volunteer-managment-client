import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react';


const Main = () => {
  const [theme, setTheme] = useState('light');

  return (
    <div className={`containe ${theme}`}>
      {/* Navbar */}
      <Navbar theme={theme} setTheme={setTheme}/>
      {/* Outlet */}
      <div className='min-h-[calc(100vh-306px)]'>
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Main
