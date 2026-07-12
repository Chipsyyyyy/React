import { useState } from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import LoginForm from './pages/Login'
import NotFound from './pages/404'
import SignUpForm from './pages/SignUp'
import Welcome from './pages/Welcome'

function App() {
  return (
    <>
        <main>
            <Routes>
                <Route path='/signup' element={<SignUpForm/>}/>
                <Route path='/login' element={<LoginForm/>}/>
                <Route path='/welcome' element={<Welcome/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </main>
    </>
  )
}

export default App
