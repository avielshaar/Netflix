import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
import { Container } from './imports.js'
import './App.css'

import FrontPage from './pages/frontPage/FrontPage.jsx'
import Navbar from './components/shared/Navbar/Navbar.jsx'
import SignIn from './pages/SignIn.jsx'
import SignUp from './pages/SignUp.jsx'
import ContentPage from "./pages/contentPage/ContentPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <ToastContainer position='bottom-center' limit={1}/> */}
        {/* {localStorage.getItem("userInfo")?<Navbar></Navbar>:<Header></Header>} */}
        <main>
          
          <Routes>
            <Route path="/" element={<FrontPage />}></Route>
            <Route path = "/signin" element = {<SignIn/>}></Route>
            <Route path = "/signUp" element = {<SignUp/>}></Route>
            <Route path = "/Home" element = {<ContentPage title="Home"/>}></Route>
          </Routes>
        </main>
        {/* <Footer/> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
