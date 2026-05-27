import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './Layout/layout.jsx';
import ProductPage from './pages/ProductPage.jsx';
import AddProduct from './pages/AddProduct.jsx';
import EditProduct from './pages/EditProduct.jsx';

function App() {

  return (
    <BrowserRouter>

      <Routes>

        {/* LAYOUT WRAPPER */}
        <Route path="/" element={<Layout />}>

          {/* DEFAULT PAGE */}
          <Route index element={<ProductPage />} />
          {/* ADD PRODUCT PAGE */}
          <Route path="add-product" element={<AddProduct />} />
          <Route path="edit-product/:id" element={<EditProduct />} />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;