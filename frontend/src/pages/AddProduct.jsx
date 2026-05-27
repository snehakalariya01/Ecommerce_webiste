import React, { useState } from "react";
import "../style/AddProduct.css";

const AddProduct = () => {
  const [formdata, setFormdata] = useState({
    productName: "",
    category: "",
    price: "",
    description: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", formdata);
    // TODO: send formdata to backend
  };

  return (
    <div className="add-product-page">
      <form className="add-product-form" onSubmit={handleSubmit}>
        <h2>Add Product</h2>

        <input
          type="text"
          placeholder="Enter Product Name"
          name="productName"
          value={formdata.productName}
          onChange={handleChange}
        />

        <select name="category" value={formdata.category} onChange={handleChange} className="category-select">
          <option value="">Select Category</option>
          <option value="Electronics">Indian ware</option>
          <option value="Clothing">Western wear</option>
          <option value="Home & Kitchen"> Footwear</option>
        </select>

        <input
          type="number"
          placeholder="Enter Price"
          name="price"
          value={formdata.price}
          onChange={handleChange}
        />

        <textarea
          placeholder="Enter Description"
          name="description"
          value={formdata.description}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Enter Image URL"
          name="imageUrl"
          value={formdata.imageUrl}
          onChange={handleChange}
        />

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;