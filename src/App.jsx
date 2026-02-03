import './App.css'
import Home from './pages/home'
import { Route, Routes } from 'react-router'
import ZadCars from './pages/zadcars'

function App() {

  return (
    <>
    <Routes>
      <Route path="" element={<Home/>} />
      <Route path="/home" element={<Home/>} /> 
      <Route path="/zad-cars" element={<ZadCars/>} />
    </Routes>
      
    </>
  )
}

export default App
