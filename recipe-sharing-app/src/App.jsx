import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails.jsx';
import HomePage from './components/HomePage.jsx';
import Layout from './components/Layout.jsx';
import './App.css';
import AddRecipeForm from './components/AddRecipeForm.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />}  />
          <Route path='recipes/:myRecipeId' element={<RecipeDetails />} />
          <Route path='addRecipeForm' element={<AddRecipeForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
