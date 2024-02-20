import List from "../models/List.js";

const getMovieLists = async (req, res) => {
  const lists = await List.find({ isSeries: false });
  res.send(lists);
};

const getSeriesLists = async (req, res) => {
  const lists = await List.find({ isSeries: true });
  res.send(lists);
};

const getNewAndPopularLists = async (req, res) => {
  const lists = [];
  lists.push(await List.find({ title: "New movies" }));
  lists.push(await List.find({ title: "New series" }));
  lists.push(await List.find({ title: "Top picks for Movie" }));
  lists.push(await List.find({ title: "Top Series" }));
  res.send(lists);
};

export { getMovieLists, getSeriesLists, getNewAndPopularLists };
