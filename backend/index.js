import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import User from "./models/user.js";
import dotenv from "dotenv"
import seedRouter from "./routes/seedRouter.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8080;
const connectionString=process.env.MONGO_CONNECTION_STRING

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//routes
app.use("/api/v1/seed",seedRouter);
app.use("/api/v1/products",productsRouter);
app.use("/api/v1/users", usersRouter);
app.use((err,req, res, next) =>{
   res.status(500).send({message: err.message});
})

mongoose.connect(connectionString).then(()=>{
    app.listen(port,function(){
        console.log("listening on ", port);
    });
}).catch(err => console.log(err.message));




// app.post('/addUser',async(req, res) => {
//     // const user = req.body.user;
//     const newUser =  await User.create(req.body);
//     res.send(newUser);
   
// })