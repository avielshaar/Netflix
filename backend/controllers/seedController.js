import User from '../models/User.js';
import Content from '../models/Content.js';
import List from '../models/List.js';
import { data, listMovieNames, listSeriesNames } from '../data.js';

const seedData = async (req, res) => {
  try {
    await User.deleteMany({});
    await Content.deleteMany({});
    await List.deleteMany({});
    console.log('Data.users:', data.users);
    const users = await User.insertMany(data.users, { ordered: false });
    console.log('Inserted users:', users);
    const content = await Content.insertMany(data.content, { ordered: false });

    const lists = await getLists();
    await List.insertMany(lists, { ordered: false });
    res.status(200).send('Data seeded successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
    res.status(500).send(error.message);
  }
};

async function getLists() {
  const lists = [];
  const content = await Content.find();

  // movies
  for (const listName of listMovieNames) {
    lists.push({
      title: listName,
      content: shuffleContent(content.filter((item) => !item.isSeries)).slice(0, 7),
      isSeries: false,
    });
  }

  // series
  for (const listName of listSeriesNames) {
    lists.push({
      title: listName,
      content: shuffleContent(content.filter((item) => item.isSeries)).slice(0, 7),
      isSeries: true,
    });
  }

  //new
  lists.push(
    {
      title: 'New movies',
      content: content
        .filter((c) => !c.isSeries)
        .sort((a, b) => b.year - a.year)
        .slice(0, 7),
      isSeries: false,
    },
    {
      title: 'New series',
      content: content
        .filter((item) => item.isSeries)
        .sort((a, b) => b.year - a.year)
        .slice(0, 7),
      isSeries: true,
    }
  );

  return lists;
}

function shuffleContent(content) {
  for (let i = content.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [content[i], content[j]] = [content[j], content[i]];
  }
  return content;
}

export default seedData;
