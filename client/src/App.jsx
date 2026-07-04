import React, { useEffect, useState, useRef } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import axios from 'axios'
import ProtectedRoute from './Components/ProtectedRoute'
import Navbar from './Components/Navbar'
import Builder from './pages/Builder'
import Billing from './pages/Billing'
import { Toaster } from "react-hot-toast"
export const ServerUrl = "https://voicrserver.onrender.com"
export const CLIENT_URL = "https://voicr.onrender.com"

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  const cursorRef = useRef(null)
  const cursorOuterRef = useRef(null)

  // Persist dark mode
  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  // Neon cursor effect
  useEffect(() => {
    const cursor = cursorRef.current
    const cursorOuter = cursorOuterRef.current
    let mouseX = 0, mouseY = 0
    let outerX = 0, outerY = 0

    const moveCursor = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (cursor) {
        cursor.style.left = mouseX + 'px'
        cursor.style.top = mouseY + 'px'
      }
    }

    const animateOuter = () => {
      outerX += (mouseX - outerX) * 0.12
      outerY += (mouseY - outerY) * 0.12
      if (cursorOuter) {
        cursorOuter.style.left = outerX + 'px'
        cursorOuter.style.top = outerY + 'px'
      }
      requestAnimationFrame(animateOuter)
    }

    window.addEventListener('mousemove', moveCursor)
    animateOuter()

    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const res = await axios.get(ServerUrl + "/api/user/current-user", { withCredentials: true })
        setUser(res.data.user)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchMe()
  }, [])

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Neon cursor dot */}
      <div
        ref={cursorRef}
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: darkMode
            ? 'radial-gradient(circle, #a855f7, #10b981)'
            : 'radial-gradient(circle, #7c3aed, #059669)',
          boxShadow: darkMode
            ? '0 0 10px 3px #a855f7, 0 0 20px 6px #10b98155'
            : '0 0 8px 2px #7c3aed88',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'background 0.3s',
        }}
      />
      {/* Neon cursor outer ring */}
      <div
        ref={cursorOuterRef}
        style={{
          position: 'fixed',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: darkMode ? '1.5px solid #a855f788' : '1.5px solid #7c3aed55',
          boxShadow: darkMode
            ? '0 0 12px 2px #a855f744, inset 0 0 8px #10b98122'
            : '0 0 8px 1px #7c3aed33',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99998,
          transition: 'border 0.3s, box-shadow 0.3s',
        }}
      />

      <Toaster position='top-right' />
      <Routes>
        <Route path='/login' element={<Login setUser={setUser} darkMode={darkMode} />} />

        <Route path='/*' element={
          <ProtectedRoute user={user} loading={loading}>
            <Navbar setUser={setUser} user={user} darkMode={darkMode} setDarkMode={setDarkMode} />
            <Routes>
              <Route path='/' element={<Home user={user} darkMode={darkMode} />} />
              <Route path='/builder' element={<Builder user={user} setUser={setUser} darkMode={darkMode} />} />
              <Route path='/billing' element={<Billing user={user} setUser={setUser} darkMode={darkMode} />} />
              <Route path='*' element={<Navigate to="/" replace />} />
            </Routes>
          </ProtectedRoute>
        } />
      </Routes>
    </div>
  )
}

export default App
