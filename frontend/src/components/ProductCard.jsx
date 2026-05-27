import { Link } from "react-router-dom";
import "../style/ProductCard.css";

const ProductCard = ({ product }) => {

  return (
    <div className="product-card">

      {/* PRODUCT IMAGE */}
      <div className="product-image">
        <img
          src={product.imageUrl}
          alt={product.productName}
        />
      </div>

      {/* PRODUCT DETAILS */}
      <div className="product-details">

        <h3>{product.productName}</h3>

        <p className="product-category">
          {product.category}
        </p>

        <p className="product-price">
          ₹{product.price}
        </p>

        {/* ACTION BUTTONS */}
        <div className="product-actions">

         <Link to={`/edit-product/${product.id}`}>
         
               <button className="edit-btn">
                Edit
              </button>

         </Link>

         <Link to={`/delete-product/${product.id}`} >
          <button className="delete-btn" >
            Delete
          </button>
         </Link>

        </div>

      </div>

    </div>
  );
};

export default ProductCard;