import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductCard from './components/ProductCard';
import AllProductsPage from './pages/AllProductsPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import WishlistUserPage from './pages/WishlistUserPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
     <Routes>
     
        <Route path="/" element={<HomePage />} />
        <Route path='/product/products' element={<AllProductsPage />} />
        <Route path='/auth/signup' element={<SignUpPage></SignUpPage>} />
        <Route path='/auth/login' element={<LoginPage></LoginPage>} />
      
     </Routes>




    </div>
  );
}

export default App;
