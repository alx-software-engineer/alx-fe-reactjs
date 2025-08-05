import { Outlet, Link } from 'react-router-dom';
import './App.css';


function App() {

  return (
      <div>
      <header>
        <h1>My Recipe App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <main style={{marginTop:"20px"}}>
        <Outlet />
      </main>
    </div>
  )
}

export default App
