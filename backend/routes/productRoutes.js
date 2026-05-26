const express=require('express');
const router=express.Router();
const productController=require("../controllers/productController");
const {getProductById,createProduct,getAllProducts,deleteProduct,updateProduct}=require("../controllers/productController");

router.post("/",createProduct);
router.get("/",getAllProducts);
router.get("/:id",getProductById);
router.put("/:id",updateProduct);
router.delete("/:id",deleteProduct);

module.exports=router;