import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'	
import SideBar from './components/SideBar/SideBar'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import MainPage from './components/MainPage/MainPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <SideBar />
        <Routes>
          <Route path='/' element={<MainPage />}>
            <Route path='/home' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/skills' element={<Skills />}/>
            <Route path='/portfolio' element={<Portfolio />}/>
            <Route path='/contact' element={<Contact />}/>
          </Route>
          <Route path='*' element={<div>pagina não encontrada</div>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App