const mongoose=require("mongoose");
const productModel=require("../models/product");
const ErrorHandler=require("../utils/errorHandler");

// Create a new product

const createProduct = async (req, res, next) => {
  try {
    const { productName, price, description, category, imageUrl } = req.body;

    if(!productName || !price) {
            return next(new ErrorHandler("Product name and price are required", 400));
    }

    const newProduct = new productModel({
      productName,
      price,
      description,
      category,
      imageUrl
    });

    const savedProduct=await newProduct.save();
    res.status(201).json(savedProduct);
}catch(error){
    next(error);
}};

const getAllProducts = async (req, res, next) => {

    try{

        const products=await productModel.find();

        if(products.length === 0){

            return next(new ErrorHandler("No products found", 404));
        }
        res.status(200).json(products);
    }catch(error){
        next(error);
    }
};

const getProductById=async(req,res,next)=>{
    const {id}=req.params;
    if(!id){
        return next(new ErrorHandler("Product id is required", 400));
    }

    try{

        if(!mongoose.Types.ObjectId.isValid(id)){
            return next(new ErrorHandler("Invalid product id", 400));
        }

        const product=await productModel.findById(id);
        if(!product){
            return next(new ErrorHandler("Product not found", 404));
        }
        res.status(200).json(product);
    }catch(error){

        next(error);
    }
    }


    const updateProduct=async(req,res,next)=>{
        const {id}=req.params;
        if(!id){
            return next(new ErrorHandler("Product id is required", 400));
        }

        try{

            if(!mongoose.Types.ObjectId.isValid(id)){
                return next(new ErrorHandler("Invalid product id", 400));
            }
            const {productName,price,description,category,imageUrl}=req.body;

            const updatedProduct=await productModel.findByIdAndUpdate(id,{productName,price,description,category,imageUrl},{new:true,runValidators:true});
            if(!updatedProduct){
                return next(new ErrorHandler("Product not found", 404));
            }       
            res.status(200).json(updatedProduct);
        }
        catch(error){
            next(error);
        }

    }

    const deleteProduct=async(req,res,next)=>{
        const {id}=req.params;

        if(!id){
            return next(new ErrorHandler("Product id is required", 400));
        }

        try{
            if(!mongoose.Types.ObjectId.isValid(id)){
                return next(new ErrorHandler("Invalid product id", 400));
            }
            const deletedProduct=await productModel.findByIdAndDelete(id);
            if(!deletedProduct){
                return next(new ErrorHandler("Product not found", 404));
            }

            res.status(200).json({message:"product deleted successfully"});
        }catch(error){
            next(error);
        }
    }

   
module.exports={
    createProduct,
    getAllProducts, 
    getProductById,
    updateProduct,
    deleteProduct
}
