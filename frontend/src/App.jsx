import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import "react-toastify/dist/ReactToastify.css";
import { Container } from './imports.js';
import './App.css';
import FullScreenVideo from './components/shared/fullScreenVideo/FullScreenVideo.jsx';
import FrontPage from './pages/frontPage/FrontPage.jsx';
import Navbar from './components/shared/navbar/Navbar.jsx';
import Header from './components/shared/header/Header.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import ContentPage from './pages/contentPage/ContentPage.jsx';
import MyListPage from './pages/myListPage/MyListPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className='home'>
        {/* <ToastContainer position='bottom-center' limit={1}/> */}
        {/* {localStorage.getItem("userInfo")?<Navbar></Navbar>} */}
        <main>
          <Routes>
            <Route path='/' element={<FrontPage />}></Route>
            <Route path='/signin' element={<SignIn />}></Route>
            <Route path='/signUp' element={<SignUp />}></Route> 
            <Route path='/fullscreen/:videoId' element={<FullScreenVideo />}></Route> 

            <Route path='/home' element={<ContentPage title='Home' />}></Route>
            <Route path='/myList' element={<MyListPage/>}></Route>
            <Route path='/movies' element={<ContentPage title='Movies' />}></Route>
            <Route path='/series' element={<ContentPage title='Series' />}></Route>
            <Route path='/newandpopular' element={<ContentPage title='New & Popular' />}></Route>
          </Routes>
        </main>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
