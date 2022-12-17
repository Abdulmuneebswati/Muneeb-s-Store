const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true,
    },
    desc:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    color:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
},   {timestamps:true}
)

module.exports = new mongoose.model("Product",ProductSchema);