import React from "react";
import { Routes,Route } from "react-router-dom";
import Layout from "./components/Router/Layout";
import Home from "./components/HomePage";
import Products from "./components/ProductsPage";
import CartPage from './components/CartPage';
import RouteNotFound from "./components/Router/RouteNotFound";
import Contact from "./components/ContactPage";
import { CartProvider } from "./components/hooks/CartContext";
import CheckoutSuccessPage from "./components/CheckoutSuccessPage";

function App() {
  return (
    <div>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products/:id" element={<Products />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="checkout-success" element={<CheckoutSuccessPage />} />
            <Route path="*" element={<RouteNotFound />} />
          </Route>
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App;
