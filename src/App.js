import React from "react";
import { Routes,Route,Link } from "react-router-dom";
import Layout from "./components/Router/Layout";
import Home from "./components/HomePage";
import Products from "./components/ProductsPage";
import RouteNotFound from "./components/Router/RouteNotFound";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="*" element={<RouteNotFound />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App;
