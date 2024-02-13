import User from "../models/user.js";
import Content from "../models/Content.js"
import bcrypt from "bcryptjs";
import { generateToken } from "../utils.js";

const signup = async (req, res) => {
  const { userName, email, password, profilePicture } = req.body;

  const newUser = new User({
    userName: userName,
    email: email,
    password: bcrypt.hashSync(password),
    isAdmin: false,
    profilePicture: profilePicture,
  });

  const user = await newUser.save();

  // we don't need the password
  res.send({
    _id: user._id,
    name: user.name,
    email: user.email,
    profilePicture: user.profilePicture,
    token: generateToken(user),
  });
};

const signin = async (req, res) => {
  const { password: passwordFromWebsite, email } = req.body;

  const user = await User.findOne({ email: email });
  if (user) {
    if (bcrypt.compareSync(passwordFromWebsite, user.password)) {
      res.send({
        _id: user._id,
        name: user.name,
        email: user.email,
        profilePicture: user.profilePicture,
        token: generateToken(user),
      });
      return;
    }
  }
  res.status(401).send({ message: "Invalid User/Password" });
};

const addToList = async (req, res) => {
    const userId = req.user._id; // Assuming you have middleware to extract user from the request
    const contentId = req.params.id;
    
    try {
        const user = await User.findById(userId);
        const content = await Content.findById(contentId);
        
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        
        if (!content) {
            return res.status(404).send({ message: 'Content not found' });
        }
        
        // Add the content to the user's list
        user.myList.push(content);
        await user.save();
        
        res.status(201).send({ message: 'Content added to user list successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
}

const removeFromList = async (req, res) => {
    const userId = req.user._id; // Assuming you have middleware to extract user from the request
    const contentId = req.params.id;
    
    try {
        const user = await User.findById(userId);
        const content = await Content.findById(contentId);
        
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }
        
        if (!content) {
            return res.status(404).send({ message: 'Content not found' });
        }
        
        // Remove the content from the user's list
        const index = user.myList.indexOf(contentId);
        if (index !== -1) {
            user.myList.splice(index, 1);
        }
        await user.save();
        
        res.status(200).send({ message: 'Content removed from user list successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: 'Internal server error' });
    }
}

export { signup, signin, addToList, removeFromList};
