import Order from "../models/Order.js";


const addOrder=async(req,res)=>{
    const newOrder = new Order({
        orderItems:req.body.orderItems.map((item)=>({...item,product:item._id})),
        shippingAddress:req.body.shippingAddress,
        paymentMethod:req.body.paymentMethod,
        itemsPrice:req.body.itemsPrice,
        shippingPrice:req.body.shippingPrice,
        totalPrice:req.body.totalPrice,
        taxPrice:req.body.taxPrice,
        user:req.user._id
    }); // heyggggg
    const order= await newOrder.save();
    res.status(201).send({message:'Order Added Successfully',order});

}

const getOrderById = async (req, res) => {
    const { id } = req.params
    const order = await Order.findById(id)
    if (order) {
        res.status(200).send({ message: 'Order found', order })
    } else {
        res.status(406).send({ message: "Order not found" })
    }
};
export{addOrder,getOrderById}