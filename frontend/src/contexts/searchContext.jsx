import React, { createContext, useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useUser } from './UserContext';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [orders, setOrders] = useState(['yr', 'az', 'za']);
  const [genres, setGenres] = useState([]);
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { search } = useLocation();
  const { get } = useUser();
  const userInfo = get();

  const getFilterURI = (searchFromURI, filter) => {
    const searchParams = new URLSearchParams(searchFromURI);
    const query = searchParams.get('query') || 'all';
    const genre = searchParams.get('genre') || 'all';
    const order = searchParams.get('order') || 'az';

    const filterGenre = filter.genre || genre;
    const filterQuery = filter.query || query;
    const filterOrder = filter.order || order;

    return `/api/v1/content/search?genre=${filterGenre}&query=${filterQuery}&order=${filterOrder}`;
  };

  const getData = async (filter) => {
    try {
      setLoading(true);

      if (genres.length === 0) {
        const genresResponse = await axios.get('/api/v1/content/genres', {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        setGenres(genresResponse.data);
      }

      const contentResponse = await axios.get(getFilterURI(search, filter), {
        headers: { authorization: `Bearer ${userInfo.token}` },
      });
      setContent(contentResponse.data);

      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return (
    <SearchContext.Provider
      value={{
        orders,
        genres,
        content,
        loading,
        error,
        getData,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
export default SearchContext;
