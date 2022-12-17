const express = require("express");
const productRouter = express.Router();
const productController = require("../../Controller/productController/productController");
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../verifyToken");

//createProduct
productRouter.post("/",verifyTokenAndAdmin,productController.createProduct);
//updateProduct
productRouter.put("/:id",verifyTokenAndAdmin,productController.updateProduct);
//deleteproduct
productRouter.post("/:id",verifyTokenAndAdmin,productController.deleteProduct);
//getProducts
productRouter.get("/:id",productController.getProduct);
//getAllProducts
productRouter.get("/",productController.getAllProducts);

module.exports =productRouter;