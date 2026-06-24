import React from 'react'
import { HiOutlineSparkles, HiOutlineMicrophone } from "react-icons/hi";
import { HiOutlineBolt, HiOutlineCodeBracket } from "react-icons/hi2";
import { FcGoogle } from "react-icons/fc";
import logo from "../assets/logo.png"
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../utils/firebase';
import axios from "axios"
import { ServerUrl } from '../App';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function Login({ setUser, darkMode }) {
  const navigate = useNavigate()
  const FEATURES = [
    { icon: <HiOutlineMicrophone />, title: "Voice AI", desc: "Natural real-time voice conversations." },
    { icon: <HiOutlineSparkles />, title: "Smart Navigation", desc: "Navigate pages using voice commands." },
    { icon: <HiOutlineCodeBracket />, title: "Easy Embed", desc: "Add assistant using one script tag." },
    { icon: <HiOutlineBolt />, title: "Fast Responses", desc: "Optimized Gemini AI responses." },
  ]

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider)
      const { displayName, email } = result.user
      const res = await axios.post(ServerUrl + "/api/auth/google", { name: displayName, email }, { withCredentials: true })
      setUser(res.data.user)
      toast.success("Login Successfully")
      navigate("/")
    } catch (error) {
      toast.error("Login Failed...")
      console.log(error)
    }
  }

  return (
    <div className={`min-h-screen overflow-hidden transition-colors duration-300 ${darkMode
      ? 'bg-gray-950'
      : 'bg-gradient-to-br from-purple-50 via-white to-emerald-50'}`}>

      {/* Dark mode background blobs */}
      {darkMode && (
        <>
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-purple-900/20 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-emerald-900/15 blur-3xl rounded-full pointer-events-none" />
        </>
      )}

      <div className='relative max-w-7xl mx-auto px-6 py-16 lg:py-24'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>

          {/* Left */}
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors duration-300 ${darkMode
              ? 'border-purple-800 bg-purple-950/60 text-purple-400'
              : 'border-purple-200 bg-purple-100 text-purple-600'}`}>
              <HiOutlineSparkles />
              AI Voice Assistant Platform
            </div>

            <h1 className={`mt-8 text-5xl lg:text-7xl font-black leading-tight transition-colors duration-300 ${darkMode ? 'text-white' : 'text-[#081028]'}`}>
              Build AI Assistants
              <span className='block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-emerald-500'>
                For Any Website
              </span>
            </h1>

            <p className={`mt-8 text-lg leading-8 max-w-2xl transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-[#475569]'}`}>
              Create customizable AI voice assistants that talk, guide users, and integrate into any website instantly.
            </p>

            <button
              onClick={handleLogin}
              className='mt-10 h-16 px-8 rounded-2xl bg-gradient-to-r from-purple-500 to-emerald-500 text-white text-lg font-semibold flex items-center gap-4 shadow-[0_20px_80px_rgba(139,92,246,0.25)] hover:scale-[1.02] transition cursor-pointer'>
              <FcGoogle className='text-3xl bg-white rounded-full' />
              Continue with Google
            </button>

            <p className={`mt-4 text-sm transition-colors duration-300 ${darkMode ? 'text-gray-500' : 'text-[#64748b]'}`}>
              Free plan includes 200 AI responses
            </p>
          </div>

          {/* Right */}
          <div className='relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-purple-200/50 to-emerald-200/40 blur-[120px]' />

            <div className={`relative rounded-[40px] border shadow-[0_20px_80px_rgba(0,0,0,0.06)] p-8 overflow-hidden transition-colors duration-300 ${darkMode
              ? 'bg-gray-900 border-gray-700'
              : 'bg-white border-black/5'}`}>

              <div className='flex items-center justify-between'>
                <h2 className={`mt-2 text-3xl font-bold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-[#081028]'}`}>
                  Features
                </h2>
                <div className='w-16 h-16 rounded-3xl bg-gradient-to-r from-purple-500 to-emerald-500 flex items-center justify-center shadow-[0_10px_40px_rgba(139,92,246,0.25)] p-3'>
                  <img src={logo} alt="logo" className='w-full h-full object-contain' />
                </div>
              </div>

              <div className='mt-10 space-y-5'>
                {FEATURES.map(({ icon, title, desc }, index) => (
                  <div key={index} className={`flex gap-5 rounded-3xl border p-5 transition-colors duration-300 ${darkMode
                    ? 'border-gray-700 bg-gray-800'
                    : 'border-black/5 bg-[#f8fafc]'}`}>
                    <div className='min-w-[60px] h-[60px] rounded-2xl bg-gradient-to-r from-purple-500 to-emerald-500 text-white text-2xl flex items-center justify-center shadow-[0_10px_30px_rgba(139,92,246,0.20)]'>
                      {icon}
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold transition-colors duration-300 ${darkMode ? 'text-white' : 'text-[#081028]'}`}>
                        {title}
                      </h3>
                      <p className={`mt-2 text-sm leading-7 transition-colors duration-300 ${darkMode ? 'text-gray-400' : 'text-[#64748b]'}`}>
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Login