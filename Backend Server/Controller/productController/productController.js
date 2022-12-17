const Products = require("../../db/models/Product");

class Productcontroller {
    static createProduct = async (req,res)=>{
        try {
            const newProduct =  new Products (req.body);
            const savedProduct = await newProduct.save();
            res.status(200).json(savedProduct);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    static updateProduct = async(req,res)=>{
        try {
           
            const updateProduct = await Products.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updateProduct);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //deleteProducts
    static deleteProduct = async(req,res)=>{
        try {
            await Products.findByIdAndDelete(req.params.id);
            res.status(200).json("product has been deleted...");
    
        } catch (error) {
            res.status(500).json(error);
        }
        }
        //getProduct
    static getProduct = async(req,res)=>{
            try {
                const product = await Products.findById(req.params.id);
                res.status(200).json(product);
            } catch (error) {
                res.status(500).json(error);
            }
            }
    
        //getAllProducts
    static getAllProducts = async(req,res)=>{
        const qNew = req.query.new;
        const qCategory = req.query.category;

        try {
            let products;
            if (qNew) {
                products = await Products.find().sort({createdAt:-1}).limit(5);
            }else if (qCategory) {
                products = await Products.find({categories:{$in:[qCategory],}});
            }else{
                products = await Products.find().limit(5);
            }
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json(error);
        }
        }

   
    

}
module.exports = Productcontroller;