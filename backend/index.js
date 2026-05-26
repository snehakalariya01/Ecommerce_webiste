const express=require('express');
const app=express();
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();
const PORT=process.env.PORT||5000;
const connectDB=require('./config/connectDB');
const routes=require('./routes/productRoutes');
const ErrorHandler=require("./utils/errorHandler");
const errorMiddleware=require("./middleware/errorMiddleware");

connectDB(process.env.MONGO_URI);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/products",routes);
app.use((req,res,next)=>{
    next(new ErrorHandler("Route not found", 404));
});

app.use(errorMiddleware);


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})