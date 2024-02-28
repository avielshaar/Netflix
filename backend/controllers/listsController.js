import List from '../models/List.js';

const getLists = async (req, res) => {
  const lists = await List.find().populate('content');
  res.send(lists);
};

const getMovieLists = async (req, res) => {
  const lists = await List.find({ isSeries: false }).populate('content');
  res.send(lists);
};

const getSeriesLists = async (req, res) => {
  const lists = await List.find({ isSeries: true }).populate('content');
  res.send(lists);
};

const getNewAndPopularLists = async (req, res) => {
  const t=await List.find({ title: 'New Movies' }).populate('content');
  const ns=await List.find({ title: 'New Series' }).populate('content');
  const tpfm=await List.find({ title: 'Top picks for Movie' }).populate('content');
  const ts=await List.find({ title: 'Top Series' }).populate('content');
  const allLists = [...t, ...ns, ...tpfm, ...ts];
  res.send(allLists);
};

export { getLists, getMovieLists, getSeriesLists, getNewAndPopularLists };
