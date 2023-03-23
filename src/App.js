import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductCard from './components/ProductCard';
import AllProductsPage from './pages/AllProductsPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProductCard></ProductCard>
      <AllProductsPage />
     <Routes>
     
        <Route path="/" element={<HomePage />} />
        <Route path='/product/products' element={<AllProductsPage />} />
     
     
     
     
     </Routes>




    </div>
  );
}

export default App;
