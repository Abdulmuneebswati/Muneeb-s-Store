const User = require("../../db/models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
class UserController{
    static register = async(req,res)=>{
        try {
            const newUser = new User({
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
            })
            const savedUser = await newUser.save();
            res.status(201).send(savedUser);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //Login
    static login = async(req,res)=>{
        try {
            const {username,password} = req.body;
            const findUser = await User.findOne({username});
            !findUser && res.status(401).send("Wrond Crecedentials");
            const isMatch = await bcrypt.compare(password,findUser.password);
            // console.log(isMatch);
            if (isMatch) {
                const {password,...others} = findUser._doc;
                const Token = jwt.sign({id:findUser._id,isAdmin:findUser.isAdmin},process.env.SECRET_KEY,{expiresIn:"3d"})
                res.send({...others,Token}).status(200);
            }else{
                res.status(401).send("Wrond Crecedentials")
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //update
    static update = async(req,res)=>{
        try {
            if(req.body.password){
                req.body.password = await bcrypt.hash(req.body.password,10);
            }
            const updateUser = await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updateUser);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    //delete
    static delete = async(req,res)=>{
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted");

    } catch (error) {
        res.status(500).json(error);
    }
    }

    //getuser
    static getUser = async(req,res)=>{
        try {
            const user = await User.findById(req.params.id);
            const {password,...others} = user._doc;
            res.status(200).json(others);
        } catch (error) {
            res.status(500).json(error);
        }
        }

    //getAllUser
    static getAllUser = async(req,res)=>{
        const query = req.query.new;
        try {
            const users = query? await User.find().sort({_id:-1}).limit(5): await User.find();
            // const {password,...others} = users._doc;
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
        }

        //getUserStats
    static getUserStats = async (req,res)=>{
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear()-1));
        try {
            // console.log("hi");
            const data = await User.aggregate([{$match:{createdAt:{$gte : lastYear}}},
                {$project:{month:{$month:"$createdAt"}}},
                {$group:{_id:"$month",total:{$sum:1},}},
            ]) 
            res.status(200).json(data);


        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
    }

}
module.exports = UserController;