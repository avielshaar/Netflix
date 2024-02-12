import mongoose from "mongoose";

const userschema = new mongoose.Schema({
    name:{type:String,required:true,unique:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    isAdmin:{type:Boolean,required:true},
    profilePicture:{type:String}
},

{
    timestamps:true
});

const User= mongoose.model('User',userschema);

export default User;