import { useEffect, useReducer, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Title from '../../components/shared/title/Title.jsx';
import { Button, Col, LinkContainer, Row } from '../../imports';
import Loading from '../../components/shared/loading/Loading.jsx';
import MessageBox from '../../components/shared/messageBox/MessageBox.jsx';
import ListItem from '../../components/shared/listItem/ListItem.jsx';
import { useSearch } from '../../contexts/searchContext.jsx';

const SearchPage = () => {
  const { orders, genres, content, loading, error, getData } = useSearch();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  const handleSearchChange = (e) => {
    getData({ query: e.target.value });
  };

  const handleGnereChange = (e) => {
    getData({ genre: e.target.value });
  };

  const handleOrderChange = (e) => {
    getData({ order: e.target.value });
  };

  return (
    <div>
      <Title title='Search Page' />
      <div>
        <input type='search' className='serach-bar' placeholder='Search here' value={searchTerm} onChange={handleSearchChange} />
      </div>

      <Row>
        <Col md={3}>
          <h3>Gneres:</h3>
          <div>
            <select className='genre-selector' onchange={handleGnereChange}>
              {genres.map((genre, index) => (
                <option key={index} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
          <h3>Orders:</h3>
          <div>
            <select className='order-selector' onchange={handleOrderChange}>
              {orders.map((order, index) => (
                <option key={index} value={order}>
                  {genre}
                </option>
              ))}
            </select>
          </div>
        </Col>
        <Col md={9}>
          {loading ? (
            <Loading />
          ) : error ? (
            <MessageBox variant='danger'>{error}</MessageBox>
          ) : (
            <>
              {content.length === 0 && <MessageBox>No content Found</MessageBox>}
              <Row>
                {content.map((c) => (
                  <Col sm={6} lg={4} className='mb-3' key={c._id}>
                    <ListItem content={c}></ListItem>
                  </Col>
                ))}
              </Row>
            </>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default SearchPage;
