import React, { useEffect, useContext } from 'react';
import List from '../../components/shared/list/List.jsx';
import axios from 'axios';
import Header from '../../components/shared/header/Header.jsx';
import './ContentPage.scss';
import { useUser } from '../../contexts/UserContext.jsx';
import { useContent } from '../../contexts/ContentContext.jsx';

const ContentPage = ({ title }) => {
  // const [genres, setGenres] = useState([]);
  // const [lists, setLists] = useState([]);
  const { get, save, remove } = useUser();
  const userInfo = get();
  const { genres, lists, loading, error, getData } = useContent();

  useEffect(() => {
    getData(title, userInfo);
  }, []);

  return (
    <div className='page'>
      {/* <div className="page-header">
        <Header title={title} genres={genres} />
      </div> */}
      <div className='page-lists'>
        {lists.map((list) => (
          <div key={list.title}>
            <List title={list.title} data={list.content} />

            <br></br>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPage;
