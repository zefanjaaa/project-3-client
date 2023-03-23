import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <ProductCard></ProductCard>
     <Routes>
     
     <Route path="/" element={ <HomePage /> } />
     
     
     
     
     </Routes>




    </div>
  );
}

export default App;
