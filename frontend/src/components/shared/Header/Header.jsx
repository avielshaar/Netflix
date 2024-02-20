import headerReducer from "../../../reducers/headerReducer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./Header.scss";

const Header = ({ title, genres }) => {

  return (
    <header className="header">
      <div className="left">
        <h1 className="title">{title}</h1>
        <select className="genre-selector">
          {genres.map((genre, index) => (
            <option key={index} value={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
      <div className="right">
        <button className="button">Button 1</button>
        <button className="button">Button 2</button>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Header;
