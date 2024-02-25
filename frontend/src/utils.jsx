const getError = (error) => {
  console.log(error);
  return error.message && error.response.data.message ? error.response.data.message : error.message;
};

const getFilterURI = (searchFromURI, filter, skipPathName) => {
  const searchParams = new URLSearchParams(searchFromURI);
  const query = searchParams.get('query') || 'all';
  const genre = searchParams.get('genre') || 'all';
  const order = searchParams.get('order') || 'az';
  const page = searchParams.get('page') || 1;

  const filterGenre = filter.genre || genre;
  const filterQuery = filter.query || query;
  const filterOrder = filter.order || order;
  const filterPage = filter.page || page;

  const link = `${skipPathName ? '' : '/search?'}genre=${filterGenre}&query=${filterQuery}&price=${filterPrice}&rating=${filterRating}&order=${filterOrder}&page=${filterPage}`;

  return link;
};

export { getError, getFilterURI };
