import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../assets/logo.png"
import { FiLogOut, FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import axios from 'axios';
import { ServerUrl } from '../App';
import toast from 'react-hot-toast';

function Navbar({ user, setUser, darkMode, setDarkMode }) {
  const navigate = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await axios.get(ServerUrl + "/api/auth/logout", { withCredentials: true })
      setUser(null)
      toast.success("Logout Successfully")
      navigate("/login")
    } catch (error) {
      toast.error("logout failed")
      console.log(error)
    }
  }

  return (
    <div className={`sticky top-0 z-50 backdrop-blur-xl border-b transition-colors duration-300 ${darkMode ? 'bg-gray-950/90 border-gray-800' : 'bg-white/80 border-orange-100'}`}>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between'>

        <div onClick={() => navigate("/")} className='flex items-center gap-2.5 cursor-pointer'>
          <img src={logo} alt="logo" className='h-9 w-auto object-contain' />
          <h1 className={`font-bold text-xl leading-none transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-700'}`}>VoicR</h1>
        </div>

        <div className='flex items-center gap-3'>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${darkMode
              ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700 shadow-[0_0_10px_rgba(168,85,247,0.3)]'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
          >
            {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>

          {user && (
            <div className='hidden md:flex items-center gap-3'>
              <button
                onClick={() => navigate("/builder")}
                className='px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-emerald-500 text-white text-sm font-medium shadow-md hover:scale-[1.02] transition-all cursor-pointer'>
                Builder
              </button>

              <button
                onClick={() => navigate("/billing")}
                className={`px-4 py-2 rounded-xl border text-sm font-medium hover:border-purple-300 transition-all cursor-pointer ${darkMode ? 'border-gray-700 bg-gray-800 text-gray-200 hover:bg-gray-700' : 'border-orange-100 bg-white text-gray-700'}`}>
                Billing
              </button>

              <div className={`flex items-center gap-3 px-4 py-2 rounded-2xl border shadow-sm transition-colors duration-300 ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-orange-100'}`}>
                <div className='w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 flex items-center justify-center flex-shrink-0'>
                  <span className='text-white text-sm font-bold'>
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                </div>

                <div className='max-w-[140px]'>
                  <p className={`text-sm font-semibold truncate transition-colors duration-300 ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{user?.name}</p>
                  <p className='text-xs text-gray-400 truncate'>{user?.email}</p>
                </div>

                <button onClick={handleLogout} className='ml-1 text-gray-400 hover:text-red-500 transition-colors cursor-pointer'>
                  <FiLogOut size={18} />
                </button>
              </div>
            </div>
          )}

          {user && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden transition-colors ${darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-600 hover:text-purple-500'}`}>
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          )}
        </div>
      </div>

      {menuOpen && (
        <div className='md:hidden px-4 pb-4'>
          <div className={`rounded-2xl border shadow-lg p-4 transition-colors duration-300 ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-orange-100'}`}>
            <div className={`flex items-center gap-3 pb-4 border-b ${darkMode ? 'border-gray-700' : 'border-orange-100'}`}>
              <div className='w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-emerald-500 flex items-center justify-center flex-shrink-0'>
                <span className='text-white text-sm font-bold'>
                  {user?.name?.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className='flex-1 overflow-hidden'>
                <p className={`text-sm font-semibold truncate ${darkMode ? 'text-gray-100' : 'text-gray-800'}`}>{user?.name}</p>
                <p className='text-xs text-gray-400 truncate'>{user?.email}</p>
              </div>
            </div>

            <div className='flex flex-col gap-3 mt-4'>
              <button
                className='w-full py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-emerald-500 text-white text-sm font-medium'
                onClick={() => { navigate("/builder"); setMenuOpen(false) }}>
                Builder
              </button>
              <button
                className={`w-full py-2.5 rounded-xl border text-sm font-medium ${darkMode ? 'border-gray-700 bg-gray-800 text-gray-200' : 'border-orange-100 bg-white text-gray-700'}`}
                onClick={() => { navigate("/billing"); setMenuOpen(false) }}>
                Billing
              </button>
            </div>

            <button
              onClick={() => { setMenuOpen(false); handleLogout() }}
              className='mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition-colors text-sm font-medium'>
              <FiLogOut size={16} /> LogOut
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar