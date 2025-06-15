
import {Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AboutMe from './pages/AboutMe'
import MainLayout from './Layouts/MainLayout'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'

const App: React.FC = () => {

  return (
      <Routes>
         <Route path='/' element={<Home />} />

        <Route element={<MainLayout />}>
          <Route path='about' element={<AboutMe />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='resume' element={<Resume />} />
        </Route>
      </Routes>
  )
}

export default App
