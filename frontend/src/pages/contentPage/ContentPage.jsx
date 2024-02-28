import React, { useEffect } from 'react';
import List from '../../components/shared/list/List.jsx';
import Navbar from '../../components/shared/navbar/Navbar.jsx';
import Header from '../../components/shared/header/Header.jsx';
import './ContentPage.scss';
import { useUser } from '../../contexts/UserContext.jsx';
import { useContent } from '../../contexts/ContentContext.jsx';

const ContentPage = ({ title }) => {
  const { get, save, remove } = useUser();
  const userInfo = get();
  const { genres, lists, loading, error, getData } = useContent();

  useEffect(() => {
    getData(title, userInfo);
  }, [title]);

  return (
    <div className='page'>
      <div className='page-navbar'>
        <Navbar />
        <br />
        <br />
        <br />
        <h1>{title}</h1>
      </div>
      {/* <div className="page-header">
        <Header title={title} genres={genres} />
      </div> */}
      <div className='page-lists'>
        {lists.map((list) => (
          <div key={list.title}>
            <List title={list.title} data={list.content} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentPage;
