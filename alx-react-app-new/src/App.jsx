import UserProfile from './components/UserProfile'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import WelcomeMessage from './components/WelcomeMessage'
import Counter from './components/Counter'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <WelcomeMessage />
      <Header /> 
      <MainContent /> 
      <Footer />
      <UserProfile name= "Alice" age= {25} bio= "Loves hiking and photography" />
      <Counter />
    </>
  )
}

export default App
