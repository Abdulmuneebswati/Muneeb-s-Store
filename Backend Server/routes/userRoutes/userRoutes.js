const express = require("express");
const router = express.Router();
const userController = require("../../Controller/userController/userController");
const {verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin} = require("../verifyToken");

//Register
router.post("/register",userController.register);
//login
router.post("/login",userController.login);
//update
router.put("/:id",verifyTokenAndAuthorization,userController.update);
//delete
router.delete("/:id",verifyTokenAndAuthorization,userController.delete);
//getUser
router.get("/find/:id",verifyTokenAndAdmin,userController.getUser);
// getalluser
router.get("/",verifyTokenAndAdmin,userController.getAllUser);
// userstats
router.get("/stats",verifyTokenAndAdmin,userController.getUserStats)


module.exports = router;