import User from "../models/user.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../utils.js";

// const getUsers = async (req, res) => {
//     const users = await User.find();
//     res.send(users);
// };

const signup = async (req, res) => {
    const { userName, email, password,profilePicture } = req.body;

    const newUser = new User({
        userName: userName,
        email: email,
        password: bcrypt.hashSync(password),
        isAdmin:false,
        profilePicture: profilePicture
    });


    const user = await newUser.save();

    // we don't need the password
    res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
        token: generateToken(user)
    })
}

const signin = async (req, res) => {
    const {password: passwordFromWebsite,email} = req.body;

    const user = await User.findOne({email: email});
    if(user){
        if(bcrypt.compareSync(passwordFromWebsite,user.password)){
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                profilePicture: user.profilePicture,
                token: generateToken(user)
            })
            return;
        }
    }
    res.status(401).send({message: "Invalid User/Password"});
};

export {signup, signin};