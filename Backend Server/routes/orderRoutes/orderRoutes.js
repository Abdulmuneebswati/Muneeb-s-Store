const express = require("express");
const orderRouter = express.Router();
const orderController = require("../../Controller/orderController/orderController");
const {verifyToken , verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../verifyToken");


orderRouter.get("/income",verifyTokenAndAdmin,orderController.getIncome);

orderRouter.post("/",verifyToken,orderController.createOrder);

orderRouter.put("/:id",verifyTokenAndAdmin,orderController.updateOrder);

orderRouter.delete("/:id",verifyTokenAndAdmin,orderController.updateOrder);

orderRouter.get("/:userId",verifyTokenAndAuthorization,orderController.getUserOrders);

orderRouter.get("/",verifyTokenAndAdmin,orderController.getAllOrders);




module.exports = orderRouter;