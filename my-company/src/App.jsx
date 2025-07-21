import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Navbar from './components/Navbar'
import Contact from './components/Contact'

function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
