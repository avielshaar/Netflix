import User from '../models/user.js';
import Content from '../models/Content.js';
import {data} from '../data.js';

const seedData = async(req,res) =>{
    User.deleteMany();
    Content.deleteMany();
    
    const users = await User.insertMany(data.users);
    const content = await Content.insertMany(data.content);
    res.send.status(200);
}

export default seedData;