import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Prdoucts from "./Components/Prdoucts";
import Popular from "./Components/Popular";
import Cart from "./Components/Cart";
import Products from "./Components/Prdoucts";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex flex-column container-fluid">
          <Navbar />
          <div className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />}>
                Home
              </Route>
              <Route path="/allproducts" element={<Products />}>
                AllProduct
              </Route>
              <Route path="/cart" element={<Cart />}>
                Cart
              </Route>
              <Route path="/popular" element={<Popular />}>
                Popular
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
