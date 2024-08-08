import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'	
import SideBar from './components/SideBar/SideBar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Portfolio from './pages/Portfolio/Portfolio'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />}/>
          <Route path='/skills' element={<Skills />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='*' element={<div>pagina não encontrada</div>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App