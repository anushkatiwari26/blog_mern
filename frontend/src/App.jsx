import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AddCourse from './components/AddCourse'
import ShowCourse from './components/ShowCourse'
import EditCourse from './components/EditCourse'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<AddCourse/>}/>
        <Route path='/:id' element={<ShowCourse/>}/>
        <Route path='/edit/:id' element={<EditCourse/>}/>

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
