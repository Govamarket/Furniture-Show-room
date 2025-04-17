import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// import Navigation from "./Components/Navigation";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Cart from "./Components/Pages/Cart";
import Like from "./Components/Pages/Like";
import Profile from "./Components/Pages/Profile";
import Search from "./Components/Pages/Search";
import Shop from "./Components/Pages/Shop";
import ProductDetail from "./Components/Pages/ProductDetail";

function App() {
  return (
    <div className="relative pb-10 min-h-screen flex-col">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/like" element={<Like />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />{" "}
          <Route path="/product-details" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
