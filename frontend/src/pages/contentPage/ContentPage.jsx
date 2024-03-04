import React, { useEffect } from 'react';
import List from '../../components/shared/list/List.jsx';
import Navbar from '../../components/shared/navbar/Navbar.jsx';
import Header from '../../components/shared/header/Header.jsx';
import './ContentPage.scss';
import Loading from '../../components/shared/loading/Loading.jsx';
import MessageBox from '../../components/shared/messageBox/MessageBox.jsx';
import { useUser } from '../../contexts/UserContext.jsx';
import { useContent } from '../../contexts/ContentContext.jsx';
import Footer from '../../components/shared/footer/Footer.jsx';

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
      </div>
      {title === 'Movies' || title === 'Series' ? (
        <div className='page-header'>
          <Header title={title} genres={genres} />
          <br />
        </div>
      ) : (
        ''
      )}
      <div className='page-content'>
        {loading ? (
          <Loading />
        ) : error ? (
          <MessageBox variant='danger'>{error}</MessageBox>
        ) : (
              <div className='page-lists'>
            {lists.map((list) => (
              <div key={list.title}>
                <List title={list.title} data={list.content} />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className='page-footer'>
        <br />
        <br />
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default ContentPage;
