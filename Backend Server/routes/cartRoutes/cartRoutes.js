const express = require("express");
const cartRouter = express.Router();
const cartController = require("../../Controller/cartController/cartController");
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../verifyToken");

//createCart
cartRouter.post("/",verifyToken,cartController.createCart);
// updatecart
cartRouter.put("/:id",verifyTokenAndAuthorization,cartController.updateCart);
//deletecart
cartRouter.post("/:id",verifyTokenAndAuthorization,cartController.deleteCart);
//getcarts
cartRouter.get("/:userId",verifyTokenAndAuthorization,cartController.getUserCart);
//getAll
cartRouter.get("/",verifyTokenAndAdmin,cartController.getAllCarts);





module.exports = cartRouter;