import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useUser } from '../../../contexts/UserContext.jsx';

const Navbar = () => {
  const { get, remove } = useUser();
  const userInfo = get();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const signOutHandler = () => {
    remove();
    navigate('/');
  };

  useEffect(() => {
    const scrollableElement = document.getElementById('page');
    if (scrollableElement) {
      const handleScroll = () => {
        setIsScrolled(scrollableElement.scrollTop === 0 ? false : true);
      };

      scrollableElement.addEventListener('scroll', handleScroll);
      return () => {
        scrollableElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <Link to='/'>
          <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt='' />
        </Link>
        <div className='left'>
          <Link to='/home' className='nav-item'>
            Homepage
          </Link>
          <Link to='/movies' className='nav-item'>
            Movies
          </Link>
          <Link to='/series' className='nav-item'>
            TV Shows
          </Link>
          <Link to='/newandpopular' className='nav-item'>
            New & Popular
          </Link>
          <Link to='/mylist' className='nav-item'>
            My List
          </Link>
        </div>
        <div className='right'>
          <Link to='/search'>
            <SearchIcon className='icon search-icon' />
          </Link>
          <span className='icon kids-span'>Kids</span>
          <NotificationsIcon className='icon notifications' />
          {/* <img
            src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          /> */}
          <div className='profile'>
            <ArrowDropDownIcon className='icon' />
            <div className='options'>
              <span>{userInfo.username}</span>
              <span onClick={signOutHandler}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
