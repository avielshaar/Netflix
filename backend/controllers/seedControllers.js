import User from '../models/user.js';
import Content from '../models/Content.js';
import { data } from '../data.js';

const seedData = async (req, res) => {
  try {
    // Delete all existing users and content
    await User.deleteMany({});
    await Content.deleteMany({});

    // Insert new users and content
    const users = await User.insertMany(data.users, { ordered: false });
    const content = await Content.insertMany(data.content, { ordered: false });

    res.status(200).send('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
    res.status(500).send('Internal server error');
  }
};

export default seedData;
