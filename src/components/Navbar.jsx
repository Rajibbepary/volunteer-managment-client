/* eslint-disable react/prop-types */
import { useContext } from 'react'
import logo from '../assets/images/logo.png'
import { AuthContext } from '../providers/AuthProvider'
import { Link } from 'react-router-dom'
import logo_light from '../assets/images/sun.png'
import logo_dark from '../assets/images/moon.png'
import './Navbar.css'
const Navbar = ({ theme, setTheme }) => {

  const toggle_mode = () =>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  const { user, logOut } = useContext(AuthContext)
  return (
    <div className='navbar sticky z-40 bg-opacity-50 backdrop-blur-md  top-0 bg-base-100 shadow-sm container px-4 mx-auto'>
      <div className='flex-1 '>
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-auto h-12 object-cover' src={logo} alt='' />
          <span className='font-bold '><i className='hidden lg:block'>VOlUNTEER</i></span>
        </Link>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1 flex gap-2 items-center '>
          <li className='bg-slate-50 text-black rounded-md'>
            <Link to='/' >Home</Link>
          </li>
          <li className='bg-slate-50 text-black rounded-md'>
            <Link to='/volunteer'>All Volunteer</Link>
          </li>
          <li><img onClick={()=>{toggle_mode()}} src={theme == 'light' ?logo_light : logo_dark} alt="" className=' toggle-icon'  /></li>
          {!user && (
            <li className='bg-white text-black rounded-lg'>
              <Link to='/login'>Login</Link>
            </li>
          )}
        </ul>

        {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <li className='bg-white text-black rounded-lg'>
                <Link to='/add-volunteer' className='justify-between'>
                  Add Volunteer
                </Link>
              </li>
              <li className='bg-white text-black rounded-lg'>
                <Link to='/my-posted-volunteer'>My Posted Volunteer</Link>
              </li>
              <li className='bg-white text-black rounded-lg'>
                <Link to='/my-volunteer'>My Posts</Link>
              </li>
              <li className='bg-white text-black rounded-lg'>
                <Link to='/Post-requests'>Post Requests</Link>
              </li>
              <li className='mt-2 bg-white text-black'>
                <button
                  onClick={logOut}
                  className='bg-gray-200 block text-center'
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      
    </div>
  )
}

export default Navbar
