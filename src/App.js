import "./App.css";
import { Routes, Route, } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import ProductCard from "./components/ProductCard";
import AllProductsPage from "./pages/AllProductsPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import WishlistUserPage from "./pages/WishlistUserPage"
import IsAnon from "./components/IsAnon";
import CheckOutPage from "./pages/CheckOutPage";
import NavbarTest from "./components/NavbarTest";
import AddProductPage from "./pages/AddProductPage";
import Admin from "./components/Admin";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartProvider from "./context/cartContex";

function App() {
  return (
    <CartProvider>
    <div className="App">

      
      
      <NavbarTest/>
      
    
      <Routes>

     

        <Route path="/" element={<HomePage />} />
        <Route path="/product/products" element={<AllProductsPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="/auth/login" element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path="/wishlist" element={<WishlistUserPage />} />
        <Route path="/checkout" element={<CheckOutPage></CheckOutPage>} />
        <Route path="/product/add" element={<Admin><AddProductPage /></Admin>} />

      </Routes>
    </div>
    </CartProvider>
  );
}

export default App;
