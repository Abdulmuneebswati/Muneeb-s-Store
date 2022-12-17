// const Orders = require("../../db/models/Order");
const Orders = require("../../db/models/Order");
class Ordercontroller {
    static createOrder = async (req,res)=>{
        try {
            const newOrder =  new Orders(req.body);
            const savedOrder = await newOrder.save();
            res.status(200).json(savedOrder);
        } catch (error) {
            res.status(500).json(error);
            console.log(error);
        }
    }

    static updateOrder = async(req,res)=>{
        try {
            const updateOrder = await Orders.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
            res.status(200).json(updateOrder);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    //deleteOrder
    static deleteOrder = async(req,res)=>{
        try {
            await Orders.findByIdAndDelete(req.params.id);
            res.status(200).json("Order has been deleted...");
    
        } catch (error) {
            res.status(500).json(error);
        }
        }
    
        //getUserOrders
    static getUserOrders = async(req,res)=>{
            try {
                const Order = await Orders.find({userId:req.params.userId});
                res.status(200).json(Order);
            } catch (error) {
                res.status(500).json(error);
            }
            }
    
        //getAllOrders
    static getAllOrders = async(req,res)=>{
        try {
            const orders = await Orders.find();
            res.status(200).json(orders);

        } catch (error) {
            res.status(500).json(error);
            
        }
        }
    
    //get Income
        static getIncome = async(req,res)=>{
            const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Orders.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
        }
}
module.exports = Ordercontroller;