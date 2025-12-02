import React from 'react'
import Home from './Home/Home'
import Courses from './courses/Courses'
import { Route , Routes} from 'react-router-dom'
import Signup from './components/Signup'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App
