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

const getContentByQuery = async (req, res) => {
  const { query } = req;
  const page = query.page || 1;
  const genre = query.genre || '';
  const searchQuery = query.query || '';
  const pageSize = query.pageSize || 6;

  const queryFilter =
    searchQuery && searchQuery !== 'all'
      ? {
          title: {
            $regex: searchQuery,
            $options: 'i',
          },
        }
      : {};

  const genreFilter =
    genre && genre !== 'all'
      ? {
          genre,
        }
      : {};

  const sortContentFilter = order === 'yr' ? { year: -1 } : order === 'az' ? { title: -1 } : order === 'za' ? { title: -1 } : { _id: -1 };

  const content = await Content.find({
    ...queryFilter,
    ...genreFilter,
  })
    .sort(sortContentFilter)
    .skip((page - 1) * pageSize)
    .limit(pageSize);

  const countContent = await Content.countDocuments({
    ...queryFilter,
    ...genreFilter,
  });

  res.send({
    content,
    countContent,
    page,
    pages: Math.ceil(countContent / pageSize),
  });
};

export { getContent, getContentById, getContentByToken, getGenres, getContentByQuery };
