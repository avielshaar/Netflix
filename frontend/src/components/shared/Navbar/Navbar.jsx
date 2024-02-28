import React, { useState } from 'react';
import './Navbar.scss';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useUser } from '../../../contexts/UserContext.jsx';

const Navbar = () => {
  const { get, save, remove } = useUser();

  const navigate = useNavigate();
  const location = useLocation();

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
          <Link to='/home'>
            <span>Homepage</span>
          </Link>
          <Link to='/movies'>
            <span>Movies</span>
          </Link>
          <Link to='/series'>
            <span>TV Shows</span>
          </Link>
          <Link to='/newandpopular'>
            <span>New & Popular</span>
          </Link>
          <Link to='/'>
            <span>My list</span>
          </Link>
        </div>
        <div className='right'>
          <SearchIcon className='icon' />
          <span>NavBar , im connected</span>
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
