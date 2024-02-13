import Content from "../models/Content.js";

const getMovieLists = async (req, res) => {
  const lists = await List.find({ isSeries: false });
  res.send(lists);
};

const getSerieLists = async (req, res) => {
    const lists = await List.find({ isSeries: true });
    res.send(lists);
  };

const getListById = async (req, res) => {
  const list = await List.findById(req.params.id);

  if (list) {
    res.send(list);
  } else {
    res.status(400).send({ message: "List not found" });
  }
};

const getListByToken = async (req, res) => {
  const { token } = req.params;
  const list = await List.findOne({ token: token });
  if (list) {
    res.send(list);
  } else {
    res.status(400).send({ message: "List not found" });
  }
};

export {
  getMovieLists,
  getSerieLists,
  getListById,
  getListByToken
};
