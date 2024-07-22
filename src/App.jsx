import React from 'react'
import NavBar from './components/NavBar'
import Switch from './components/Switch'
import { Routes, Route } from 'react-router-dom'
import YourWeather from './components/YourWeather'
import SearchWeather from './components/SearchWeather'
import Home from './components/Home'



function App() {

  return (
    <>
      <NavBar />
      <Switch />
      <div className='w-full h-fit flex justify-center items-center mt-[1vh]'>
        <Routes>

          <Route path='/' element={<Home />}>
            <Route index element={<YourWeather />} />
            <Route path='/SearchWeather' element={<SearchWeather />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
