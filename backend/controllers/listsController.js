import Content from "../models/Content.js";

const getMovieLists = async (req, res) => {
  const lists = await List.find({ isSeries: false });
  res.send(lists);
};

const getSeriesLists = async (req, res) => {
  const lists = await List.find({ isSeries: true });
  res.send(lists);
};

const getLatestLists = async (req, res) => {


}

export { getMovieLists, getSeriesLists, getLatestLists };
