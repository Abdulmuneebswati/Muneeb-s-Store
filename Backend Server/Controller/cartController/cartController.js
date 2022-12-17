const Carts = require("../../db/models/Cart");

class Cartcontroller {
    static createCart = async (req,res)=>{
        try {
            const newCart =  new Carts(req.body);
            const savedCart = await newCart.save();
            res.status(200).json(savedCart);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static updateCart = async(req,res)=>{
        try {
            const updateCart = await Carts.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updateCart);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //deleteCart
    static deleteCart = async(req,res)=>{
        try {
            await Carts.findByIdAndDelete(req.params.id);
            res.status(200).json("Cart has been deleted...");
    
        } catch (error) {
            res.status(500).json(error);
        }
        }
    
        //getUserCart
    static getUserCart = async(req,res)=>{
            try {
                const Cart = await Carts.findOne({userId:req.params.userId});
                res.status(200).json(Cart);
            } catch (error) {
                res.status(500).json(error);
            }
            }
    
        //getAllCarts
    static getAllCarts = async(req,res)=>{
        try {
            const carts = await Carts.find();
            res.status(200).json(carts);

        } catch (error) {
            res.status(500).json(error);
            
        }
        }

   
    

}
module.exports = Cartcontroller;