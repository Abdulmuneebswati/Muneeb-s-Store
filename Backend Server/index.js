const express = require("express");
const app = express();
require("dotenv").config();
const userRouter =require("./routes/userRoutes/userRoutes");
const productRouter =require("./routes/productroutes/productRoutes");
const cartRouter =require("./routes/cartRoutes/cartRoutes");
const orderRouter =require("./routes/orderRoutes/orderRoutes");
const stripeRouter = require("./routes/stripeRoute/stripe");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/api/user',userRouter);
app.use("/api/products",productRouter);
app.use("/api/cart",cartRouter);
app.use("/api/order",orderRouter);
app.use("/api/checkout",stripeRouter);
require("./db/conn");
app.listen(process.env.PORT,()=>{console.log("Server is running")})