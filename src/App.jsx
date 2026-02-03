import './App.css'
import Home from './pages/home'
import { Route, Routes } from 'react-router'
import Project from './pages/project'

function App() {

  return (
    <>
    <Routes>
      <Route path="" element={<Home/>} />
      <Route path="/home" element={<Home/>} /> 
      <Route path="/project/:id" element={<Project/>} />
    </Routes>
      
    </>
  )
}

export default App
