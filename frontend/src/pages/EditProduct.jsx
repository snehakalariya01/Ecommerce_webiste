import React, { useState } from "react";
import "../style/AddProduct.css";

const EditProduct = () => {

  // DUMMY EXISTING PRODUCT DATA
  const existingProduct = {
    productName: "Floral Kurti",
    category: "Indian Wear",
    price: "1299",
    description: "Beautiful floral kurti for women",
    imageUrl: "https://images.unsplash.com/photo-1520975922284-7d1c9f4c8c9a"
  };

  // FORM STATE
  const [formData, setFormData] = useState(existingProduct);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="add-product-page">

      <form className="add-product-form">

        <h2>Edit Product</h2>

        {/* PRODUCT NAME */}
        <input
          type="text"
          name="productName"
          placeholder="Enter Product Name"
          value={formData.productName}
          onChange={handleChange}
        />

        {/* CATEGORY */}
        <input
          type="text"
          name="category"
          placeholder="Enter Category"
          value={formData.category}
          onChange={handleChange}
        />

        {/* PRICE */}
        <input
          type="number"
          name="price"
          placeholder="Enter Price"
          value={formData.price}
          onChange={handleChange}
        />

        {/* DESCRIPTION */}
        <textarea
          name="description"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        {/* IMAGE URL */}
        <input
          type="text"
          name="imageUrl"
          placeholder="Enter Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
        />

        {/* UPDATE BUTTON */}
        <button type="submit">
          Update Product
        </button>

      </form>

    </div>
  );
};

export default EditProduct;