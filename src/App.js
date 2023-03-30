import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import OrderPlace from "./Pages/OrderPlace";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderPlace />} />
      </Routes>
    </div>
  );
}

export default App;
