import React, { createContext, useState } from 'react';

const ContentContext = createContext();

export const ContentProvider = ({ children, userInfo }) => {
  const [genres, setGenres] = useState([]);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getData = async (title) => {
    try {
      setLoading(true);
      if (title === 'Movies' || title === 'Series') {
        const { data } = await axios.get('/api/v1/content/genres', {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        setGenres(data);
      }
      let response = [];
      switch (title) {
        case 'Home':
          response = await axios.get('/api/v1/content/lists/', {
            headers: { authorization: `Bearer ${userInfo.token}` },
          });
          break;
        case 'Movies':
          response = await axios.get('/api/v1/content/lists/movies', {
            headers: { authorization: `Bearer ${userInfo.token}` },
          });
          break;
        case 'Series':
          response = await axios.get('/api/v1/content/lists/series', {
            headers: { authorization: `Bearer ${userInfo.token}` },
          });
          break;
        case 'New & Popular':
          response = await axios.get('/api/v1/content/lists/newandpopular', {
            headers: { authorization: `Bearer ${userInfo.token}` },
          });
          break;
        default:
          break;
      }
      setLists(response.data);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return <ContentContext.Provider value={{ genres, lists, loading, error, getData }}>{children}</ContentContext.Provider>;
};

export const useContent = () => useContext(ContentContext);
export default ContentContext;
