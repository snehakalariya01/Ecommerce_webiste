import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">ShopZone</div>

      <ul className="nav-links">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/add-product">Add Product</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>

      <Link to="/add-product" className="add-btn">
        + Add Product
      </Link>
    </nav>
  );
};

export default Navbar;