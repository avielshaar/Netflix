import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import "react-toastify/dist/ReactToastify.css";
import { Container } from './imports.js';
import './App.css';
import Footer from './components/shared/footer/Footer.jsx';
import FrontPage from './pages/frontPage/FrontPage.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import ContentPage from './pages/contentPage/ContentPage.jsx';

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
            <Route path='/home' element={<ContentPage title='Home' />}></Route>
            <Route path='/movies' element={<ContentPage title='Movies' />}></Route>
            <Route path='/series' element={<ContentPage title='Series' />}></Route>
            <Route path='/newandpopular' element={<ContentPage title='New & Popular' />}></Route>
            <Route path='/mylist' element={<ContentPage title='My List' />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
