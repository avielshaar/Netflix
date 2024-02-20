import User from "../models/user.js";
import Content from "../models/Content.js";
import List from "../models/List.js";
import { data, listMovieNames, listSeriesNames } from "../data.js";

const seedData = async (req, res) => {
  try {
    await User.deleteMany({});
    await Content.deleteMany({});
    await List.deleteMany({});

    const users = await User.insertMany(data.users, { ordered: false });
    const content = await Content.insertMany(data.content, { ordered: false });

    const lists = await getLists();
    await List.insertMany(lists, { ordered: false });

    res.status(200).send("Data seeded successfully");
  } catch (error) {
    console.error("Error seeding data:", error);
    res.status(500).send("Internal server error");
  }
};

async function getLists() {
  const lists = [];
  const content = await Content.find();

  //movies
  for (const listName of listMovieNames) {
    lists.push({
      title: listName,
      content: shuffleContent(content.find({ isSeries: false })).slice(0, 7),
      isSeries: false,
    });
  }

  //series
  for (const listName of listSeriesNames) {
    lists.push({
      title: listName,
      content: shuffleContent(content.find({ isSeries: true })).slice(0, 7),
      isSeries: true,
    });
  }

  //new
  lists.push(
    {
      title: "New movies",
      content: conetnt
        .find({ isSeries: false })
        .map((item) => item.year)
        .slice(0, 7),
      isSeries: false,
    },
    {
      title: "New series",
      content: conetnt
        .find({ isSeries: true })
        .map((item) => item.year)
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
