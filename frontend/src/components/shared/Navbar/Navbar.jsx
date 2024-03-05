import React, { useState } from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useUser } from '../../../contexts/UserContext.jsx';

const Navbar = () => {
  const { remove } = useUser();

  const signOutHandler = () => {
    remove();
  };

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? 'navbar scrolled' : 'navbar'}>
      <div className='container'>
        <div className='left'>
          <div className='wrapper'>
            <Link to='/'>
              <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt='' />
            </Link>
          </div>
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
          <SearchIcon className='icon' />
          <span className='nav-item'>Kids</span>
          <NotificationsIcon className='icon' />
          <img src='https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt='' />
          <div className='profile'>
            <ArrowDropDownIcon className='icon' />
            <div className='options'>
              <span>Settings</span>
              <span onClick={signOutHandler}>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
