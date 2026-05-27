import react from 'react';
import ProductCard from '../components/ProductCard.jsx';
import {useState} from "react";
import "../style/ProductPage.css";

const ProductPage = () => {

    const initialProducts = [{

          _id: "1",
            productName: "Floral Kurti",
            price: 1299,
            category: "Indian Wear",
            imageUrl: "https://images.unsplash.com/photo-1520975922284-7d1c9f4c8c9a",
            
    },
 {
      _id: "2",
      productName: "Sneakers",
      price: 2499,
      category: "Footwear",
      imageUrl: "https://images.unsplash.com/photo-1528701800489-20be3c3ea8e6"
    },
    {
      _id: "3",
      productName: "Denim Jacket",
      price: 1999,
      category: "Western Wear",
      imageUrl: "https://images.unsplash.com/photo-1520975682031-a6f8f0c7c8c5"
    }]

    const [products]=useState(initialProducts);
    return (
        <div className="product-page">

            <h1>All Products</h1>

            <div className="product-grid">
             {products.map((product) => (
                <ProductCard
                    key={product._id}
                    product={product}
                />
                ))}
            </div>
        </div>
    )

}

export default ProductPage;