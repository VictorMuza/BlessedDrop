import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import About from "./pages/about";
import Home from "./pages/home";
import Cart from "./pages/cart";
import ProductDetails from "./pages/productDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;