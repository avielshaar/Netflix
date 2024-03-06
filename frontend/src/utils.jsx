const getError = (error) => {
  console.log(error);
  return error.message && error.response.data.message ? error.response.data.message : error.message;
};

const getFilterURI = (searchFromURI, filter) => {
  const searchParams = new URLSearchParams(searchFromURI);
  const query = searchParams.get('query') || 'all';
  const genre = searchParams.get('genre') || 'all';
  const order = searchParams.get('order') || 'az';

  const filterGenre = filter.genre || genre;
  const filterQuery = filter.query || query;
  const filterOrder = filter.order || order;

  const link = `${'/search?'}genre=${filterGenre}&query=${filterQuery}&order=${filterOrder}`;

  return link;
};

export { getError, getFilterURI };
