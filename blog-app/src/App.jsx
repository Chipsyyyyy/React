import { useState } from 'react'
import { Router, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import LoginForm from './pages/Login'

function App() {
  return (
    <>
        <LoginForm />
    </>
  )
}

export default App
{/* <main>
            <Routes>
                <Route path='/login' element={<LoginForm/>}/>
            </Routes>
        </main> */}