import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import About from "./pages/about";
import Home from "./pages/home";
import Cart from "./pages/cart";
import AdminCadastrar from "./pages/adminCadastrar";
import Catalogo from "./pages/catalogo";
import DetalheTenis from "./pages/DetalheTenis";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/detalhe/:id" element={<DetalheTenis />} />
        <Route path="/AdminCadastrar" element={<AdminCadastrar />} />
        <Route path="/Catalogo" element={<Catalogo />} />
      </Routes>
    </Router>
  );
}

export default App;