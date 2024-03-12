import { useEffect, useReducer, useState } from 'react';
import Title from '../../components/shared/title/Title.jsx';
import { Button, Col, Row } from '../../imports';
import Loading from '../../components/shared/loading/Loading.jsx';
import MessageBox from '../../components/shared/messageBox/MessageBox.jsx';
import ListItem from '../../components/shared/listItem/ListItem.jsx';
import { useUser } from '../../contexts/UserContext.jsx';
import Navbar from '../../components/shared/Navbar/Navbar.jsx';
import { axios } from '../../imports';

const SearchPage = () => {
  const [currOrder, setCurrOrder] = useState('az');
  const [currGenre, setCurrGenre] = useState('All');
  const [currQuery, setCurrQuery] = useState('');

  const [orders, setOrders] = useState(['yr', 'az', 'za']);
  const [genres, setGenres] = useState([]);
  const [content, setContent] = useState([]);
  const [filteredContent, setFilteredContent] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { get } = useUser();
  const userInfo = get();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);

        const genresResponse = await axios.get('/api/v1/content/genres', {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        genresResponse.data.unshift('All');
        setGenres(genresResponse.data);

        const contentResponse = await axios.get('/api/v1/content', {
          headers: { authorization: `Bearer ${userInfo.token}` },
        });
        setContent(contentResponse.data);

        setLoading(false);
      } catch (error) {
        console.log(error);
        setError(error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    getFilteredContent();
  }, [currQuery, currGenre, currOrder]);

  const handleSearchChange = async (e) => {
    setCurrQuery(e.target.value);
  };

  const handleGenreChange = async (e) => {
    setCurrGenre(e.target.value);
  };

  const handleOrderChange = async (e) => {
    setCurrOrder(e.target.value);
  };

  const getFilteredContent = async () => {
    try {
      setLoading(true);

      let filteredContent = content;
      if (currQuery !== '') {
        filteredContent = filteredContent.filter((c) => c.title.toLowerCase().includes(currQuery.toLowerCase()));
      }
      if (currGenre !== 'All') {
        console.log('inside genre filter, currGenre:', currGenre);
        filteredContent = filteredContent.filter((c) => c.genre === currGenre);
      }
      console.log('genre', filteredContent);
      switch (currOrder) {
        case 'az':
          filteredContent.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'za':
          filteredContent.sort((a, b) => b.title.localeCompare(a.title));
          break;
        case 'yr':
          filteredContent.sort((a, b) => a.year.localeCompare(b.year));
      }
      console.log('order', filteredContent);

      setFilteredContent(filteredContent);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <Title title='Search Page' />
      <Navbar></Navbar>
      <br />
      <br />
      <br />
      <br />
      <br />

      <div>
        <input type='text' onChange={handleSearchChange} placeholder='Search...' />
      </div>

      <Row>
        <Col md={3}>
          <h3>Gneres:</h3>
          <div>
            <select className='genre-selector' onChange={handleGenreChange}>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
          <h3>Orders:</h3>
          <div>
            <select className='order-selector' onChange={handleOrderChange}>
              {orders.map((order, index) => (
                <option key={index} value={order}>
                  {order}
                </option>
              ))}
            </select>
          </div>
        </Col>
        <Col md={9}>
          {loading ? (
            <Loading />
          ) : error ? (
            <MessageBox variant='danger'>{error.MessageBox}</MessageBox>
          ) : (
            <>
              {filteredContent.length === 0 && <MessageBox>No content Found</MessageBox>}
              <div className='page'>
                <div className='box'>
                  {filteredContent.map((c) => (
                    <div key={c.title}>
                      <ListItem content={c}></ListItem>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SearchPage;
