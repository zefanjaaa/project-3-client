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
import SingleProductPage from "./pages/SingleProductPage";
import IsPrivate from "./components/IsPrivate";
import ContactPage from "./pages/ContactPage";
import ArtPage from "./pages/ArtPage";
import HomegoodsPage from "./pages/HomegoodsPage";
import SalePage from "./pages/SalePage";
import SingleContact from "./components/SingleContact";


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
        <Route path="/wishlist" element={<IsPrivate><WishlistUserPage /></IsPrivate>} />
        <Route path="/product/:productId" element={<SingleProductPage />} />
        <Route path="/checkout" element={<CheckOutPage></CheckOutPage>} />
        <Route path="/product/add" element={<Admin><AddProductPage /></Admin>} />
          <Route path="/contactpage" element={<ContactPage />} />
          <Route path="/product/art" element={<ArtPage />} />
          <Route path="/product/sale" element={<SalePage />}/>
          <Route path="/product/homegoods" element={<HomegoodsPage />} />
          <Route path="/contact/:contactId" element={<SingleContact />}/>
      </Routes>
    </div>
    </CartProvider>
  );
}

export default App;
