import React from 'react'
import Home from './Home/Home'
import Courses from './courses/Courses'
import { Navigate, Route , Routes} from 'react-router-dom'
import Signup from './components/Signup'
import Contact from './components/Contact'
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider'

function App() {
  const [authUser,setAuthUser] = useAuth()
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={authUser?<Courses/>:<Navigate to="/signup"/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    <Toaster/>
    </>
  )
}

export default App
