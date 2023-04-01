import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, } from "react-router-dom";
import HomePage from "./pages/HomePage";
// import ProductCard from "./components/ProductCard";
import AllProductsPage from "./pages/AllProductsPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import WishlistUserPage from "./pages/WishlistUserPage"
import IsAnon from "./components/IsAnon";
import NavbarTest from "./components/NavbarTest";
import AddProductPage from "./pages/AddProductPage";
import Admin from "./components/Admin";
import ProductCard2 from "./components/ProductCard2";
import SingleProductPage from "./pages/SingleProductPage";
import IsPrivate from "./components/IsPrivate";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="App">

      
      
      <NavbarTest/>
      
      {/* <NavbarTest/> */}
      
{/* <Navbar /> */}

    

      <Routes>

     

        <Route path="/" element={<HomePage />} />
        <Route path="/product/products" element={<AllProductsPage />} />
        <Route path="/auth/signup" element={<SignUpPage />} />
        <Route path="/auth/login" element={<IsAnon><LoginPage /></IsAnon>} />
        <Route path="/wishlist" element={<IsPrivate><WishlistUserPage /></IsPrivate>} />
        <Route path="/product/:productId" element={<SingleProductPage />} />
       
        <Route path="/product/add" element={<Admin><AddProductPage /></Admin>} />
        <Route path="/contactpage" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
