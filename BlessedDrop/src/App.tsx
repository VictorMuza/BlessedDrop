import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import About from "./pages/about";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Register" element={<Login />} />
        <Route path="/" element={<Register />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;