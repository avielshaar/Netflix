import Content from "../models/Content.js";

const getContent = async (req, res) => {
  const content = await Content.find();
  res.send(content);
};

const getContentById = async (req, res) => {
  const content = await Content.findById(req.params.id);

  if (content) {
    res.send(content);
  } else {
    res.status(400).send({ message: "Content not found" });
  }
};

const getContentByToken = async (req, res) => {
  const { token } = req.params;
  const content = await Content.findOne({ token: token });
  if (content) {
    res.send(content);
  } else {
    res.status(400).send({ message: "Content not found" });
  }
};

const getGenres = async (req, res) => {
  const genres = await Content.distinct("genre");
  res.send(genres);
};

const getContentByQuery = async (req, res) => {
  const { query } = req;
  const page = query.page || 1;
  const order = query.order || "";
  const genre = query.genre || "";
  const price = query.price || "";
  const rating = query.rating || "";
  const searchQuery = query.query || "";
  const pageSize = query.pageSize || 6;

  const queryFilter =
    searchQuery && searchQuery !== "all"
      ? {
          title: {
            $regex: searchQuery,
            $options: "i",
          },
        }
      : {};
  const categoryFilter =
    category && category !== "all"
      ? {
          category,
        }
      : {};
  const priceFilter =
    price && price !== "all"
      ? {
          price: {
            $gte: Number(price.split("-")[0]),
            $lte: Number(price.split("-")[1]),
          },
        }
      : {};
  const ratingFilter =
    rating && rating !== "all"
      ? {
          "rating.rate": {
            $gte: Number(rating),
          },
        }
      : {};
  const sortOrderFilter =
    order === "lowest"
      ? { price: 1 }
      : order === "highest"
        ? { price: -1 }
        : order === "toprated"
          ? { rating: -1 }
          : order === "newest"
            ? { createdAt: -1 }
            : { _id: -1 };

  const products = await Product.find({
    ...queryFilter,
    ...categoryFilter,
    ...priceFilter,
    ...ratingFilter,
  })
    .sort(sortOrderFilter)
    .skip((page - 1) * pageSize)
    .limit(pageSize);

  const countProducts = await Product.countDocuments({
    ...queryFilter,
    ...categoryFilter,
    ...priceFilter,
    ...ratingFilter,
  });

  res.send({
    products,
    countProducts,
    page,
    pages: Math.ceil(countProducts / pageSize),
  });
};

export {
  getContent,
  getContentById,
  getContentByToken,
  getGenres,
  getContentByQuery,
};
