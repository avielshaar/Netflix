import List from "../models/List.js";

const getLists = async (req, res) => {
  const lists = await List.find().populate("content");
  res.send(lists);
};

const getMovieLists = async (req, res) => {
  const lists = await List.find({ isSeries: false }).populate("content");
  res.send(lists);
};

const getSeriesLists = async (req, res) => {
  const lists = await List.find({ isSeries: true }).populate("content");
  res.send(lists);
};

const getNewAndPopularLists = async (req, res) => {
  const lists = [];
  lists.push(await List.find({ title: "New movies" })).populate("content");
  lists.push(await List.find({ title: "New series" })).populate("content");
  lists.push(await List.find({ title: "Top picks for Movie" })).populate("content");
  lists.push(await List.find({ title: "Top Series" })).populate("content");
  res.send(lists);
};

export { getLists, getMovieLists, getSeriesLists, getNewAndPopularLists };
