// import React, { createContext, useState, useContext } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';
// import { useUser } from './UserContext';

// const SearchContext = createContext();

// export const SearchProvider = ({ children }) => {
//   const [currOrder, setCurrOrder] = useState('');
//   const [currGenre, setCurrGenre] = useState('');
//   const [currQuery, setCurrQuery] = useState('');

//   const [orders, setOrders] = useState(['yr', 'az', 'za']);
//   const [genres, setGenres] = useState([]);
//   const [content, setContent] = useState([]);
//   const [filteredContent, setFilteredContent] = useState([]);

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const { get } = useUser();
//   const userInfo = get();

//   const getFilterURI = (searchFromURI, filter) => {
//     const searchParams = new URLSearchParams(searchFromURI);
//     const query = searchParams.get('query') || 'all';
//     const genre = searchParams.get('genre') || 'all';
//     const order = searchParams.get('order') || 'az';

//     const filterGenre = filter.genre || genre;
//     const filterQuery = filter.query || query;
//     const filterOrder = filter.order || order;

//     return `/api/v1/content/search?genre=${filterGenre}&query=${filterQuery}&order=${filterOrder}`;
//   };

//   const getData = async () => {
//     try {
//       setLoading(true);

//       if (genres.length === 0) {
//         const genresResponse = await axios.get('/api/v1/content/genres', {
//           headers: { authorization: `Bearer ${userInfo.token}` },
//         });
//         setGenres(genresResponse.data);
//       }

//       const contentResponse = await axios.get('/api/v1/content', {
//         headers: { authorization: `Bearer ${userInfo.token}` },
//       });
//       setContent(contentResponse.data);

//       setLoading(false);
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//     }
//   };


//   const getFilteredContent = async () => {
//     try {
//       setLoading(true);

//       const filteredContent = content.filter(c =>
//         c.genre = currGenre).filter(c => 
//         c.title.toLowerCase().includes(currQuery.toLowerCase()))
//       setFilteredContent(filteredContent);

//       setLoading(false);
//     } catch (error) {
//       setError(error);
//       setLoading(false);
//     }
//   };

//   return (
//     <SearchContext.Provider
//       value={{
//         currOrder,
//         currGenre,
//         currQuery,
//         orders,
//         genres,
//         content,
//         filteredContent,
//         loading,
//         error,
//         getData,
//       }}
//     >
//       {children}
//     </SearchContext.Provider>
//   );
// };

// export const useSearch = () => useContext(SearchContext);
// export default SearchContext;
