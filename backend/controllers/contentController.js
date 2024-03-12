import Content from '../models/Content.js';

const getContent = async (req, res) => {
  const content = await Content.find();
  res.send(content);
};

const getContentById = async (req, res) => {
  const content = await Content.findById(req.params.id);

  if (content) {
    res.send(content);
  } else {
    res.status(400).send({ message: 'Content not found' });
  }
};

const getContentByToken = async (req, res) => {
  const { token } = req.params;
  const content = await Content.findOne({ token: token });
  if (content) {
    res.send(content);
  } else {
    res.status(400).send({ message: 'Content not found' });
  }
};

const getGenres = async (req, res) => {
  const genres = await Content.distinct('genre');
  res.send(genres);
};

export { getContent, getContentById, getContentByToken, getGenres };
