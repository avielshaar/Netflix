import User from "../models/user.js";
import Content from "../models/Content.js";
import List from "../models/List.js";
import { data, listMovieNames, listSeriesNames } from "../data.js";

const seedData = async (req, res) => {
  try {
    await User.deleteMany({});
    await Content.deleteMany({});
    await List.deleteMany({});

    await User.insertMany(data.users, { ordered: false });
    await Content.insertMany(data.content, { ordered: false });
    await List.insertMany(getLists(), { ordered: false });

    res.status(200).send("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
    res.status(500).send("Internal server error");
  }
};

async function getLists() {
  const lists = [];
  
  for (const listName of listMovieNames) {
    const randomContent = shuffleArray(
      await Content.find({ isSeries: false })
    ).slice(0, 7);

    const list = {
      title: listName,
      content: randomContent.map((item) => item._id),
      isSeries: false,
    };

    lists.push(list);
  }

  for (const listName of listSeriesNames) {
    const randomContent = shuffleArray(
      await Content.find({ isSeries: true })
    ).slice(0, 7);

    const list = {
      title: listName,
      content: randomContent.map((item) => item._id),
      isSeries: true,
    };

    lists.push(list);
  }

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
